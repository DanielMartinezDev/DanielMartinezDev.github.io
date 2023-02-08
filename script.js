// const button = document.getElementById("projects-click");
// const pics = document.getElementById("project-individual");

// pics.style.display = "none";

// button.addEventListener("click", (event) => {
//   if (pics.style.display = event) {
//     pics.style.display = "block";
//   } else {
//     pics.style.display = event;
//   }
// }) 

function show() {
  document.getElementById("project-block").style.display = "block";
  document.getElementById("projects").style.display = "none";
  document.getElementById("projects-title").style.display = "block";
}

const form = document.querySelector('.contact_form');

function sendMsg(e){
  e.preventDefault();
  const name = document.querySelector('.name'),
        email = document.querySelector('.email'),
        msg = document.querySelector('.msg');


  Email.send({
    SecurityToken : "00632ae1-1fb8-426c-94d1-e7ca245ad65a",
    To : 'dani98.martinez77@gmail.com',
    From : email.value,
    Subject : "New Contact Form",
    Body : msg.value
}).then(
  message => alert("Message Sent Succesfully")
);
}

form.addEventListener('submit', sendMsg);