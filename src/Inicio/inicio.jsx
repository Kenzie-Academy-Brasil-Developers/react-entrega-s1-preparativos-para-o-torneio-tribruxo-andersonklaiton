import Characters from "../Characters";
import "./style.css"

const Inicio = ({setThehouse,charList}) => {
    return (
      <>
        <div className="Inicio">
          <h1>Torneio</h1>
          <p>Clique no botão para encontrar jogadores!</p>
          <button className="btnIniciar" onClick={() => setThehouse(false)}>Começar!</button>
        </div>
        <div className="container_all_characters">
          {charList.map((elm, index)=>{
                return <Characters key={index} charStudent={elm}/>
            })}
          
        </div>
      </>
    );
  };
  
  export default Inicio;