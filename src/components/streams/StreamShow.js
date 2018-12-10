import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchStream(id);
    }
    render() {
        const { title, description } = this.props.stream;
        if (this.props.stream) {
            return (
                <div>
                    <h1>{title}</h1>
                    <h5>{description}</h5>
                </div>
            );
        } else {
            return <div>Loading...</div>
        }
    }
};

const mapStateToProps = (state, ownProps) => {
    const streamId = ownProps.match.params.id;
    return { stream: state.streams[streamId]};
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);