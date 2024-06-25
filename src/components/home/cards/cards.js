import './cards.css';

function Cards(props) {
    return (
        <>
        <section className='container'style={{border: props.corDaBorda}}>
            <img src={props.imagem} alt={props.texto}/>
            <div className='container-botao'>
                <span className='botao'><img src='/imagens/excluir.png' alt='excluir'/> <p>excluir</p></span>
                <span className='botao'><img src='/imagens/editar.png' alt='editar'/> <p>editar</p></span>
            </div>
        </section>
        </>
    )
};

export default Cards;