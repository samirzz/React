import React, { Component } from 'react'
import Header from './components/Header'

export class App extends Component {
  render() {
    return (
      <div>
       <Header title="samir"
       btnClick={(n,s)=>{alert(n);
                    alert(s);
                }}
       />
      </div>
    )
  }
  
}

export default App
