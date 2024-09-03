document.addEventListener('DOMContentLoaded', () => {
    // Object to keep track of the active element
    const activeElements = {
        '.search-box': false,
        '.cart': false,
        '.user': false,
        '.navbar': false,
    };

    function setupToggle(elementSelector, iconSelector, activeClass) {
        const element = document.querySelector(elementSelector);
        const icon = document.querySelector(iconSelector);

        if (element && icon) {
            icon.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent the click event from propagating to the document
                
                const isActive = element.classList.contains(activeClass);

                // Deactivate all other elements
                for (const [selector, isActive] of Object.entries(activeElements)) {
                    if (selector !== elementSelector && isActive) {
                        document.querySelector(selector).classList.remove(activeClass);
                        activeElements[selector] = false;
                    }
                }

                // Toggle the clicked element
                if (isActive) {
                    element.classList.remove(activeClass);
                    activeElements[elementSelector] = false;
                } else {
                    element.classList.add(activeClass);
                    activeElements[elementSelector] = true;
                }
            });
        } else {
            console.error(`Element or icon not found: ${elementSelector} or ${iconSelector}`);
        }
    }

    // Initialize search box, cart, user, and navbar toggle functionality
    setupToggle('.search-box', '#search-icon', 'active');
    setupToggle('.cart', '#cart-icon', 'active');
    setupToggle('.user', '#user-icon', 'active');
    setupToggle('.navbar', '#menu-icon', 'active');

    // Handle clicks outside the active elements
    document.addEventListener('click', (event) => {
        // Get the target element of the click event
        const target = event.target;

        // Check if the click is outside any of the active elements
        const isClickInsideActiveElement = Object.keys(activeElements).some(selector => {
            const element = document.querySelector(selector);
            return element && element.contains(target);
        });

        if (!isClickInsideActiveElement) {
            // If the click is outside all active elements, remove 'active' class from all
            for (const selector of Object.keys(activeElements)) {
                const element = document.querySelector(selector);
                if (element) {
                    element.classList.remove('active');
                    activeElements[selector] = false;
                }
            }
        }
    });
});




// navbar scroll
let header= document.querySelector('header');
window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow',window.scrollY>0);
}); 


var swiper = new Swiper(".new-arrival", {
spaceBetween: 20,
    loop:true,
    autoplay: {
    delay: 1500,
     disableOnInteraction:false,
    },
    centeredSlides:true,
    breakpoints: {
        0: {
    slidesPerView: 1,
    },
    568: {
     slidesPerView: 1,
    },
    768: {
    slidesPerView: 2,
    },
    1020: {
    slidesPerView:4,
    },
},
},)