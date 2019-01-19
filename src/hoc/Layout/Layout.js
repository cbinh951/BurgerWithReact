import React, {Component} from 'react';
import { connect } from 'react-redux';

import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showsideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showsideDrawer: false
        });
    }

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => {
            return { showsideDrawer: !prevState.showsideDrawer };
        } );
    }

    render () {
        return (
            <React.Fragment>
                <Toolbar 
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer 
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showsideDrawer}  
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
} 

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);