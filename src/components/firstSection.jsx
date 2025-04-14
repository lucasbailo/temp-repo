export default function FirstSection() {

    return (
        <>
            <div className="h-[70vh] bg-(--bg-pattern) font-(family-name:--font-title) relative overflow-hidden standard-padding flex justify-center items-center">
                <div className="absolute inset-0 z-0 radial-gradient"></div>
                <div className="absolute inset-0 bg-[url('/src/assets/pattern.svg')] opacity-10 bg-repeat"></div>
                <div className="relative z-10 text-white p-8 flex flex-col gap-5 items-center">
                    <p>Palin e Martins</p>
                    <h2 className="md:text-6xl text-5xl text-(--title-color) font-extrabold text-shadow text-center">Excelência em consultoria tributária</h2>
                    <p>Loren ipsum dolor sit amet consectetur adipiscing elit sed do</p>
                    <a className="cards-link" href="https://api.whatsapp.com/message/SQ5ZTTC2UWRHN1?autoload=1&app_absent=0" target="_blank">
                        <button className="bg-transparent text-[#CCCCCC] border border-[#CCCCCC] hover:bg-[#CCCCCC] transition hover:text-black py-2 px-8 rounded-full cursor-pointer mt-2">
                            Entre em contato →
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}