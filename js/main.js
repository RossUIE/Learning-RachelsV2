
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.c-header_links');
    const navLinks = document.querySelectorAll('li');
    const backdrop = document.querySelector('.c-backdrop');

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
        backdrop.classList.toggle('backdrop-active')
        navLinks.forEach((link, index)=> {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`
            }   
        })

        burger.classList.toggle('toggle')
    });

    backdrop.addEventListener('click', ()=> {
        backdrop.classList.remove('backdrop-active');
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        navLinks.forEach((link, index)=> {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`
            }   
        })
    })
};

const handleMap = () => {
    var coll = document.getElementsByClassName("c-map");
    var content = '';
    var mapText = document.getElementById('mapText');
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() { 
            content = document.getElementById("mapToggle")
            content.classList.toggle("slidedown");

            if(mapText.innerHTML === 'SHOW MAP') {
                mapText.innerHTML = "HIDE MAP"
            } else {
                mapText.innerHTML = "SHOW MAP"
            }
        });
    }
}

const formValidation = (event) => {
    event.preventDefault();
    // inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // formFieldBoxes
    const nameFormField = document.querySelector('.nameFormfield');
    const emailFormField = document.querySelector('.emailFormfield');
    const messageFormField = document.querySelector('.messageFormField');

    const successMessage = document.querySelector('.form-success-message');

    var emailValid = false;
    var nameValid = false;
    var messageValid = false;

    if(name == null || name == "") {
        nameFormField.classList.add('error');
        nameValid = false;
    } else {
        nameFormField.classList.remove('error');
        nameValid = true;
    }
    if(email == null || email == "") {
        emailFormField.classList.add('error');
        emailValid = false;
    } else {
        emailFormField.classList.remove('error');
        emailValid = true;
    }
     if(message == null || message == "") {
        messageFormField.classList.add('error');
        messageValid = false;
    } else {
        messageFormField.classList.remove('error');
        messageValid = true;
    }


    if(emailValid && nameValid && messageValid) {
        successMessage.style.display = "flex";
        setTimeout(function(){ 
            successMessage.style.display = "none";
        }, 10000);
        return true
    } else {
        return false
    }
}

const app = () => {
    navSlide();
    handleMap();
}

app();

