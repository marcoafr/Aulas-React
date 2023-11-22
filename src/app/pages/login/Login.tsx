import { useCallback, useMemo, useEffect, useState } from "react";

export const Login = () => {
    // HOOK: useState
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    // HOOK: useEffect
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

    // HOOK: useMemo
    // Utilizado para realizar cálculos mais complexos e deixar armazenado na memória (armazenado em uma variável)
    // para que o cálculo não seja realizado várias vezes 
    // Array de Dependências (sempre que algum elemento dele for alterado, função do useMemo será executada)
    // Sempre deve-se informar no array de dependências, a variável que está sendo usada na função
    const emailLength = useMemo(() => {
        return email.length * 1000;
    }, [email.length]);

    // HOOK: useCallback (armazenar uma função em memória / em uma variável)
    // é melhor usar ela do que uma função diretamente no controlador, pois
    // assim, ela não vai ficar sendo criada toda vez que o componente rerenderizar
    // ela é criada sempre que há alteração em algum elemento do Array de dependências, e pode ser chamada em diversos contextos
    const handleEntrar = useCallback(() => {
        console.log(email);
        console.log(password); 
    }, [email, password])


    return (
        <div>
            <form>
                <p>Quantidade de caracteres no email: {emailLength}</p>

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