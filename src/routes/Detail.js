// useParams는 URL에 있는 변경되는 값을 반환해주는 함수이다.
import { useEffect, useState } from "react";
import  {useParams} from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import styles from "./Detail.module.css"

function Detail() {
    // useParams를 사용해 URL에서 변경되는 영화의 id값을 받아온다
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState([]);
    const getMovie = async() => {
        const json = await (await fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        )).json();
        setMovieDetail(json.data.movie);
        setLoading(false);
    }
        
    useEffect(() => {
        getMovie();
    }, [getMovie]);
    return (
        <div className={styles.container}>
        {loading ? (
            <div className={styles.loader}>
                <div className={styles.loading}>
                    <h1>Loading...</h1>
                </div>
            </div>
        ) : (
            <div className={styles.detail}>
                <MovieDetail
                    key={movieDetail.id}
                    coverImg={movieDetail.medium_cover_image}
                    title={movieDetail.title}
                    year={movieDetail.year}
                    summary={movieDetail.description_intro}
                    genres={movieDetail.genres}
                />
            </div>
        )}
        </div>
    )
}

export default Detail;
