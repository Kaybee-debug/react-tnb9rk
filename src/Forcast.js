import React,{useState} from 'react';//to container vaiable
import "./style.css";

 function Forcast({handleLogout}) {
   const apiKey = '3c65aed1976bfc700bf3f69ba8c98cc9'

   //state variable to store data
   const [weatherData,setWeatherData]= useState([{}])
   const [city,setCity]=useState("")
//get weather function
   const getWeather=(event)=>{
     if (event.apiKey == "Enter"){
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial$APPID=${apiKey}`).then(
       response => response.json()
       ).then(
         data =>{
           setWeatherData(data)
          setCity("")
         }
       )
     }
   }
  return (
    <div className ="container">
      <input
       className="input"
        placeholder="Enter city..."
        onChange={e => setCity(e.target.value)}//it set value to the city variable
        value={city}
        onKeyPress={getWeather}//call get weather function
        />
        {/*display weather */}
     {typeof weatherData.main == 'undifined' ? (
       <div>
         <p>Welcome to weather app!Enter in a city to get the weather of.</p>
       </div>
     ):(
       <div className="weather-data">
        <p className="city">{weatherData.name}</p>
         <p className="temp">{Math.round(weatherData.main?.temp())}°F</p>
     <p className="weather">{weatherData.main}</p>
         </div>
     )}
     {weatherData.cod == "404" ? (
       <p>City not found</p>
     ):(
       <>
       </>
     )}
      <nav>
            <button onClick={handleLogout}>logout</button>
          </nav>
    </div>
    
  )
}

export default Forcast