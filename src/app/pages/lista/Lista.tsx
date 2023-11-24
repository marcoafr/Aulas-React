import { useCallback, useState } from "react"

interface IListItem {
    title: string;
    isSelected: boolean;
}


export const Lista = () => {
    const [lista, setLista] = useState<IListItem[]>([
        {title:'Teste 1', isSelected: false}, 
        {title:'Teste 2', isSelected: false}, 
        {title:'Teste 3', isSelected: false}]);

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {

            if (e.currentTarget.value.trim().length === 0) return;

            const value = e.currentTarget.value;

            e.currentTarget.value = ''

            setLista((oldLista) => {
                if (oldLista.some((listItem) => listItem.title === value)) return oldLista;
                return [...oldLista, {
                    title: value,
                    isSelected: false
                }]
            });

        }
    }, []);

    return (
        <div>
            <p>Lista</p>

            <input 
                onKeyDown={handleInputKeyDown}
            />

            <p>{lista.filter((listItem) => listItem.isSelected).length}</p>

            <ul>
                {lista.map((listItem, index) => {
                    return <li key={listItem.title}>
                        <input 
                            type="checkbox" 
                            checked={listItem.isSelected}
                            onChange={() => {
                                setLista(oldLista => {
                                    return oldLista.map(oldListItem => {
                                        const newIsSelected = oldListItem.title === listItem.title ? 
                                            !oldListItem.isSelected
                                            : oldListItem.isSelected
                                        return {
                                            ...oldListItem,
                                            isSelected: newIsSelected
                                        }
                                    });
                                })
                        }}>
                        </input>
                        {listItem.title}
                        </li>;
                })}
            </ul>

        </div>
    )
}