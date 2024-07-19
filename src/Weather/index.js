import './index.css'
const Weather=()=>{
    return(
        <form>
           <div className="topnav">
            <h2>Ali</h2>
            <div className="navbar">
            <input placeholder="Enter city name"/>
            <img src="/images/search.png" alt="search" className="search-icon" />
            </div>
            <img src="/images/hamburger-menu.png" className="harmburger-menu"/>
            </div>
            <img src="/images/weather template.jpg" className="weather-pic"/>
            <br>
            </br>
            <br>
            </br>
            <div className='weather-principles'>
                <div className='humidity-sunset'>
                    <div className='humidity'>
                        <div>
                        <img src = "/images/humidity.png" className='humidity-image'/>
                        </div>
                        <div className='humidity-stats'>
                            <p>Humidity</p>
                            <p>32%</p>
                        </div>
                    </div>
                    <div className='sunset'>
                        <div>
                        <img src = "/images/sunset.png" className='sunset-image'/>
                        </div>
                        <div className='sunset-stats'>
                            <p>Sunset</p>
                            <p>7:50 pm</p>
                        </div>
                    </div>
                    <br>
            </br>
            <br>
            </br>
                </div>
                <div className='uv-sunrise'>
                    <div className='uv'>
                        <div>
                        <img src = "/images/sun.png" className='uv-image'/>
                        </div>
                        <div className='uv-stats'>
                            <p>UV Index</p>
                            <p>0 of 10</p>
                        </div>
                    </div>
                    <div className='sunrise'>
                        <div>
                        <img src = "/images/sunrise.png" className='sunrise-image'/>
                        </div>
                        <div className='sunrise-stats'>
                            <p>Sunrise</p>
                            <p>5: 45am</p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Weather;