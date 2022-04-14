const Saludo = (props) => {
    return (
        <div style={{ color: 'red' }}>
            Saludos {props.name} 
            <p/>
            Tienes {props.edad}
        </div>
    )
}
export default Saludo