import React, { Component } from 'react';

import { connect } from 'react-redux';

class Footer extends Component {
    render () {
        return (
            <div>
                {this.props.count}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Footer);