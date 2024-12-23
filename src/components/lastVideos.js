import Image from "next/image";
import { ContainerGrid } from "./container";

export function LastVideosSection() {
    return(
        <ContainerGrid className={"py-14 bg-black"} >
            <h2 className="font-mohave font-semibold text-white text-2xl mb-6" >Últimos vídeos</h2>
            <ul className="flex items-center gap-7" >
                <li>
                    <Image
                        src={"/VideoImg1.png"}
                        alt="Homi Aranha"
                        width={388}
                        height={216}
                    />
                    <span className="font-robotoflex font-medium text-sm text-white mt-4" >Gameplay Reveal</span>
                </li>
                <li>
                    <Image
                        src={"/VideoImg2.png"}
                        alt="Homi Aranha"
                        width={388}
                        height={216}
                    />
                    <span className="font-robotoflex font-medium text-sm text-white mt-4" >Gameplay Reveal</span>
                </li>
                <li>
                    <Image
                        src={"/VideoImg3.png"}
                        alt="Homi Aranha"
                        width={388}
                        height={216}
                    />
                    <span className="font-robotoflex font-medium text-sm text-white mt-4" >Gameplay Reveal</span>
                </li>
                <li>
                    <Image
                        src={"/VideoImg4.png"}
                        alt="Homi Aranha"
                        width={388}
                        height={216}
                    />
                    <span className="font-robotoflex font-medium text-sm text-white mt-4" >Gameplay Reveal</span>
                </li>
            </ul>
        </ContainerGrid>
    )
}