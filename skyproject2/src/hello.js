import React from 'react'

// eslint-disable-next-line react/prefer-stateless-function
export default class extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
    super(props)
    }

    render() {
        return (
            <h1 id="hello" className="class1">Hello from React</h1>
        )
    }
}
