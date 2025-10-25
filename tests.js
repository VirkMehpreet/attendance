
  const slidesContainer = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  const dots = document.querySelectorAll('.dot');
  
  let index = 1; // Start from the first "real" slide (after the clone)
  let interval;
  
  // Clone first and last slides for seamless looping
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  slidesContainer.appendChild(firstClone);
  slidesContainer.insertBefore(lastClone, slidesContainer.firstChild);
  
  const allSlides = document.querySelectorAll('.slide');
  slidesContainer.style.transform = `translateX(-100%)`;
  
  // Update active dot
  function updateDots() {
    dots.forEach((d, i) => d.classList.toggle('active', i === ((index - 1 + slides.length) % slides.length)));
  }
  
  // Move to slide
  function moveToSlide() {
    slidesContainer.style.transition = "transform 0.7s ease-in-out";
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
  }
  
  // Next / Prev controls
  function nextSlide() {
    index++;
    moveToSlide();
  }
  
  function prevSlide() {
    index--;
    moveToSlide();
  }
  
  // Handle looping transitions
  slidesContainer.addEventListener('transitionend', () => {
    if (allSlides[index].textContent === firstClone.textContent) {
      slidesContainer.style.transition = "none";
      index = 1;
      slidesContainer.style.transform = `translateX(-100%)`;
    }
    if (allSlides[index].textContent === lastClone.textContent) {
      slidesContainer.style.transition = "none";
      index = slides.length;
      slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }
  });
  
  // Dots click
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i + 1;
      moveToSlide();
    });
  });
  
  // Autoplay every 5 seconds
  function startAutoPlay() {
    interval = setInterval(() => {
      nextSlide();
    }, 5000);
  }
  function stopAutoPlay() {
    clearInterval(interval);
  }
  startAutoPlay();
  
  // Pause autoplay on hover
  document.querySelector('.carousel').addEventListener('mouseenter', stopAutoPlay);
  document.querySelector('.carousel').addEventListener('mouseleave', startAutoPlay);
  
  // Buttons
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

