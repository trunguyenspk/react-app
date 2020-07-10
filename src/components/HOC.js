import React from 'react';

const withFunctions = (WrappedComponent, incrementValue) => {
    class withFunctions extends React.Component {

        constructor(props) {
            super(props);

            this.commonFunc = this.commonFunc.bind(this);

            this.state = {
                count: 0
            }
        }

        commonFunc() {
            this.setState(prevState => {
                return { count: prevState.count + incrementValue }
            })
        }

        render() {
            return <WrappedComponent count={this.state.count} numCount={this.commonFunc} wrapValue='value-from-HOC' {...this.props}/>
        }

    }
    return withFunctions;
}

const otherHOC = (WrappedComponent) => {
    class otherHOC extends React.Component {

        constructor(props) {
            super(props);

            this.image = 'value-from-withFunctions';

            this.numCount = this.numCount.bind(this);

            this.state = {
                count: 0
            }
        }

        numCount() {
            this.setState(prevState => {
                return { count: prevState.count + 5 }
            })
        }

        render() {
            return <WrappedComponent count={this.state.count} numCount={this.numCount} wrapValue={this.image} />
        }

    }
    return otherHOC;
}

export {
    withFunctions, 
    otherHOC
};
