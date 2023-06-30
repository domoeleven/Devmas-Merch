// Toggle navigation bar

const dropdownBtn = document.getElementById("menu-btn");
const dropdownMenu = document.getElementById("navbar");

const toggleDropdown = () => {
    dropdownMenu.classList.toggle("show")
};

dropdownBtn.addEventListener("click", () => {
    toggleDropdown();
});

// Toggle editors collection product slide

const productSlide = document.getElementById("product-slide");
const clickBack = document.getElementById("click-backward");
const clickForward = document.getElementById("click-forward");

let slideDim = productSlide.getBoundingClientRect();
let slideWidth = slideDim.width;

clickBack.addEventListener("click", () => {
    productSlide.scrollLeft -= slideWidth;
});

clickForward.addEventListener("click", () => {
    productSlide.scrollLeft += slideWidth;
});

//email validation

const submitBtn = document.getElementById("submit-email");

const emailIsValid = email => {
    return /^[\w.]*@[A-Za-z]*[.][A-Za-z]{3}$/.test(email);
}

const validate = (e) => {
    e.preventDefault();
    const emailAddress = document.getElementById("newsletter-email");

    if (!emailIsValid(emailAddress.value)) {
        alert("Please enter a valid email address");
        emailAddress.focus();
        return false;
    }
    alert("Thanks for joining in!")
    return true;
}

submitBtn.addEventListener("click", validate);