import React from 'react'

class Pet extends React.Component {
  render() {
    console.log(this.props.petData)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.petData.gender === 'female' ? '♀' : '♂' }
            {this.props.petData.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.petData.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petData.age}</p>
            <p>Weight: {this.props.petData.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.petData.isAdopted === true ?
          <button className="ui disabled button">Already adopted</button>
          :
          <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.petData.id)}>Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
