
// 7. react-router-dom을 사용하기 위해 import해야 하는 것들
import {
  // BrowserRouter는 우리가 아는 웹사이트의 URL처럼 생겼다.
  // 또 다른 HashRouter는 뒤에 해시태그가 붙는다. 보통 BrowserRouter를 쓴다.
  // Link는 브라우저의 갱신 없이 유저를 다른 페이지로 이동시켜주는 컴포넌트이다.
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Detail from "./routes/Detail"
import Home from "./routes/Home"

function App() { // Router을 먼저 렌더링 해준다.
  return <Router>
    {/* Switch가 하는 일은 한 번에 하나의 Route를 찾아서 컴포넌트를 렌더링한다. */}
    <Switch>
      {/* Route는 URL을 의미한다. */}
      {/* path="/xxx"는 URL뒤에 붙일 주소를 의미한다. */}
      <Route path="/movie">
        <Detail />
      </Route>
      {/* path="/"는 Home을 의미한다. */}
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
}

export default App;