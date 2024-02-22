const submit = document.getElementById('submit');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();

    const bodyMessage = `Name: ${fullName.value} <br> Email: ${email.value} <br><br> Message: <br>${message.value}`;

    Email.send({
      SecureToken: "da79c288-de3e-47b3-9a12-48f796db8f07",
      To : 'deriksouri@gmail.com',
      From : "deriksouri@gmail.com",
      Subject : "From website v2",
      Body : bodyMessage
  }).then(
    message => {
      if (message == "OK") {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });
      }
    }
  );
});