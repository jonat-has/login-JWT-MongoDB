import './login.style.css'

export default function LoginForm( props ) {

    const { clickButton } = props
    return (
        <>
            <form action="post" className='formContainer'>
                <div className="formInput">
                <span>E-mail:</span>
                <input type="email" placeholder="Digite seu email" required/>
                <span>Senha:</span>
                <input type="password" placeholder="Digite sua senha" required/>
                </div>
                <div className="formButton">
                <input type="submit" value="login" />
                <input type="button" value="SignIn" onClick={ clickButton } />
                </div>
            </form>
        </>
    )
}