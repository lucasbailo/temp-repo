import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import logoNome from "../../assets/images/logos/Logo_Palin_e_Martins.png"
import logoSolo from "../../assets/images/logos/Logo_solo.png"
import { List, X } from '@phosphor-icons/react';

export default function MenuHamburger() {

    const [menuBurger, setMenuBurger] = useState(true);
    const menuRef = useRef(null); // Referência para o menu
    const location = useLocation();
    const isHome = location.pathname === "/" || location.pathname === "/carreiras" || location.pathname === "/grupo-palin";

    // Função para fechar o menu ao clicar fora
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !(menuRef.current).contains(event.target)) {
                setMenuBurger(true); // Fecha o menu
            }
        }

        if (!menuBurger) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuBurger]);


    return (
        <nav className={`flex justify-between bg-black items-center md:transparent w-full uppercase text-xs text-white px-6 py-2 ${isHome ? 'md:absolute' : 'fixed'}`}>
            <a href="/">
                <img src={logoNome} alt="Logo da empresa" className="w-45 hidden md:block absolute top-0.5 left-6 z-50 p-2" />
                <img src={logoSolo} alt="Logo da empresa" className="w-16 md:hidden absolute top-0.5 left-6 z-50 p-2" />
            </a>
            <div
                ref={menuRef}
                className={`absolute md:static md:min-h-fit min-h-[20vh] left-0 ${menuBurger ? "top-[-500%]" : "top-[6%] transition-all duration-300 bg-black"} md:w-auto w-full flex justify-center text-center items-center px-7 py-5 z-40`}
            >
                <ul className={`flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8`}>
                    <li>
                        <a className='hover:text-(--title-color) text-white transition' href="/">
                            Sobre nós
                        </a>
                    </li>
                    <li>
                        <a className='hover:text-(--title-color) text-white transition' href="https://api.whatsapp.com/message/SQ5ZTTC2UWRHN1?autoload=1&app_absent=0" target="_blank">
                            Fale Conosco
                        </a>
                    </li>
                    <li>
                        <a className='hover:text-(--title-color) text-white transition' href="/carreiras">
                            Carreiras
                        </a>
                    </li>
                    <li>
                        <a className='hover:text-(--title-color) text-white' href="/servicos">
                            Serviços
                        </a>
                    </li>
                </ul>
            </div>
            <div className="cursor-pointer md:hidden z-50 h-[38px] pt-1" onClick={() => setMenuBurger((curr) => !curr)}>
                {menuBurger ? <List size={32} /> : <X size={32} />}

            </div>
        </nav>
    )
}