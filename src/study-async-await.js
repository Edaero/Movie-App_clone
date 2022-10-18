import { useEffect, useState } from "react";

function App() {
  // 1. 기본 값을 true로 가지는 state 생성
  const [loading, setLoading] = useState(true);
  // 3. 빈 배열을 가진 movie state 생성
  const [movies, setMovies] = useState([]);
  // async-awit 사용법(요즘 보편적인 방법)
  const getMovies = async () => {
    // 더 짧게 하는 방법
    const response = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
      )
    ).json();
    // const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  // 2. 한 번만 실행하는 useEffect생성
  useEffect(() => {
    // async-awit 사용법(요즘 보편적인 방법)
    getMovies();
    // // fetch로 영화 API를 가져오고, respons의 json파일을 얻는다. (response = 영화 API)
    // fetch(
    //     "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
    // )
    // .then(respons => respons.json())
    // // 3. 가져온 json파일에서 setMovies 함수를 이용해 movies에 json.data.movies를 넣어주고 loading을 끝낸다.
    // .then(json => {
    //     setMovies(json.data.movies);
    //     setLoading(false);
    // });
  }, []);
  return <div>{loading ? <h1>Loading...</h1> : null}</div>;
}

export default App;
