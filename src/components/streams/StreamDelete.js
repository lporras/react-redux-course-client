import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchStream(id);
    }
    renderActions () {
        const id = this.props.match.params.id;
        return(
            <React.Fragment>
                <button
                    onClick={() => this.props.deleteStream(id) }
                    className="ui button negative"
                >Delete</button>
                <Link className="ui button" to="/">Cancel</Link>
            </React.Fragment>
        );
    }
    renderContent() {
        if (!this.props.stream) {
            return "Are you sure you want to delete this stream?"
        }

        return `Are you sure you want to delete this stream with title: ${
            this.props.stream.title
        }?`;
    }
    render() {
        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const streamId = ownProps.match.params.id;
    return { stream: state.streams[streamId]};
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);