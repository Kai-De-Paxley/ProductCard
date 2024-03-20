let circles = document.querySelector('.color');

circles.addEventListener("click", (e) => {
    let target = e.target;
    if(target.classList.contains('circles')) {
        circles.querySelector('.active').classList.remove('active');
        target.classList.add('active');
        document.querySelector('.image-box .active').classList.remove('active');
        document.querySelector(`.image-box .${target.id}`).classList.add('active')
    }
})