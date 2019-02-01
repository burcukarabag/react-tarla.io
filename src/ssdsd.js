import React, { Component } from "react"
import ReactSvgPieChart from "react-svg-piechart";
import Table from './Table';
import MapComp from './Map';

var  dataPie = []
var location =  []
var name_user = []
var color_user = []




class Chart extends Component {

   constructor(props){
    super(props);
    this.postCount = this.postCount.bind(this);
    this.postCountDel = this.postCountDel.bind(this);
    this.postLocation = this.postLocation.bind(this);
    this.postLocationDel = this.postLocationDel.bind(this);
    this.userNameArray = this.userNameArray.bind(this);
    this.userNameArrayDel = this.userNameArrayDel.bind(this);
    this.rgb2hex = this.rgb2hex.bind(this);
    this.count = 0;
    this.user_name = "";
  }

  state = {
    array: [],
  }

  rgb2hex(rgb){
     rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
     return (rgb && rgb.length === 4) ? "#" +
      ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
    }

   postCount(id){
      
      for(let i=0; i<this.props.posts.length; i++){
        if(this.props.posts[i].userId==id){
          this.count=this.count+1

        }
      };

      for(let j=0; j<this.props.users.length; j++){
        if(this.props.users[j].id==id){

          this.user_name = this.props.users[j].name

          var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
          color = this.rgb2hex(color)
          let c = [{title:id, value:this.count, color:color, name:this.user_name}]
          this.setState({ array: [...this.state.array, ...c] })
          this.count = 0
          this.user_name = ""

       }
      }

  }

   postLocation(id){

    for(let i=0; i<this.props.users.length; i++){
        if(this.props.users[i].id==id){
          var lat = this.props.users[i].address.geo.lat;
          var lng = this.props.users[i].address.geo.lng;   

        }        
    };
    location.push({lat:lat, lng:lng})
  }

   userNameArray(id){

      var user_name = ""
      for(let i=0; i<this.props.users.length; i++){
            if(id==this.props.users[i].id){

                user_name = this.props.users[i].name
                name_user.push({name: user_name, id: id})
          }
      };
  }



  postCountDel(id){

    if(this.state.array.length>0 ){
     var array = [...this.state.array]; // make a separate copy of the array
     for(let i=0; i<this.state.array.length; i++){
        if(this.state.array[i].title===id){
          var index = array.indexOf(this.state.array[i])
          if (index !== -1) {
              var arr = []
              array.splice(index, 1);
              this.setState({array: array});
              arr = dataPie.filter(item => item.title != this.state.array[i].title && item.value != this.state.array[i].value && item.title != this.state.array[i].title )
              dataPie = arr
            }
        }
    };
  }
}

  postLocationDel(id){

   if(this.state.array.length>0 ){
     for(let i=0; i<this.props.users.length; i++){
        if(this.props.users[i].id==id){
            
            var lat = this.props.users[i].address.geo.lat
            var lng = this.props.users[i].address.geo.lng;
            let arr =[]
            arr = [{ lat:lat, lng:lng}]
            var array_2 = []

            for(let i=0; i<location.length; i++){
    
              if(location[i].lat===arr[0].lat && location[i].lng===arr[0].lng){
                  array_2 = location.filter(item => item !== location[i])
                  location = array_2

              }
            }
        }
    };
  }
}

  userNameArrayDel(id){

    var arr = []
      if(name_user.length>0){
          
          arr = name_user.filter(item => item.id!==id)
          name_user = arr

      }
  }


 

  render (){



  var flag = true
  if(this.state.array.length>0 ){
    this.state.array.map(item => {
      console.log(item)
        if(dataPie.indexOf({title:item.title, value:item.value, color: item.color})===-1){
          
        
            dataPie.push({title:item.title, value:item.value, color: item.color})

      }
       
    });

    return(
     
      <div>

        <div className={"col-xs-12 col-md-12 col-lg-12 "}>
          <div id="chart" className={"col-xs-10 col-md-6 col-lg-6 "}>
            <h2 className={"col-xs-8 col-md-8 col-lg-8"} id="post-text">Posts Percentage</h2>
            <div id="chart-2" className={"col-xs-12 col-md-12 col-lg-12"}>
             <ReactSvgPieChart 
                data={dataPie}
                expandOnHover={false}
                expandSize={80}
                shrinkOnTouchEnd={false}
                strokeColor="#fff"
                strokeLinejoin="round"
                strokeWidth={1}
                viewBoxSize={50} 
              /> 
            </div>
 
                {
                  this.state.array.map(item=>


                    <div style={{backgroundColor:item.color}}>
                    <h4>{ item.name }</h4>
                    </div>

                    

                  )
                }
          

          </div>

             <MapComp location= {location} users = {this.props.users} posts = {this.props.posts} ></MapComp>
        </div>

        <Table users = {this.props.users} postCountDel={this.postCountDel} postCount={this.postCount} postLocation={this.postLocation} postLocationDel={this.postLocationDel} userNameArray={this.userNameArray} userNameArrayDel={this.userNameArrayDel}></Table>

        <div class="clearfix"></div>
      </div>
      
    )
  }


  else{

    return(
            
      <div>

        <div className={"col-xs-12 col-md-12 col-lg-12 "}>
          <div id="chart" className={"col-xs-10 col-md-6 col-lg-6 "}>
            <h2 className={"col-xs-8 col-md-8 col-lg-8"} id="post-text">Posts Percentage</h2>
            <div id="chart-2" className={"col-xs-12 col-md-12 col-lg-12"}>
             <ReactSvgPieChart 
                data={[
  {title: "Data 1", value: 100, color: "#22594e"},]}
                expandOnHover={false}
                expandSize={80}
                shrinkOnTouchEnd={false}
                strokeColor="#fff"
                strokeLinejoin="round"
                strokeWidth={1}
                viewBoxSize={50} 
              /> 
            </div>

          </div>
          <MapComp location= {location}  users = {this.props.users} posts = {this.props.posts} ></MapComp>
        </div>

        <Table users = {this.props.users} postCountDel={this.postCountDel} postCount={this.postCount} postLocation={this.postLocation} postLocationDel={this.postLocationDel} userNameArray={this.userNameArray} userNameArrayDel={this.userNameArrayDel}></Table>
        <div className="clearfix"></div>
      </div>
      
    )
  }
 } 
}

export default Chart