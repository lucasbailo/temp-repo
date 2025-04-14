import { serviceData } from "../../components/data/servicesData"
import { Link, useParams } from "react-router-dom";

export default function Servicos() {

    const { id } = useParams();

    const currentItem = serviceData.find((item) => item.id === id) || serviceData[0];

    return (
        <main className="flex flex-col bg-gray-100 font-(--font-main) items-center pt-30">
            <h2 className="text-center uppercase w-fit text-3xl font-bold pb-5">SERVIÇOS</h2>
            <ul className="flex md:flex-row flex-col flex-wrap md:justify-around items-center text-sm gap-5 uppercase w-full pt-5 pb-3">
                {serviceData.map((item) => (
                    <li key={item.id} className="hover:scale-102 transition">
                        <Link
                            to={`/servicos/${item.id}`}
                            className={`hover:text-(--title-color) ${item.id === id ? "font-bold border-b-3 pb-3" : ""}`}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex flex-col bg-gray-200 md:px-25 md:py-25 standard-padding gap-4 py-20">
                <div className="flex flex-row items-center">
                    <div className="flex md:flex-row flex-col gap-8">
                        <img
                            className="md:max-w-[600px] md:max-h-[300px] max-w-[300px] max-h-[150px] hover:scale-101 transition rounded-2xl shadow-[0px_0px_16px_5px_rgba(0,_0,_0,_0.1)]"
                            src={currentItem.image}
                            alt={currentItem.title}
                        />
                        <div className="flex flex-col gap-4 max-w-xl">
                            <h2 className="text-xl font-bold">{currentItem.title}</h2>
                            <p className="text-justify">{currentItem.description}</p>
                            <Link
                                to={currentItem.button.href}
                                className="text-blue-500 hover:underline font-semibold transition"
                            >
                                {currentItem.button.action}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-justify">{currentItem.content_one}</p>
                    <p className="text-justify">{currentItem.content_two}</p>
                    <p className="text-justify">{currentItem.content_three}</p>
                    <p className="text-justify">{currentItem.content_four}</p>
                </div>
            </div>

        </main>
    )
}