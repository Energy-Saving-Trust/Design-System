document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.getElementById('burger-menu');
  const mobileMainNavigation = document.getElementById('mobileMainNavigation');
  const mobileControls = document.querySelector('.mobile-controls');
  const closeButton = document.querySelector('.mobile-controls .close-button');
  const backButton = document.querySelector('.mobile-controls .back-button');

  function toggleMenu() {
    if (mobileMainNavigation.classList.contains('show')) {
      closeMobileMenu();
    } else {
      mobileMainNavigation.classList.add('show');
      mobileControls.classList.remove('d-none');
      mobileControls.classList.add('fade-in');
      mobileControls.classList.remove('fade-out');
      burgerMenu.classList.add('burger-open');
      burgerMenu.classList.remove('d-flex'); // Remove d-flex to hide burger menu
      burgerMenu.style.display = 'none'; // Ensure the burger menu is hidden
    }
  }

  function closeMobileMenu() {
    mobileMainNavigation.classList.remove('show');
    mobileControls.classList.remove('fade-in');
    mobileControls.classList.add('fade-out');
    burgerMenu.classList.remove('burger-open');
    mobileControls.classList.add('d-none');
    mobileControls.classList.remove('fade-out');
    showTopLevelItems();
    burgerMenu.classList.add('d-flex'); // Add d-flex to show burger menu again
    burgerMenu.style.display = 'block'; // Ensure the burger menu is visible
  }

  function setActiveNavLink(navItem) {
    const activeLinks = mobileMainNavigation.querySelectorAll('.nav-item > .nav-link.active');
    activeLinks.forEach(link => link.classList.remove('active'));
    navItem.classList.add('active');
  }

  function showSubMenu(navItem) {
    const topLevelItems = mobileMainNavigation.querySelectorAll('.nav-item > .nav-link');
    topLevelItems.forEach(item => {
      if (item !== navItem) {
        item.style.display = 'none';
      }
    });
    const subMenu = navItem.nextElementSibling;
    if (subMenu && subMenu.classList.contains('navbar-nav')) {
      subMenu.classList.remove('d-none');
    }
    mobileControls.classList.remove('d-none');
    setActiveNavLink(navItem);
  }

  function showTopLevelItems() {
    const topLevelItems = mobileMainNavigation.querySelectorAll('.nav-item > .nav-link');
    topLevelItems.forEach(item => {
      item.style.display = 'block';
      item.classList.remove('active');
    });
    const subMenus = mobileMainNavigation.querySelectorAll('.nav-item > ul.navbar-nav');
    subMenus.forEach(subMenu => {
      subMenu.classList.add('d-none');
    });
  }

  if (burgerMenu) {
    burgerMenu.addEventListener('click', toggleMenu);
  }

  if (closeButton) {
    closeButton.addEventListener('click', closeMobileMenu);
  }

  if (backButton) {
    backButton.addEventListener('click', showTopLevelItems);
  }

  const navLinks = mobileMainNavigation.querySelectorAll('.nav-item > .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.nextElementSibling && this.nextElementSibling.classList.contains('navbar-nav')) {
        e.preventDefault();
        showSubMenu(this);
      } else {
        setActiveNavLink(this);
      }
    });
  });

  showTopLevelItems();
});

function showInsideNavContainer(clickedLink) {
  const insideNavContainers = document.querySelectorAll('.inside-nav-container');
  const navInsideLinks = document.querySelectorAll('.nav-inside > .nav-link');

  // Hide all nav-inside links
  navInsideLinks.forEach(link => {
    link.style.display = 'none';
  });

  // Show the clicked link's inside-nav-container
  const container = clickedLink.nextElementSibling;
  if (container && container.classList.contains('inside-nav-container')) {
    container.style.display = 'block';
  }

  // Show back button
  if (backButton) {
    backButton.style.display = 'block';
  }
}

function hideInsideNavContainer() {
  const insideNavContainers = document.querySelectorAll('.inside-nav-container');
  const navInsideLinks = document.querySelectorAll('.nav-inside > .nav-link');

  // Hide all inside-nav-containers
  insideNavContainers.forEach(container => {
    container.style.display = 'none';
  });

  // Show all nav-inside links
  navInsideLinks.forEach(link => {
    link.style.display = 'block';
  });
}

// Update the existing event listeners
const navLinks = mobileMainNavigation.querySelectorAll('.nav-item > .nav-link, .nav-inside > .nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    if (this.closest('.nav-inside')) {
      showInsideNavContainer(this);
    } else if (this.nextElementSibling && this.nextElementSibling.classList.contains('navbar-nav')) {
      showSubMenu(this);
    } else {
      setActiveNavLink(this);
    }
  });
});

// Update the back button functionality
if (backButton) {
  backButton.addEventListener('click', function() {
    if (document.querySelector('.inside-nav-container[style="display: block;"]')) {
      hideInsideNavContainer();
    } else {
      showTopLevelItems();
    }
  });
}
