import { Button, TextField } from '@material-ui/core';
import AutoGrid from './Autogrid'

function weather(props) {
    let cityWithState = props.city === undefined ? '' : `${props.city}, ${props.country}`;
    let currentTemp = props.temp === undefined ? '' : `${props.temp} `;
    let minTemp = props.temp === undefined ? '' : `${props.min} `;
    let maxTemp = props.temp === undefined ? '' : `${props.max} `;
    let description = props.temp === undefined ? '' : `${props.desc} `;
    let icon = props.iconCode === undefined ? '' : `${props.iconCode} `;

    let realData = props.temp === undefined ? props.errorMsg === true ?
        <span style={{fontSize:'25px', color:'red'}}> &#128531; Sorry, Entered city name was not available in our database &#128531;</span> : null : <AutoGrid
            currentTemp={currentTemp}
            min={minTemp}
            max={maxTemp}
            desc={description}
            iconId={icon}></AutoGrid>

    return (
        <div className="weather">
            <form autoComplete="off" onSubmit={props.eventHandler}>
                <TextField id="standard-basic" color="secondary" required={true} placeholder="Chennai" style={{ margin: '2%', width: '250px' }} label="City" />
                <TextField id="standard-basic2" style={{ margin: '2%', width: '200px' }} placeholder="Tamilnadu" label="State (optional)" /><br></br>
                <Button type="submit" variant="contained" color="secondary" style={{ margin: '3%' }}>Get Weather</Button>
            </form>
            <span style={{ fontSize: '40px', color: 'white', top: '20px', margin: '15px', position: 'relative' }}>{cityWithState}</span>
            <div style={{ position: 'relative', top: '30px' }}>
                {realData}
            </div>
        </div>
    );
}

export default weather