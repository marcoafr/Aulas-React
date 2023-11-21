import {useNavigate} from "react-router-dom"

export const Login = () => {
    const history = useNavigate();
    
    const handleClick = () => {
        history('pagina-inicial');
    }

    return (
        <div>
            Login
            <button onClick={handleClick}>Página Inicial</button>
        </div>
    )
}