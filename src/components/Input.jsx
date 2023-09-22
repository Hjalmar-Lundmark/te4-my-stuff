

function Input(props) {


    return (
        <>
            <input type="text" id={props.id} placeholder={props.placeholder} />
            <button onClick={() => { props.doStuff() }}>Lägg till</button>
        </>
    )
}

export default Input