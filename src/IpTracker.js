import { useState, useEffect } from "react";
import axios from "axios";

function IpTracker(){

    const [ip, setIP] = useState("");
    const getData = async () => {
        const res = await axios.get("https://api.ipgeolocation.io/ipgeo?apiKey=069668300aa24a0ab1c7e950dc0be94a");
        console.log(res.data);
        setIP(res.data.ip);
      };
    
      useEffect(() => {getData();}, []);

    return(
        <div>{console.log(ip)}</div>
    )
}

export default IpTracker;