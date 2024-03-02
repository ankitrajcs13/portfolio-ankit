$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }

    // scroll spy
    $("section").each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  // smooth scrolling
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

//dark mode
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const header = document.getElementById("header");
const logo_dark = document.getElementById("logo-dark");
const home = document.getElementById("home");
const navbar = document.getElementById("navbar");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const education = document.getElementById("education");
const work = document.getElementById("work");
const experience = document.getElementById("experience");
const contact = document.getElementById("contact");
const footer = document.getElementById("footer");
const scrolltop = document.getElementById("scroll-top");
const contact_cont = document.getElementById("contact-cont");

themeToggleBtn.addEventListener("click", function () {
    
  body.classList.toggle("dark-mode"); 
  header.classList.toggle("dark-mode"); 
  logo_dark.classList.toggle("logo-dark");
  navbar.classList.toggle("navbar-dark");
  home.classList.toggle("home-dark");
  about.classList.toggle("about-dark"); 
  skills.classList.toggle("skills-dark"); 
  education.classList.toggle("education-dark"); 
  work.classList.toggle("work-dark"); 
  experience.classList.toggle("experience-dark"); 
  contact.classList.toggle("contact-dark"); 
  footer.classList.toggle("footer-dark"); 
  scrolltop.classList.toggle("scroll-dark"); 
  contact_cont.classList.toggle("dark-mode"); 
});



const setDarkMode = (active = false) => {
    const wrapper = document.querySelector(":root");
    if (active) {
      wrapper.setAttribute("data-theme", "dark");
      // localStorage.setItem("theme", "dark");
    } else {
      wrapper.setAttribute("data-theme", "light");
      // localStorage.setItem("theme", "light");
    }
  };
  
  const toggleDarkMode = () => {
    const theme = document.querySelector(":root").getAttribute("data-theme");
    // If the current theme is "light", we want to activate dark
    setDarkMode(theme === "light");
  };
  
  const initDarkMode = () => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    // const themePreference = localStorage.getItem("theme");
  
    let active = query.matches;
    // if (themePreference === "dark") {
    //   active = true;
    // }
    // if (themePreference === "light") {
    //   active = false;
    // }
  
    setDarkMode(active);
  
    query.addListener(e => setDarkMode(e.matches));
  
    const toggleButton = document.querySelector(".js__dark-mode-toggle");
    toggleButton.addEventListener("click", toggleDarkMode);
  };
  
  initDarkMode();











document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | Ankit Raj";
    $("#favicon").attr("href", "assests/images/favicon2.png");
  } else {
    document.title = "Please Come Back!";
  }
});

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: [
    "Competitive Coding",
    "Full-Stack development",
    "Devops",
    "Open-Source Contribution",
  ],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});
// <!-- typed js effect ends -->

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
});
// <!-- tilt js effect ends -->

// pre loader start
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 500);
}
window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/60f70460649e0a0a5ccd22a7/1fb2ei71o";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

/* SCROLL HOME */
srtop.reveal(".home .content h3", { delay: 200 });
srtop.reveal(".home .content p", { delay: 200 });
srtop.reveal(".home .content .btn", { delay: 200 });

srtop.reveal(".home .image", { delay: 400 });
srtop.reveal(".home .linkedin", { interval: 600 });
srtop.reveal(".home .github", { interval: 800 });
srtop.reveal(".home .medium", { interval: 800 });
srtop.reveal(".home .twitter", { interval: 1000 });
srtop.reveal(".home .telegram", { interval: 600 });
srtop.reveal(".home .instagram", { interval: 600 });
srtop.reveal(".home .Discord", { interval: 600 });
srtop.reveal(".home .dev", { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal(".about .content h3", { delay: 300 });
srtop.reveal(".about .content .tag", { delay: 400 });
srtop.reveal(".about .content p", { delay: 300 });
srtop.reveal(".about .content .box-container", { delay: 300 });
srtop.reveal(".about .content .resumebtn", { delay: 300 });

/* SCROLL SKILLS */
srtop.reveal(".skills .container", { interval: 200 });
srtop.reveal(".skills .container .bar", { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal(".education .box", { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal(".work .box", { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal(".experience .timeline", { delay: 400 });
srtop.reveal(".experience .timeline .container", { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal(".contact .container", { delay: 400 });
srtop.reveal(".contact .container .form-group", { delay: 400 });
