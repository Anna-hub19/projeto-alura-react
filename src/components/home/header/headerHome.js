import { Link } from 'react-router-dom';
import './headerHome.css';

function Header(props){
    return (
    <div className='conteiner'>
     <img className='imagem-logo' src='/imagens/logo-alura.png' alt='logo aluraFlix'/>
     <div>
    
     <Link to={'/'} className='botao-home' 
     style={{backgroundColor: props.corFundoBHome, 
     color: props.corBHome,  
     border: props.BordaHome,
   
     }}> HOME </Link>
     
     <Link to={'/cadastro'} className='botao-novo'
     style={{backgroundColor: props.corFundoBNovo, 
     color: props.corBNovo,  
     border: props.BordaNovo,
     
     }}>NOVO VIDEO</Link>
     </div>
    </div>
    )
};

export default Header;