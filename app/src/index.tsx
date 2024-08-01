import React from 'react';
import ReactDOM from 'react-dom/client';

interface AddProps {
  color?: string;
}

interface AppState {
  counter: number;
}

class App extends React.Component<AddProps, AppState> {
  constructor(props: AddProps) {
    super(props);
    this.state = { counter: 0 };
  }

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
        {this.state.counter}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);
