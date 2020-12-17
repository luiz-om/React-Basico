import './App.css';
import Comentario from './Components/Comentario'

function App() {
  return (
    <div className="App">
      <h1>Meu primeiro projeto</h1>

      <Comentario nome='Luiz Fernando' email='teste@teste.com' data={new Date(2020, 2,2)}>
  ola mensagem
</Comentario>
<Comentario nome='Fernando' email='teste3@teste.com' data={new Date(2020, 3,2)}>
  ola mensagem segunda
</Comentario>

    </div>
  );
}

export default App;
