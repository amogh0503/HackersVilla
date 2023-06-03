var myModal = document.getElementById('myModal')
var myInput = document.getElementById('show-popup')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
