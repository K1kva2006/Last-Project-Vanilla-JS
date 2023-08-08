const burger = document.querySelector(".burger");
const burgerSpan = document.querySelectorAll(".burger-span");
const navUlM = document.querySelector(".nav-ul-m");
const themeSwitcher = document.querySelector(".themeSwitcher");

let mode = false;
themeSwitcher.addEventListener("click", () => {
    if (!mode) {
        themeSwitcher.textContent = "Light mode";
        mode = true;
    } else {
        themeSwitcher.textContent = "Dark mode";
        mode = false;
    }

    themeSwitcher.classList.toggle("themeSwitcher-active2");
    document.body.classList.toggle("dark-mode");
    navUlM.classList.toggle("gray");
});

burger.addEventListener("click", () => {
    navUlM.classList.toggle("nav-ul-m-active");
    burgerSpan.forEach((item) => {
        item.classList.toggle("burger-span-active");
        themeSwitcher.classList.toggle("themeSwitcher-active");
    });
});

const userCard = document.querySelectorAll(".user-card");
const userPhoto = document.querySelectorAll(".user-photo");
const nameLastName = document.querySelectorAll(".name-last-name");
const email = document.querySelectorAll(".email");
const tel = document.querySelectorAll(".tel");

const searchInput = document.getElementById("searchInput");

userPhoto.forEach((item) => {
    fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((getData) => {
            item.setAttribute("src", getData.results[0].picture.large);
        });
});

nameLastName.forEach((item) => {
    fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((getData) => {
            item.textContent =
                getData.results[0].name.first +
                " " +
                getData.results[0].name.last;
        });
});

email.forEach((item) => {
    fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((getData) => {
            item.textContent = getData.results[0].email;
        });
});

tel.forEach((item) => {
    fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((getData) => {
            item.textContent = getData.results[0].phone;
        });
});

searchInput.addEventListener("input", (e) => {
    let input = e.target.value.toLowerCase();

    nameLastName.forEach((item) => {
        if (item.textContent.toLowerCase().includes(input)) {
            item.parentElement.style.display = "flex";
        } else {
            item.parentElement.style.display = "none";
        }
    });
});
