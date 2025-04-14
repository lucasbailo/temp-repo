import ServiceCards from "../../components/Cards/ServiceCards"
import Carousel from "../../components/Carousel"
import FirstSection from "../../components/firstSection"
import Partners from "../../components/Partners"
import QuemSomos from "../../components/quemSomos"
import BigNumbers from "../../components/bigNumbers"
import Recovermeter from "../../components/Recovermeter"
import PorDentro from "../../components/porDentro"
import CardsContato from "../../components/cardsContato"

export default function Home() {
	return (
		<main className="flex flex-col gap-8 bg-gray-100">
			<FirstSection />
			<Recovermeter />
			<Partners />
			<BigNumbers />
			<QuemSomos />
			<ServiceCards />
			<PorDentro />
			<CardsContato />
			<Carousel />
		</main>
	)
}