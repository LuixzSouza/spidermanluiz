import Image from "next/image";
import { ContainerGrid } from "./container";
import Link from "next/link";

export function HeaderSection() {
    return(
        <ContainerGrid className={"flex items-center justify-between bg-bgBack py-4"} >
            <Image
                src={"/LogoSpiderMan.png"}
                alt="Logo"
                width={165}
                height={32}
            />
            <ul className="flex items-center gap-12 text-white font-robotoflex font-medium">
                <li>
                    <Link href={"#"}>
                        Visão geral
                    </Link>
                </li>
                <li>
                    <Link href={"#"}>
                        Edições
                    </Link>
                </li>
                <li>
                    <Link href={"#"}>
                        Características
                    </Link>
                </li>
                <li>
                    <Link href={"#"}>
                        Gameplay
                    </Link>
                </li>
            </ul>
            <button className="p-3 border-2 border-gray-500 rounded-full text-white font-sans" >
                Adicionar ao carrinho
            </button>
        </ContainerGrid>
    )
}