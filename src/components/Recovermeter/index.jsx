export default function Recovermeter() {
    const credits = [
        {
            id: '1',
            label: 'Créditos recuperados desde 2023',
            value: '167.723.675,04'
        }
    ];

    function splitValue(value) {
        let [inteiro, centavos] = value.split(',');
        let partes = inteiro.split('.');
        let categorias = ['Bilhões', 'Milhões', 'Mil', 'Reais'];

        return {
            valores: partes.map(parte => parte.split('')),
            centavos: centavos.split(''),
            categorias: categorias.slice(4 - partes.length)
        };
    }

    return (
        <section className="recovermeter">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-5 text-center items-center text-(--bg-display-color)">
                    <h2 className="text-center uppercase border-b-1 w-fit">Créditos recuperados desde 2023</h2>
                </div>
                <div className="recovermeter__main_title">
                    <h2 className="new-title">RECUPERÔMETRO</h2>
                </div>
            </div>
            {credits.map((credit) => {
                const { valores, centavos, categorias } = splitValue(credit.value);

                return (
                    <div key={credit.id} className="recovermeter__box">
                        {/* <h1 className="recovermeter__title">{credit.label}</h1> */}
                        <div className="recovermeter__display_box">
                            {valores.map((digits, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    <div className="recovermeter__numbers-div">
                                        {digits.map((digit, j) => (
                                            <div key={j} className="recovermeter__number_box">
                                                <p>{digit}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-(--bg-display-color)">{categorias[i]}</p>
                                </div>
                            ))}
                            <div className="hidden md:flex flex-col gap-2">
                                <div className="recovermeter__numbers-div">
                                    {centavos.map((digit, i) => (
                                        <div key={i} className="recovermeter__number_box">
                                            <p>{digit}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-(--bg-display-color)">Centavos</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
