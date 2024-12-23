import Image from "next/image";
import { ContainerGrid } from "./container";

export function AllInfosSection() {
    return(
        <ContainerGrid className={"bg-black"} >
            <Image
                src={"/LineAllInfos.svg"}
                alt="Linha"
                width={1216}
                height={16}
                className="w-full"
            />
            <div className="flex items-center justify-between py-28" >
                <div className="w-[419px]" >
                    <h2 className="text-white text-3xl font-mohave font-semibold mb-8" >INFORMAÇÕES GERAIS</h2>
                    <ul className="flex items-start justify-between text-white text-sm font-robotoflex font-medium mb-14" >
                        <li className="flex flex-col gap-6 w-full" >
                            <p>Plataforma:</p>
                            <p>Lançamento:</p>
                            <p>Distribuidora:</p>
                            <p>Gênero:</p>
                            <p className="mb-6" >Voz:</p>
                            <p>Idiomas da tela:</p>
                        </li>
                        <li className="flex flex-col gap-6 w-full">
                            <p>PS5</p>
                            <p>20/10/2023</p>
                            <p>Sony Interactive Entertainment</p>
                            <p>Ação</p>
                            <p>Espanhol (México), Francês (França),
                            Inglês, Português (Brasil)</p>
                            <p>Espanhol (México), Francês (França),
                            Inglês, Português (Brasil)</p>
                        </li>
                    </ul>
                    <div className="flex items-center justify-between text-white bg-grayDark3 overflow-hidden rounded-md" >
                        <div className="px-3 py-3 h-full bg-grayDark4" >
                            <Image
                                src={"/Iconps5.svg"}
                                alt="Icone"
                                width={22}
                                height={25}
                            />
                        </div>
                        <div className="flex items-center justify-around w-full" >
                            <p className="px-3 py-2 font-robotoflex text-[#C0C0CC]">Lançado 20/10/2023</p>
                            <Image
                                src={"/arrowRight.svg"}
                                alt="Seta direita"
                                width={9}
                                height={9}
                            />
                            <p className="px-3 py-2 font-robotoflex text-[#C0C0CC]">Versão para PS5</p>
                        </div>
                    </div>
                </div>
                <div className="w-[401px] h-[480px] flex flex-col justify-between border-[1.5px] border-white/25 p-8" >
                    <div className="flex items-center text-white mb-6" >
                        <p className="px-3 py-2 bg-grayDark3 font-robotoflex text-[#C0C0CC]">Disponível para</p>
                        <span className="px-3 py-2 bg-grayDark4 font-robotoflex" >PS5</span>
                    </div>
                    <h3 className="font-mohave font-semibold text-4xl text-white mb-4" >Marvel&apos;s <br/> Spider-Man 2</h3>
                    <p className="text-white font-robotoflex text-lg mb-12" >Sony Interactive Entertainment</p>
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
                </div>
                <div className="w-[281px] h-[462px]" >
                    <Image
                        src={"/ImgSpidermanBlack2.png"}
                        alt="Homi aranha"
                        width={381}
                        height={562}
                    />
                </div>
            </div>
        </ContainerGrid>
    )
}