{
    const zoomBtn = document.querySelectorAll('.img_diseño');
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
        imageBox.style.background = `url(imagenes/imag/${currentImageIdx}.bmp) center/cover no-repeat`;
    }

    prevBtn.addEventListener('click', function () {
        currentImageIdx--;
        if (currentImageIdx === 0) {
            currentImageIdx = 9;
        }
        currentImageDisplay(currentImageIdx);
    })

    nextBtn.addEventListener('click', function () {
        currentImageIdx++;
        if (currentImageIdx === 10) {
            currentImageIdx = 1;
        }
        currentImageDisplay(currentImageIdx);
    })

}


//////////////////////////////////

/////////////////////////////////

{

    const zoomBtn2 = document.querySelectorAll('.img_diseño2');
    const imageView = document.querySelector('.image-view');
    const nextBtn2 = document.getElementById('next-btn2');
    const prevBtn2 = document.getElementById('prev-btn2');
    const imageBox2 = document.querySelector('.image-box2');


    let currentImageIdx2 = 0;

    imageView.addEventListener('click', function () {
        this.style.display = "none";
        imageBox2.style.display = "none";
    })


    zoomBtn2.forEach(function (btn, index2) {
        btn.addEventListener('click', function () {
            imageView.style.display = "block";
            imageBox2.style.display = "block";
            currentImageIdx2 = index2 + 1;
            currentImageDisplay(currentImageIdx2);
        })
    })

    function currentImageDisplay(position) {
        imageBox2.style.background = `url(imagenes/a${currentImageIdx2}.jpeg) center/cover no-repeat`;
    }

    prevBtn2.addEventListener('click', function () {
        currentImageIdx2--;
        if (currentImageIdx2 === 0) {
            currentImageIdx2 = 8;
        }
        currentImageDisplay(currentImageIdx2);
    })

    nextBtn2.addEventListener('click', function () {
        currentImageIdx2++;
        if (currentImageIdx2 === 9) {
            currentImageIdx2 = 1;
        }
        currentImageDisplay(currentImageIdx2);
    })

}

//////////////////////////////////

/////////////////////////////////

{

    const zoomBtn3 = document.querySelectorAll('.img_diseño3');
    const imageView = document.querySelector('.image-view');
    const nextBtn3 = document.getElementById('next-btn3');
    const prevBtn3 = document.getElementById('prev-btn3');
    const imageBox3 = document.querySelector('.image-box3');


    let currentImageIdx3 = 0;

    imageView.addEventListener('click', function () {
        this.style.display = "none";
        imageBox3.style.display = "none";
    })


    zoomBtn3.forEach(function (btn, index3) {
        btn.addEventListener('click', function () {
            imageView.style.display = "block";
            imageBox3.style.display = "block";
            currentImageIdx3 = index3 + 1;
            currentImageDisplay(currentImageIdx3);
        })
    })

    function currentImageDisplay(position) {
        imageBox3.style.background = `url(imagenes/b${currentImageIdx3}.jpeg) center/cover no-repeat`;
    }

    prevBtn3.addEventListener('click', function () {
        currentImageIdx3--;
        if (currentImageIdx3 === 0) {
            currentImageIdx3 = 7;
        }
        currentImageDisplay(currentImageIdx3);
    })

    nextBtn3.addEventListener('click', function () {
        currentImageIdx3++;
        if (currentImageIdx3 === 8) {
            currentImageIdx3 = 1;
        }
        currentImageDisplay(currentImageIdx3);
    })

}

//////////////////////////////////

/////////////////////////////////

{

    const zoomBtn4 = document.querySelectorAll('.img_diseño4');
    const imageView = document.querySelector('.image-view');
    const nextBtn4 = document.getElementById('next-btn4');
    const prevBtn4 = document.getElementById('prev-btn4');
    const imageBox4 = document.querySelector('.image-box4');


    let currentImageIdx4 = 0;

    imageView.addEventListener('click', function () {
        this.style.display = "none";
        imageBox4.style.display = "none";
    })


    zoomBtn4.forEach(function (btn, index4) {
        btn.addEventListener('click', function () {
            imageView.style.display = "block";
            imageBox4.style.display = "block";
            currentImageIdx4 = index4 + 1;
            currentImageDisplay(currentImageIdx4);
        })
    })

    function currentImageDisplay(position) {
        imageBox4.style.background = `url(imagenes/c${currentImageIdx4}.jpeg) center/cover no-repeat`;
    }

    prevBtn4.addEventListener('click', function () {
        currentImageIdx4--;
        if (currentImageIdx4 === 0) {
            currentImageIdx4 = 6;
        }
        currentImageDisplay(currentImageIdx4);
    })

    nextBtn4.addEventListener('click', function () {
        currentImageIdx4++;
        if (currentImageIdx4 === 7) {
            currentImageIdx4 = 1;
        }
        currentImageDisplay(currentImageIdx4);
    })

}