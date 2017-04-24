import React, { Component } from 'react';
import DirList from '../components/dirList'
import { connect } from 'react-redux'
import { listDirectory } from '../actions';

class DirListComponent extends Component {
    constructor(props){
        super(props);
        console.log(this.props)
    }
    componentDidMount(){
        console.log(!this.props.listing.directoryListing.length)
        if(!this.props.listing.directoryListing.length && this.props.listing.currentPath === './') {
            debugger;
            this.props.dispatch(listDirectory('./'))
        }
    }
    componentWillReceiveProps(nextProps){
        debugger;
        if(!nextProps.listing.directoryListing.length && nextProps.listing.currentPath === './') {
            debugger;
            this.props.dispatch(listDirectory('./'))
        }
    }
    render() {
        return (
            <DirList directoryListing={this.props.listing.directoryListing}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listing: state,
    }
}

const DirListContainer = connect(mapStateToProps)(DirListComponent);

export default DirListContainer;