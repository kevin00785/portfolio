import StickyHeader from './modules/StickyHeader';
import MobileMenu from './modules/MobileMenu';
import Counter from './modules/Counter';
// import Map from '../lib/mapstyle.js';
import SmoothScroll from '../lib/smoothScroll.js';
import JustValidate from '../lib/just-validate.min.js';
import Masonry from '../lib/masonry.js';

import RevealOnScrool from './modules/RevealOnScrool';
import TypeIt from './modules/TypeIt';
// import Form from './modules/Form';



// Sticky Header
const stickyHeader = new StickyHeader();

// Mobile Menu
const mobileMenu = new MobileMenu();

// Reveal On Scrool
new RevealOnScrool(".reveal-from-left", "85%", "fadeInLeft");
new RevealOnScrool(".reveal-from-right", "85%", "fadeInRight");
new RevealOnScrool(".reveal-from-up", "85%", "fadeInUp");
new RevealOnScrool(".reveal-from-down", "85%", "fadeInDown");

// Smooth Scrool
const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true,
	clip: true,
	easing: 'easeInOutCubic'
});

// Counter
const counter = new Counter();



// Masonery
var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {
  // options...
  itemSelector: '.grid-item',
  gutter: 30

});
// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  gutter: 30
  // options
});



// Map
// const map = new Map();
// console.log(map);

// Just Validate
const justValidateForm = new window.JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      maxLength: 30
    },
    email: {
      required: true,
      email: true
    },
    phone: {
      required: false
    }
  },
  messages: {
    phone: 'ceci est kwfjwioe'
  },
  submitHandler: function (form, values, ajax) {
    ajax({
      // url: 'mailer.php',
      url: 'https://just-validate-api.herokuapp.com/submit',
      method: 'POST',
      data: values,
      async: true,
      beforeSend: loadingAnimation(),
      timeout: 3000,
      callback: function (response) {
        console.log(values)
        removeLoading()
        var textSuccess = "Thank " + values.name + " for your interest, we'll talk real soon !!!"
        responseText(textSuccess);
        removeInput()
        sendEmail()
        // alert('AJAX submit successful! \nResponse from server:' + response)
      },
      error: function (response) {
        removeLoading()
        // alert('AJAX submit error! \nResponse from server:' + response)
      },
    });
  }
});



function loadingAnimation() {
  var formButton = document.querySelector('#form-submit');
  var loading = document.querySelector('#loading');
  formButton.parentNode.removeChild(formButton);
  loading.style.display = 'block';
  // setTimeout(function(){ alert("Hello"); }, 3000);
}

function removeLoading() {
  var loading = document.querySelector('#loading');
  loading.parentNode.removeChild(loading);
}

function responseText(text) {
  var para = document.createElement("p");
  var node = document.createTextNode(text);
  para.appendChild(node);
  var formResponseSection = document.querySelector('#form-response-section');
  formResponseSection.appendChild(para);
}

function removeInput() {
  var form = document.getElementById("formContact");
  form.reset();
}

function sendEmail() {
  Email.send({
    SecureToken : "9c7f3480-58a4-4246-bbfe-7b28f4f8ee57",
    To : 'kevinblacombe1@gmail.com',
    From : "kevinblacombe@outlook.com",
    Subject : "This is the subject",
    Body : "And this is the body"
  }).then(
    message => alert(message)
  );

//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "kevinblacombe1@gmail.com",
//     Password : "80d06772-6fc3-4724-ad92-68ae893cc6c7",
//     To : 'kevinblacombe1@gmail.com',
//     From : "you@isp.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );

}

// Copyrights
document.getElementById("year").innerHTML = new Date().getFullYear();




