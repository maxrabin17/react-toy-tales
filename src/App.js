import React, {useState, useEffect} from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


const App = () => {

  const [toys, setToys] = useState([])
  const [display, setDisplay] = useState(false)

  const handleClick = () => {
  let newBoolean = !display
      setDisplay(newBoolean)
  }

  useEffect(
    () => {
    fetch('http://localhost:5000/toys')
      .then(response => response.json())
      .then(toyData => setToys(toyData))
  }, []
  )

  const handleDonateBtn = (id) => {
    const updatedToys = toys.filter((toy) => {
      return toy.id !== id
    })
    setToys(updatedToys)
  }
  
  // state = {
  //   display: false
  // }
  
  
  const addNewToy = (e) => {
    e.preventDefault()
    const newName = e.target.name.value
    const newImage = e.target.image.value
    // console.log(e.target.image.value)
    const newToy = {
      name: newName,
      image: newImage,
      likes: 0
    }
    
    const configObj = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newToy)
    }
    
    fetch('http://localhost:5000/toys', configObj)
    .then(response => response.json())
    .then(toyData => setToys(toyData))
  }
  
  
    return (
      <>
        <Header/>
        {display
            ?
          <ToyForm addNewToy={addNewToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={toys} handleDonateBtn={handleDonateBtn}/>
      </>
    );
  }

export default App;
