import Header from "../home/header/headerHome";
import Rodape from "../home/rodape/rodape";
import Formulario from "./formulario/formulario";
import TituloCadastro from "./TituloCadastro/TituloCadastro";

function Cadastrar(){
    return(
        <>
          <Header corFundoBHome="#262626" corBHome="#fff" BordaHome=" 2px #fff solid "
          corFundoBNovo="#000" corBNovo=" #2271D1" BordaNovo="2px #2271D1 solid"/>
          <TituloCadastro/>
          <Formulario/>
          <Rodape/>
        </>
    )
};


export default Cadastrar;