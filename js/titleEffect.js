export const oncTitleEffect = () => {
    //문서객체 선택
    const h2Title = document.querySelectorAll('h2.titleEffect');

    //스크롤바를 이동했을 때 - scroll
    window.addEventListener('scroll',function(){
        //윈도우의 스크롤바 상단 좌표가 각각 타이틀이 보일때를 지났을 때, 각각 타이틀에 active 클래스를 추가
        const top = window.scrollY; //세로스크롤바의 상단좌표를 반환하는 속성

        //3개니까 반복문 사용
        for(let i=0;i<h2Title.length;i++){
            //각각 타이틀의 상단좌표
            let h2Top = h2Title[i].offsetTop; //문서객체의 상단 좌표를 반환하는 속성

            if(top > h2Top - 700){
                h2Title[i].classList.add('active');
            }
        }

    });
}
