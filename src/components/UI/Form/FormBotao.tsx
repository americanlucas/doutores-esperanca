import { Button } from "../Styled-Components/button"

interface FormBotaoProps {
    name: string
    title: string
    css?: string
    disabled?: boolean
}

export default function FormBotao (props: FormBotaoProps) {
    return(
        <>
        <Button
            className={`botao-login text-md ${props.css}`}
            name={props.name}
            type="submit"
            size="lg"
            disabled={props.disabled}
        >{props.title}</Button>
        </>
    )
}