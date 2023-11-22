import { useRef, useCallback, useMemo, useEffect, useState } from "react";

export const Login = () => {
    // HOOK: useRef (armazenar elementos HTML dentro de uma variável e este valor não será alterado conforme o componente é alterado)
    // Pode guardar um valor que pode ser alterado posteriormente caso a gente queira, senão, fica armazenado independente das renderizações
    // Por exemplo, colocar o focus dentro de um input ao atualizar uma página
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputButtonRef = useRef<HTMLButtonElement>(null);

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

        // Ao inicializar, o input do email começa selecionado
        inputEmailRef.current?.focus()
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
                    <input 
                        ref={inputEmailRef}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        // ao apertar enter, ele mudará o focus para o useRef (HTML input) password
                        onKeyDown={e => e.key === 'Enter' ? inputPasswordRef.current?.focus() : undefined} />
                </label>

                <label>
                    <span>Senha</span>
                    <input 
                        ref={inputPasswordRef}
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        // ao apertar enter, ele ira dar um 'click' no inputEmailRef
                        onKeyDown={e => e.key === 'Enter' ? inputButtonRef.current?.click() : undefined} />
                </label>

                <button 
                    ref={inputButtonRef}
                    type="button" 
                    onClick={handleEntrar}>
                    Entrar
                </button>

            </form>
        </div>
    )
}