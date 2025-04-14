import { Link } from "react-router-dom";
import { serviceData } from "../../data/servicesData";

export default function ServiceCards() {
    return (
        <>
            <section className="standard-padding flex flex-col gap-15 text-(--bg-display-color) items-center justify-center">
                <div className="flex flex-col gap-5 text-center items-center">
                    <h2 className="uppercase border-b-1 w-fit">Serviços</h2>
                    <h2 className="new-title">Nossos Serviços</h2>
                </div>
                <div className="box-cards-new">
                    {serviceData.map((main) => (
                        <Link className="box-cards_card-new cursor-pointer hover:scale-102 transition" to={`servicos${main.button.href}`}>
                            <div className="box-cards_card-div-new hover:animate-pulse transition">
                                <div className="box-cards_card-icon">
                                    {<main.icon size={42} />}
                                </div>
                                <div className="box-cards_card-text-div-new">
                                    <h2 className="font-bold text-xs">{main.title}</h2>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    )
}