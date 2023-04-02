import './App.css'
import React from 'react'
import {LoginForm, RegisterForm} from './Forms'
import  ColumnGrid, { Column } from './ColumnGrid';

export default class AuthView extends React.Component {
    constructor(props){
        super(props);

        this.handleViewChange = this.handleViewChange.bind(this);

        this.buttonClickHandlers = {
            LoginView:null,
            RegisterView:null
        }

        this.views = {
            LoginView:<LoginView changeView={this.handleViewChange}     />, 
            RegisterView:<RegisterView changeView={this.handleViewChange} />
        }

        this.state = {
            currentView: this.views['RegisterView'],
        }
    }

    handleViewChange(newView){
        this.setState(prevState => ({
            currentView: this.views.hasOwnProperty(newView) ? this.views[newView] : this.views[prevState.currentView],
        }));
    }

    render() {
        return (
            <>
                {this.state.currentView}
            </>
        )
    }
}

class LoginView extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <ColumnGrid columns='8'>
                <Column colSpan='2' backGroundColor='lightBlue' extraClasses="flex flex-col items-center justify-center p-5">
                    <LoginForm changeView={this.props.changeView}/>
                </Column>
                <Column colSpan='6' backGroundColor="lightGrey" extraClasses="p-5 flexbox">
                    wellish
                </Column>
            </ColumnGrid>
        )
    }
}

class RegisterView extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <ColumnGrid columns='8'>
                <Column colSpan='2' backGroundColor='lightBlue' extraClasses="flex flex-col items-center justify-center p-5">
                    <RegisterForm changeView={this.props.changeView} />
                </Column>
                <Column colSpan='6' backGroundColor="lightGrey" extraClasses="p-5 flexbox">
                    wellish
                </Column>
            </ColumnGrid>
        )
    }
}