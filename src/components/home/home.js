import Banner from "./banner/banner";
import Header from "./header/headerHome";
import Titulo from "./titulo/titulo";


function Home(){
    return(
        <div>
     <Header/>
      <Banner/>
      <Titulo nome="front-end" corDeFundo="#6BD1FF"/>
      <Titulo nome="back-end" corDeFundo="#00C86F"/>
      <Titulo nome="mobile" corDeFundo="#FFBA05"/>
      </div>
    )
};

export default Home;