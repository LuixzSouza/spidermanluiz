import Image from "next/image";
import { ContainerGrid } from "./container";

export function SlidesSection() {
    return(
        <ContainerGrid className={"bg-black pb-28"} > 
            <div className="flex flex-col items-center justify-center text-center mb-16" >
                <span className="py-2 px-4 bg-[#182026] text-white font-inter font-medium" >GAMEPLAY</span>
                <h2 className="mt-6 mb-2 font-mohave font-semibold text-white text-4xl" >VIVA A EXPERIÊNCIA DE PODER JOGAR COM DOIS SPIDERS</h2>
                <p className="font-robotoflex text-white text-base" >Alterne rapidamente entre os dois Spiders para maximizar as novas habilidades.</p>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center" >
                    <div>
                        <Image
                            src={"/slide1.png"}
                            alt="Slide"
                            width={800}
                            height={450}
                        />
                        <h5 className=" mt-6 text-left text-white text-lg font-robotoflex" >Primeiro encontro com o Venom</h5>
                    </div>
                </div>
                <div className="hidden" >
                    <Image
                        src={"/slide2.png"}
                        alt="Slide"
                        width={800}
                        height={450}
                    />
                    <h5>Movimentos rápitos</h5>
                </div>
                <div className="hidden">
                    <Image
                        src={"/slide3.png"}
                        alt="Slide"
                        width={800}
                        height={450}
                    />
                    <h5>Ampliando sua força</h5>
                </div>
            </div>
        </ContainerGrid>
    )
}