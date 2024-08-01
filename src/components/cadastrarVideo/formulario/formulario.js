import './formulario.css';

function Formulario() {
    return (
        <>
            <div className='div-titulo'>
                <h3>
                    Criar Card
                </h3>
            </div>
            <form className='container-form'>
                <div>

                    <label for='titulo'>titulo </label>
                    <input className='input-form' id='titulo' type='text' placeholder='ingrese el título' />

                    <label for="categoria">categoria</label>
                    <select className='input-form'  id="categoria" name="categoria">
                        <option value="selecione">selecione uma categoria</option>
                        <option value="front-end">front-end</option>
                        <option value="back-end">back-end</option>
                        <option value="mobile">mobile</option>
                    </select>
                </div>
                <div>
                    <label for='imagem'>imagem </label>
                    <input className='input-form' id='imagem' type='text' placeholder='ingrese el imagem' />

                    <label for='video'>video </label>
                    <input className='input-form' id='video' type='text' placeholder='ingrese el video' />
                </div>
                <div>
                    <label for='descricao'>descrição </label>
                    <input className='input-form' id='descricao' type='text' placeholder='sobre o que é esse vídeo?' />
                </div>
                <button>GUARDAR</button>
                <button>LIMPAR</button>
            </form>
        </>
    )
}
export default Formulario;