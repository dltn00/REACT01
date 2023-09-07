import logo from './logo.svg';
import './App.css';

const 제목임 = <h1>이게 바로 제목이지</h1>;

let 컨텐츠임 = <p></p>;
for(let i = 0 ; i < 10 ; i ++){
  컨텐츠임 += <p>{i}번 컨텐츠임</p>
}
// 리액트에서 for문으로 컨텐츠 만드는건 권장X
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {제목임}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {컨텐츠임}
        
      </header>
    </div>
  );
}

export default App;
