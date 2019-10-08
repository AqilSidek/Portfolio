import React from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import './Style.css';

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

class Example extends React.Component {
  state = { isVisible: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible, duration: 3000 });
    }, 3000);
  }

  render() {
    const { isVisible } = this.state;
    return <Box className="box" pose={isVisible ? 'visible' : 'hidden'} />;
  }
}

ReactDOM.render(<Example />, document.getElementById('root'));

export default Example