const express = require('express')
const bcrypt = require('bcrypt');

const router = express.Router()
const student = require('./db_initialize')

const config = require('./control/config');
const user = require('./db_initialize');
/*
router.get('/', async(req,res) => {
    try{    console.log('Get Request')
            const students = await student.find()
            res.json(students)
    }catch(err){
        res.send('Error' + err)
    }
})
*/
router.post('/', async(req,res) => {
    const password = req.body.password
    const saltRounds = 12

// Hash Password
const hash = await bcrypt.hash(password, saltRounds);

    console.log('I am here ' + hash)
    const Student = new student({
        fname: req.body.fname,
        password: hash,
        phone: req.body.phone,
        email: req.body.email
    })

    try{
        const a1 =  await Student.save() 
        console.log('post request')
        res.json({code:201})
    }catch(err){
        res.send('Error' + err)
    }
})

module.exports = router