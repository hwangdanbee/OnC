//변수가 겹치지 않도록 지역변수 활용
export const oncBusinessTab = () =>{
    //1. 문서객체선택
    const btn = document.querySelectorAll('#business .btn a');
    const contents = document.querySelectorAll('#business .contentsWrap > div');

    //2. 초기실행 - 첫번째 버튼과 첫번째 컨텐츠 보이게 처리
    btn[0].classList.add('active');
    contents[0].style.display = 'block';

    //3. 클릭이벤트
    for(let i=0;i<btn.length;i++){
        btn[i].addEventListener('click',function(e){
            //기본이벤트 제거
            e.preventDefault();

            //모든 버튼 클래스 제거/모든 컨텐츠 안보이게 처리
            for(let j=0;j<btn.length;j++){
                btn[j].classList.remove('active');
                contents[j].style.display = 'none';
            }

            //해당 순번의 버튼만/컨텐츠 처리
            this.classList.add('active');
            contents[i].style.display = 'block';
        });
    }
}
