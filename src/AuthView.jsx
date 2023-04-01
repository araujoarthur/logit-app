import './App.css'
import React from 'react'
import {LoginForm, RegisterForm} from './Forms'
import  ColumnGrid, { Column } from './ColumnGrid';

export default class AuthView extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <RegisterView />
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
                    <LoginForm />
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
                    <RegisterForm />
                </Column>
                <Column colSpan='6' backGroundColor="lightGrey" extraClasses="p-5 flexbox">
                    wellish
                </Column>
            </ColumnGrid>
        )
    }
}