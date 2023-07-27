import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: "65%", height: "485px" }}
        containerStyle={{ width: "50%", height: "485px" }}
        zoom={17}
        initialCenter={{
          lat: 16.043543,
          lng: 120.336152,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD3GTnUSXZvsdE_hwCpD8uAHOHs3DhX2TM",
})(MapContainer);
