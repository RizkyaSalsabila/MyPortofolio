function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const scrollContainer = document.querySelector('.certificates-scroll');

  function scrollLeft() {
    scrollContainer.scrollBy({
      left: -scrollContainer.clientWidth,
      behavior: 'smooth'
    });
  }

  function scrollRight() {
    scrollContainer.scrollBy({
      left: scrollContainer.clientWidth,
      behavior: 'smooth'
    });
  }

// Tombol kiri/kanan otomatis muncul sesuai posisi scroll
const leftBtn = document.querySelector('.scroll-btn.left');
const rightBtn = document.querySelector('.scroll-btn.right');

function updateButtons() {
  leftBtn.style.display = scrollContainer.scrollLeft <= 0 ? 'none' : 'block';
  const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  rightBtn.style.display = scrollContainer.scrollLeft >= maxScroll ? 'none' : 'block';
}

const roles = [
  "Web Developer",
  "Software Developer",
];

let index = 0;
const textElement = document.getElementById("dynamic-text");

function changeText() {
  textElement.classList.add("out");
  setTimeout(() => {
    textElement.textContent = roles[index];
    textElement.classList.remove("out");
    index = (index + 1) % roles.length;
  }, 500);
}

setInterval(changeText, 2000);

