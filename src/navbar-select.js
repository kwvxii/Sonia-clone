document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', function () {
      navItems.forEach(i => i.classList.remove('selected'));
      this.classList.add('selected');
    });
  });
});