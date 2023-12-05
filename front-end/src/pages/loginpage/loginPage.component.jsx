import { useState } from "react"
import LoginForm from "../../components/login/login.component"
import RegistroForm from "../../components/registrar/registro.component"
import './loginPage.style.css'

export default function LoginPage() {       
    const [isLogin, setIsLogin] = useState(true)
    
    const clickButton = () => {
        setIsLogin(!isLogin)
    }
    return (
        <main className="pageContainer">
        { isLogin ? <LoginForm clickButton={ clickButton } /> : <RegistroForm clickButton={ clickButton } />}
        </main>
)}
