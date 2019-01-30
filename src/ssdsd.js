 if(this.props.location && this.props.location.length > 0){
        
          for(let i=1; i<this.props.location.length; i++){
            var lat = this.props.location[i].lat
            var lng = this.props.location[i].lng
            let c = [{lat:lat, lng:lng}]
            this.setState({ markers: [...this.state.markers, ...c] })

           
            }
          }