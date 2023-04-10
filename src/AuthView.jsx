import './App.css'
import React from 'react'
import {LoginForm, RegisterForm} from './Forms'
import  ColumnGrid, { Column } from './ColumnGrid';
import ContentArea, {ArticleHolder, ArticleParagraph} from './ContentArea';

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
            currentView: this.views['LoginView'],
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
                    <ContentArea title="Release Notes">
                        {/* Dynamic Area */}
                        <ArticleHolder title="Article Test" publicationDate="22/03/2023">
                            <ArticleParagraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis luctus lectus, a maximus justo dapibus sed. Mauris fringilla ante eu nunc hendrerit, quis auctor dolor pretium. Nulla at felis mollis, vehicula ante vel, semper ligula. Aenean ac egestas purus. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat sodales sapien vel sagittis. Donec sagittis, elit a egestas facilisis, elit leo feugiat massa, non sodales libero massa vitae nulla. In hac habitasse platea dictumst. Suspendisse potenti. Donec accumsan enim id mauris pellentesque, at dictum lorem viverra. Aliquam sodales ullamcorper tempus. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin vestibulum quam sit amet dui lobortis, et cursus lorem tempor. 
                            </ArticleParagraph>
                            <ArticleParagraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis luctus lectus, a maximus justo dapibus sed. Mauris fringilla ante eu nunc hendrerit, quis auctor dolor pretium. Nulla at felis mollis, vehicula ante vel, semper ligula. Aenean ac egestas purus. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat sodales sapien vel sagittis. Donec sagittis, elit a egestas facilisis, elit leo feugiat massa, non sodales libero massa vitae nulla. In hac habitasse platea dictumst. Suspendisse potenti. Donec accumsan enim id mauris pellentesque, at dictum lorem viverra. Aliquam sodales ullamcorper tempus. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin vestibulum quam sit amet dui lobortis, et cursus lorem tempor. 
                            </ArticleParagraph>
                        </ArticleHolder>
                        {/* End Dynamic Area */}
                    </ContentArea>
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