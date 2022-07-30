import React from 'react';
import ReactDOM from 'react-dom';
import Sponsor from './components/sponsor.js'

class Me extends React.Component {
  render() {
    return (<nav className="navbar p-3">
                <div className="container-fluid">
                    <a className="navbar-brand bg-dark p-2 rounded-pill text-white" href="https://github.com/MQ-J">
                        <img src="images/user.png" alt="" width="30" height="30"
                            className="d-inline-block align-text-top rounded-circle" />
                        Marcos Querino
                    </a>
                </div>
            </nav>)
  }
}

class Title extends React.Component {
  render() {
    return (<h1 className="">{this.props.label}</h1>)
  }
}

class Paragraph extends React.Component {
  render() {
    return (
      <p className="">
      {this.props.text}
      </p>
    )
  }
}

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    return  (
      <div className="">
        <Me/>
        <Title label={this.props.title} />
          <Paragraph text={this.props.text} />
          <Sponsor/>
      </div>
    )
  }
}


ReactDOM.render(
  <Main title="React" text="Caution: do not look into laser with remaining eye."></Main>,
  document.getElementById('react-app')
);
