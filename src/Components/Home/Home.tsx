import * as React from 'react'
import { IHomeProps, IStateProps } from './Home.d'

class Home extends React.Component<IHomeProps, IStateProps> {
    public static defaultProps = {
        role: "SDE 2"
    }
    state = {
        name: 'santhosh'
    }

    render() {
        return (
            <div>
                Home Component
                <div>{this.props.title}</div>
                <div>{this.state.name} and the age is {this.props.age} with the role {this.props.role}</div>
                {this.props.tempArray?.map(item => (
                    <div key={item}>{item}</div>
                ))}
                {this.props.tempObjArray.map(item => (
                    <div key={item.name}>{item.name} performing {item.role}</div>
                ))}
            </div>
        )
    }
}

export default Home