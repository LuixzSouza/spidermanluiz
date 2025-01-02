import Image from "next/image";
import { ContainerGrid } from "./container";

const videos = [
    {
        capa: '/VideoImg1.png',
        gameplay: 'Gameplay Reveal',
    },
    {
        capa: '/VideoImg2.png',
        gameplay: 'Gameplay Reveal',
    },
    {
        capa: '/VideoImg3.png',
        gameplay: 'Gameplay Reveal',
    },
    {
        capa: '/VideoImg4.png',
        gameplay: 'Gameplay Reveal',
    },
]

export function LastVideosSection() {
    return(
        <ContainerGrid className={"flex flex-col items-center py-14 bg-black @tablet:items-start"} >
            <h2 className="font-mohave font-semibold text-white text-2xl mb-6" >Últimos vídeos</h2>
            <ul className="flex items-center gap-7" >
                {videos.map(({capa, gameplay}, index) => (
                    <li className={`flex flex-col ${index < 2 ? 'hidden md:flex' : ''}`} key={index} >
                        <Image
                            src={capa}
                            alt="Homi Aranha"
                            width={388}
                            height={216}
                        />
                        <span className="font-robotoflex font-medium text-sm text-white mt-4" >{gameplay}</span>
                    </li>
                ))}
            </ul>
        </ContainerGrid>
    )
}