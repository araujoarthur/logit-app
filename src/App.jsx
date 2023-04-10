import React from 'react'
import './App.css'
import AuthView from './AuthView'
import AnimatedTest, { AnimatedTestClass } from './AnimatedComponent';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){

    document.title = 'Logit - Login';

  }

  render() {
    return (
      <>
      <AuthView />
     {/* <AnimatedTestClass /> */}
      </>
    )
  }
}


