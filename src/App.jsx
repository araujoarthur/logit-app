import React from 'react'
import './App.css'
import AuthView from './AuthView'

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
      </>
    )
  }
}


