import './App.css';
import React ,{useState,useEffect} from 'react'
import Loading from './components/Loading';
import Tourslist from './components/Tourslist';

const url = 'https://course-api.com/react-tours-project';
function App() {
  const[loading,setLoading] = useState(true)
  const[tours,setTours] = useState([])

  const removeTours = (id) => {
      const newTours = tours.filter((tour) => tour.id != id)
      setTours(newTours);
  }
  const fetchTours = async () =>{
    setLoading(true)
    try{
    const response = await fetch(url);
    const tours = await response.json();
    console.log(tours)
    setLoading(false);
    setTours(tours)
    }
    catch(error){
      setLoading(false);
      
    }
  }

  useEffect(() => {
    fetchTours();
  },[])
  if(loading)
  {
    return(
      <Loading />
    )
  }
  if(tours.length === 0)
  {
    return(
      <button onClick = {fetchTours}>Refresh</button>
    )
  }
  return (
    <div className="App">
     <Tourslist tours = {tours} removeTours = {removeTours} />
    </div>
  );
}

export default App;
