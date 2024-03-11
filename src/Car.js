// Car.js
import  { Component } from 'react';

class Car extends Component {
  state = {
    message: " empty ",
    couleur: " empty ",
    marque: " empty ",
    kilometrage:" empty "

  };

  afficherCouleur = () => {
    console.log("La couleur de la voiture est :", this.props.couleur);
    this.setState({couleur: `La couleur est: ${this.props.couleur}`})
    const coul = document.getElementById('coul')
    coul.style.visibility="visible"
  };

  afficherMarque = () => {
    console.log("La marque de la voiture est :", this.props.marque);
    this.setState({marque: `La marque est: ${this.props.marque}`})
    const marq = document.getElementById('marq')
    marq.style.visibility="visible"
  };

  afficherKilometrage = () => {
    console.log("Le kilométrage de la voiture est :", this.props.kilometrage);
    this.setState({kilometrage: `Le kilometrage est : ${this.props.kilometrage}`})
    const kilo = document.getElementById('kilo')
    kilo.style.visibility="visible"
  };

  afficherMessage = () => {
   
    this.setState({ message: "Je démarre tout de suit" })
    
    const msg = document.getElementById('msg')
    msg.style.visibility="visible"
    console.log(this.state.message)

  };

  render() {
    return (
      <div>
        <div><p><span id='msg' style={{ visibility: 'hidden' }}>{this.state.message}</span> </p> </div>
        <div><p><span id='coul' style={{ visibility: 'hidden' }}> {this.state.couleur}</span> </p> </div>
        <div><p><span id='marq' style={{ visibility: 'hidden' }}>{this.state.marque}</span></p> </div>
        <div><p><span id='kilo' style={{ visibility: 'hidden' }}>{this.state.kilometrage}</span></p> </div>
        <button onClick={this.afficherMessage}>Afficher message</button>
        <button onClick={this.afficherCouleur}>Afficher couleur</button>
        <button onClick={this.afficherMarque}>Afficher marque</button>
        <button onClick={this.afficherKilometrage}>Afficher kilometrage</button>
       
      </div>
    );
  }
}

export default Car;

