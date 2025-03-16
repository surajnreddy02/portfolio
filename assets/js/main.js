/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Student","Programmer","Developer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)

document.getElementById("download-cv-btn").addEventListener("click", function() {
  // Create an invisible link element to trigger the download
  const link = document.createElement("a");
  link.href = "assets/cv/my-cv.pdf"; // Path to the CV file
  link.download = "my-cv.pdf"; // Optional: you can specify the download name here
  document.body.appendChild(link);
  link.click(); // Trigger the click to download
  document.body.removeChild(link); // Clean up by removing the link element
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If validation passes, submit the form
    fetch("https://surajnreddy02.netlify.app/.netlify/functions/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: name, email: email, message: message }) // Ensure valid JSON
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    this.submit();
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Function to scroll smoothly with custom duration
const scrollBtn = document.querySelector('.scroll-btn');
scrollBtn.addEventListener('click', function() {
    const nextSection = document.querySelector('.section'); // Replace with the desired target section

    // Scroll to the next section with a custom speed
    let targetPosition = nextSection.offsetTop;  // Get position of target section
    let currentPosition = window.scrollY;
    let distance = targetPosition - currentPosition;
    let duration = 500; // Speed of scrolling (lower = faster)
    let startTime = null;

    function scrollStep(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let scrollDistance = distance * (progress / duration);

        // Scroll the page by the calculated distance
        window.scrollTo(0, currentPosition + scrollDistance);

        if (progress < duration) {
            requestAnimationFrame(scrollStep);
        } else {
            window.scrollTo(0, targetPosition); // Ensure the final position is accurate
        }
    }

    // Start the custom scroll animation
    requestAnimationFrame(scrollStep);
});

// Page transition effect
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a.nav-link, a.btn');
    const body = document.body;

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.getAttribute('href');

            body.classList.add('page-transition');
            setTimeout(() => {
                window.location.href = target;
            }, 500);
        });
    });

    window.addEventListener('load', () => {
        body.classList.add('page-transition-active');
    });
});
