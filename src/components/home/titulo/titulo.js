import "./titulo.css";

function Titulo(props){
    return(
  <>
  <h1 className="titulo" style={{backgroundColor: props.corDeFundo}}>
   {props.nome}
  </h1>
  </>
    )
};

export default Titulo;