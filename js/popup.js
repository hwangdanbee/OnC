export const oncPopup = () => {
    //문서객체선택
    const popup = document.querySelector('#popup');
    const closeBtn = document.querySelector('#popup .close');
    const expireBtn = document.querySelector('#popup .expire');

    //닫기버튼 클릭이벤트 - 팝업 안보이게처리,스크롤바 다시생성
    closeBtn.addEventListener('click',function(e){
        e.preventDefault(); //기본이벤트 제거
        popup.style.display = 'none';
        document.body.style.overflow = 'visible';
    });


    //만료 쿠키 함수선언
    const setCookie = (name,value,expiredays) => {
        //name : 쿠키이름 생성
        //value : 쿠키이름 = 값
        //expiredays : 만료일 지정

        //오늘 지정
        const today = new Date();
        today.setDate(today.getDate() + expiredays); // 만료일로 날짜를 변경

        //쿠키생성
        document.cookie = name + '=' + value + '; path=/; expires=' + today.toGMTString() + ';';
    }

    //오늘안보기 버튼 클릭이벤트
    expireBtn.addEventListener('click',function(e){
        e.preventDefault();

        //쿠키실행
        setCookie('oncExpireCookie','yes',1); //마지막인수는 지정날짜
        
        //팝업안보이고, 스크롤바생성
        popup.style.display = 'none';
        document.body.style.overflow = 'visible';
    });


    //초기실행 - 쿠키값을 읽어서 있으면 안보이게 처리, 없으면 보이게 처리
    let cookieData = document.cookie; //쿠키데이터 읽어오기

    if(cookieData.indexOf('oncExpireCookie=yes') < 0){ //쿠키값에 해당 문자열이 없다면
        popup.style.display = "block";
        document.body.style.overflow = "hidden";
    }else{ //쿠키 값에 문자열이 있다면
        popup.style.display = 'none';
        document.body.style.overflow = "visible";
    }


}
