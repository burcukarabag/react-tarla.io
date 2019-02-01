import React, { Component } from 'react';
import './Table.css';
import PropTypes from 'prop-types';

class Table extends Component {

    constructor(props){
	    super(props);
	    this.onCountItem = this.onCountItem.bind(this);
	    this.allCountItem = this.allCountItem.bind(this);
    
    }

    static propTypes = {

		postCount: PropTypes.func,
		postCountDel: PropTypes.func,
		postLocation: PropTypes.func,
		postLocationDel: PropTypes.func,
		countState: PropTypes.func,

    };

	onCountItem(e) {

	
		e.target.ischecked= !e.target.ischecked;

		if (e.target.ischecked) {
			this.props.postCount(e.target.value);
			this.props.postLocation(e.target.value);
			e.target.parentElement.parentElement.className="selected"
		    
		    

		}

		else{
			this.props.postCountDel(e.target.value);
			this.props.postLocationDel(e.target.value);
			e.target.parentElement.parentElement.className="non-select"

		}

	}

	allCountItem(e){
		e.target.ischecked= !e.target.ischecked;

		if (e.target.ischecked) {
			e.target.parentElement.parentElement.parentElement.parentElement.className="table table-bordered selected"
		    

		}

		else{
			
			e.target.parentElement.parentElement.parentElement.parentElement.className="table table-bordered non-select"
		}
	}
		    

	render(){
		

		return (
				
				<div className={"table-responsive col-xs-9 col-md-10 col-lg-10"}>
					<h2>User Table </h2>
					<p>{ this.props.countState } rows selected</p>

					<div id="table-div" className={"col-xs-12 col-md-12 col-lg-10"}>
						<table className={"table table-bordered"}>
							 <thead>
							    <tr>
							      <th><input type="checkbox" className="" ischecked="false" onChange={this.allCountItem }></input></th>
							      <th>id</th>
							      <th>username</th>
							      <th>name</th>
							      <th>email</th>
							      <th>phone</th>
							      <th>website</th>
							      <th>company</th>
							      <th>address</th>
							    </tr>
							  </thead>
							  <tbody>
							  	{
							  		this.props.users.map(user => 
							  		<tr key={ user.id }>
							  		  <td><input type="checkbox" className="" value={ user.id } ischecked="false" onChange={this.onCountItem }></input></td>
								      <th>{ user.id }</th>
								      <td>{ user.username }</td>
								      <td>{ user.name }</td>
								      <td>{ user.email }</td>
								      <td>{ user.phone }</td>
								      <td>{ user.website }</td>
								      <td>{ user.company.name }, { user.company.catchPhrase }, { user.company.bs }</td>
								      <td>{ user.address.street }, { user.address.suite }, { user.address.city } , { user.address.zipcode }</td>
							  			
							  		</tr>
							  		)
							  	}
							  </tbody>
						</table>
					</div>
				</div>

		)

	}

}

export default Table;