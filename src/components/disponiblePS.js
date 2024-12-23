import Image from "next/image";
import { ContainerGrid } from "./container";

export function DisponiblePlayStore() {
    return(
        <ContainerGrid className={"bg-black"} >
            <div>
                <div className="flex items-center justify-between py-28" >
                    <div>
                        <span className="bg-grayDark3 px-4 py-2 rounded-md text-white font-inter text-xs" >Edição disponível</span>
                        <div className="py-8" >
                            <h2 className="mb-4 font-mohave font-semibold text-4xl text-white" >Disponível na <br/> playstation store</h2>
                            <p className="font-mohave font-semibold text-lg text-[#C0C0CC]" >SEJAM MELHORES. JUNTOS.</p>
                        </div>
                        <Image
                            src={"/lines.svg"}
                            alt="Linhas"
                            width={90}
                            height={16}
                        />
                        <Image
                            src={"/DisponibleImage.png"}
                            alt="Linha"
                            width={391}
                            height={258}
                            className="mt-20"
                        />
                    </div>
                    <div className="flex flex-col justify-between bg-grayDark2 p-4 h-[564px] w-[385px]" >
                        <ul>
                            <Image
                                src={"/DefaultBuy.svg"}
                                alt="Quadrado Padrão"
                                width={36}
                                height={28}
                                className="mb-8"
                            />
                            <h3 className="font-mohave font-bold text-2xl text-white" >EDIÇÃO padrão</h3>
                            <li>
                                <p className="font-robotoflex text-white text-sm" >Marvel’s Spider-Man 2</p>
                            </li>
                        </ul>
                        <div>
                            <span className="font-mohave font-semibold text-white text-2xl" >R$ 349,90</span>
                            <div className="flex items-center gap-4 mt-6">
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
                    </div>
                    <div className="flex flex-col justify-between bg-grayDark2 p-4 h-[564px] w-[385px]" >
                        <ul className="flex flex-col gap-4" >
                            <Image
                                src={"/LineDisponibleDeluxe.svg"}
                                alt="Quadrado Padrão"
                                width={36}
                                height={28}
                                className="mb-8"
                            />
                            <h3 className="font-mohave font-bold text-2xl text-white" >EDIÇÃO DIGITAL DELUXE</h3>
                            <li>
                                <p className="font-robotoflex text-white text-sm" >Marvel’s Spider-Man 2</p>
                            </li>
                            <li>
                                <p className="font-robotoflex text-white text-sm" >Cinco trajes exclusivos para o Peter.</p>
                            </li>
                            <li>
                                <p className="font-robotoflex text-white text-sm" >Cinco trajes exclusivos para o Miles.</p>
                            </li>
                            <li>
                                <p className="font-robotoflex text-white text-sm" >Itens adicionais no Modo Foto</p>
                            </li>
                            <li>
                                <p className="font-robotoflex text-white text-sm" >5 Pontos de Técnica.</p>
                            </li>
                            <li>
                                <p className="font-robotoflex text-white text-sm" >Desbloqueio de trajes e dispositivos</p>
                            </li>
                        </ul>
                        <div>
                            <span className="font-mohave font-semibold text-white text-2xl" >R$ 349,90</span>
                            <div className="flex items-center gap-4 mt-6" >
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
                    </div>
                </div>
                <Image
                    src={"/LineDisponible.svg"}
                    alt="Linha"
                    width={1200}
                    height={16}
                    className="w-full"
                />
            </div>
        </ContainerGrid>
    )
}