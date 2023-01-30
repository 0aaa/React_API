import React from 'react';

export class Unit extends React.Component {
    constructor(props) {
        super(props)

        this.url = decodeURIComponent(props.match.params.href)
        this.state = {
            content: {}
        }
    }
    async componentDidMount() {
        const response = await fetch(this.url)
        const content = await response.json()
        this.setState({ content })
    }
    render() {
        return (
            <>
                <h5>{Object.values(this.state.content)[0]}</h5>
                <table className='table'>
                    <tbody>
                        {Object.keys(this.state.content).map(cntnt =>
                            <tr>
                                <th>{cntnt}</th>
                                <td>{this.state.content[cntnt]}</td>
                            </tr>)}
                    </tbody>
                </table>
                <button onClick={() => this.props.history.goBack()} className='btn btn-outline-danger'>Return</button>
            </>
        )
    }
}


export default Unit