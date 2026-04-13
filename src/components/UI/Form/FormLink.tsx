import Link from "next/link"

interface FormLinkProps {
    href: string
    title: string
}

export default function FormLink (props: FormLinkProps) {
    return (
        <>
            <Link className="hover:underline hover:text-blue-500 transition-all duration-300" href={props.href}>{props.title}</Link>
        </>
    )
}