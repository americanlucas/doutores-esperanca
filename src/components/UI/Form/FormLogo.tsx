import Image from "next/image";
import logo from '../../../../public/logo-Doutores.png';

export default function FormLogo () {
    return(
        <Image className='flex mx-auto' src={logo} alt="Logo" width={120} height={120}></Image>
    )
}