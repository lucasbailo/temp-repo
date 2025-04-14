export default function Carreiras() {
    return (
        <>
            <div className="bg-(--bg-pattern) relative overflow-hidden standard-padding flex flex-col pt-50 pb-12 gap-12">
                <div className="absolute inset-0 z-0 radial-gradient"></div>
                <div className="absolute inset-0 bg-[url('/src/assets/pattern.svg')] opacity-10 bg-repeat"></div>
                <div className="flex flex-col gap-5 w-[70vw] z-50">
                    <h1 className="color text-(--title-color) font-extrabold new-title text-shadow">Trabalhe Conosco</h1>
                    <p className="text-style text-white">Na Palin e Martins, acreditamos que o sucesso vem do talento e dedicação de nossa equipe. Buscamos profissionais motivados, inovadores e comprometidos com a excelência para fazer parte do nosso time.</p>
                    <p className="text-style text-white">Se você deseja crescer profissionalmente em um ambiente dinâmico e colaborativo, envie seu currículo para nós!</p>
                    <h3 className="title-style-black text-xl text-white font-bold">Como se candidatar?</h3>
                    <p className="text-style text-white">Clique no link abaixo para preencher nosso formulário de candidatura:</p>
                    <div>
                        <a className="cards-link" href="https://forms.clickup.com/9007042349/f/8cdt3td-14713/I73UP1X2BFZUHZMW6C" target="_blank">
                            <button className="cards-button">Faça parte do nosso time →</button>
                        </a>
                    </div>
                    <a className="cards-link" href="https://forms.clickup.com/9007042349/f/8cdt3td-14713/I73UP1X2BFZUHZMW6C" target="_blank">
                        <button className="button-two">
                            Faça parte do nosso time →
                        </button>
                    </a>
                    <a className="cards-link" href="https://forms.clickup.com/9007042349/f/8cdt3td-14713/I73UP1X2BFZUHZMW6C" target="_blank">
                        <button className="button-three">
                            Faça parte do nosso time →
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}
