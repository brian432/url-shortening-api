import { useState } from "react";
const Form = () => {
    const [url, setUrl] = useState([]);
    const [short, setShort] = useState([]);
    const [copy, setCopy] = useState([]);
    const [input, setInput] = useState([]);
    const json = async (elemento) => {
        let peticion = await fetch(`https://api.shrtco.de/v2/shorten?url=${elemento}`);
        let resultado = await peticion.json();
        !short.includes(resultado.result.full_short_link) && setShort([...short, resultado.result.full_short_link]);

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let input = e.target.children[0].value;
        if (input == "") {
            setInput([...input, "input"])
        } else {
            json(input);
            !url.includes(input) && setUrl([...url, input]);
            setInput("")
        }
    }

    const handleCLick = (e) => {
        setCopy([...copy, "Copied!", "copied"])
    }
    return (
        <div id="div-form" className="paddinglr-10 width">
            <form onSubmit={handleSubmit} className="flex">
                <input className={input.length !== 0 ? input[0] : "hola"} type="url" placeholder="Shorten a link here..." />
                <button type="submit" className="cursor">Shorten It!</button>
            </form>
            {
                short.map((elemento, indice) => {
                    return (
                        <div className="urlCopy" key={indice}>
                            <p>{url[indice]}</p>
                            <div className="copyButton">
                                <span>{elemento}</span>
                                <button className={copy.length !== 0 ? copy[1] : ""} onClick={() => handleCLick(elemento)}>
                                    {
                                        copy.length === 0 ? "copy" : copy[0]
                                    }
                                </button>
                            </div>
                        </div>)
                })
            }
        </div>
    )
}

export default Form;