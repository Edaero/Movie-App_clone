import PropTypes from "prop-types";

function Movie({coverImg, title, year, summary, genres}) {
    return (<div>
        <img src={coverImg} alt={title}></img>
        <h2>{title}</h2>
        <h3>{year}</h3>
        <p>{summary}</p>
        <ul>
            {genres.map(gen => <li key={gen}>{gen}</li>)}
        </ul>
    </div>)}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;