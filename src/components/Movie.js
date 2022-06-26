// 어떤 props를 가졌는지 알기 위해서 PropTypes를 임포트해준다.
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

// 5. js로 따로 만들 경우엔 key가 필요하지 않다.
// Movie component가 변수들을 parent component로부터 받아온다.
function Movie({coverImg, title, summary, genres}) {
    return (<div>
        <Link to="/movie"><img src={coverImg} alt={title}></img></Link>
        <h2>
            <Link to="/movie">{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
            {genres.map(gen => <li key={gen}>{gen}</li>)}
        </ul>
    </div>)}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    // genres는 string을 가진 array 타입이여야 한다.
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;