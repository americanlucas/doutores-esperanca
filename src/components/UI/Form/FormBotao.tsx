import { Button } from "../Styled-Components/button"

interface FormBotaoProps {
    name: string
    title: string
    css?: string
}

export default function FormBotao (props: FormBotaoProps) {
    return(
        <>
        <Button
            className={`botao-login text-md ${props.css}`}
            name={props.name}
            type="submit"
            size="lg"
        >{props.title}</Button>
        </>
    )
}