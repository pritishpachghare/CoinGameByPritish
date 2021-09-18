function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width

    );
}

const avatar = document.querySelector('#player');



window.addEventListener('keyup', function (e) {
    if (e.key === 'ArrowDown' || e.key === 'Down') {
        moveVertical(avatar, 50)

    }
    else if (e.key === 'ArrowUp' || e.key === 'Up') {
        moveVertical(avatar, -50)


    }
    else if (e.key === 'ArrowRight' || e.key === 'Right') {
        moveHorizontal(avatar, 50)
        avatar.style.transform = 'scale(1,1)'


    }
    else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        moveHorizontal(avatar, -50)
        avatar.style.transform = 'scale(-1,1)'

    }
    if (isTouching(avatar, coin)) moveCoin();

});

const moveVertical = (element, amount) => {
    const currTop = extractPos(element.style.top);
    element.style.top = `${currTop + amount}px`

}

const moveHorizontal = (element, amount) => {
    const currleft = extractPos(element.style.left);
    element.style.left = `${currleft + amount}px`

}


const extractPos = (pos) => {
    if (!pos) return 100;
    return parseInt(pos.slice(0, -2))
};
const coin = document.querySelector('#coin')

const moveCoin = function () {
    const width = Math.floor(Math.random() * window.innerWidth);
    const height = Math.floor(Math.random() * window.innerHeight);
    coin.style.top = `${height}px`;
    coin.style.left = `${width}px`;
}
moveCoin();



