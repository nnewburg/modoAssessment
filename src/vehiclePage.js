import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react'
import axios from 'axios';
import './App.css';


class Vehicle extends Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {

    let vehicleElements  = this.props.attributes

    return (

      <div className="vehicleCard">
        <div className="vehicleText">
          <p>Vehicle #: {vehicleElements.id}</p>
          <p className="vehicleCardName">{vehicleElements.make} - {vehicleElements.model} - {vehicleElements.colour}</p>
          <p>{vehicleElements.location_description}</p>
        </div>
      </div>
    )
  }
}


class VehiclePage extends Component {
  constructor(props) {
    super(props);
    this.state = { vehicles: [] };
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/vehicles`)
      .then(res => {
        const vehicles = res.data;
        this.setState({ vehicles });
      })
  }

  render() {

    const { vehicles } = this.state

    return (

      <div className="vehicleContainer">
        <div className="vehicleHeader">
          <div className="iconHeaderContainer">
            <Icon name='car' size='huge' />
            <Header as='h1'>All Vehicles</Header>
          </div>
        </div>

        <div className="vehicleCardsContainer">

          {(vehicles && vehicles.length > 0) ? vehicles.map((vehicle) =>
          (<Vehicle attributes={vehicle} />
          )) : <div></div> }
        </div>
      </div>
    )
  }
}

export default VehiclePage;