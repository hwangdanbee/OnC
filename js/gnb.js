export const oncGnb = () => {
    //1. 문서객체선택
    const main = document.querySelectorAll('#header .mainNav');
    const sub = document.querySelectorAll('#header .subNav');

    //2. 메인메뉴 mouseenter이벤트 - 5개여서 for문작성
    for(let i=0;i<main.length;i++){
        main[i].addEventListener('mouseenter',function(){
            //이벤트받은 메인메뉴의 다음 동생요소만 active클래스 받기
            this.nextElementSibling.classList.add('active');

            //부모요소인 li태그에서 마우스를 벗어나면 해당 sub를 active클래스 제거
            this.parentNode.addEventListener('mouseleave',function(){
                this.lastElementChild.classList.remove('active');
            });
        });


        //3. 웹접근성
        //3-1. 메인메뉴 초점(focus)받기
        main[i].addEventListener('focus',function(){
            //모든 메인메뉴 비활성 후 + 모든 하위메뉴 비활성 + 모든 하위메뉴 초점 못받게 처리
            for(let j=0;j<main.length;j++){
                main[j].classList.remove('active');
                sub[j].classList.remove('active');

                //a태그 문서객체 선택
                const a = sub[j].getElementsByTagName('a');

                for(let k=0;k<a.length;k++){
                    a[k].setAttribute('tabindex','-1');
                }
            }

            //이벤트받은 메인메뉴만 활성
            this.classList.add('active');

            //이벤트받은 메인메뉴의 동생만 활성
            this.nextElementSibling.classList.add('active');

            //이벤트받은 메인메뉴의 동생의 a태그만 초점받게 처리
            const activeLink = this.nextElementSibling.getElementsByTagName('a');

            for(let j=0;j<activeLink.length;j++){
                activeLink[j].setAttribute('tabindex','0');
            }
        });
    }

    //3-2. 첫번째 메인메뉴에서 [shift] + [tab]누르면 첫번째만 비활성
    main[0].addEventListener('keydown',function(e){
        //e : 눌린 키의 정보를 담는 이벤트 객체
        if(e.keyCode == 9){ //탭키를 눌렀을 때
            if(e.shiftKey){ //시프트키도 눌렀다면
                this.classList.remove('active');
                this.nextElementSibling.classList.remove('active');
            }
        }
    });

    //3-3. 마지막 하위리스트 a태그에서 [tab키를 누르면 비활성]
    sub[sub.length - 1].lastElementChild.firstElementChild.addEventListener('keydown',function(e){
        if(e.keyCode == 9){
            if(!e.shiftKey){
                main[main.length - 1].classList.remove('active');
                sub[sub.length - 1].classList.remove('active');

                const a = sub[sub.length - 1].getElementsByTagName('a');

                for(let i=0;i<a.length;i++){
                    a[i].setAttribute('tabindex','-1');
                }
            }
        }
    });

}
