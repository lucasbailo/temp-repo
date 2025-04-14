import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Footer from './components/Footer'
import MenuHamburger from './components/Menu'
import Home from './Pages/Home';
import Carreiras from './Pages/Carreiras';
import Servicos from './Pages/Serviços/servicos';
import ScrollToTop from './components/utils/scrollToTop';
import GrupoPalin from './Pages/GrupoPalin';
import PalinJuridico from './Pages/GrupoPalin/PalinJurídico';

function AppRoutes() {

	return (
		<BrowserRouter>
		<ScrollToTop />
			<MenuHamburger />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/carreiras" element={<Carreiras />} />
				<Route path="/servicos"  element={<Navigate to="/servicos/consultoria-tributaria" />} />
				<Route path="/servicos/:id" element={<Servicos />} />
				<Route path="/grupo-palin" element={<GrupoPalin />} />
				<Route path="/grupo-palin/juridico" element={<PalinJuridico />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default AppRoutes
