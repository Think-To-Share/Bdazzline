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
        const leftSideHeight = document.querySelector('.trend-section .left-fashion').clientHeight
        const slides = document.querySelectorAll('.trend-section .slides .slide')
        
        slides.forEach(slide => {
            slide.querySelector('.slide-main').style.minHeight = `${leftSideHeight}px`;
        })

        tns({
            container: '.trend-section .slides',
            items: 1,
            nav: true,
            autoplay: true,
            controls:false,
            autoplayButtonOutput: false,
        })
        // tns({
        //     container: '.trend-section .slides2',
        //     items: 1,
        //     nav: true,
        //     autoplay: true,
        //     controls:false,
        //     autoplayButtonOutput: false,
        // })
    })
   
}

if (document.querySelector('.trend-section')) {
    window.addEventListener('load', () => {
        const leftSideHeight = document.querySelector('.trend-section .right-top-fashion').clientHeight
        const slides = document.querySelectorAll('.trend-section .slides2 .slide')
        
        slides.forEach(slide => {
            slide.querySelector('.slide-main').style.minHeight = `${leftSideHeight}px`;
        })

        tns({
            container: '.trend-section .slides2',
            items: 1,
            nav: true,
            autoplay: true,
            controls:false,
            autoplayButtonOutput: false,
        })
        // tns({
        //     container: '.trend-section .slides2',
        //     items: 1,
        //     nav: true,
        //     autoplay: true,
        //     controls:false,
        //     autoplayButtonOutput: false,
        // })
    })
}

if (document.querySelector('.trend-section')) {
    window.addEventListener('load', () => {
        const leftSideHeight = document.querySelector('.trend-section .right-bottom-fashion').clientHeight
        const slides = document.querySelectorAll('.trend-section .slides3 .slide')
        
        slides.forEach(slide => {
            slide.querySelector('.slide-main').style.minHeight = `${leftSideHeight}px`;
        })

        tns({
            container: '.trend-section .slides3',
            items: 1,
            nav: true,
            autoplay: true,
            controls:false,
            autoplayButtonOutput: false,
        })
        // tns({
        //     container: '.trend-section .slides2',
        //     items: 1,
        //     nav: true,
        //     autoplay: true,
        //     controls:false,
        //     autoplayButtonOutput: false,
        // })
    })
}

// GLightbox({});
