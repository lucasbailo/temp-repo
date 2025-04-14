import { serviceData } from "../../data/servicesData";

export default function MainCard() {
    return (
        <><section className="standard-padding flex flex-col gap-5">
            <div className="text-center">
                <h2 className="title-style">Soluções Estratégicas em Tributação e Compliance</h2>
            </div>
            <div className="box-cards">
                {serviceData.map((main) => (
                    <div className="box-cards_card">
                        <div className="box-cards_card-div">
                            <div className="box-cards_card-icon">
                                {<main.icon size={30} />}
                            </div>
                            <div className="box-cards_card-text-div">
                                <h2 className="box-cards_card-title">{main.title}</h2>
                                <p className="box-cards_card-text">
                                    {main.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}