import { useState } from 'react';
import './App.css';
import LoginForm from './components/login/login.component';
import RegistroForm from './components/registrar/registro.component';

function App() {
  const [isLogin, setIsLogin] = useState(true)
  
  const clickButton = () => {
    setIsLogin(!isLogin)
  }

  return (
    <>
    { isLogin ? <LoginForm clickButton={ clickButton } /> : <RegistroForm clickButton={ clickButton } />}
    </>
)}

export default App;
    