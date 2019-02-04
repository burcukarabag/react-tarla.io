import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';



export class MapComp extends Component {


  render() {

    var  loc_arr = []
  
    /*Chart componentinden gelen location, burada işlenerek loc_arr dizisi oluşturuluyor*/
    if(this.props.location.length>0){
      for(let i=0; i<this.props.location.length; i++){
        var lat = this.props.location[i].lat;
        var lng = this.props.location[i].lng;
        var name = this.props.location[i].name;
        loc_arr.push({lat: lat, lng:lng, name: name})
      }
    
      return (

       <div id="Map" className={"col-xs-9 col-md-4  ol-lg-4 "}>
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
                          title={locations.name}
                          name={locations.name}
                          position={{lat: locations.lat, lng: locations.lng}} 
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