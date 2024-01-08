import './App.css';
import Great from './components/Great';

function App() {
  return (
    <div className="App container">
      <Great name="Dream" dataClassName="one" langName="code"/>
      <Great name="Dream" dataClassName="two" langName="CSS"/>
      <Great name="Dream" dataClassName="three" langName="HTML5" />
      <Great name="Dream" dataClassName="four" langName="JS" />
    </div>
  );
}

export default App;
