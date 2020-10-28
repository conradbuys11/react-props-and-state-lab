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

  onChangeType = (value) => {
    this.setState({filters: {
      type: value
    }
  })
    //this.setState, change state.filters.type
  }

  onFindPetsClick = () => {
    let selection = this.state.filters.type
    let url = '/api/pets'

    if(selection == 'all'){
      //do nothing, url is good!
    }
    else{
      url += `?type=${selection}`
    }
    
    fetch(url)
    .then(data => data.json())
    .then(petArray => {
      console.log(petArray)
      this.setState({
        pets: petArray
      })
    })

    //fetch this.state.pets? using fetch('/api/pets', parameter?)
    //keep this.state.filters in mind
      //if all, send the fetch to '/api/pets'
      //if cat, send fetch to '/api/pets?type=cat'
      //same for dog & micropig
    //set state.pets w result of fetch request
  }

  onAdoptPet = (id) => {
    //console.log(id)
    let updatedState = this.state.pets //making a "new state" with our current state.pets data
    let thisPet = updatedState.find(pet => pet.id === id) //finding one specific pet
    thisPet.isAdopted = true //setting its isAdopted to true
    console.log(thisPet)
    
    this.setState({pets: updatedState}) //pushing that one change - remember that this has ALL of the state data from before
    
    
    
    //if is adopted is true... 
    //go through this.state.pets to find pet w id
    //take that pet, set isAdopted in that pet to true
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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
