import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';



export class MapComp extends Component {


  render() {

    var  loc_arr = []

    if(this.props.location.length>0){
      for(let i=0; i<this.props.location.length; i++){
        var lat = this.props.location[i].lat;
        var lng = this.props.location[i].lng;
        loc_arr.push({lat: lat, lng:lng})
      }
    
      return (

       <div id="Map" className={"col-xs-9 col-md-4 col-lg-4 "}>
            <h2>User Locations</h2>
            <div id="map"  className={"col-xs-9 col-md-4 col-lg-4 "}>
               
              

              <Map
                  google={this.props.google}
                  zoom={0}
                  initialCenter={{
                  lat: "24.8918", lng: "21.8984"
                  }}
              >
              
              {
                loc_arr.map(locations=>
                <Marker
                  title={'The marker`s title will appear as a tooltip.'}
                  name={'SOMA'}
                  position={locations} 
                />
              )}
        
              </Map>
            </div>
        </div>

    );

  }
  

  else {
    
    return (

      <div id="Map" className={"col-xs-9 col-md-4 col-lg-4 "}>
              <h2>User Locations</h2>
        <div id="map"  className={"col-xs-9 col-md-4 col-lg-4 "}>
          

          <Map
          google={this.props.google}
          zoom={1}
          initialCenter={{
          lat: "24.8918", lng: "21.8984"
          }}
          />   
        </div>
      </div>
    );
  }
 }
}


export default GoogleApiWrapper({
apiKey: 'AIzaSyCYJGLdhoAvuSkRykgTvkDu3LIachHI_h8'
})(MapComp);