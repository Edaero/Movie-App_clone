import PropTypes from "prop-types";
import styles from "./MovieDetail.module.css";

function Movie({ coverImg, title, year, summary, genres }) {
  return (
    <div className={styles.movie}>
      <div className={styles.img_container}>
        <img src={coverImg} alt={title} className={styles.movie_img}></img>
      </div>
      <div className={styles.title_container}>
        <h1 className={styles.movie_title}>{title}</h1>
        <h3>{year}</h3>
      </div>
      <p className={styles.movie_summary}>{summary}</p>
      <ul className={styles.movie_genres}>
        {genres.map((gen) => (
          <li key={gen}>{gen}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
