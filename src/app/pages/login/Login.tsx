import { useEffect, useState } from "react";

export const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    // Executado somente quando o componente for executado pela primeira vez (e não toda vez que é renderizado), caso o array de dependências seja vazio!
    // UseEffect é perfeito para chamadas de APIs, por exemplo
    useEffect(() => {
        if(window.confirm("Você gosta de tecnologia?")) {
            console.log("O usuário gosta de tecnologia");
        } else {
            console.log("O usuário NÃO gosta de tecnologia")
        }
    }, []);

    // Pode por mais de um useEffect (quantos quiser)
    // O Array de Dependências são os 'watchers' que funcionam como trigger para o useEffect
    // Por exemplo, sempre que email ou password for alterado, vai ser executado
    useEffect(() => {
        console.log(email);
        console.log(password);
    }, [email, password]);

    // Para chamada de API com paginação, é bom incluir o parâmetro de página no array de dependências,
    // assim, sempre que a página for alterada, irá chamar a API com uma nova página
    // useEffect(() => {
    //    chamadaDeApi(page)
    // }, [page]);

    const handleEntrar = () => {

    }

    return (
        <div>
            <form>

                <label>
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)} />
                </label>

                <label>
                    <span>Senha</span>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>

                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>

            </form>
        </div>
    )
}