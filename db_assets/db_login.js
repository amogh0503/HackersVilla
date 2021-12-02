const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const student = require('./db_initialize')
const config = require('./control/config')
const jwt = require('jsonwebtoken')

router.post('/', async(req,res) => {
    console.log('Data is here')
    const {email, password} = req.body
    try{    var a = await student.findOne({email:email})
        if(a !== null)   {
            student.findOne({email:email},function(err,student){
        try{    const isValidPass = bcrypt.compareSync(password, student.password);
                if(isValidPass){
                    const date = Date()
                    const token = jwt.sign({email: email,TS :date},config.secret,{expiresIn:'21d'})
                    res.json({code:202, token : token}) // Successfully logged in
                    console.log(student)
                }
                else{
                    res.json({code:200}) // Wrong password
                }
        }
        catch(err){
            res.send('Error in login' + err) // Email doesn't Exist
        }
    })
}
    else{ 
        res.json({code:203})    // Email doesn't Exist
    }
}
    catch(error){
                console.log('Error' + error)
    }  
            console.log('Login Request')
})

module.exports = router;