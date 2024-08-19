import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherApi } from "../../redux/ApiSlice";
import { SearchNote } from "../../redux/NodeSlice";
import ScrollReveal from 'scrollreveal';

export default function SearchBar() {

  useEffect(() => {
    ScrollReveal().reveal('.input-group, Weather-Location', {
      duration: 1000,
      distance: '50px',
      easing: 'ease-in-out',
      origin: 'top',
      opacity: 0,
    });
  }, []);


  const dispatch = useDispatch();
  const weatherState = useSelector((state) => state.weather);
  const weather = weatherState?.data;
  const weatherStatus = weatherState?.status;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        dispatch(getWeatherApi({ lat: latitude, lon: longitude }));
      },
      () => {
        console.log("There was an error getting the location.");
      }
    );
  }, [dispatch]);

  console.log("Weather State:", weatherState);

  const HandleSearchNote= (e)=>{
    dispatch(SearchNote(e.target.value));
  }

  return (
    <div className="container">
      <div className="row d-flex justify-content-between">
        <div className="col-md-10">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input type="text" className="form-control" placeholder="Search" onChange={HandleSearchNote} />
          </div>
        </div>
        <div className="col-md-2">
          <div className="Weather-Location">
            {weatherStatus === "pending" && <p>Loading...</p>}
            {weatherStatus === "fulfilled" && weather && (
              <div className="d-flex">
                <div>
                  <i class="fa-solid fa-temperature-three-quarters"></i>
                </div>
                <div>
                  <p>
                    <b>{(weather.main.temp - 273.15).toFixed(2)}°C</b>
                  </p>
                  <span className="mb-5">{weather.name}</span>
                </div>
              </div>
            )}
            {weatherStatus === "rejected" && <p>Error loading weather</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
