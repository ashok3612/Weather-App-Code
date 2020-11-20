import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { WiDaySunny, WiDayStormShowers, WiDaySleet, WiDayRainMix, WiDaySnowWind, WiDaySprinkle, WiDaySunnyOvercast } from "weather-icons-react";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

function createIcon(id) {

    let icon = null;
        if( id >= 200 && id <= 232){icon = <WiDayStormShowers size={70} color='#fff' />;}
        else if( id >= 300 && id <= 321){icon = <WiDaySleet size={70} color='#fff' />;}
        else if( id >= 500 && id <= 531) {icon = <WiDayRainMix size={70} color='#fff' />;}
        else if( id >= 600 && id <= 622) { icon = <WiDaySnowWind size={70} color='#fff' />; }
        else if( id >= 701 && id <= 781) { icon = <WiDaySprinkle size={70} color='#fff' />; }
        else if( id == 800) { icon = <WiDaySunny size={70} color='#fff' />;  }
        else if( id >= 801 && id <= 804) { icon = <WiDaySunnyOvercast size={70} color='#fff' />; }
    return icon;
}

export default function AutoGrid(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs></Grid>
                <Grid item xs>
                    <span style={{ fontSize: '40px', top: '10%', color: 'white' }}>{props.currentTemp}&deg;</span><br></br>
                </Grid><Grid item xs>

                </Grid>
            </Grid>
            <Grid container spacing={4}>
                <Grid item xs></Grid>
                <Grid item xs>
                    <div >
                        {createIcon(props.iconId)}
                    </div>
                </Grid><Grid item xs></Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs></Grid>
                <Grid item xs>
                    <span style={{ fontSize: '30px', color: 'white' }}>Min : {props.min}&deg;</span>
                </Grid>
                <Grid item xs>
                    <span style={{ fontSize: '30px', color: 'white' }}>Max : {props.max}&deg;</span>
                </Grid>
                <Grid item xs></Grid>
            </Grid>
            <br></br>
            <span style={{ fontSize: '20px', color: 'white', top: '25px', position: 'relative' }}>{props.desc}</span>
        </div>
    );
}
