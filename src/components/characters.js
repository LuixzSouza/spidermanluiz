import Image from "next/image";
import { ContainerGrid } from "./container";

export function CharactersSection() {
    return(
        <ContainerGrid className={"bg-black text-white py-28"} >
            <h2 className="mb-10 font-mohave font-semibold text-5xl text-white" >características de <br/> um jogo único</h2>
            <ul className="grid grid-cols-3 gap-8" >
                <li className="p-8 border-[1.5px] border-white/90 w-full max-w-[383px] h-full max-h-[300px]" >
                    <Image
                        src={"/Icon4K.svg"}
                        alt=""
                        width={76}
                        height={76}
                    />
                    <h4 className="my-4 font-mohave font-semibold text-white text-lg" >Visual incrível</h4>
                    <p className="font-robotoflex text-sm  text-white" >Explore novos cenários deslumbrantes como os bairros do Queens e do Brooklyn nessa Nova York da Marvel que ganha vida de maneira espetacular.
                    </p>
                </li>
                <li className="p-8 border-[1.5px] border-white/90 w-full max-w-[383px] h-full max-h-[300px]" >
                    <Image
                        src={"/IconGatilhos.svg"}
                        alt=""
                        width={76}
                        height={76}
                    />
                    <h4 className="my-4 font-mohave font-semibold text-white text-lg" >Gatilhos adaptáveist</h4>
                    <p className="font-robotoflex text-sm  text-white" >Domine movimentos acrobáticos, execute combos eletrizantes e vivencie toda a empolgação estonteante de se balançar com as teias por meio dos gatilhos adaptáveis do controle sem fio.</p>
                </li>
                <li className="relative border-[1.5px] border-white/90 w-[383px] h-[300px] overflow-visible">
                    <Image
                        src={"/spidermanblackbuy.png"}
                        alt=""
                        width={678}
                        height={482}
                        className="absolute left-0 bottom-0 w-[678px] h-auto"
                    />
                </li>
                <li className="p-8 border-[1.5px] border-white/90 w-full max-w-[383px] h-full max-h-[300px]" >
                    <Image
                        src={"/Icon3D.svg"}
                        alt=""
                        width={76}
                        height={76}
                    />
                    <h4 className="my-4 font-mohave font-semibold text-white text-lg" >Tempest 3D AudioTech</h4>
                    <p className="font-robotoflex text-sm  text-white" >Experimente toda a imersão na Nova York da Marvel com a ambientação sonora única que o áudio espacial em 3D proporciona. Identifique os sons de teias, poderes bioelétricos e muito mais.</p>
                </li>
                <li className="p-8 border-[1.5px] border-white/90 w-full max-w-[383px] h-full max-h-[300px]" >
                    <Image
                        src={"/IconTatil.svg"}
                        alt=""
                        width={76}
                        height={76}
                    />
                    <h4 className="my-4 font-mohave font-semibold text-white text-lg" >Resposta tátil</h4>
                    <p className="font-robotoflex text-sm  text-white" >Sinta o poder do Spider-Man! As vibrações adaptáveis do controle sem fio DualSense™ colocam as habilidades de simbionte do Peter e a bioeletricidade do Miles na ponta dos seus dedos.</p>
                </li>
                <li className="p-8 border-[1.5px] border-white/90 w-full max-w-[383px] h-full max-h-[300px]" >
                    <Image
                        src={"/Iconssd.svg"}
                        alt=""
                        width={76}
                        height={76}
                    />
                    <h4 className="my-4 font-mohave font-semibold text-white text-lg" >SSD de velocidade ultra-alta</h4>
                    <p className="font-robotoflex text-sm  text-white" >Sinta o poder do console PS5 com tempos de carregamento extremamente rápidos que permitem a você trocar de personagem quase instantaneamente nas diferentes partes da cidade.</p>
                </li>
                
            </ul>
        </ContainerGrid>
    )
}