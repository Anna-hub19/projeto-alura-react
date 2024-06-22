import './headerHome.css';

function Header(){
    return (
    <div className='conteiner'>
     <img className='imagem-logo' src='/imagens/logo-alura.png' alt='logo aluraFlix'/>
     <div>
     <button className='botao-home'> HOME </button>
     <button className='botao-novo'>NOVO VIDEO</button>
     </div>
    </div>
    )
};

export default Header;