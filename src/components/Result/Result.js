import React, {Component} from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {Section} from 'react-bulma-components/dist'
import {Container} from 'react-bulma-components/dist'
import {Box} from 'react-bulma-components/dist'
import {Field} from 'react-bulma-components/dist'
import {Input} from 'react-bulma-components/dist'

class Result extends Component {


    render() {
        let {result} = this.props
        return (
            <div>
                    <Box>   
                    <p className="bd-notification is-success">
                    {result}
                    </p>
                    </Box>
            </div>
    )
        ;
    }
}


export default Result;