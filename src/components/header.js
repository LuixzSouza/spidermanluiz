import Image from "next/image";
import { ContainerGrid } from "./container";
import Link from "next/link";

const HeaderLink = [
    {
        Content: 'Visão geral',
        url: '/#'
    },
    {
        Content: 'Edições',
        url: '/#'
    },
    {
        Content: 'Características',
        url: '/#'
    },
    {
        Content: 'Gameplay',
        url: '/#'
    },
]

export function HeaderSection() {
    return(
        <ContainerGrid className={"flex items-center justify-between bg-bgBack py-4"} >
            <Image
                src={"/LogoSpiderMan.png"}
                alt="Logo"
                width={165}
                height={32}
            />
            <ul className="hidden items-center gap-12 text-white font-robotoflex font-medium @desktop:flex">
                {HeaderLink.map((item, index) => (
                    <li key={index} >
                        <Link href={item.url}>
                            {item.Content}
                        </Link>
                    </li>
                ))}
            </ul>
            <button className="p-3 border-2 border-gray-500 rounded-full text-white font-sans" >
                Adicionar ao carrinho
            </button>
        </ContainerGrid>
    )
}