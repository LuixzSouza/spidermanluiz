import Image from "next/image";
import { ContainerGrid } from "./container";

export function HomeSection() {
    return(
        <ContainerGrid className={"py-32 bg-bgHero bg-cover bg-no-repeat bg-center"} >
            <div className="flex items-center text-white" >
                <p className="px-3 py-2 bg-grayDark3 font-robotoflex text-[#C0C0CC]">Disponível para</p>
                <span className="px-3 py-2 bg-grayDark4 font-robotoflex" >PS5</span>
            </div>
            <h1 className="font-mohave font-bold text-white text-6xl mt-6 mb-2" >Marvel&apos;s Spider-Man 2</h1>
            <p className="w-[642px] font-robotoflex text-lg text-white mb-12" >Os Spiders Peter Parker e Miles Morales estão de volta em mais uma aventura eletrizante da famosa franquia Marvel&apos;s Spider-Man para PS5.</p>
            <span className="font-mohave font-semibold text-white text-4xl" >R$ 349,90</span>
            <div className="flex items-center gap-6 mt-6" >
                <button className="py-4 px-10 bg-orange3 text-white text-base font-robotoflex font-medium rounded-full" >Adicionar ao carrinho</button>
                <div className="border-2 border-[#2F2F3B] rounded-full w-14 h-14 flex items-center justify-center" >
                    <Image
                        src={"/HeartIcon.svg"}
                        alt="Icon Coração"
                        width={18}
                        height={16}
                    />
                </div>
            </div>
            <div className="flex flex-col mt-20 gap-4" >
                <div className="flex items-center gap-4 text-white font-robotoflex font-medium text-base" >
                    <Image
                        src={"/Iconps5.svg"}
                        alt="Icone Play5"
                        width={24}
                        height={24}
                    />
                    <p>Lançado 20/10/2023</p>
                    <div className="w-1 h-1 bg-grayLight1 rounded-full" ></div>
                    <p>Versão para PS5</p>
                </div>
                <div className="flex items-center gap-4 text-white font-robotoflex font-medium text-base">
                    <Image
                        src={"/OnePlayerIcon.svg"}
                        alt="Um player"
                        width={24}
                        height={24}
                    />
                    <p>1 jogador</p>
                    <div className="w-1 h-1 bg-grayLight1 rounded-full" ></div>
                    <p>Compatível com função de vibração e efeito gatilho </p>
                </div>
                <div className="flex items-center gap-4 text-white font-robotoflex font-medium text-base">
                    <Image
                        src={"/CompatibleIcon.svg"}
                        alt="Compativel"
                        width={24}
                        height={24}
                    />
                    <p>Compatível com a ajuda do jogo</p>
                </div>
            </div>
        </ContainerGrid>
    )
}