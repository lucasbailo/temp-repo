import { contactData } from "./data/contactData";

export default function CardsContato() {
    return (
        <>
            <div className="flex flex-col gap-9 text-center standard-padding items-center text-(--bg-display-color) py-20">
                <h2 className="uppercase border-b-1 w-fit text-center">Entre em contato conosco</h2>
                <h1 className="new-title">Estamos aqui para ajudar</h1>
                <h3 className="text-lg md:w-1/2">Entre em contato com nossa equipe de especialistas para soluções personalizadas e orientações detalhadas sobre como podemos apoiar seu negócio de forma eficiente.</h3>
                <div className="box-cards2">
                    {contactData.map((contact) => (
                        <div className="box-cards_card">
                            <div className="box-cards_card-div">
                                <div className="box-cards_card-icon">
                                    {<contact.icon size={30} />}
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-(--bg-display-color) font-bold">{contact.title}</h2>
                                    <div className="flex flex-col gap-2 items-center">
                                        <p className="">
                                            {contact.description}
                                        </p>
                                        <a className="cards-link" href={contact.button.href} target="_blank">
                                            <button className="bg-transparent border border-(--bg-display-color) hover:bg-[#CCCCCC] hover:border-[#CCCCCC] transition md:py-2 py-1 md:px-8 px-2 rounded-full cursor-pointer mt-2">
                                                {contact.button.action} →
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}