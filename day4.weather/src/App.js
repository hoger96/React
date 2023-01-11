import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

//1. 앱이 실행되자마자 현재위치기반의 날씨가 보임
//2. 도시, 섭씨, 화씨, 날씨 상태정보가 보임
//3. 5개의 버튼이 있음(현재위치, 다른도시 4개)
//4. 도시버튼 클릭할때마다 도시별 날씨가 나옴
//5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나옴
//6. 데이터를 들고오는 동안 로딩스피너가 돔

//도시정보(배열)
const cities = ['Tokyo', 'Paris', 'New york', 'Seoul']

function App() {
  //날씨정보
  const [weather,setWeather] = useState(null);
  const [city, setCity] = useState('');
  //로딩state(true일때 돌아감)
  const[loading, setLoading] = useState(false);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  //api call 복사해오기
  const getWeatherByCurrentLocation = async (lat, lon) => {
    //섭씨로 바꾸고 싶어서 사이트에서 쓰라고 하는것 url 뒤에 & 붙여서 쓰기
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=72eb769d17adc8c74b6e269f7dbead18&units=metric`;
    setLoading(true);
    //await 쓰려면 함수가 async여야 함(비동기)
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  //도시별날씨(useState에 city값을 넣기)
  const getWeatherByCity = async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=72eb769d17adc8c74b6e269f7dbead18&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  }

  //다시 현재지역 누르면 현재지역 나오는 함수
  const handleCityChange = (city) => {
    if(city === "current"){
      setCity(null);
    }else {
      setCity(city);
    }
  };

  //UI가 render 하고 실행됨
  //상황에 맞춰서 호출을 달리 해야함
  useEffect(() => {
    if(city==""){
      getCurrentLocation();
    }else{
      setLoading(true);
      getWeatherByCity();
    }   
  }, [city]);

  return (
    <div>
      {loading?
      <div className="container">
        <ClipLoader
          color="orange"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      :
      <div className="container">
        <WeatherBox 
        weather={weather}
        />
        <WeatherButton 
        cities={cities} 
        handleCityChange={handleCityChange}
        selecterCity={city}
        />
      </div>
      }
    </div>
  );
}

export default App;
