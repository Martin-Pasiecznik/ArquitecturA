{
    ///// Configuration of diseños.html modal ///////

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
        imageBox4.style.background = `url(imagenes/img2025/Foto${currentImageIdx4}.jpg) center/cover no-repeat`;
    }

    prevBtn4.addEventListener('click', function () {
        currentImageIdx4--;
        if (currentImageIdx4 === 0) {
            currentImageIdx4 = 8;
        }
        currentImageDisplay(currentImageIdx4);
    })

    nextBtn4.addEventListener('click', function () {
        currentImageIdx4++;
        if (currentImageIdx4 === 9) {
            currentImageIdx4 = 1;
        }
        currentImageDisplay(currentImageIdx4);
    })

}

{

    const zoomBtn5 = document.querySelectorAll('.img_diseño5');
    const imageView = document.querySelector('.image-view');
    const nextBtn5 = document.getElementById('next-btn5');
    const prevBtn5 = document.getElementById('prev-btn5');
    const imageBox5 = document.querySelector('.image-box5');


    let currentImageIdx5 = 0;

    imageView.addEventListener('click', function () {
        this.style.display = "none";
        imageBox5.style.display = "none";
    })


    zoomBtn5.forEach(function (btn, index5) {
        btn.addEventListener('click', function () {
            imageView.style.display = "block";
            imageBox5.style.display = "block";
            currentImageIdx5 = index5 + 1;
            currentImageDisplay(currentImageIdx5);
        })
    })

    function currentImageDisplay(position) {
        imageBox5.style.background = `url(imagenes/c${currentImageIdx5}.jpeg) center/cover no-repeat`;
    }

    prevBtn5.addEventListener('click', function () {
        currentImageIdx5--;
        if (currentImageIdx5 === 0) {
            currentImageIdx5 = 6;
        }
        currentImageDisplay(currentImageIdx5);
    })

    nextBtn5.addEventListener('click', function () {
        currentImageIdx5++;
        if (currentImageIdx5 === 7) {
            currentImageIdx5 = 1;
        }
        currentImageDisplay(currentImageIdx5);
    })

}

{

    const zoomBtn6 = document.querySelectorAll('.img_diseño6');
    const imageView = document.querySelector('.image-view');
    const nextBtn6 = document.getElementById('next-btn6');
    const prevBtn6 = document.getElementById('prev-btn6');
    const imageBox6 = document.querySelector('.image-box6');


    let currentImageIdx6 = 0;

    imageView.addEventListener('click', function () {
        this.style.display = "none";
        imageBox6.style.display = "none";
    })


    zoomBtn6.forEach(function (btn, index6) {
        btn.addEventListener('click', function () {
            imageView.style.display = "block";
            imageBox6.style.display = "block";
            currentImageIdx6 = index6 + 1;
            currentImageDisplay(currentImageIdx6);
        })
    })

    function currentImageDisplay(position) {
        imageBox6.style.background = `url(imagenes/img2025/p${currentImageIdx6}.jpg) center/cover no-repeat`;
    }

    prevBtn6.addEventListener('click', function () {
        currentImageIdx6--;
        if (currentImageIdx6 === 0) {
            currentImageIdx6 = 4;
        }
        currentImageDisplay(currentImageIdx6);
    })

    nextBtn6.addEventListener('click', function () {
        currentImageIdx6++;
        if (currentImageIdx6 === 5) {
            currentImageIdx6 = 1;
        }
        currentImageDisplay(currentImageIdx6);
    })

}

{

    const zoomBtn7 = document.querySelectorAll('.img_diseño7');
    const imageView = document.querySelector('.image-view');
    const nextBtn7 = document.getElementById('next-btn7');
    const prevBtn7 = document.getElementById('prev-btn7');
    const imageBox7 = document.querySelector('.image-box7');


    let currentImageIdx7 = 0;

    imageView.addEventListener('click', function () {
        this.style.display = "none";
        imageBox7.style.display = "none";
    })


    zoomBtn7.forEach(function (btn, index7) {
        btn.addEventListener('click', function () {
            imageView.style.display = "block";
            imageBox7.style.display = "block";
            currentImageIdx7 = index7 + 1;
            currentImageDisplay(currentImageIdx7);
        })
    })

    function currentImageDisplay(position) {
        imageBox7.style.background = `url(imagenes/img2025/a${currentImageIdx7}.jpg) center/cover no-repeat`;
    }

    prevBtn7.addEventListener('click', function () {
        currentImageIdx7--;
        if (currentImageIdx7 === 0) {
            currentImageIdx7 = 5;
        }
        currentImageDisplay(currentImageIdx7);
    })

    nextBtn7.addEventListener('click', function () {
        currentImageIdx7++;
        if (currentImageIdx7 === 6) {
            currentImageIdx7 = 1;
        }
        currentImageDisplay(currentImageIdx7);
    })

}

//////////////////////////////////////////////////
// CONSTRUCCIONES MODAL //
/////////////////////////////////////////////////

