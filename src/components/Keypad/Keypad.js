import React, {Component} from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {Button} from 'react-bulma-components/dist'
import {Section} from 'react-bulma-components/dist'

class Keypad extends Component{
    render(){
        return (
            <div>
                <Section><Button.Group size="large">
                <Button name="(" onClick={e => this.props.onClick(e.target.name)}>(</Button>
                <Button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</Button>
                <Button name=")" onClick={e => this.props.onClick(e.target.name)}>)</Button>
                <Button color="danger" name="C" onClick={e => this.props.onClick(e.target.name)}>C</Button><br/>
                </Button.Group>

                <Button.Group size="large">
                    <Button name="1" onClick={e => this.props.onClick(e.target.name)}>1</Button>
                    <Button name="2" onClick={e => this.props.onClick(e.target.name)}>2</Button>
                    <Button name="3" onClick={e => this.props.onClick(e.target.name)}>3</Button>
                    <Button name="+" onClick={e => this.props.onClick(e.target.name)}>+</Button>
                </Button.Group>

                <Button.Group size="large">
                    <Button name="4" onClick={e => this.props.onClick(e.target.name)}>4</Button>
                    <Button name="5" onClick={e => this.props.onClick(e.target.name)}>5</Button>
                    <Button name="6" onClick={e => this.props.onClick(e.target.name)}>6</Button>
                    <Button name="-" onClick={e => this.props.onClick(e.target.name)}>-</Button>
                </Button.Group>

                <Button.Group size="large">
                    <Button name="7" onClick={e => this.props.onClick(e.target.name)}>7</Button>
                    <Button name="8" onClick={e => this.props.onClick(e.target.name)}>8</Button>
                    <Button name="9" onClick={e => this.props.onClick(e.target.name)}>9</Button>
                    <Button name="*" onClick={e => this.props.onClick(e.target.name)}>x</Button>
                </Button.Group>

                <Button.Group size="large">
                    <Button name="." onClick={e => this.props.onClick(e.target.name)}>.</Button>
                    <Button name="0" onClick={e => this.props.onClick(e.target.name)}>0</Button>
                    <Button name="=" onClick={e => this.props.onClick(e.target.name)}>=</Button>
                    <Button name="/" onClick={e => this.props.onClick(e.target.name)}>÷</Button>
                </Button.Group>
                </Section>
            </div>
        )
    }
}

export default Keypad