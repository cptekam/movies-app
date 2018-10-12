import React, {Component} from 'react';
import  './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg'
import Model from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Header extends Component{
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0
        }
    }
    tabChangeHandler = (event, value) => {
        this.setState({ value });
    }
    openModalHandler = () => {
        this.setState({ modalIsOpen: true });
    }
    closeModalHandler = () => {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt= "logo" />
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.openModalHandler}>
                            Login
                        </Button>
                     </div>
                 </header>
                <Model
                    ariaHideApp={false}
                    isOpen={this.state.modalIsOpen}
                    contentLabel="Login"
                    onRequestClose={this.closeModalHandler}
                >
                    <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                </Model>
            </div>
        )
    }
}

export default Header;