import { useState, useEffect } from "react";
import axios from "axios";
import { data } from "jquery";

function IpTracker() {

    const [ip, setIP] = useState("");
    const getData = async () => {
        const res = await axios.get("https://api.ipgeolocation.io/ipgeo?apiKey=069668300aa24a0ab1c7e950dc0be94a");
        console.log(res.data);
        setIP(res.data.ip);
        var form = document.getElementById('sheetdb-form');
        fetch(form.action, {
            method: "POST",
            body: new FormData(document.getElementById("sheetdb-form")),
        }).then(
            response => response.json()
        ).then((html) => {
        });
    };

    useEffect(() => { getData(); }, []);

    return (
        <form action="https://sheetdb.io/api/v1/vhc35dylluas0" method="post" id="sheetdb-form">
            <input name="data[ip]" value={ip} hidden></input>
        </form>
    )
}

export default IpTracker;