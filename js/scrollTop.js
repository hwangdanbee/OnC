export const oncScrollTop = () => {
    //문서객체선택
    const btn = document.querySelector('#scrollTop a');

    //scroll이벤트에서 제거할 수 있게 처리
    let upper;

    //스크롤이벤트
    window.addEventListener('scroll',function(){
        const top = window.scrollY; //스크롤바 상단 좌표 담는 변수

        if(top == 0){
            clearInterval(upper);
        }

        if(top > 200){
            btn.parentNode.style.display = 'block';
        }else{
            btn.parentNode.style.display = 'none';
        }
    });

    //버튼 클릭이벤트
    btn.addEventListener('click',function(e){
        e.preventDefault(); //상단으로 올라가는 기본이벤트 제거

        //최신브라우저는 모두 사용가능
        /* window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }); */

        //천천히 이동되게 강제발생
        upper = setInterval(function(){
            window.scrollBy(0,-45);
        },10);

    });


}
