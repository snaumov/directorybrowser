import React, { Component } from 'react';
import DirList from '../components/dirList'
import { connect } from 'react-redux'
import { listDirectory, browseFile, jumpUp } from '../actions';
import { getDirectoriesAndFiles } from '../selectors';

class DirListComponent extends Component {
    constructor(props){
        super(props);
        this.openDirectory = this.openDirectory.bind(this);
        this.browseFile = this.browseFile.bind(this);
        this.jumpUp = this.jumpUp.bind(this);
    }
    componentDidMount(){
        if(!this.props.listing.directoryListing.length && this.props.listing.currentPath === './') {
            this.props.dispatch(listDirectory('./'))
        }
    }
    componentWillReceiveProps(nextProps){
        if(!nextProps.listing.directoryListing.length && nextProps.listing.currentPath === './') {
            this.props.dispatch(listDirectory('./'))
        }
    }

    openDirectory(dirName) {
        this.props.dispatch(listDirectory(this.props.listing.currentPath + '/' + dirName));
    }

    browseFile(fileName) {
        this.props.dispatch(browseFile(this.props.listing.currentPath + '/' + fileName));
    }

    jumpUp() {
        this.props.dispatch(jumpUp(this.props.listing.currentPath));
    }

    render() {
        
        return (
            <DirList openDirectory={this.openDirectory} directories={this.props.directoriesAndFiles.directories} files={this.props.directoriesAndFiles.files} directoryListing={this.props.listing.directoryListing} fileContent={this.props.listing.fileContent} browseFile={this.browseFile} jumpUpDisabled={this.props.listing.jumpUpDisabled} jumpUp={this.jumpUp} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listing: state,
        directoriesAndFiles: getDirectoriesAndFiles(state),
    }
}

const DirListContainer = connect(mapStateToProps)(DirListComponent);

export default DirListContainer;