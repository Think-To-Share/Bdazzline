import { tns } from 'tiny-slider/src/tiny-slider'

// import GLightbox from 'glightbox';

if (document.querySelector('.hero-section')) {
    tns({
        container: '.hero-section .slides',
        items: 1,
        nav: false,
        // controlsContainer: '.hero-section .testimonial-nav',
        autoplay: true,
        controls:false,
        autoplayTimeout:50000,
        autoplayButtonOutput: false,
        responsive: {
            768:{
              items: 1,
              controlsText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
              controls:true
            }
        }
    })
}

if (document.querySelector('.review-section')) {
    tns({
        container: '.review-section .publish-review',
        items: 1,
        nav: false,
        // controlsContainer: '.hero-section .testimonial-nav',
        autoplay: true,
        controls:false,
        autoplayTimeout:50000,
        autoplayButtonOutput: false,
        responsive: {
            768:{
              items: 3,
              controlsText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
              controls:true,
              controlsPosition: 'bottom',
            }
        }
    })
}


if (document.querySelector('.trend-section')) {
    window.addEventListener('load', () => {
        tns({
            container: '.trend-section .slides',
            items: 1,
            nav: true,
            autoplay: true,
            controls:false,
            autoplayButtonOutput: false,
        })

        tns({
            container: '.trend-section .right-top-fashion .slides',
            items: 1,
            nav: true,
            autoplay: true,
            controls:false,
            autoplayButtonOutput: false,
        })

        tns({
            container: '.trend-section .right-bottom-fashion .slides',
            items: 1,
            nav: true,
            autoplay: true,
            controls:false,
            autoplayButtonOutput: false,
        })

        tns({
            container: '.trend-section .right-top-right-fashion .slides',
            items: 1,
            nav: true,
            autoplay: true,
            controls:false,
            autoplayButtonOutput: false,
        })

        tns({
            container: '.trend-section .right-bottom-right-fashion .slides',
            items: 1,
            nav: true,
            autoplay: true,
            controls:false,
            autoplayButtonOutput: false,
        })
    })
   
}


if (document.querySelector('.top-bar')) {
    tns({
        container: '.top-bar .slides',
        items: 1,
        nav: false,
        autoplay: true,
        controls:false,
        autoplayTimeout:3000,
        autoplayButtonOutput: false,
    })
}
// GLightbox({});
