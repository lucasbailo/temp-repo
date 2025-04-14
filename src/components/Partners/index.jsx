import { partnerData } from "../data/partnerData"

export default function Partners() {
    return (
        <section className="flex flex-col gap-15 p-4 justify-center">
            <div className="flex flex-col gap-5 items-center text-(--bg-display-color)">
                <h2 className="uppercase border-b-1 w-fit text-center">Clientes</h2>
                <h2 className='new-title text-center'>
                    Nossos clientes nos fazem GRANDES
                </h2>
            </div>
            <div className="flex overflow-hidden bg-white">
                <div className="flex items-center animate-infinite-scroll bg-white gap-20">
                    {
                        [...partnerData, ...partnerData].map((partner) => (
                            <a href={partner.link} target="_blank">
                                <div className="cursor-pointer hover:shadow-2xl hover:scale-105 transition p-5" >
                                    <img src={partner.image} alt={partner.descricao} className="max-w-[100px]" />
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}