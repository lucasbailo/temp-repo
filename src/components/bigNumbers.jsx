export default function BigNumbers() {

    return (
        <>
            <div className="w-full overflow-hidden standard-padding flex flex-col gap-2 text-(--bg-display-color)">
                <div className="flex flex-col gap-5 items-center text-center">
                    <h2 className="uppercase border-b-1 w-fit">Nossas conquistas</h2>
                    <h2 className="new-title">Big Numbers</h2>
                </div>
                <div className="flex flex-row flex-wrap justify-center font-(family-name:--font-title) items-baseline">
                    <div className="flex flex-col gap-2 items-center md:p-20 px-16 py-10 min-w-[10vw] w-[20vw] justify-center text-center max-w-[60vw]">
                        <h1 className="font-bold md:text-5xl text-4xl">21</h1>
                        <p className="font-bold text-sm">anos de experiência</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center md:p-20 px-16 py-10 min-w-[10vw] w-[20vw] justify-center text-center max-w-[60vw]">
                        <h1 className="font-bold md:text-5xl text-4xl">+9999</h1>
                        <p className="font-bold text-sm">Clientes Atendidos</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center md:p-20 px-16 py-10 min-w-[10vw] w-[20vw] justify-center text-center max-w-[60vw]">
                        <h1 className="font-bold md:text-5xl text-4xl">+R$167</h1>
                        <p className="font-bold text-sm">Milhões Em créditos recuperados</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center md:p-20 px-16 py-10 min-w-[10vw] w-[20vw] justify-center text-center max-w-[60vw]">
                        <h1 className="font-bold md:text-5xl text-4xl">4000</h1>
                        <p className="font-bold text-sm">Paçocas Sustentadas</p>
                    </div>
                </div>
            </div>
        </>
    )
}