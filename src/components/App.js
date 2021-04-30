import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (e) => {
    // console.log(e.target.value)
    this.setState({
      filters: {
      [e.target.name]: e.target.value
      }
    })
  }

  onFindPetsClick = () => {
    let url = '/api/pets'
    if (this.state.filters.type !== 'all') {
      url = '/api/pets?type=' + this.state.filters.type
    }
    fetch(url)
    .then(resp => resp.json())
    .then(json => this.setState({pets: json}))

  }

  onAdoptPet = (id) => {
    // let otherSomething = this.state.pets
    // let something = 
    // something.isAdopted = true
    // console.log('it works')
    this.setState({
      pets: this.state.pets.map(pObj => {
        if(pObj.id === id){
          return {...pObj, isAdopted: true}
        } else {
          return pObj
        }
      })
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser petData={this.state.pets} 
              onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
