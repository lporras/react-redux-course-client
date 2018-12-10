import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchStream(id);
    }
    render() {
        if (this.props.stream) {
            return (
                <h1>Edit Stream</h1>
            );
        } else {
            return <div>Loading...</div>;
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const streamId = ownProps.match.params.id;
    return { stream: state.streams[streamId]};
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit);