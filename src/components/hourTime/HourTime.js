import {useState,useEffect} from 'react';

const HourTime=()=>{
    const [hourTime12,setHourTime12]=useState(new Date().toLocaleString());
    const [hourTime24,setHourTime24]=useState(new Date().toLocaleString("chinese",{hour12: false}));

    useEffect(()=>{
        setInterval(()=>{
            setHourTime12(new Date().toLocaleString());
        },1000);
        setInterval(()=>{
            setHourTime24(new Date().toLocaleString("chinese",{hour12: false}));
        },1000);
    },[]);
    
    return (
        <>
            <div>12小時制: {hourTime12}</div>
            <br />
            <div>24小時制: {hourTime24}</div>
        </>
    );
}

export default HourTime;