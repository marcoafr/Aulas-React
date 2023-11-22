import React from "react";

interface IInputLoginProps {
    label: string;
    value: string;
    type?: string; // não é obrigatório
    onChange: (newValue: string) => void;
    onPressEnter?: () => void; // não é obrigatório
}

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {
    return (
        <label>
            <span>{props.label}</span>
            <input 
                ref={ref}
                type={props.type}
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
                // ao apertar enter, ele mudará o focus para o useRef (HTML input) password
                onKeyDown={e => e.key === 'Enter' 
                    ? props.onPressEnter && props.onPressEnter() 
                    : undefined} />
        </label>

    )
})