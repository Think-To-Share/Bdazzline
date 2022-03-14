class DiscountPopup {
    overlayElement = null;

    constructor() {
        this.registerEvents();
    }

    show() {
        this.addOverlay();
        this.showPopup();
    }

    hide() {
        this.removeOverlay();
        this.hidePopup();
        this.setCloseState();
    }

    registerEvents() {
        const closeButton = document.querySelector('.discount-popup .btn-close');
        const dissmissLink = document.querySelector('.discount-popup .dissmiss-link');

        closeButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.hide();
        })

        dissmissLink.addEventListener('click', (e) => {
            e.preventDefault();
            this.hide();
        })
    }

    showPopup() {
        document.querySelector('.discount-popup').style.display = 'block';
    }

    hidePopup() {
        document.querySelector('.discount-popup').style.display = 'none';
    }

    addOverlay() {
        if(this.overlayElement) {
            return;
        }

        this.overlayElement = document.createElement('div');
        this.overlayElement.classList.add('discount-popup-overlay');
        this.overlayElement.addEventListener('click', () => {
            this.hide();
        });

        // add overlay to body
        document.body.appendChild(this.overlayElement);
    }

    removeOverlay() {
        if(!this.overlayElement) {
            return;
        }

        this.overlayElement.remove();
        this.overlayElement = null;
    }

    setCloseState(){
        window.localStorage.setItem('isPopupClosed',true)
    }
}

export default DiscountPopup;
