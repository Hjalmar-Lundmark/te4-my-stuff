

function Input(props) {


    return (
        <>
            <input type="text" id={props.id} placeholder={props.placeholder} />
            <button onClick={() => { props.doStuff() }}>{props.buttonName}</button>
        </>
    )
}

export default Input