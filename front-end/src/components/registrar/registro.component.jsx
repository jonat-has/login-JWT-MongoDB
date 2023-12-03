import './registro.style.css'

export default function RegistroForm( props ) {

    const { clickButton } = props
    return(
        <form action="post" className='registroContainer'>
        <div className="registroInput">
        <span>Nome:</span>
        <input type="text" placeholder="Digite seu nome" required/>
        <span>E-mail:</span>
        <input type="email" placeholder="Digite seu email" required/>
        <span>E-mail:</span>
        <input type="email" placeholder="Confirme seu email" required/>
        <span>Senha:</span>
        <input type="password" placeholder="Digite sua senha" required/>
        </div>
        <div className="formButton">
        <input type="submit" value="Registrar"/>
        <input type="button" value="Voltar" onClick={ clickButton } />
        </div>
    </form>
    )
}