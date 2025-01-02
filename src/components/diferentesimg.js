import Image from "next/image";
import { ContainerGrid } from "./container";

export function DiferentsImages() {
    return(
        <ContainerGrid className={"flex flex-col items-center justify-center text-center bg-Alterimg1 bg-cover bg-center py-64"} >
            <h2 className="font-mohave font-semibold text-white text-5xl mb-3" >O VILÃO MAIS PODEROSO ESTÁ À SOLTA</h2>
            <p className="font-robotoflex text-white text-lg" >Domine as habilidades dos dois Spiders para derrotá-lo em um combate épico.</p>
            <Image
                src={"/scroll_pointer.svg"}
                alt="Icon Scroll"
                width={32}
                height={40}
                className="mt-20"
            />
        </ContainerGrid>
    )
}