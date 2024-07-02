document.addEventListener('DOMContentLoaded', function() {
    // Snapping behavior
    let sections = document.querySelectorAll('main section');
    let main = document.querySelector('main');

    if (window.innerWidth > 600) {
        main.addEventListener('scroll', () => {
            let closestSection = null;
            let minDistance = Infinity;

            sections.forEach(section => {
                let rect = section.getBoundingClientRect();
                let distance = Math.abs(rect.top);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestSection = section;
                }
            });

            if (closestSection) {
                closestSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Existing code for splitview
    var parent = document.querySelector('.splitview'),
        topPanel = parent.querySelector('.top'),
        handle = parent.querySelector('.handle'),
        skewHack = 0,
        delta = 0;

    // If the parent has .skewed class, set the skewHack var.
    if (parent.className.indexOf('skewed') != -1) {
        skewHack = 1000;
    }

    parent.addEventListener('mousemove', function(event) {
        if (window.innerWidth > 600) {
            // Get the delta between the mouse position and center point.
            delta = (event.clientX - window.innerWidth / 2) * 0.5;

            // Move the handle.
            handle.style.left = event.clientX + delta + 'px';

            // Adjust the top panel width.
            topPanel.style.width = event.clientX + skewHack + delta + 'px';
        }
    });

    particlesJS.load('particles-js', 'particles-config.json', function() {
        console.log('particles.js loaded - callback');
    });

    const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
});
