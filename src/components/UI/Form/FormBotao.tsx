interface FormBotaoProps {
    name: string
    title: string
    css?: string
}

export default function FormBotao (props: FormBotaoProps) {
    return(
        <>
            <button
                className={`botao-login ${props.css}`} 
                name={props.name}
                type="submit"
            >{props.title}</button>
        </>
    )
}