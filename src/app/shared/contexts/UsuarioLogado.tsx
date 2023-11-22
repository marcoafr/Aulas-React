import { useState } from "react"

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode;
}
export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {
    const [nome, setNome] = useState('');
    return (
        <div>

        </div>
    )
}