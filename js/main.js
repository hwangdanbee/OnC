//main 함수선언 - 다른 프로그램과 변수가 겹치는 것을 방지하기 위해
export const oncMainSwiper = () => {
    //1. 문서객체 선택
    const main = document.querySelector('#mainSlider');
    const h3 = document.querySelectorAll('#mainSlider h3');
    const progress = document.querySelector('#mainSlider .swiper-progress');

    //2. 풀페이지 처리
    const fullPage = () => { //초기실행과 resize시 명령이 2번 발생
        const h = window.innerHeight;

        main.style.height = h + 'px';
    }
    fullPage(); //초기실행
    window.addEventListener('resize',fullPage); //resize시에도 호출


    //3. h3타이틀 글자를 동적 생성
    const text01 = 'BUILD TOGETHER';
    const text02 = 'WE BRING AMAZING TOMORROW';
    const text03 = 'IMAGINE IT, AND BUILD IT';

    //각각 span태그를 담을 변수
    let spanText01 = '';
    let spanText02 = '';
    let spanText03 = '';

    //반복처리
    for(let i=0;i<3;i++){
        //글자수가 달라서 각각 반복
        for(let j=0;eval('j<text0' + (i + 1) + '.length');j++){
            eval("spanText0" + (i + 1) + "+= '<span>' + text0" + (i + 1) + ".charAt(j) + '</span>'");

            //각각에 br태그 처리
            //첫번째 슬라이드에는 5번째 글자(4)뒤에 br태그 처리
            if(i == 0 && j == 4){
                spanText01 += '<br>';
            }
            //두번째 슬라이드에는 16번째 글자(15)뒤에 br태그 처리
            if(i == 1 && j == 15){
                spanText02 += '<br>';
            }
            //세번째 슬라이드에는 11번째 글자(10)뒤에 br태그 처리
            if(i == 2 && j == 10){
                spanText03 += '<br>';
            }

        }

        eval('h3[i].innerHTML = spanText0' + (i + 1));
    }

    //span태그를 문서객체로 담기
    const span01 = document.querySelectorAll('#mainSlider .title01 span');
    const span02 = document.querySelectorAll('#mainSlider .title02 span');
    const span03 = document.querySelectorAll('#mainSlider .title03 span');

    for(let i=0;i<3;i++){
        for(let j=0;eval('j<span0' + (i + 1) + '.length');j++){
            eval("span0" + (i + 1) + "[j].style.transitionDelay = 0.8 + (j * 0.07) + 's'");
        }
    }



    //4. 스와이퍼 실행
    const swiper = new Swiper("#mainSlider .swiper", {
        navigation: {
            nextEl: "#mainSlider .swiper-button-next",
            prevEl: "#mainSlider .swiper-button-prev",
        },
        loop: true, //무한루프
        autoplay: {
            delay: 8000, //슬라이드가 보여지는 시간
            disableOnInteraction: false,
        },
        pagination: {
            el: "#mainSlider .swiper-pagination",
            clickable: true,
        },
        effect: "fade",
        on: {
            init: function(){ //초기실행 - swiper실행후
                progress.classList.add('active');
            },
            slideChangeTransitionStart: function(){ //슬라이드 변경되기 시작할 때
                progress.classList.remove('active');
            },
            slideChangeTransitionEnd: function(){ //슬라이드 다 변경되면
                progress.classList.add('active');
            }
        }
    });


}
