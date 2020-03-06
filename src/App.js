import React, {Component} from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './App.css';
import Result from './components/Result'
import Keypad from './components/Keypad'
import {Heading} from 'react-bulma-components/dist'
import {Hero} from 'react-bulma-components/dist'
import {Section} from 'react-bulma-components/dist'
import {Container} from 'react-bulma-components/dist'
import {Level} from 'react-bulma-components/dist'
import {Columns} from 'react-bulma-components/dist'

class App extends Component{
  constructor(){
    super()
    this.state = {
      result: ''
    }
  }


  onClick = button => {

    if(button === "="){
        this.calculate()
    }

    else if(button === "C"){
        this.reset()
    }
    else if(button === "CE"){
        this.backspace()
    }

    else {
        this.setState({
            result: this.state.result + button
        })
    }
  }

  calculate = () => {
    try {
      this.setState({
          // eslint-disable-next-line
          result: (eval(this.state.result) || "" ) + ""
      })
    } catch (e) {
        this.setState({
            result: "error"
        })

    } 
  }

  reset = () => {
    this.setState({
        result: ""
    })
  }

  backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
  }

  render(){
    return(
      <div>
      <Section className="has-background-dark">
            <Columns><Columns.Column size="one-third" offset="one-quarter">
                <Heading renderAs="h1" className="has-text-white is-centered"> Reactивный калькулятор </Heading>
              <Container>
                <Result result={this.state.result}/>
                <Keypad onClick={this.onClick}/>
              </Container>
            </Columns.Column></Columns>
          </Section>
      </div>
    )
  }
}

export default App;
