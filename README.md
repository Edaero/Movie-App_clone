# Movie-App_clone
- [노마드 코더 React로 Movie-App 클론 코딩](https://nomadcoders.co/javascript-for-beginners/lobby)
- 20220709완료
- 사용언어: HTML, CSS, JavaScript, React, nodeJS
## 구현 기능
> ### App.js
- react-router-dom을 사용해 SPA 화면 전환 구현, 가독성 높임
> ### Home.js, Detail.js
- API 데이터를 가져오는 동안 Loading창 구현
- 영화 API를 활용해 영화 이미지, 제목, 개봉년도, 영화개요, 영화장르 정보 구현
- useParams를 사용해 URL에서 변경되는 영화의 id값을 받아와 URL에 적용
- css에 mediaquery를 사용해 800px이하의 창에선 웹이 보이지 않도록 구현
> ### Movie.js, MovieDetail.js
- PropTypes를 사용해 데이터를 가져오는 props의 유효성 검사 구현
- 컴포넌트가 parent component로부터 변수를 받아와 사용할 수 있게 구현
## 결과물 이미지
![image](https://user-images.githubusercontent.com/99079176/178107406-6765b2fa-258a-4040-ad0e-08aa9a447f71.png)
![image](https://user-images.githubusercontent.com/99079176/178107432-f69c4ce0-16f1-4bd6-b719-1fab956cd5aa.png)
