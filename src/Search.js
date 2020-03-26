import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";

import IDContext from "./App.js";

import "./searchStyle.css";

import SearchImg from "/assets/icons8-search-90.png";
import OpenSearchImg from "/assets/icons8-search-90-white.png";

const SearchBar = props => {
  console.log(props);
  const [id, setId] = useContext(IDContext);
  const [openSearch, setOpenSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [matches, setMatches] = useState([]);
  const plants = props.plants || [];
  const matchedSearch = matches.map(match =>
    Object.values(plants).find(a => a.name === match)
  );
  const onChange = e => {
    e.preventDefault();
    let names = Object.values(plants).map(a => a.name);
    let query = e.target.value;
    let matches = [];
    if (query !== "") {
      matches = names.filter(
        item => item.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }
    setQuery(query);
    setMatches(matches);
  };
  const keyDown = e => {
    if (e.keyCode === 27) {
      setOpenSearch(false);
    }
  };
  return (
    <div id="search-container">
      <img src={SearchImg} alt="search" />
      <button
        className="search-input input-button"
        onClick={() => setOpenSearch(true)}
      >
        SEARCH
      </button>
      {openSearch ? (
        <div id="open-search">
          <button id="exit-open-search" onClick={() => setOpenSearch(false)}>
            X
          </button>

          <div id="search-area">
            <img src={OpenSearchImg} alt="search" />
            <input
              onChange={onChange}
              onKeyDown={keyDown}
              value={query}
              className="search-input input-open"
              placeholder="Search"
              autoFocus
            />
          </div>
          <div id="matches">
            {matchedSearch.map(match => (
              <button
                className="search-result"
                key={match["name"]}
                onClick={() => {
                  setOpenSearch(false);
                  setId(match["id"]);
                }}
              >
                <img src={match["picture"]} alt="plant thumbnail" />
                <h3>{match["name"]}</h3>
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;

// export default class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       openSearch: false,
//       query: "",
//       matches: []
//     };
//     this.onChange = this.onChange.bind(this);
//   }
//   // static contextType = IDContext

//   onChange(e) {
//     e.preventDefault();
//     let names = Object.values(this.props.plants).map(a => a.name);
//     let query = e.target.value;
//     let matches = [];
//     if (query !== "") {
//       matches = names.filter(
//         item => item.toLowerCase().indexOf(query.toLowerCase()) !== -1
//       );
//     }
//     this.setState({
//       query: query,
//       matches: matches
//     });
//   }
//   render() {
//     const plants = this.props.plants;
//     const matches = this.state.matches.map(match =>
//       Object.values(plants).find(a => a.name === match)
//     );

//     const { id, setId } = this.context;
//     console.log(id);

//     return (
//       <div id="search-container">
//         <img src={SearchImg} alt="search" />
//         <button
//           className="search-input input-button"
//           onClick={() => {
//             this.setState({ openSearch: !this.state.openSearch });
//           }}
//         >
//           SEARCH
//         </button>
//         {this.state.openSearch ? (
//           <div id="open-search">
//             <button
//               id="exit-open-search"
//               onClick={() => {
//                 this.setState({ openSearch: !this.state.openSearch });
//               }}
//             >
//               X
//             </button>

//             <div id="search-area">
//               <img src={OpenSearchImg} alt="search" />
//               <input
//                 onChange={this.onChange}
//                 value={this.state.query}
//                 className="search-input input-open"
//                 placeholder="Search"
//                 autoFocus
//               />
//             </div>
//             <div id="matches">
//               {matches.map(match => (
//                 <button
//                   className="search-result"
//                   key={match["name"]}
//                   onClick={() => {
//                     selectPlant(match["id"]);
//                   }}
//                 >
//                   <img src={match["picture"]} alt="plant thumbnail" />
//                   <h3>{match["name"]}</h3>
//                 </button>
//               ))}
//             </div>
//           </div>
//         ) : null}
//       </div>
//     );
//   }
// }

SearchBar.contextType = IDContext;
