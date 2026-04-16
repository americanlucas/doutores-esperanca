'use client';

import { formatters, validadores, InputType, maxLengthByType, placeholderByType } from '@/utils/inputFormatters';
import { useState } from 'react';
import { Input } from '../Styled-Components/input';

interface FormInputProps {
    label: string
    name: string
    type?: InputType
    placeholder?: string
    required?: boolean
    maxLenght?: number
    className?: string
    defaultValue?: string
    onValidationChange?: (isValid: boolean) => void
}

export default function FormInput (props: FormInputProps) {
    const [isValid, setIsValid] = useState(true);
    const type = props.type || 'text';
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        
        // Aplicar formatação se existir
        if (formatters[type as keyof typeof formatters]) {
            value = formatters[type as keyof typeof formatters](value);
        }
        
        e.target.value = value;
        
        // Validar e notificar
        if (type !== 'text' && type !== 'date' && type !== 'password') {
            const validator = validadores[type as keyof typeof validadores];
            if (validator && value.length > 0) {
                const valid = validator(value);
                setIsValid(valid);
                props.onValidationChange?.(valid);
            }
        }
    };
    
    const maxLength = props.maxLenght || maxLengthByType[type];
    const placeholder = props.placeholder || placeholderByType[type];
    
    const inputType = type === 'data' || type === 'cep' || type === 'cpf' || type === 'telefone' || type === 'nome' || type === "password" ? 'text' : type;
    
    return(
        <div className={`flex flex-col ${props.className ? props.className : ""}`}>
            <label htmlFor={props.name}>{props.label}</label>
            <Input
                className={`${!isValid ? 'border-red-500 border' : ''}`}
                label={inputType}
                name={props.name}
                id={props.name}
                placeholder={placeholder}
                required={props.required}
                maxLength={maxLength}
                onChange={handleChange}
                defaultValue={props.defaultValue}
            />
        </div>
    )
}