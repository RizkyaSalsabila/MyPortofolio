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

  scrollContainer.addEventListener('scroll', updateButtons);
  window.addEventListener('load', updateButtons);