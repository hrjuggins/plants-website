import React, { useState, useRef } from "react";

import "./plantMain.css";

const InfoButton = props => {
  const [modal, setModal] = useState(false);
  const [modalHeight, setModalHeight] = useState(0);
  const [bottom, setBottom] = useState(0);

  const modalElement = useRef(null);

  const triggerModal = () => {
    if (!modal) {
      setModal(true);
      setModalHeight(modalElement.current.clientHeight);
    } else {
      setModal(false);
      setModalHeight(0);
    }
  };
  const { value, img, plantData } = props;

  return (
    <div
      style={{ bottom: modalHeight }}
      className="info-button-div"
      onClick={() => triggerModal(event)}
    >
      <button
        //   onClick={() => this.triggerModal(event)}
        //   onMouseOver={() => this.triggerModal(event)}
        //   onMouseLeave={() => this.triggerModal(event)}
        value={value}
        className="info-button"
        id={value}
      >
        <img src={img} alt={img} />
        <p className="info-button-p">{value}</p>
      </button>
      {/* {this.state.modal ? ( */}
      <p id="modal" ref={modalElement}>
        {plantData}
      </p>
      {/* ) : null} */}
    </div>
  );
};

export default InfoButton;

// export default class InfoButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modal: false,
//       modalHeight: 0,
//       bottom: 0
//     };
//     this.triggerModal = this.triggerModal.bind(this);
//   }
//   triggerModal() {
//     if (!this.state.modal) {
//       this.setState({
//         modal: true,
//         modalHeight: this.modalElement.clientHeight
//       });
//     } else {
//       this.setState({
//         modal: false,
//         modalHeight: 0
//       });
//     }
//     // this.setState({
//     //   modal: !this.state.modal,
//     //   modalHeight: this.modalElement.clientHeight
//     // });

//     console.log(this.state);
//   }
//   render() {
//     const { value, img, data } = this.props;

//     return (
//       <div
//         style={{ bottom: this.state.modalHeight }}
//         className="info-button-div"
//         onClick={() => this.triggerModal(event)}
//       >
//         <button
//           //   onClick={() => this.triggerModal(event)}
//           //   onMouseOver={() => this.triggerModal(event)}
//           //   onMouseLeave={() => this.triggerModal(event)}
//           value={value}
//           className="info-button"
//           id={value}
//         >
//           <img src={img} alt={img} />
//           {value}
//         </button>
//         {/* {this.state.modal ? ( */}
//         <p
//           id="modal"
//           ref={modalElement => {
//             this.modalElement = modalElement;
//           }}
//         >
//           {data}
//         </p>
//         {/* ) : null} */}
//       </div>
//     );
//   }
// }
