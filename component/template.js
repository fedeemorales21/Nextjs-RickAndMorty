import Header from './header'
import Navigation from './navigation'

const Template = props => (
    <div>
        <Header/>
        <Navigation/>
        <div className="container p-3">
            {props.children}
        </div>
    </div>
)

export default Template