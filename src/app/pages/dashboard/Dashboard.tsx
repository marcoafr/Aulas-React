import { useRef } from 'react';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
    // HOOK: useRef - outra aplicação (Armazenar valor em uma variável, sem alterar a renderização do valor)
    // Função: armazenar um valor no componente, quer alterar esse valor com alguma interação do usuário, mas não quer fazer um fluxo de rerendering desse componente
    // pode-se usar um useRef para isso
    const counterRef = useRef({counter:0});


    return (
        <div>
            <p>Dashboard</p>

            <p>Contador: {counterRef.current.counter}</p>

            <button 
                // está alterando o valor do counterRef, mas não altera visualmente no contador (no rerender)
                onClick={() => counterRef.current.counter++}>
                    Somar
            </button>
            <button
                // Vai apresentar o valor atual do counterRef, pois ele está sendo alterado, mas não renderizado
                onClick={() => console.log(counterRef.current.counter)}>
                    Mostrar valor no console
            </button>

            <Link to="/entrar">Login</Link>
        </div>
    )
}