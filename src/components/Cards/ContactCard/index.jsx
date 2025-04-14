import { contactData } from "../../data/contactData"

export default function ContactCard() {
    return (
        <>
            <div className="flex flex-col gap-4 text-center standard-padding">
                <h2 className="text-(--title-color) uppercase text-2xl">Entre em contato conosco</h2>
                <h1 className="new-title">Estamos aqui para ajudar</h1>
                <h3 className="text-(--text-color-gray)">Entre em contato com nossa equipe de especialistas para soluções personalizadas e orientações detalhadas sobre como podemos apoiar seu negócio de forma eficiente.</h3>
            </div>
            <div className="box-cards2 mb-6">
                {contactData.map((contact) => (
                    <div className="box-cards_card">
                        <div className="box-cards_card-div">
                            <div className="box-cards_card-icon">
                                {<contact.icon size={30} />}
                            </div>
                            <div className="box-cards_card-text-div">
                                <h2 className="box-cards_card-title">{contact.title}</h2>
                                <div className="">
                                    <p className="box-cards_card-text">
                                        {contact.description}
                                    </p>
                                    <a className="cards-link" href={contact.button.href} target="_blank">
                                        <button className="cards-button">
                                            {contact.button.action}
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}