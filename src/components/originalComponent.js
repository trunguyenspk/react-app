import React from 'react';
import { withFunctions, otherHOC } from './HOC';

class OriginalComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        const {count, numCount} = this.props;

        return (
            <div>
                <h1>Hello, {this.props.originalProp}</h1>

                <h1>New prop {this.props.wrapValue}</h1>

                <button onClick = {numCount}> Click {count} </button>
            </div> 
            

        )
    };
}

export default withFunctions(OriginalComponent, 5);