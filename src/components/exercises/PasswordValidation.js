import React from 'react';

class PasswordValidation extends React.Component {
    state = {
        password: ''
    }

    render() {
        return (
            <>
                <input type="password" value={this.state.password}
                       onChange={(e) => this.setState({password: e.target.value})}/>
                {this.state.password.length < 4 ? 'Small password' : ''}
            </>
        )
    }
}

export default PasswordValidation;