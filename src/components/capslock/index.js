export default function CapsLock(props) {
    //const texto = props.texto;//pegando o texto da propriedade
    const texto = props.children;
    const textoCaps = texto.toUpperCase();
    return <div>{textoCaps}</div>
}

