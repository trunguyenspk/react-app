import React from 'react';
import './app.css';

import './components/originalComponent';
import OriginalComponent from './components/originalComponent';

function Detail(props) {

  const _styles = {
    borderColor: "red",
    height: "200px",
    border: "solid"
  };

  return (
    <div>
      <h1>Hello, {props.name} - {props.age}</h1>
      <div style={_styles}>child content
        {props.children}
      </div>
    </div>
  );
}

function Welcome(props) {
  return (
    <Detail name={props.name} age={props.age}>
      <h1>welcom component content</h1>
    </Detail>
  );
}

class WelcomeByClass extends React.Component {
  render() {
  return <h1>Hello, {this.props.name}, {this.props.age}</h1>;
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };

    this.tickByHand = this.tickByHand.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  tickByHand() {
    this.setState({
      date: new Date(2020, 12, 2)
    })

    this.newValue = this.state.date.toLocaleTimeString();
  }

  render() {
    return (
      <div>

        <h2>It is {this.state.date.toLocaleTimeString()}</h2>

        <h2 onClick={this.tickByHand}>Tick by hand: {this.newValue}</h2>

        {
          this.props.unreadMessages.length > 0 &&
          <h2>
            You have {this.props.length} unread messages
          </h2>
        }

      </div>
    );
  }
}

class Grandma extends React.Component {
  constructor() {
    super();
    this.state = {
      cookies: 0
    }
  }

  bakeCookies = () => {
    this.setState({ cookies: this.state.cookies + 10 })
  }

  render() {
    return (
      <div>
        <h1>cookies= {this.state.cookies}</h1>

        <Dad bakeCookies={this.bakeCookies}>

        </Dad>
      </div>
    )
  }

}

const Dad = ({ bakeCookies }) => (
  <Son bakeCookies={bakeCookies}>
  </Son>
);

const Son = ({ bakeCookies }) => (
  <div onPointerMove={bakeCookies}>
    CLICK TO BAKE
  </div>
);

const Button = props => {
  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";

  return <button className={className} {...other} />;
};

function App() {

  /*return (
    <div className="App">
      <header className="App-header">
  
        <WelcomeByClass {...data}></WelcomeByClass>

        <Button kind="primary" type="en" text="value" onClick={btnClick}>
          CLICK BUTTON
        </Button>

      </header>
    </div>
  );*/

  return (
    <div className="App">
      
      <OriginalComponent originalProp='value from wrapped component'></OriginalComponent>

    </div>
  );
}

export default App;
