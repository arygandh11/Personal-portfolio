/* Toggle icon navbar */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle('active');
};

/* Scroll section active link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });

    /* Sticky navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove toggle */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

 /* Scroll reveal */
 ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,   
 });

 ScrollReveal().reveal('.home-content, heading', {origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .contact form', {origin: 'bottom' });
 ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right' });
 ScrollReveal().reveal('.about-me-content, .about-content', {origin: 'left' });
 ScrollReveal().reveal('.about-me-cards, .about-content', {origin: 'right' });
 ScrollReveal().reveal('.description-container , .about-content', {origin: 'right' });
 ScrollReveal().reveal('.project-media, .about-content', {origin: 'left' });

 /* type my name */
 const typed = new Typed('.multiple-text', {
    strings: ["Computer Science Honors Student"],
    typeSpeed: 100,
    backSpeed: 70,
    backDelay: 1000,
    loop: false,
 });


/*

 document.getElementById('toggleButton').addEventListener('click', function() {
    const cardsContainer = document.getElementById('cardsContainer');
    const button = document.getElementById('toggleButton');
    if (button.textContent === 'Certificates') {
        cardsContainer.innerHTML = `
            <div class="card">
                <div class="card-inner">
                    <div class="card-front">
                        <img src="/Users/aryangandhi/Desktop/personal portfolio website/Oracle_Professional_Badge__1_.png">
                    </div>
                    <div class="card-back">
                        <p>This is a generative Artificial Intelligence certification that has taught me so many things.</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-inner">
                    <div class="card-front">
                        <img src="/Users/aryangandhi/Desktop/personal portfolio website/image.png" alt="Another Certification">
                        <h3>Another Certification</h3>
                    </div>
                    <div class="card-back">
                        <p>Description about Another Certification.</p>
                    </div>
                </div>
            </div>
        `;
        button.textContent = 'Skills';
    } else {
        cardsContainer.innerHTML = `
            <div class="card">
                <div class="card-inner">
                    <div class="card-front">
                        <img src="webdev.png" alt="Web Development">
                        <h3>Web Development</h3>
                    </div>
                    <div class="card-back">
                        <p>Skills and experience in Web Development.</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-inner">
                    <div class="card-front">
                        <img src="ml.png" alt="Machine Learning">
                        <h3>Machine Learning</h3>
                    </div>
                    <div class="card-back">
                        <p>Skills and experience in Machine Learning.</p>
                    </div>
                </div>
            </div>
        `;
        button.textContent = 'Certificates';
    }
});

*/

