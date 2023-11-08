import './App.css';
import Paragraph from "./components/paragraph/paragraph"
import Button from './components/button/button';

function App() {
  return (
    <>
      <Paragraph text= 'Pediram para escrever um parágrafo, mas não disseram qual texto colocar, então coloquei um texto aleatório 😂' color='#20b2aa'/>

      <Button label='Se inscrever'/>
      <Button/>
    </>
  );
}

export default App;
