import { createContext, useState } from "react"

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode;
}

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {
    const [nome, setNome] = useState('');
    return (
        <UsuarioLogadoContext.Provider value={{nomeDoUsuario: 'Marco'}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}