import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      certificados: [],
    }
    this.fetchCertificados = this.fetchCertificados.bind(this);
  }
 
  componentDidMount() {
    this.fetchCertificados();
  }

  fetchCertificados() {
    fetch('https://itflex-cerificados.herokuapp.com/certificados')
      .then(response => response.json())
      .then(data => {
        this.setState({
          certificados: data,

        })
      })
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
