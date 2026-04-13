"use client";

import Image from "next/image";
import logo from "../../../../public/logo-Doutores.png";

interface FormLogoProps {
	className?: string;
}

export default function FormLogo(props: FormLogoProps) {
	const handleClick = () => {
		window.location.href = "/";
	};

	return (
		<Image
			className={`flex mx-auto cursor-pointer ${props.className || ""}`}
			src={logo}
			alt="Logo"
			width={120}
			height={120}
			onClick={handleClick}
		></Image>
	);
}
