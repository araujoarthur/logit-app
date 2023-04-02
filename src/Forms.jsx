import React from 'react'

export class LoginForm extends React.Component {

    render() {
        return (
            <>
                <FormTitle>LogIt Login</FormTitle>
                <div id="loginBox" className='bg-pureWhite p-3 lg:p-5 rounded-3xl'>
                    <form>
                        <FormInput tabIndex={0} type="text" placeholder="Username" id="usernameInput" name="usernameInput"/>
                        <FormInput tabIndex={1} type="password" placeholder="Password" id="passwordInput" name="passwordInput" marginTop={2}/>
                        <FormLoginButtonBox changeView={this.props.changeView} className="mt-3 content-center text-center"/>
                    </form>
                </div>
            </>
        )
    }
}

export class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            UserAgreementsChecked:false,
        };
        this.handleUserAgreements = this.handleUserAgreements.bind(this);
    }

    handleUserAgreements(){
        this.setState(
            prevState => ({
                UserAgreementsChecked:!prevState.UserAgreementsChecked,
            })
        );
    }

    render() {
        return (
            <>
                <FormTitle>LogIt Registration</FormTitle>
                <div id="registerBox" className='bg-pureWhite p-3 lg:p-5 rounded-3xl'>
                    <form>
                        <FormSection sectionName="About you">
                            <FormInput type="text" placeholder="First Name" marginTop='2' name="firstNameInput"/>
                            <FormInput type="text" placeholder="Last Name" marginTop='2' name="lastNameInput"/>
                            <div className="flex items-center mt-2 align-middle justify-content-center text-center">
                                <label htmlFor="lastNameInput" className='text-xs text-darkGrey'>Birthday:</label>
                                <FormInput type="date" placeholder="Birth Name" name="birthdayInput" className="ml-auto"/>
                            </div>
                        </FormSection>
                        <FormSection sectionName="Account info" className="mt-3">
                            <FormInput type="text" placeholder="Username" marginTop='2' name="usernameInput"/>
                            <FormInput type="email" placeholder="Email" marginTop='2' name="emailInput"/>
                            <FormInput type="email" placeholder="Email Confirmation" marginTop='2' name="emailConfirmationInput"/>
                            <FormInput type="password" placeholder="Password" marginTop='2' name="passwordInput"/>
                            <FormInput type="password" placeholder="Password Confirmation" marginTop='2' name="passwordConfirmationInput"/>
                        </FormSection>
                        <UserAgreements onClick={this.handleUserAgreements} checked={this.state.UserAgreementsChecked}/>
                        <FormRegisterButtonBox changeView={this.props.changeView} className="mt-3 content-center text-center"/>
                    </form>
                </div>
            </>
        )
    }  
}

class FormTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1 className='font-semibold text-pureWhite text-sm mb-3 inline-block bg-lightGrey bg-opacity-30 py-2 px-4 rounded-full'> { this.props.children } </h1>
        )
    }
}

class FormSection extends React.Component {
    render() {
        return (
            <section>
                <div className={`flex items-end ${this.props.className}`} >
                <span className='text-xs inline'>{this.props.sectionName}</span> <hr className='ml-2 mb-1 grow border-newlightGrey-300' />
                </div>
                {this.props.children}
            </section>
        )
    }
}

class FormInput extends React.Component {
    render() {
        const { marginTop=0, ...rest } = this.props;
        return (
            <input {...rest} name={this.props.name} type={this.props.type} id={this.props.id} className={`bg-darkGrey bg-opacity-30 rounded-full font-medium px-3 py-1 placeholder:font-normal placeholder:text-newLightGrey-200 mt-${marginTop} ${this.props.className}`} placeholder={this.props.placeholder} />
        )
    }
}

class FormLoginButtonBox extends React.Component {
    render() {
        const {changeView, ...otherProps} = this.props
        return (
            <div {...otherProps}>
                 <FormButton>Log In</FormButton> <span className='text-sm'>or <span role="button" className="cursor-pointer font-black text-lightBlue hover:text-darkBlue" onClick={() => changeView('RegisterView')}>Create an account</span></span>
            </div>
        )
    }
}

class FormRegisterButtonBox extends React.Component {
    render() {
        const { changeView, ...otherProps } = this.props;
        return (
            <div {...otherProps}>
                 <FormButton>Register</FormButton> <span className='text-sm'>or <span role="button" className="cursor-pointer font-black text-lightBlue hover:text-darkBlue" onClick={() => changeView('LoginView')}>Log In</span></span>
            </div>
        )
    }
}

class FormButton extends React.Component {
    render() {
        return (
            <button className='bg-lightBlue text-pureWhite hover:bg-pureWhite hover:text-lightBlue rounded-full py-[2px] px-4'> {this.props.children} </button>
        )
    }
}

class UserAgreements extends React.Component {
    constructor(props) {
        super(props);
        this.checkBoxReference = React.createRef();
    }

    handleClick() {
        this.props.onClick();
    }

    render() {
        const checkClass = this.props.checked ? "bg-lightBlue" : "bg-newlightGrey-300";
        return (
            <>
                <input ref={this.checkBoxReference} type="checkbox" name="UserAgreements" id="UserAgreements" className='hidden' />
                <label onClick={() => this.handleClick()} htmlFor="UserAgreements" className='text-[10px] mt-2 items-center flex cursor-pointer'> 
                    <div className={`h-[12px] w-[12px] rounded-full border ${checkClass}`}></div>
                    <p>&nbsp; I agree with <a>User Terms & Agreements</a></p>
                </label>
            </>
        )
    }
}