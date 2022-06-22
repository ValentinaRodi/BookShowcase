import React from 'react'

// eslint-disable-next-line react/prefer-stateless-function
export default class extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
    super(props)
    }

    render() {
        return (
            <div id="book">
                <h2>{this.props.name}</h2>
                <p>{this.props.year}</p>
                <p>{this.props.price}</p>
            </div>
        )
    }
}