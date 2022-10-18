// 어떤 props를 가졌는지 알기 위해서 PropTypes를 임포트해준다.
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

// 5. js로 따로 만들 경우엔 key가 필요하지 않다.
// Movie component가 변수들을 parent component로부터 받아온다.
function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div className={styles.movie}>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} className={styles.movie_img}></img>
      </Link>
      <div>
        <h2>
          <Link to={`/movie/${id}`} className={styles.movie_title}>
            {title}
          </Link>
        </h2>
        <h2 className={styles.movie_year}>{year}</h2>
        {/* summary는 string이라서 array의 method를 사용할 수 있다. */}
        <p className={styles.movie_summary}>
          {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
        </p>
        <ul>
          {genres.map((gen) => (
            <li key={gen} className={styles.movie_genres}>
              {gen}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  // genres는 string을 가진 array 타입이여야 한다.
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
