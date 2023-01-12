function toggleMenu() {
  const menuToggle = document.querySelector(".toggle");
  const navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

document.querySelector(".toggle").addEventListener("click", function (e) {
  toggleMenu();
});

let modal_open = false;

if ((modal_open = true)) {
  document.querySelector(".AboutMe").addEventListener("click", function (e) {
    const aboutMe = document.querySelector(".about_me");
    aboutMe.remove();
    modal_open = false;
  });
}

document.querySelector(".AboutMe").addEventListener("click", function (e) {
  const intro = document.querySelector(".textBox");
  let div = document.createElement("div");
  div.innerHTML +=
    '<div class="about_me"><img class="closeModal" src="./public/images/close.png" /> <p>I am a Software Engineer with a background in Medicine. I bring my knowledge of technology and passion for problem solving into each and every project I work on in order to provide clients with outcome oriented solutions. </p> </div>';
  intro.appendChild(div);

  modal_open = true;

  document.querySelector(".closeModal").addEventListener("click", function () {
    const aboutMe = document.querySelector(".about_me");
    aboutMe.remove();
    modal_open = false;
  });

  document.querySelector(".toggle").classList.remove("active");
  document.querySelector(".navigation").classList.remove("active");
});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 400,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
});

var swiper = new Swiper(".myParallax", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

(function () {
  emailjs.init("MMmyWGbFHpATZzdIP");
});

const btn = document.getElementById("form_submit");

function sendmail() {
  let fullName = document.getElementById("name").value;
  let userEmail = document.getElementById("email").value;
  let userMessage = document.getElementById("message").value;

  var contactParams = {
    from_name: fullName,
    from_email: userEmail,
    message: userMessage,
  };

  if (fullName.trim() == "") {
    document.getElementById("name").style =
      "background-color: salmon; margin-bottom: 30px;";
    return;
  } else {
    document.getElementById("name").style =
      "background-color: white; margin-bottom: 30px;";
  }

  if (userEmail.trim() == "") {
    document.getElementById("email").style =
      "background-color: salmon; margin-bottom: 30px;";
    return;
  } else {
    document.getElementById("email").style =
      "background-color: white; margin-bottom: 30px;";
  }

  if (userEmail.includes("@")) {
  } else {
    document.getElementById("email").style =
      "background-color: salmon; margin-bottom: 30px;";
    return;
  }

  if (userMessage.trim() == "") {
    document.getElementById("message").style =
      "background-color: salmon; margin-bottom: 30px;";
    return;
  } else {
    // document.getElementById("message").style="background-color: white"
  }

  emailjs
    .send("service_53dscom", "template_ofbtu3h", contactParams)
    .then(function (res) {});

  btn.textContent = "Submitted!";

  btn.disabled = true;
  btn.style = "opacity: 0.6";

  const inputs = document.querySelectorAll("#name, #email, #message");

  inputs.forEach((input) => {
    input.value = "";
    input.backgroundColor = "white";
  });
  document.getElementById("name").style = "margin-bottom: 0px";
  document.getElementById("email").style = "margin-bottom: 0px";
  document.getElementById("message").style = "background-color: white";
}

btn.addEventListener("click", function (e) {
  e.preventDefault();

  sendmail();
});

const contactform = document.getElementById("contact");

document.getElementById("get_in_touch").addEventListener("click", function (e) {
  contactform.scrollIntoView({ behavior: "smooth" });
});

const projects = document.getElementById("projects");

document
  .getElementById("view_projects")
  .addEventListener("click", function (e) {
    projects.scrollIntoView({ behavior: "smooth" });
    document.querySelector(".toggle").classList.remove("active");
    document.querySelector(".navigation").classList.remove("active");
  });
