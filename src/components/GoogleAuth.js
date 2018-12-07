import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1022928897223-e73qlm5o010n3u0pl05v6u0a810mq4fj.apps.googleusercontent.com',
                scope: 'email'
            })
        });
    }
    render (){
        return <div>Google Auth</div>;
    }
}

export default GoogleAuth;