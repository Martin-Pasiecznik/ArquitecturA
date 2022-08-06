{

    const zoomBtn = document.querySelectorAll('.img_construccion');
    const imageView = document.querySelector('.image-view');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const imageBox = document.querySelector('.image-box');


    let currentImageIdx = 0;

    imageView.addEventListener('click', function () {
        this.style.display = "none";
        imageBox.style.display = "none";
    })


    zoomBtn.forEach(function (btn, index) {
        btn.addEventListener('click', function () {
            imageView.style.display = "block";
            imageBox.style.display = "block";
            currentImageIdx = index + 1;
            currentImageDisplay(currentImageIdx);
        })
    })

    function currentImageDisplay(position) {
        imageBox.style.background = `url(imagenes/e${currentImageIdx}.jpg) center/cover no-repeat`;
    }

    prevBtn.addEventListener('click', function () {
        currentImageIdx--;
        if (currentImageIdx === 0) {
            currentImageIdx = 10;
        }
        currentImageDisplay(currentImageIdx);
    })


    nextBtn.addEventListener('click', function () {
        currentImageIdx++;
        if (currentImageIdx === 11) {
            currentImageIdx = 1;
        }
        currentImageDisplay(currentImageIdx);
    })

}

///////////////////////////////

{

    const zoomBtn2 = document.querySelectorAll('.img_construccion2');
    const imageView = document.querySelector('.image-view');
    const nextBtn2 = document.getElementById('next-btn2');
    const prevBtn2 = document.getElementById('prev-btn2');
    const imageBox2 = document.querySelector('.image-box2');


    let currentImageIdx2 = 0;

    imageView.addEventListener('click', function () {
        this.style.display = "none";
        imageBox2.style.display = "none";
    })


    zoomBtn2.forEach(function (btn, index5) {
        btn.addEventListener('click', function () {
            imageView.style.display = "block";
            imageBox2.style.display = "block";
            currentImageIdx2 = index5 + 1;
            currentImageDisplay(currentImageIdx2);
        })
    })

    function currentImageDisplay(position) {
        imageBox2.style.background = `url(imagenes/d${currentImageIdx2}.jpg) center/cover no-repeat`;
    }

    prevBtn2.addEventListener('click', function () {
        currentImageIdx2--;
        if (currentImageIdx2 === 0) {
            currentImageIdx2 = 5;
        }
        currentImageDisplay(currentImageIdx2);
    })


    nextBtn2.addEventListener('click', function () {
        currentImageIdx2++;
        if (currentImageIdx2 === 6) {
            currentImageIdx2 = 1;
        }
        currentImageDisplay(currentImageIdx2);
    })

}


///////////////////////////////

{

    const zoomBtn2 = document.querySelectorAll('.img_construccion3');
    const imageView = document.querySelector('.image-view');
    const nextBtn2 = document.getElementById('next-btn3');
    const prevBtn2 = document.getElementById('prev-btn3');
    const imageBox2 = document.querySelector('.image-box3');


    let currentImageIdx2 = 0;

    imageView.addEventListener('click', function () {
        this.style.display = "none";
        imageBox2.style.display = "none";
    })


    zoomBtn2.forEach(function (btn, index5) {
        btn.addEventListener('click', function () {
            imageView.style.display = "block";
            imageBox2.style.display = "block";
            currentImageIdx2 = index5 + 1;
            currentImageDisplay(currentImageIdx2);
        })
    })

    function currentImageDisplay(position) {
        imageBox2.style.background = `url(imagenes/f${currentImageIdx2}.jpg) center/cover no-repeat`;
    }

    prevBtn2.addEventListener('click', function () {
        currentImageIdx2--;
        if (currentImageIdx2 === 0) {
            currentImageIdx2 = 3;
        }
        currentImageDisplay(currentImageIdx2);
    })


    nextBtn2.addEventListener('click', function () {
        currentImageIdx2++;
        if (currentImageIdx2 === 4) {
            currentImageIdx2 = 1;
        }
        currentImageDisplay(currentImageIdx2);
    })

}

///////////////////////////////

{

    const zoomBtn2 = document.querySelectorAll('.img_construccion4');
    const imageView = document.querySelector('.image-view');
    const nextBtn2 = document.getElementById('next-btn4');
    const prevBtn2 = document.getElementById('prev-btn4');
    const imageBox2 = document.querySelector('.image-box4');


    let currentImageIdx2 = 0;

    imageView.addEventListener('click', function () {
        this.style.display = "none";
        imageBox2.style.display = "none";
    })


    zoomBtn2.forEach(function (btn, index5) {
        btn.addEventListener('click', function () {
            imageView.style.display = "block";
            imageBox2.style.display = "block";
            currentImageIdx2 = index5 + 1;
            currentImageDisplay(currentImageIdx2);
        })
    })

    function currentImageDisplay(position) {
        imageBox2.style.background = `url(imagenes/g${currentImageIdx2}.jpg) center/cover no-repeat`;
    }

    prevBtn2.addEventListener('click', function () {
        currentImageIdx2--;
        if (currentImageIdx2 === 0) {
            currentImageIdx2 = 3;
        }
        currentImageDisplay(currentImageIdx2);
    })


    nextBtn2.addEventListener('click', function () {
        currentImageIdx2++;
        if (currentImageIdx2 === 4) {
            currentImageIdx2 = 1;
        }
        currentImageDisplay(currentImageIdx2);
    })

}

/////////////////////////////


{

    const zoomBtn2 = document.querySelectorAll('.img_construccion5');
    const imageView = document.querySelector('.image-view');
    const nextBtn2 = document.getElementById('next-btn5');
    const prevBtn2 = document.getElementById('prev-btn5');
    const imageBox2 = document.querySelector('.image-box5');


    let currentImageIdx2 = 0;

    imageView.addEventListener('click', function () {
        this.style.display = "none";
        imageBox2.style.display = "none";
    })


    zoomBtn2.forEach(function (btn, index5) {
        btn.addEventListener('click', function () {
            imageView.style.display = "block";
            imageBox2.style.display = "block";
            currentImageIdx2 = index5 + 1;
            currentImageDisplay(currentImageIdx2);
        })
    })

    function currentImageDisplay(position) {
        imageBox2.style.background = `url(imagenes/h${currentImageIdx2}.jpeg) center/cover no-repeat`;
    }

    prevBtn2.addEventListener('click', function () {
        currentImageIdx2--;
        if (currentImageIdx2 === 0) {
            currentImageIdx2 = 2;
        }
        currentImageDisplay(currentImageIdx2);
    })


    nextBtn2.addEventListener('click', function () {
        currentImageIdx2++;
        if (currentImageIdx2 === 3) {
            currentImageIdx2 = 1;
        }
        currentImageDisplay(currentImageIdx2);
    })

}