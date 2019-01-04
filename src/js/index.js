  document.addEventListener("DOMContentLoaded", function(event){
    const view = document.getElementsByClassName('view')[0];
    const loader = document.getElementsByClassName('loader')[0];
    const cover = document.getElementsByClassName('cover')[0];
    const vertPattern = document.getElementsByClassName('background__vert-pattern')[0];
    const circlePattern = document.getElementsByClassName('background__circle-pattern')[0];
    const textPattern = document.getElementsByClassName('background__text-pattern')[0];
    const trees = document.getElementsByClassName('background__trees')[0];
    const pawsPeacock = document.getElementsByClassName('peacock__paws')[0];
    const tailPeacock = document.getElementsByClassName('peacock__tail')[0];
    const bodyPeacock = document.getElementsByClassName('peacock__body')[0];
    const monastery = document.getElementsByClassName('monastery__photo')[0];
    const titleName = document.getElementsByClassName('title__name')[0];
    const windBird1 = document.getElementsByClassName('title__wind-bird-1')[0];
    const bodyBird1 = document.getElementsByClassName('title__body-bird-1')[0];
    const headBird2 = document.getElementsByClassName('title__head-bird-2')[0];
    const bodyBird2 = document.getElementsByClassName('title__body-bird-2')[0];
    const navMap = document.getElementsByClassName('nav__map')[0];
    const navHistory = document.getElementsByClassName('nav__history')[0];
    const navGalary = document.getElementsByClassName('nav__galary')[0];
    const navAbout = document.getElementsByClassName('nav__about')[0];

    let window_height;
    let window_width;

    let cover_height;
    let cover_width;

    let coef_height;
    let coef_width;

    resize();

    function resize() {
        viewSize();
        loaderSize();
        vertPatternSize();
        textPatternSize();
        circlePatternSize();
        treesSize();
        pawsPeacockSize();
        tailPeacockSize();
        bodyPeacockSize();
        monasterySize();
        titleNameSize();
        windBird1Size();
        bodyBird1Size();
        headBird2Size();
        bodyBird2Size();
        navMapSize();
        navHistorySize();
        navGalarySize();
        navAboutSize();
    }

    function viewSize() {
        const basic_height = 915;
        const basic_width = 1680;
        
        window_height = window.innerHeight;
        window_width = window.innerWidth;

        if ((window_height/window_width) > (basic_height/basic_width)) {
            cover_width = window_width - 20;
            cover_height = window_width * basic_height / basic_width ;
        } else {
            cover_height = window_height - 20;
            cover_width = window_height * basic_width / basic_height;
        }

        coef_height = cover_height / basic_height;
        coef_width = cover_width / basic_width;

        view.style.width = `${cover_width}px`;
        view.style.height = `${cover_height}px`;
        view.style.top = `${(window_height-cover_height)/2}px`;
        view.style.left = `${(window_width-cover_width)/2}px`;
    }

    function loaderSize() {
        const basic_top = 320;
        const basic_left = 750;
        const basic_height = 150;
        const basic_width = 150;

        loader.style.width = `${basic_width * coef_width}px`;
        loader.style.height = `${basic_height * coef_height}px`;
        loader.style.top = `${basic_top * coef_height}px`;
        loader.style.left = `${basic_left * coef_width}px`;
    }

    function vertPatternSize() {
        const basic_top = -56;
        const basic_left = 117;
        const basic_height = 972;
        const basic_width = 386;

        vertPattern.style.width = `${basic_width * coef_width}px`;
        vertPattern.style.height = `${basic_height * coef_height}px`;
        vertPattern.style.top = `${basic_top * coef_height}px`;
        vertPattern.style.left = `${basic_left * coef_width}px`;
    }

    function textPatternSize() {
        const basic_top = -77;
        const basic_left = 1222;
        const basic_height = 910;
        const basic_width = 695;

        textPattern.style.width = `${basic_width * coef_width}px`;
        textPattern.style.height = `${basic_height * coef_height}px`;
        textPattern.style.top = `${basic_top * coef_height}px`;
        textPattern.style.left = `${basic_left * coef_width}px`;
    }

    function circlePatternSize() {
        const basic_top = 361;
        const basic_left = 895;
        const basic_height = 442;
        const basic_width = 442;

        circlePattern.style.width = `${basic_width * coef_width}px`;
        circlePattern.style.height = `${basic_height * coef_height}px`;
        circlePattern.style.top = `${basic_top * coef_height}px`;
        circlePattern.style.left = `${basic_left * coef_width}px`;
    }      
    
    function treesSize() {
        const basic_top = 579;
        const basic_left = -95;
        const basic_height = 225;
        const basic_width = 1329;

        trees.style.width = `${basic_width * coef_width}px`;
        trees.style.height = `${basic_height * coef_height}px`;
        trees.style.top = `${basic_top * coef_height}px`;
        trees.style.left = `${basic_left * coef_width}px`;
    }    

    function pawsPeacockSize() {
        const basic_top = 602;
        const basic_left = 443;
        const basic_height = 38;
        const basic_width = 54;

        pawsPeacock.style.width = `${basic_width * coef_width}px`;
        pawsPeacock.style.height = `${basic_height * coef_height}px`;
        pawsPeacock.style.top = `${basic_top * coef_height}px`;
        pawsPeacock.style.left = `${basic_left * coef_width}px`;
    }    
      
    function tailPeacockSize() {
        const basic_top = 565;
        const basic_left = 268;
        const basic_height = 152;
        const basic_width = 171;

        tailPeacock.style.width = `${basic_width * coef_width}px`;
        tailPeacock.style.height = `${basic_height * coef_height}px`;
        tailPeacock.style.top = `${basic_top * coef_height}px`;
        tailPeacock.style.left = `${basic_left * coef_width}px`;
    }    

    function bodyPeacockSize() {
        const basic_top = 419;
        const basic_left = 268;
        const basic_height = 298;
        const basic_width = 313;

        bodyPeacock.style.width = `${basic_width * coef_width}px`;
        bodyPeacock.style.height = `${basic_height * coef_height}px`;
        bodyPeacock.style.top = `${basic_top * coef_height}px`;
        bodyPeacock.style.left = `${basic_left * coef_width}px`;
    }    

    function monasterySize() {
        const basic_top = 94;
        const basic_left = 0;
        const basic_height = 821;
        const basic_width = 1680;

        monastery.style.width = `${basic_width * coef_width}px`;
        monastery.style.height = `${basic_height * coef_height}px`;
        monastery.style.top = `${basic_top * coef_height}px`;
        monastery.style.left = `${basic_left * coef_width}px`;
    }

    function titleNameSize() {
        const basic_top = 57;
        const basic_left = 568;
        const basic_height = 228;
        const basic_width = 552;

        titleName.style.width = `${basic_width * coef_width}px`;
        titleName.style.height = `${basic_height * coef_height}px`;
        titleName.style.top = `${basic_top * coef_height}px`;
        titleName.style.left = `${basic_left * coef_width}px`;
    }

    function windBird1Size() {
        const basic_top = 196;
        const basic_left = 578;
        const basic_height = 55;
        const basic_width = 24;

        windBird1.style.width = `${basic_width * coef_width}px`;
        windBird1.style.height = `${basic_height * coef_height}px`;
        windBird1.style.top = `${basic_top * coef_height}px`;
        windBird1.style.left = `${basic_left * coef_width}px`;
    }

    function bodyBird1Size() {
        const basic_top = 178;
        const basic_left = 587;
        const basic_height = 71;
        const basic_width = 83;

        bodyBird1.style.width = `${basic_width * coef_width}px`;
        bodyBird1.style.height = `${basic_height * coef_height}px`;
        bodyBird1.style.top = `${basic_top * coef_height}px`;
        bodyBird1.style.left = `${basic_left * coef_width}px`;
    }
      
    function headBird2Size() {
        const basic_top = 198;
        const basic_left = 1080;
        const basic_height = 22;
        const basic_width = 22;

        headBird2.style.width = `${basic_width * coef_width}px`;
        headBird2.style.height = `${basic_height * coef_height}px`;
        headBird2.style.top = `${basic_top * coef_height}px`;
        headBird2.style.left = `${basic_left * coef_width}px`;
    }      
    
    function bodyBird2Size() {
        const basic_top = 199;
        const basic_left = 1007;
        const basic_height = 56;
        const basic_width = 87;

        bodyBird2.style.width = `${basic_width * coef_width}px`;
        bodyBird2.style.height = `${basic_height * coef_height}px`;
        bodyBird2.style.top = `${basic_top * coef_height}px`;
        bodyBird2.style.left = `${basic_left * coef_width}px`;
    }    
      
    function navMapSize() {
        const basic_top = 98;
        const basic_left = 271;
        const basic_height = 78;
        const basic_width = 66;

        navMap.style.width = `${basic_width * coef_width}px`;
        navMap.style.height = `${basic_height * coef_height}px`;
        navMap.style.top = `${basic_top * coef_height}px`;
        navMap.style.left = `${basic_left * coef_width}px`;
    }
      
    function navHistorySize() {
        const basic_top = 212;
        const basic_left = 264;
        const basic_height = 75;
        const basic_width = 87;

        navHistory.style.width = `${basic_width * coef_width}px`;
        navHistory.style.height = `${basic_height * coef_height}px`;
        navHistory.style.top = `${basic_top * coef_height}px`;
        navHistory.style.left = `${basic_left * coef_width}px`;
    }

    function navGalarySize() {
        const basic_top = 330;
        const basic_left = 272;
        const basic_height = 70;
        const basic_width = 68;

        navGalary.style.width = `${basic_width * coef_width}px`;
        navGalary.style.height = `${basic_height * coef_height}px`;
        navGalary.style.top = `${basic_top * coef_height}px`;
        navGalary.style.left = `${basic_left * coef_width}px`;
    }

    function navAboutSize() {
        const basic_top = 432;
        const basic_left = 264;
        const basic_height = 90;
        const basic_width = 88;

        navAbout.style.width = `${basic_width * coef_width}px`;
        navAbout.style.height = `${basic_height * coef_height}px`;
        navAbout.style.top = `${basic_top * coef_height}px`;
        navAbout.style.left = `${basic_left * coef_width}px`;
    }
    
    imagesLoaded(view, ()=>{
        cover.style.opacity = 1;
        loader.style.opacity = 0
    });

    window.onresize = function() {
        resize();
    };
});