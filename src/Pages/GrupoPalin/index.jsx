import { Link } from "react-router-dom";
import Recovermeter from "../../components/Recovermeter";

export default function GrupoPalin() {
    return (
        <div className="bg-(--bg-pattern) relative overflow-hidden standard-padding flex flex-col pt-50 pb-20 gap-12 text-center items-center">
            <div className="absolute inset-0 z-0 radial-gradient"></div>
            <div className="absolute inset-0 bg-[url('/src/assets/pattern.svg')] opacity-10 bg-repeat"></div>
            <div className="z-50 flex flex-col gap-5 items-center">
                <h2 className="text-6xl text-(--font-display-color) font-bold new-title">GRUPO PALIN</h2>
                <ul className="text-2xl font-bold flex flex-col gap-4 justify-center w-fit">
                    <Link to="/grupo-palin/juridico"><li className="gradient-animated shadow-md shadow-white/25 rounded-md px-5 py-2">Palin Jurídico</li></Link>
                    <Link to=""><li className="gradient-animated shadow-md shadow-white/25 rounded-md px-5 py-2">Integramente</li></Link>
                    <Link to="/"><li className="gradient-animated shadow-md shadow-white/25 rounded-md px-5 py-2">Palin e Martins</li></Link>
                    <Link to=""><li className="gradient-animated shadow-md shadow-white/25 rounded-md px-5 py-2">Loren Ipsum</li></Link>
                </ul>
            </div>
        </div>
    )
}