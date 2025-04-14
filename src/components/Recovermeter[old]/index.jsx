export default function Recovermeter() {
    const credits = [
        {
            id: '1',
            label: 'Créditos de produtores rurais recuperados desde 2023',
            value: '32.124.459,51'
        },
        {
            id: '2',
            label: 'Créditos recuperados de tributos federais',
            value: '42.838.083,98'
        },
        {
            id: '3',
            label: 'Créditos de ICMS vendidos pela Palin desde 2014',
            value: '92.761.131,55'
        }
    ];
    // Agora suportando bilhões
    // Função para dividir e categorizar os números corretamente
    const splitValue = (value) => {
        let [inteiro, centavos] = value.split(',');
        let partes = inteiro.split('.');

        let categorias = ['Bilhões', 'Milhões', 'Mil', 'Reais']; // Adicionando "Bilhões"

        // Criando um objeto dinâmico baseado na quantidade de casas
        let valores = partes.map((parte) => parte.split('')).reverse(); // Reverte para alinhar com categorias

        return {
            valores: valores.reverse(), // Reverte de volta para ordem original
            centavos: centavos.split(''),
            categorias: categorias.slice(4 - valores.length) // Ajusta as categorias conforme o número de partes
        };
    };

    return (
        <section className="recovermeter">
            <div className="recovermeter__main_title">
                <h2>RECUPERÔMETRO</h2>
            </div>
            {credits.map((credit) => {
                const { valores, centavos, categorias } = splitValue(credit.value);
                return (
                    <div key={credit.id} className="recovermeter__box">
                        <h1 className="recovermeter__title">{credit.label}</h1>
                        <div className="recovermeter__display_box">
                            {valores.map((digits, index) => (
                                <div key={index} className="flex flex-col gap-2">
                                    <div className="recovermeter__numbers-div">
                                        {digits.map((digit, i) => (
                                            <div key={i} className="recovermeter__number_box">
                                                <p>{digit}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-(--bg-display-color)">{categorias[index]}</p>
                                </div>
                            ))}
                            {/* Centavos sempre aparecem no final */}
                            <div className="flex flex-col gap-2">
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
