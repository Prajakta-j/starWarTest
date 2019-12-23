import React from 'react';
import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';

const Header = loadable(() => import('./component/Header/Header'));
const Button = loadable(() => import('./component/Main/Button'));



export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.input = React.createRef();
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.input.current.value);
      event.preventDefault();
    }

    render() {
      return (
        <div>
          <Header/>
          <Button/>
        </div>
      );
    }
}
