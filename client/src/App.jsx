import { useEffect, useState } from 'react'
import ListHeader from './components/ListHeader'
import axios, { AxiosError } from 'axios'
import ListItem from './components/ListItem'
import Modal from './components/Modal'
import freeboy from './assets/boy_435046.png'
import explorer from './assets/explorer_8995653.png'
import pirate from './assets/pirate_1010047.png'

const App = () => {
  const [data, setData] = useState([])
  const [fetchError, setFetchError] = useState(null)
  const [singleData, setSingleData] = useState({})
  const [showModal, setShowModal] = useState(false)

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/customers')
      if (response.status === 404) {
        throw new AxiosError('No items found')
      }
      const data = await response.data
      setData(data)
    } catch (error) {
      setFetchError(error.message)
    }
  }

  const getSingleData = async () => {
    const id = 1
    try {
      const response = await axios.get(`http://localhost:8000/customers/${id}`)
      setSingleData(response.data[0])
    } catch (error) {
      console.log(error)
    }
  }

  const postNewCustomer = async () => {}

  // let imageArray = [ freeboy ,  explorer ,  pirate ]
  // console.log(imageArray)
  // const getRandomIndex =  Math.floor(Math.random() * imageArray.length)
  // const [randomImage, setRandomImage] = useState({})

  // console.log(randomImage)

  useEffect(() => {
    getData()
    // setRandomImage(imageArray[getRandomIndex])
  }, [])

  const sortedData = data.sort((a, b) => b.id - a.id)

  return (
    <div className='app'>
      <ListHeader
        listname='Peepls'
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {fetchError && <h1>{fetchError}</h1>}
      <div className='list-item-container'>
        {!fetchError &&
          sortedData &&
          sortedData.map((singleSortedData) => {
            return (
              <ListItem
                key={singleSortedData.id}
                data={singleSortedData}
                showModal={showModal}
                setShowModal={setShowModal}
              />
            )
          })}
      </div>
      {showModal && (
        <div className='showModalCase'>
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
      )}
    </div>
  )
}

export default App
