const SectionStatics = () => {
    const cuadros = [
        {
            logo: "images/icon-brand-recognition.svg",
            titulo: "Brand Recognition",
            parrafo: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."

        },
        {
            logo: "images/icon-detailed-records.svg",
            titulo: "Detailed Records",
            parrafo: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        },
        {
            logo: "images/icon-fully-customizable.svg",
            titulo: "Fully Customizable",
            parrafo: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        }
    ];

    return (
        <section className="paddinglr-10" id="statics">
            <div id="titulos">
                <h2>Advances Statistics</h2>
                <p>Track how your links are performing across the web with our
                    advanced statistics dashboard.</p>
            </div>
            <div id="linea" />
            <div id="cuadros">
                {cuadros.map((elemento, indice) => {
                    return (
                        <div key={indice} className="cuadros">
                            <div className="div-img">
                                <img src={elemento.logo} alt="logo"/>
                            </div>
                            <h3>{elemento.titulo}</h3>
                            <p>{elemento.parrafo}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default SectionStatics;