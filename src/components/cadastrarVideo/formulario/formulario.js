import './formulario.css';

function Formulario() {
    return (
        <>
            <div>
                <h3>
                    Criar Card
                </h3>
            </div>
            <form>
                <label for='titulo'>titulo </label>
                <input id='titulo' type='text' placeholder='ingrese el título' />

                <label for="categoria">categoria</label>
                <select id="categoria" name="categoria">
                    <option value="selecione">selecione uma categoria</option>
                    <option value="front-end">front-end</option>
                    <option value="back-end">back-end</option>
                    <option value="mobile">mobile</option>
                </select>
                <label for='imagem'>imagem </label>
                <input id='imagem' type='text' placeholder='ingrese el imagem' />

                <label for='video'>video </label>
                <input id='video' type='text' placeholder='ingrese el video' />

                <label for='descricao'>descrição </label>
                <input id='descricao' type='text' placeholder='sobre o que é esse vídeo?' />
                <button>GUARDAR</button>
                <button>LIMPAR</button>
            </form>
        </>
    )
}
export default Formulario;