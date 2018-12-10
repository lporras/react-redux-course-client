import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchStream(id);
    }
    render() {
        return <div>StreamShow</div>
    }
};

const mapStateToProps = (state, ownProps) => {
    const streamId = ownProps.match.params.id;
    return { stream: state.streams[streamId]};
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);