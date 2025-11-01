import  style  from "./style.module.css"

interface IParametro {
    params: Promise<{ id: string }>
}

export default async function Categorias(
    { params }: IParametro
) {
    const { id } = await params

    return (
        <>
            <h1 style={{ color: 'red' }}>Parametro: {id}</h1>
            <h1 className="bg-red-300">CSS</h1>
            <h2 className={style.Subtitulo}>Subtitle</h2>
        </>
    )
}