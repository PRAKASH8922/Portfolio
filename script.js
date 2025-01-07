const navs=document.querySelectorAll('.nav-list li');
const cube=document.querySelector('.box');
const sections=document.querySelectorAll('.section');

const resumeLists=document.querySelectorAll('.resume-list');
const resumeBoxs=document.querySelectorAll('.resume-box');

const portfolioLists=document.querySelectorAll('.portfolio-list');
const portfolioBoxs=document.querySelectorAll('.portfolio-box');

//nav bar and all section actions with cube rotation when navbar is clicked
navs.forEach((nav, idx)=>{
    nav.addEventListener('click',()=>{
        document.querySelector('.nav-list li.active').classList.remove('active');
        nav.classList.add('active');

        cube.style.transform = `rotateY(${idx * -90}deg)`;

        document.querySelector('.section.active').classList.remove('active');
        sections[idx].classList.add('active');

        //only requires indexs 1,2,3 or dose not required start and end indexs
        const array=Array.from(sections);
        const arrSecs=array.slice(1, -1);
        arrSecs.forEach(arrSec =>{
            if(arrSec.classList.contains('active')){
                sections[4].classList.add('action-contact');
            }
        });
    });
});

//resume section when clicking tab-list
resumeLists.forEach((list, idx)=>{
    list.addEventListener('click',()=>{
        document.querySelector('.resume-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.resume-box.active').classList.remove('active');
        resumeBoxs[idx].classList.add('active');
    });
});

//portfolio section when clicking tab-list
portfolioLists.forEach((list, idx)=>{
    list.addEventListener('click',()=>{
        document.querySelector('.portfolio-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.portfolio-box.active').classList.remove('active');
        portfolioBoxs[idx].classList.add('active');
    });
});

//visibility for contact section when reloading (cube reloading animation)

setTimeout(()=>{
    sections[4].classList.remove('active');
},1500);

// Initialize EmailJS
emailjs.init("m-dokqhPUQxNrWsLX"); // Replace with your actual public key

// Select the form using the class name
//const form = document.querySelector(".contact-form");
const form = document.getElementById('contact-form');

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Send form data using EmailJS
    emailjs.sendForm('service_f34yowf', 'template_4xjakv6', form)
        .then(function (response) {
            alert("Message sent successfully!");
            form.reset(); // Clear the form fields after success
        }, function (error) {
            alert("Failed to send message. Please try again.");
            console.error("EmailJS error:", error);
        });
});
