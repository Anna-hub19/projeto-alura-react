import './home.css';
import Banner from "./banner/banner";
import Cards from "./cards/cards";
import Header from "./header/headerHome";
import Titulo from "./titulo/titulo";
import Rodape from './rodape/rodape';


function Home(){
    return(
        <div>
     <Header/>
      <Banner/>
      <Titulo nome="front-end" corDeFundo="#6BD1FF"/>
      <div className="container-cards">
      <Cards imagem="/imagens/imagemFront.png" texto="imagem front-end" corDaBorda=" 3px #6BD1FF solid"/>
     
      </div>
     
      <Titulo nome="back-end" corDeFundo="#00C86F"/>
      <div className="container-cards">
      <Cards imagem="/imagens/imagemBack.png" texto="imagem back-end" corDaBorda="3px #00C86F solid"/>
      </div>
     
      <Titulo nome="mobile" corDeFundo="#FFBA05"/>
      <div className="container-cards">
      <Cards imagem="/imagens/imagemMobile.png" texto="imagem Mobile" corDaBorda="3px #FFBA05 solid"/>
      </div>
      <Rodape/>
      </div>
    )
};

export default Home;