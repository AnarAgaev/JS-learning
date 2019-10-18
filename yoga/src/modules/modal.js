export default function showModal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        btnInfoBlock = document.querySelectorAll('.description-btn');

    for (let i = 0; i < btnInfoBlock.length; i++) {
        btnInfoBlock[i].addEventListener('click', function () {
            showModal.call(this);
        });
    }

    more.addEventListener('click', function () {
        showModal.call(this);
    });

    close.addEventListener('click', hideModal.bind());

    function showModal() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    function hideModal() {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        document.querySelector('.more-splash').classList.remove('more-splash');
    }
}