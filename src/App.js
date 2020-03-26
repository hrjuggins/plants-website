import React, { useState, useEffect, createContext } from "react";
import ReactDOM from "react-dom";
import { useSwipeable, Swipeable } from "react-swipeable";

import EntryScreen from "./EntryScreen";
import Plant from "./Plant";
import SearchBar from "./Search";

import "./style.css";

import TwitImg from "./assets/icons8-twitter-96.png";
import InstaImg from "./assets/icons8-instagram-96.png";
import Arrow from "./assets/arrow.png";

const IDContext = createContext(null);
export default IDContext;

const Application = () => {
  const [plantsLength, setPlantsLength] = useState(0);
  const [plants, setPlants] = useState([]);
  const [id, setId] = useState(10);
  useEffect(() => {
    fetch("http://api-dev22.eu-west-1.elasticbeanstalk.com/plants")
      .then(res => res.json())
      .then(res => {
        setPlants(res);
        setPlantsLength(Object.keys(res).length - 1);
      });
  }, []);

  const handleClick = action => {
    if (action === "prev") {
      if (id > 1) {
        setId(id => id - 1);
      } else {
        setId(plantsLength);
      }
    } else {
      if (id <= plantsLength) {
        setId(id => id + 1);
      } else {
        setId(1);
      }
    }
  };
  const handleKeyEvent = e => {
    e.preventDefault();
    if (e.key === "ArrowUp") {
      handleClick("next");
    } else if (e.key === "ArrowDown") {
      handleClick("prev");
    }
  };
  console.log(id);

  // const config = useSwipeable({
  //   onSwipedLeft: () => handleClick("next"),
  //   onSwipedRight: () => handleClick("prev"),
  //   preventDefaultTouchmoveEvent: true,
  //   trackMouse: true
  // });

  return (
    <IDContext.Provider value={[id, setId]}>
      <div>
        <div id="navbar">
          <h1 id="title">
            HOUSE <span>of</span> PLANTS
          </h1>
          <SearchBar plants={plants} tabIndex="1" />
        </div>

        <Swipeable
          onSwipedLeft={() => handleClick("prev")}
          onSwipedRight={() => handleClick("next")}
          // {...config}
          className="plant-main"
          onKeyDown={handleKeyEvent}
          tabIndex="0"
        >
          <div id="social-links">
            <h4 id="share">SHARE</h4>
            <hr></hr>
            <img src={TwitImg} alt="twitter" />
            <img src={InstaImg} alt="instagram" />
          </div>
          <Plant />
          <div id="nav-buttons">
            <button onClick={() => handleClick("next")} className="nav-button">
              <img src={Arrow} alt="arrow" />
            </button>
            <button onClick={() => handleClick("prev")} className="nav-button">
              <img src={Arrow} alt="arrow" />
            </button>
          </div>
        </Swipeable>
      </div>
    </IDContext.Provider>
  );
};

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       plants: {
//         0: {
//           description:
//             "Amaryllis hippeastrum are bulb flowering type plants that produce a cluster of attractive trumpet like flowers in different color variation",
//           fertilizer:
//             "After the dormant period (Nov -Dec) begin feeding with a liquid fertilizer once every 2 weeks once you begin to see leaf shoots appearing. Continue until the leaves are cut down ready for the dormant period (Sept - Nov).",
//           href: "https://www.houseplantsexpert.com/hippeastrum-amaryllis.html",
//           humidity: "Normal room humidity is fine.",
//           id: 1,
//           light: "Bright light without too much direct sunlight is preferable.",
//           name: "Amaryllis",
//           names: "Amaryllis (common). Hippeastrum (botanical/scientific).",
//           origin: "South America.",
//           picture:
//             "https://www.houseplantsexpert.com/image-files/hippeastrum-plant.jpg",
//           repotting:
//             "Your hippeastrum can be re-potted if the bulb seems to have outgrown the pot or every 2 years just before the dormant growing period (Nov - Dec). The pot size needs to be approximatively 2 inches wider each side of the bulb.",
//           soil:
//             "You can use equal part perlite and peat or two parts loam soil and one part perlite. Your local garden store will offer other suitable options as well.",
//           temperature:
//             "The amaryllis within the growing period (winter - spring) prefers temperatures of 70 - 75F°f  (21 - 24°c) and from September - November (or early December) 55°f (13°c). After the plant as flowered the temperature can be kept at around 70 - 75F°f  (21 - 24°c) which will keep the flower healthier longer.",
//           watering:
//             "During the growing and flowering period, water when the top inch of the soil becomes dry. Once the leaves are cut away you can stop watering for about 8 – 10 weeks (dormant period) or water sparingly until new growth appears. When new leaves appear water frequently again when the top inch of soil becomes dry. Overwatering may cause the bulb to rot."
//         }
//       },
//       active: 0
//     };
//     this.handleClick = this.handleClick.bind(this);
//     this.handleKeyEvent = this.handleKeyEvent.bind(this);
//   }

//   fetchData() {
//     fetch("http://api-dev22.eu-west-1.elasticbeanstalk.com/plants")
//       .then(res => res.json())

//       .then(data => {
//         this.setState({
//           plants: data
//           // active: Math.floor(Math.random() * data.length)
//         });
//       })
//       .catch(err => console.log(err));
//   }

//   componentDidMount() {
//     this.fetchData();
//   }
//   handleKeyEvent(e) {
//     e.preventDefault();
//     if (e.key === "ArrowUp") {
//       this.handleClick("prev");
//     } else if (e.key === "ArrowDown") {
//       this.handleClick("next");
//     }
//   }
//   handleClick(action) {
//     const { plants, active } = this.state;
//     if (action === "prev") {
//       if (active > 0) {
//         this.setState({
//           active: (this.state.active -= 1)
//         });
//       } else {
//         this.setState({
//           active: Object.keys(plants).length - 1
//         });
//       }
//     } else {
//       if (active < Object.keys(plants).length - 1) {
//         this.setState({
//           active: (this.state.active += 1)
//         });
//       } else {
//         this.setState({
//           active: 0
//         });
//       }
//     }
//   }

//   render() {
//     const { plants, active } = this.state;
//     let randPlant = plants[active];
//     console.log(this.state);

//     return (
//       <div>
//         <div id="navbar">
//           <h1 id="title">
//             HOUSE <span>of</span> PLANTS
//           </h1>
//           <SearchBar plants={plants} />
//         </div>

//         <div id="plant-main" onKeyDown={this.handleKeyEvent} tabIndex="0">
//           <div id="social-links">
//             <h4 id="share">SHARE</h4>
//             <hr></hr>
//             <img src={TwitImg} alt="twitter" />
//             <img src={InstaImg} alt="instagram" />
//           </div>

//           <Router>
//             {/* <EntryScreen path="/" /> */}
//             <Plant
//               path="plant/:plantName"
//               // name={randPlant["name"]}
//               // data={randPlant}
//               // key={randPlant["name"]}
//             />
//           </Router>

//           <div id="nav-buttons">
//             <Link to={"plant/" + randPlant["name"]}>
//               <button
//                 onClick={() => this.handleClick("prev")}
//                 className="nav-button"
//               >
//                 ↑
//               </button>
//             </Link>
//             <button
//               onClick={() => this.handleClick("next")}
//               className="nav-button"
//             >
//               ↓
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

ReactDOM.render(<Application />, document.getElementById("root"));
