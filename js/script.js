  const scrollBtn = document.querySelector('.scrollToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });

  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });



  // Show the popup for the first time after 3 seconds
  window.addEventListener('load', () => {
    setTimeout(() => {
      openForm();
    }, 3000);
  });

  // Re-show the popup every 10 seconds
  setInterval(() => {
    openForm();
  }, 10000); // 10,000 milliseconds = 10 seconds

  // Open popup
  function openForm() {
    document.getElementById('popupForm').style.display = 'flex';
  }

  // Close popup
  function closeForm() {
    document.getElementById('popupForm').style.display = 'none';
  }
