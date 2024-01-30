

const Button = (props) => {
  
    return (
        <>
        <button onClick= {() => {
            alert(`A label desse botao é ${props.label ?? Button.defaultProps.label}`)
        }}>
           {props.label ?? Button.defaultProps.label}
        </button>
        </>
    )
}

Button.defaultProps = {
    label: 'padrão'
}

export { Button }