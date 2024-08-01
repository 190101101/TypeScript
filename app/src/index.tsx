import React from 'react'
import ReactDOM from 'react-dom/client'

interface AddProps{
  color?:string
}

class App extends React.Component<AddProps>{
  render(){
    return <div>{this.props.color}</div>
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App/>)