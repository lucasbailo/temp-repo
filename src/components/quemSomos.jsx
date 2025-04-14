export default function QuemSomos() {

    return (
        <>
            <div className="min-h-[70vh] bg-(--bg-pattern) relative overflow-hidden standard-padding flex items-center">
                <div className="absolute inset-0 z-0 radial-gradient"></div>
                <div className="absolute inset-0 bg-[url('/src/assets/pattern.svg')] opacity-10 bg-repeat"></div>
                <div className="flex flex-col gap-8 relative z-10 text-white py-20">
                    <div>
                        <h2 className="font-(family-name:--font-title) uppercase text-(--title-color) md:text-4xl text-3xl font-extrabold">Conheça nossa história</h2>
                    </div>
                    <div className="text-style text-white flex flex-col gap-3 md:text-lg text-sm">
                        <p>Com mais de 20 anos de experiência, a <span className="font-bold">Palin & Martins</span> é uma consultoria tributária de referência, localizada em São José do Rio Preto, São Paulo.</p>
                        <p>Nossa equipe especializada atende tanto pessoas físicas quanto jurídicas, com destaque na recuperação de créditos de ICMS, sempre alcançando ótimos resultados para nossos clientes. Também atuamos em Compliance Tributário, recuperação de tributos federais e oferecemos serviços jurídicos. Tudo isso com base na legislação, garantindo segurança e sustentabilidade para o seu negócio. </p>
                        <p>Nosso foco é entender as necessidades de cada cliente e oferecer soluções personalizadas e eficazes, que ajudam a fortalecer os negócios e garantir total satisfação.</p>
                    </div>
                </div>
            </div>
        </>
    )
}