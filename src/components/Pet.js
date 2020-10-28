import React from 'react'

class Pet extends React.Component {

  //document.getElementByClass('extra').append(renderButton)

  renderButton = () => {
    console.log(this.props.pet.isAdopted)
    if(this.props.pet.isAdopted){
      let butts = <button className="ui disabled button">Already adopted</button>
      return butts
      //hide "adopt pet button" - ie the primary
    }
    else{
      let butts = <button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>
      return butts
      //hide "already adopted" - ie the disabled
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender == 'female' ? '♀' : '♂'}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type.toUpperCase()}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.renderButton()}
        </div>
      </div>
    )
  }
}

export default Pet
