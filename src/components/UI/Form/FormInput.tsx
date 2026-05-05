'use client';
import { HTMLInputTypeAttribute } from 'react';
import { Input } from '../Styled-Components/input';

interface FormInputProps {
    label: string
    name: string
    type?: HTMLInputTypeAttribute
    placeholder?: string
    maxLength?: number
    className?: string
    defaultValue?: string
    required?: boolean
    pattern?: string
    errors?: string[]
}

export default function FormInput (props: FormInputProps) {

    return(
        <div className={`flex flex-col ${props.className ? props.className : ""}`}>
            <label htmlFor={props.name}>{props.label}</label>
            <Input
                type={props.type}
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                maxLength={props.maxLength}
                defaultValue={props.defaultValue}
            />
        </div>
    )
}