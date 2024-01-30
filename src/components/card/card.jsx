import './card.css'
import { Button } from '../button/button'

const Card = ({ children, color, backgroundColor, uppercase }) => {
    return (
        <>
            <div className="card" style={{ backgroundColor: backgroundColor }
            }>

                <p style={{ color: color, textTransform: uppercase }}>{children.toUpperCase()}</p>

                <Button 
                //adicione label aqui label='Baixar CV'
                />
            </div>

            
        </>
    )
}

Card.defaultProps = {
    backgroundColor: 'lightblue',
    color: 'red',
    uppercase: 'uppercase'
}
// não entendi se era pra usar toUpperCase ou não
export { Card }