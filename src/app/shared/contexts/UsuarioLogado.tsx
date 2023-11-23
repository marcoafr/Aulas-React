import { createContext, useCallback, useEffect, useState } from "react"

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
    logout: () => void;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode;
}

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {
    const [nome, setNome] = useState('');

    // Em 2 segundos, altera-se o nome de '' para 'Marco'
    useEffect(() => {
        setTimeout(() => {
            setNome('Marco');
        }, 2000)
    });

    const handleLogout = useCallback(()=>{
        console.log("Lougout executado!")
    },[])
    return (
        <UsuarioLogadoContext.Provider value={{nomeDoUsuario: nome, logout: handleLogout}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}