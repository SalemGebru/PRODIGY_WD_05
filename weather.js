const apiKey='35f2ac0adbae38faf8552f9d33313a43';

const city=document.getElementById('location');
const search=document.getElementById('get-weather');
let image=document.getElementById('weather-icon');


city.addEventListener('keypress',(e)=>{
  if(e.key==='Enter'){
    getWeather();
  }
});
search.addEventListener('click',getWeather);

async function getWeather(){
   
    if(city.value==''){
        alert('Please enter city.');
        return;
    }
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city.value)}&units=metric&appid=${apiKey}`;
    try{
        const response=await fetch(apiUrl);
        if(!response.ok){
            throw new Error('City not found. Please relog.')
        }
        var data=await response.json();

    updateImage(data.weather[0].main);
    document.getElementById('temp').innerHTML=data.main.temp;
    document.getElementById('city').innerHTML=data.name;
    document.getElementById('humidity').innerHTML= data.main.humidity;
    document.getElementById('windSpeed').innerHTML=data.wind.speed;
    document.getElementById('pressure').innerHTML=data.main.pressure;
    document.getElementById('sealevel').innerHTML=data.main.sea_level;
    
    }
    catch(error){
        console.error('Error fetching data',error);
        alert(error.message);
    }
  
    
}
function updateImage(weather){
    switch(weather){
        case 'Clear':
            
            image.src='clear-removebg-preview.png';
            image.style.width='200px';
            image.style.height='200px';

            
            break;
        case 'Rain':
            image.src='rain2-removebg-preview.png';
            image.style.width='200px';
            image.style.height='200px';
            
            break;
        case 'Snow':
            image.src='snowy-removebg-preview.png';
            image.style.width='200px';
            image.style.height='200px';
            
            break;
        case 'Clouds':
           
            image.src='cloudy-removebg-preview.png';
            image.style.width='200px';
            image.style.height='200px';
            
            break;
        default:
            image.src='defaulted-removebg-preview.png';
            image.style.width='200px';
            image.style.height='200px';
            
            break;
    }

}