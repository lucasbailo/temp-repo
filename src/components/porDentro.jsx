import { ctaData } from "./data/ctaData";


export default function PorDentro() {
    return (
        <>

            <div className="min-h-[70vh] bg-(--bg-pattern) relative overflow-hidden standard-padding flex flex-col justify-center items-center py-20 gap-12">
                <div className="absolute inset-0 z-0 radial-gradient"></div>
                <div className="absolute inset-0 bg-[url('/src/assets/pattern.svg')] opacity-10 bg-repeat"></div>
                <div className="text-center">
                    <h2 className="new-title text-gray-200">Fique por dentro!</h2>
                </div>
                <div className="flex flex-col flex-wrap justify-center gap-10 z-50 text-gray-200">
                    {ctaData.map((cta) => (
                        <div className="flex">
                            <div className="box-cards_card-div gap-3">
                                <div className="box-cards_card-text-div">
                                    <h2 className="text-2xl font-bold font-(family-name:--font-title)">{cta.title}</h2>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className="text-white w-[80%]">
                                        {cta.description}
                                    </p>
                                    <a className="cards-link" href={cta.button.href} target="_blank">
                                        <button className="bg-transparent text-[#CCCCCC] border border-[#CCCCCC] hover:bg-[#CCCCCC] transition hover:text-black md:py-2 md:px-8 py-2 px-4 rounded-full cursor-pointer">
                                            {cta.button.action} →
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}