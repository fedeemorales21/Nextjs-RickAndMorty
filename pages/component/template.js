import Header from './header'
import Navigation from './navigation'

const Template = props => (
    <div>
        <Header/>
        <Navigation/>
        <div className="container">
            {props.children}
        </div>
    </div>
)

export default Template