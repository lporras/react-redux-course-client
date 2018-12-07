import React from 'react';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1022928897223-e73qlm5o010n3u0pl05v6u0a810mq4fj.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange();
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
    }

    renderAuthButton () {
        if (this.state.isSignedIn === null) {
            return <div>I dont konw if we are signed in</div>;
        } else if (this.state.isSignedIn) {
            return <div>I am signed in</div>
        } else {
            return <div>I am not signed in</div>
        }
    }
    render (){
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;