import Image from "next/image";
import { ContainerGrid } from "./container";

// Array de características do jogo
const features = [
    {
        icon: "/Icon4K.svg",
        title: "Visual incrível",
        description: "Explore novos cenários deslumbrantes como os bairros do Queens e do Brooklyn nessa Nova York da Marvel que ganha vida de maneira espetacular.",
    },
    {
        icon: "/IconGatilhos.svg",
        title: "Gatilhos adaptáveis",
        description: "Domine movimentos acrobáticos, execute combos eletrizantes e vivencie toda a empolgação estonteante de se balançar com as teias por meio dos gatilhos adaptáveis do controle sem fio.",
    },
    {
        isImage: true, // Flag para identificar a imagem especial
        image: "/spidermanblackbuy.png",
        imageWidth: 678,
        imageHeight: 482,
    },
    {
        icon: "/Icon3D.svg",
        title: "Tempest 3D AudioTech",
        description: "Experimente toda a imersão na Nova York da Marvel com a ambientação sonora única que o áudio espacial em 3D proporciona. Identifique os sons de teias, poderes bioelétricos e muito mais.",
    },
    {
        icon: "/IconTatil.svg",
        title: "Resposta tátil",
        description: "Sinta o poder do Spider-Man! As vibrações adaptáveis do controle sem fio DualSense™ colocam as habilidades de simbionte do Peter e a bioeletricidade do Miles na ponta dos seus dedos.",
    },
    {
        icon: "/Iconssd.svg",
        title: "SSD de velocidade ultra-alta",
        description: "Sinta o poder do console PS5 com tempos de carregamento extremamente rápidos que permitem a você trocar de personagem quase instantaneamente nas diferentes partes da cidade.",
    },
];

export function CharactersSection() {
    return (
        <ContainerGrid className="bg-black text-white py-28">
            <h2 className="mb-10 font-mohave font-semibold text-5xl text-white">
                características de <br /> um jogo único
            </h2>
            <ul className="grid grid-cols-1 gap-8 @tablet:grid-cols-2 @desktop:grid-cols-3">
                {features.map((feature, index) => (
                    feature.isImage ? (
                        // Renderiza a imagem especial
                        <li
                            key={index}
                            className="relative border-[1.5px] border-white/90 w-full h-[300px] overflow-visible @desktop:max-w-[383px]"
                        >
                            <Image
                                src={feature.image}
                                alt=""
                                width={feature.imageWidth}
                                height={feature.imageHeight}
                                className="absolute left-0 bottom-0 w-[678px] h-auto"
                            />
                        </li>
                    ) : (
                        // Renderiza os itens normais
                        <li
                            key={index}
                            className="p-8 border-[1.5px] border-white/90 w-full @desktop:max-w-[383px] h-full @desktop:max-h-[300px]"
                        >
                            <Image
                                src={feature.icon}
                                alt=""
                                width={76}
                                height={76}
                            />
                            <h4 className="my-4 font-mohave font-semibold text-white text-lg">
                                {feature.title}
                            </h4>
                            <p className="font-robotoflex text-sm text-white">
                                {feature.description}
                            </p>
                        </li>
                    )
                ))}
            </ul>
        </ContainerGrid>
    );
}
