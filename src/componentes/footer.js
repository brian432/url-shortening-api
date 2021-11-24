const Footer = () => {

    const Features = [
        {
            titulo: "Features",
            link1: "Link Shortening",
            link2: "Branded Links",
            link3: "Analytics"
        },
        {
            titulo: "Resources",
            link1: "Blog",
            link2: "Developers",
            link3: "Support"
        },
        {
            titulo: "Company",
            link1: "About",
            link2: "Our Team",
            link3: "Careers",
            link4: "Contact"
        }
    ];
    return (
        <footer className="paddinglr-10">
            <div className="div-logo">
                <img src="images/logo.svg" alt="logo" />
            </div>
            {Features.map((elemento, indice) => {
                return (
                    <div key={indice} className="cuadros-footer">
                        <h4>{elemento.titulo}</h4>
                        <a href="#">{elemento.link1}</a>
                        <a href="#">{elemento.link2}</a>
                        <a href="#">{elemento.link3}</a>
                        {elemento.link4 && <a href="#">{elemento.link4}</a>}
                    </div>
                )
            })}
            <div id="redes-sociales">
                <i className="fab fa-facebook-square fa-lg cursor"></i>
                <i className="fab fa-twitter fa-lg cursor"></i>
                <i className="fab fa-pinterest fa-lg cursor"></i>
                <i className="fab fa-instagram fa-lg cursor"></i>
            </div>
        </footer>
    )
}

export default Footer;