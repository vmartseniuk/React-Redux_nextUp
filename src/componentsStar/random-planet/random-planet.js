import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'
import Spiner from '../spiner/spiner'
import ErrorIndicator from '../error-indicator'
import './random-planet.css';
import PropTypes from 'prop-types'
export default class RandomPlanet extends Component {

    SwapiService = new SwapiService()

    static defaultProps = {
        updateInterval:10000
    }  /// use this metod i can say default value

    // static propTypes = {
    //     updateInterval: PropTypes.number
    // }
    // static propTypes ={
    //     updateInterval: (props, propName, componentName) => {
    //         const value = props[propName]
    //         if ( typeof value === 'number' && !isNaN(value)){
    //             return null
    //         }
    //         return new TypeError(`${componentName}: ${propName} must be a number`)
    //     }
    // } not use npm check prop-type

    state = {
        planet: {},
        loading: true,
        error:false
    }
    
    componentDidMount() {
        this.interval = setInterval(this.updatePlanet, this.props.updateInterval)
    }

    componentWillMount() {
        clearInterval(this.interval)
    }

    onPalnetLoaded = (planet) => {
        this.setState({
            planet,
            loading:false
        })
    }

    onError = err => {
        this.setState({
            error:true,
            loading: false
        })
    }

    updatePlanet = () => {
      const id = Math.floor(Math.random()*17) + 3;
        this.SwapiService
        .getPlanet(id)
        .then(this.onPalnetLoaded)
        .catch(this.onError)
    }

  render() {
    const {planet, loading, error} = this.state

    const hasData = !(loading || error)

    const errorMessage = error ? <ErrorIndicator/> : null
    const spiner = loading ? <Spiner/>: null
    const content = hasData ? <PlanetView planet={planet}/> : null
    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spiner}
        {content}
      </div>

    );
  }

  
}

const PlanetView = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet
    return(
        <React.Fragment>
            <img className="planet-image" alt='img' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
        </React.Fragment>
    )
}