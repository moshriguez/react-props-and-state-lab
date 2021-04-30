import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  petComponent = () =>{
    return this.props.petData.map(petObject => {
      
      return <Pet onAdoptPet={this.props.onAdoptPet} petData = {petObject}/>
    })
  }

  render() {
    return <div className="ui cards">{this.petComponent()}</div>
  }
}

export default PetBrowser
