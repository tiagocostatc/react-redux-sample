import React from 'react';
import { connect } from 'react-redux';
import { getSpaceXInfo } from '../actions/user-actions';

class SpaceXInfo extends React.Component {

    componentDidMount(){
        this.props.getSpaceXInfo();
    }

    render() {
        return (
            <div>
                <p>Name: {this.props.spaceXInfo && this.props.spaceXInfo.name}</p>
                <p>Founder: {this.props.spaceXInfo && this.props.spaceXInfo.founder}</p>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    const {spaceXInfo} = store.userReducer;
    return {
        spaceXInfo
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSpaceXInfo: () => dispatch(getSpaceXInfo())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpaceXInfo);
