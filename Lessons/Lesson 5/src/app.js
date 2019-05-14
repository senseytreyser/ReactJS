import React from 'react';
import ReactDOM from 'react-dom';

import LifeCycleUnmount from './app/components/LifeCycleUnmount';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      showUnmountComponent: true
    };
  }

  render() {
    return (
      <div>
        {this.state.showUnmountComponent ? <LifeCycleUnmount/> : null}
        <button onClick={() => {
          this.setState({showUnmountComponent: false})
        }}>Удалить компонент</button>
      </div>
    );
  }

}


ReactDOM.render(<App/>, document.querySelector('#root'));