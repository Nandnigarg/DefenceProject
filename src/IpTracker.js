import { useState, useEffect } from "react";
import axios from "axios";
import { data } from "jquery";

function IpTracker() {

    const [IP, setIP] = useState("");
    const getData = async () => {
        const res = await axios.get("https://api.ipgeolocation.io/ipgeo?apiKey=069668300aa24a0ab1c7e950dc0be94a");
        console.log(res.data);
        setIP(res.data.ip);
        console.log(IP);
        axios.post("https://sheet.best/api/sheets/e2f16ba1-26af-4ea7-af7c-eaa60cb7bdc2", {
            "IP": IP
        })
            .then((html) => {
                console.log("ip sent successfully");
            });
    };
    useEffect(() => { getData(); });

    return (
        <div>{console.log[IP]}</div>
    )
}

export default IpTracker;