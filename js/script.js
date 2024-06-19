const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.mobile-menu').classList.toggle('active');
});
