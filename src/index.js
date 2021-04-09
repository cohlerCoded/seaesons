import React from "react";
import ReactDOM from "react-dom";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return <div>Hi there!</div>;
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errMsg: "" };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errMsg: err.message });
      }
    );
  }
  render() {
    if (this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    } else if (this.state.errMsg) {
      return <div>Error: {this.state.errMsg}</div>;
    } else {
      return <div>Loading...</div>;
    }
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
