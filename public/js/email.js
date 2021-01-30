(function(){
    emailjs.init("user_1ZRDxYyAqheF5Bnorcztd");
 })();
function sendEmail() {
  var Name = document.getElementById('name').value;
  var Email = document.getElementById('email').value;
  var Message = document.getElementById('message').value;
  var templateParams = {
    name: Name,
    notes: Message,
    email: Email
  };
  alert("you name "+ templateParams.name + "and you mesaagae is " + templateParams.notes)

  emailjs.send('service_cipdsjf', 'template_x0ff7bp', templateParams)
    .then(function (response) {
      alert('SUCCESS!', response.status, response.text);
    }, function (error) {
      alert('FAILED...', error);
    });

}