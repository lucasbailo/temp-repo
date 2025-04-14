import { ctaData } from "../../data/ctaData"

export default function CtaCard() {
    return (
        <>
            <div className="text-center">
				<h2 className="title-style">Fique por dentro!</h2>
			</div>
            <div className="box-cards2">
                {ctaData.map((cta) => (
                    <div className="box-cards_card">
                        <div className="box-cards_card-div">
                            <div className="box-cards_card-text-div">
                                <h2 className="box-cards_card-title">{cta.title}</h2>
                            </div>
                            <div className="">
                                <p className="box-cards_card-text">
                                    {cta.description}
                                </p>
                                <a className="cards-link" href={cta.button.href} target="_blank"><button className="cards-button">{cta.button.action}</button></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}