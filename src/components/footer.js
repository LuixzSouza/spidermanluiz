import Image from "next/image";
import { ContainerGrid } from "./container";

export function FooterSection() {
    return(
        <ContainerGrid className={"bg-bgBack text-white"} >
            <div className="w-full h-4" >
                <Image
                    src={"/LineFooter.svg"}
                    alt="Linha"
                    width={1216}
                    height={16}
                    className="w-full"
                />
            </div>
            <div className="flex items-center justify-between py-20" >
                <div className="flex flex-col gap-3">
                    <spa>©codeboost2024</spa>
                    <p className="w-[668px]" >
                    Este conteúdo destina-se exclusivamente a fins educacionais e não será utilizado para fins comerciais. Todas as imagens e marcas registradas são de propriedade de seus respectivos detentores de direitos autorais. O uso deste material busca promover a educação e o conhecimento.
                    </p>
                </div>
                <div className="flex items-center gap-3" >
                    <span>Design by</span>
                    <Image
                        src={"/LogoBoostWhite.svg"}
                        alt="Logo"
                        width={121}
                        height={20}
                    />
                </div>
            </div>
        </ContainerGrid>
    )
}