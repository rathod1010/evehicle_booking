import React from "react";
import img1 from "../images/vehuclebg.jpg"
function Home() {
    return (

        <div>
            <img src={img1} style={{ width: "100%", height: "92vh", objectFit: "cover" }}></img>
        </div>
    )
}
export default Home;