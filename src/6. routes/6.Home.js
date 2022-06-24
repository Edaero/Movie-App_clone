import { useEffect, useState } from "react";
import Movie from "./components/5. Movie";
// npm install react-router-dom 을 사용해 router을 만들 수 있다.

function Home() {
// 1. 기본 값을 true로 가지는 state 생성
const [loading, setLoading] = useState(true);
// 3. 빈 배열을 가진 movie state 생성
const [movies, setMovies] = useState([])
// 4. API를 json data로 받아옴
// sync-awit 사용법(요즘 보편적인 방법)
const getMovies = async() => { // 더 짧게 하는 방법
    const json = await (await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    )).json();
    // const json = await response.json();
    // 데이터를 가져오면 로딩이 끝나도록 설계
    setMovies(json.data.movies);
    setLoading(false);
}
// 2. 한 번만 실행하는 useEffect생성
useEffect(() => {
    getMovies()
}, []);
return (
    <div>
    {loading ? (<h1>Loading...</h1>) : (
        <div>
        {/* 5. movies와 map을 사용해 영화를 화면에 표시 */}
        {/* 5. React.js에서 map을 써서 component들을 render할 떄 항상 고유 key를 넣어줘야한다. 
        영화 API에 있는 movie.id를 사용한다. */}
        {movies.map((movie) =>(
            // component를 가져온다.
            <Movie
            key={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
            />
        ))}
        </div>
    )}
    </div>
);
}

export default Home;