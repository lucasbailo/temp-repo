import logoNome from "../../assets/images/logos/Logo_Palin_e_Martins.png"
import logoSolo from "../../assets/images/logos/Logo_solo.png"

export default function Header() {
    return (
        <header className="box-header">
            <div>
                <img src={logoNome} alt="Logo da empresa" className="w-45 hidden md:block" />
                <img src={logoSolo} alt="Logo da empresa" className="w-16 md:hidden" />
            </div>
            <div className="box-header_links">
                <ul className="box-header_ul">
                    <li><a href="https://api.whatsapp.com/message/SQ5ZTTC2UWRHN1?autoload=1&app_absent=0" target="_blank">Fale Conosco</a></li>
                    <li><a href="https://forms.clickup.com/9007042349/f/8cdt3td-14713/I73UP1X2BFZUHZMW6C" target="_blank">Trabalhe Conosco</a></li>
                    <li className="hidden"><a href="#">Nossa História</a></li>
                </ul>
            </div>
        </header>
    )
}