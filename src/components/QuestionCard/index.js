function questionsCard({preguntaActual}) {
    console.log(preguntaActual)
    return (
        <div className="box">
            <span className="tag is-rounded is-info">{preguntaActual.id}</span>
            <span><strong>{preguntaActual.question}</strong></span>
            <br/>
            {
                preguntaActual.answers.map((opcion) => (
                    <div key={opcion.id}>
                        <input type="radio" id={`${opcion.id}`} name={opcion.id} value={opcion.answer}></input>
                        <label htmlFor={`${opcion.id}`}> {opcion.answer}</label>
                    </div>
                ))
            }
        
        <br/>
        </div>
        
        
    )
}

export default questionsCard; 
