import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  const {toys, handleDonateBtn} = props

  // const [toys, setToys] = useState([])

  // useEffect(
  //   () => {
  //   fetch('http://localhost:5000/toys')
  //     .then(response => response.json())
  //     .then(toyData => setToys(toyData))
  // }, []
  // )

  // const handleDonateBtn = (id) => {
  //   const updatedToys = toys.filter((toy) => {
  //     return toy.id !== id
  //   })
  //   setToys(updatedToys)
  // }

  const renderToyCards = () => {
    return toys.map((toy, index) => {
      return <ToyCard key={index} toy={toy} handleDonateBtn={handleDonateBtn}/>  
    })
  }

  return(
    <div id="toy-collection">
      {renderToyCards()}
    </div>
  );
}

export default ToyContainer;
