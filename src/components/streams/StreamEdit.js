import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchStream(id);
    }
    onSubmit = (formValues) => {
        const id = this.props.match.params.id;
        this.props.editStream(id, formValues);
    }
    render() {
        if (this.props.stream) {
            return (
                <div>
                    <h3>Edit Stream</h3>
                    <StreamForm
                        initialValues={_.pick(this.props.stream, 'title', 'description')}
                        onSubmit={this.onSubmit}
                    />
                </div>
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

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);