import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { fadeInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";

import IDContext from "./App";
import InfoButton from "./InfoButton";

import "./plantMain.css";

import SunImg from "./assets/icons8-sun-100.png";
import TempImg from "./assets/icons8-thermometer-100.png";
import WaterImg from "./assets/icons8-wet-100.png";
import placeholderimg from "./assets/placeholderimg.png";

const styles = {
  fadeInDown: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInDown, "fadeInDown")
  }
};

const Plant = props => {
  const [id] = useContext(IDContext);
  const [plantData, setPlantData] = useState([]);
  useEffect(() => {
    fetch("http://api-dev22.eu-west-1.elasticbeanstalk.com/plants/" + id)
      .then(res => res.json())
      .then(res => setPlantData(res));
  }, [id]);
  return (
    <StyleRoot id="plant-container">
      <div id="plant-image-container">
        <img src={plantData["picture"]} alt="plant image" id="plant-image" />
        {/* <img src={placeholderimg} alt="plant image" id="plant-image" /> */}
      </div>
      <div id="plant-info">
        <h3>- P L A N T O P E D I A</h3>
        <h1 className="plant-name" style={styles.fadeInDown}>
          {plantData["name"]}
        </h1>
        <h3 style={{ fontFamily: "Open Sans Condensed", fontSize: "1.5em" }}>
          AKA {plantData["names"]}
        </h3>
        <p className="plant-data">{plantData["description"]}</p>
        <button>MORE INFO</button>
        {/* <button>A-Z INDEX</button> */}
      </div>
      <div id="info-buttons">
        <InfoButton value="light" img={SunImg} plantData={plantData["light"]} />
        <InfoButton
          value="temperature"
          img={TempImg}
          plantData={plantData["temperature"]}
        />
        <InfoButton
          value="watering"
          img={WaterImg}
          plantData={plantData["watering"]}
        />
        <div className="info-button-div">
          <button className="info-button buying">BUYING OPTIONS</button>
        </div>
      </div>
    </StyleRoot>
  );
};

export default Plant;

// export default class Plant extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loaded: false,
//       data: {
//         description: "",
//         fertilizer: "",
//         href: "",
//         humidity: "",
//         id: 0,
//         light: "",
//         name: "",
//         names: "",
//         origin: "",
//         picture: "https://www.houseplantsexpert.com/image-files/croton1.jpg",
//         repotting: "",
//         soil: "",
//         temperature: "",
//         watering: ""
//       }
//     };
//   }
//   fetchData() {
//     fetch(
//       `http://api-dev22.eu-west-1.elasticbeanstalk.com/plants?name=${this.props.plantName}`
//     )
//       .then(res => res.json())

//       .then(data => {
//         this.setState({
//           loaded: true,
//           name: this.props.plantName,
//           data
//           // active: Math.floor(Math.random() * data.length)
//         });
//       })
//       .catch(err => console.log(err));
//   }

//   componentDidMount() {
//     this.fetchData();
//   }

//   render() {
//     console.log(this.state);

//     const { name, data } = this.state;

//     return (
//       <div id="plant-container">
//         <div id="plant-image-container">
//           <img src={data["picture"]} alt="plant image" id="plant-image" />
//           <img src={placeholderimg} alt="plant image" id="plant-image" />
//         </div>
//         <div id="plant-info">
//           <h3>- PLANTOPEDIA</h3>
//           <h1 className="plant-name">{name}</h1>
//           <h3>AKA {data["names"]}</h3>
//           <p>{data["description"]}</p>
//           <button>MORE INFO</button>
//           <button>A-Z INDEX</button>
//         </div>
//         <div id="info-buttons">
//           <InfoButton value="light" img={SunImg} data={data["light"]} />
//           <InfoButton
//             value="temperature"
//             img={TempImg}
//             data={data["temperature"]}
//           />
//           <InfoButton value="watering" img={WaterImg} data={data["watering"]} />
//           <div className="info-button-div">
//             <button className="info-button buying">BUYING OPTIONS</button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
