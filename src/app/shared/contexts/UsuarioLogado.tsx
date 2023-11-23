import { createContext, useCallback, useState } from "react"

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
    const handleLogout = useCallback(()=>{
        console.log("Lougout executado!")
    },[])
    return (
        <UsuarioLogadoContext.Provider value={{nomeDoUsuario: 'Teste', logout: handleLogout}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}