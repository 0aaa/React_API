import React from 'react';
import Unit from './sub_models/Unit';
import { Route, NavLink } from 'react-router-dom';

class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.url = `https://swapi.dev/api/${props.match.params.category_name}`

        this.state = {
            content: []
        }
    }
    async componentDidMount() {
        const response = await fetch(this.url)
        const content = (await response.json()).results
        this.setState({ content })
    }
    
    render() {
        return (
            <>
                <table className='table'>
                    <thead>
                    </thead>
                    <tbody>
                        {this.state.content.map(cntnt =>
                            <tr>
                                <td>
                                    <NavLink to={`/0/${encodeURIComponent(cntnt.url)}`}>
                                        {cntnt.name != null ? cntnt.name : cntnt.title}
                                    </NavLink>
                                </td>
                            </tr>)}
                    </tbody>
                </table>
                <Route path='/0/:href' component={Unit}></Route>
            </>
        )
    }
}


export default Categories