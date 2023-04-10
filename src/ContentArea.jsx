import React from 'react'
import './App.css'
import { TfiBook, TfiAngleDown, TfiAngleUp, TfiAlert, TfiInfoAlt, TfiCheckBox, TfiPencilAlt} from "react-icons/tfi";

export default class ContentArea extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <>
                <h2 className='text-3xl font-black text-center'>{this.props.title}</h2>
                <div className='mt-3'>
                    {this.props.children}
                </div>
            </>
        )
    }
}

export class ArticleHolder extends React.Component {
    constructor(props) {
        super(props);
        this.handleOpen = this.handleOpen.bind(this);

        this.state = {
            isOpen:  false,
        }
    }

    handleOpen() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }

    render() {
        return (
            <article className='border border-solid border-darkGrey rounded-md p-5'>
                <ArticleHeader open={this.state.isOpen} clickHandler={this.handleOpen} title={this.props.title} publicationDate={this.props.publicationDate} />
                <ArticleContent open={this.state.isOpen}>
                    {this.props.children}
                </ArticleContent>
                <ArticleNote title="Note Test Title Very Large for Breaking Purposes">
                    osakfpASKPOKSApogKOPASkgpos POSKFopaSKFPOAKSOPGKSAopg AOSfOSAKfOPSAKPOGKASOPGKPOASGK
                </ArticleNote>
            </article>
        )
    }
}

class ArticleHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="articleHeader" className='flex items-center'>
                <TfiBook className='inline-block mr-2'/> <span className='font-black'>{this.props.title}</span><span className='text-[10px] ml-auto'>Published on: {this.props.publicationDate}</span> <ArticleDropdownButton clickHandler={this.props.clickHandler} open={this.props.open}/>
            </section>
        )
    }
}

class ArticleDropdownButton extends React.Component {
    render() {
        return (
            this.props.open ? <TfiAngleUp onClick={() => this.props.clickHandler()} className='inline-block ml-2 cursor-pointer'/> : <TfiAngleDown onClick={() => this.props.clickHandler()} className='inline-block ml-2 cursor-pointer'/>
        )
    }
}

class ArticleContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { open:isOpen, children } = this.props;
        return (
            <section className={`${isOpen ? '' : 'hidden'}`}>
                <hr className='border-newlightGrey-400 mb-2 text-justify'/>
                { children }
            </section>
        )
    }
}

export class ArticleParagraph extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <p className="text-justify indent-8 text-sm mb-3">
            {this.props.children}
        </p>
        )
    }
}

export class ArticleAlert extends React.Component {
    constructor(props) {
        super(props);
        this.alertClasses = {
            error:{
                outerDiv:'bg-alertRedBG',
                icon:<TfiAlert className="inline text-[25px] text-alertRedText mr-3"/>,
                paragraph:'text-alertRedText'
            },
            caution:{
                outerDiv:'bg-alertYellowBG',
                icon:<TfiAlert className="inline text-[25px] text-alertYellowText mr-3"/>,
                paragraph:'text-alertYellowText'
            },
            info:{
                outerDiv:'bg-alertBlueBG',
                icon:<TfiInfoAlt className="inline text-[25px] text-alertBlueText mr-3"/>,
                paragraph:'text-alertBlueText'
            },
            success:{
                outerDiv:'bg-alertGreenBG',
                icon:<TfiCheckBox className="inline text-[25px] text-alertGreenText mr-3"/>,
                paragraph:'text-alertGreenText'
            }
        }
    }

    render() {
        const { type='danger' } = this.props;
        return (
            <div className={`rounded-full flex items-center bg-opacity-80 px-5 py-3 mb-3 ${this.alertClasses[type].outerDiv}`}>
               {this.alertClasses[type].icon} <p className={`inline font-medium ${this.alertClasses[type].paragraph}`}>{this.props.children}</p>
            </div>
        )
    }
}

export class ArticleNote extends React.Component {
    
    render() {
        return (
            <div className='p-5 mt-4 rounded-lg border-jetBlack border border-solid'>
                <div className='relative bottom-[35px] bg-lightGrey inline align-middle px-3 font-bold'><TfiPencilAlt className="inline-block mr-3 " />{this.props.title}</div>
                <div className='relative bottom-[20px]'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}