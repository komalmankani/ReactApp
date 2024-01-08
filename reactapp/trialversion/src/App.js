import './App.css';
import Great from './components/Great';
import {Cards} from './components/welcome'

function App() {
  return (
    <>
    <div className="App container">
      <Great name="Dream" dataClassName="one" langName="code"/>
      <Great name="Dream" dataClassName="two" langName="CSS"/>
      <Great name="Dream" dataClassName="three" langName="HTML5" />
      <Great name="Dream" dataClassName="four" langName="JS" />
    </div>
    <div className="App container">
      <Cards name="Dream" dataClassName="one" langName="code"/>
      <Cards name="Dream" dataClassName="two" langName="CSS"/>
      <Cards name="Dream" dataClassName="three" langName="HTML5" />
      <Cards name="Dream" dataClassName="four" langName="JS" />
    </div>
    </>
  );
}

export default App;
