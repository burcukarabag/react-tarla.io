import React, { Component } from 'react';
import './Table.css';
import PropTypes from 'prop-types';

class Table extends Component {

    constructor(props){
	    super(props);
	    this.onCountItem = this.onCountItem.bind(this);
	    this.state = {'active': false, 'class': ''};
    }

    static propTypes = {

		postCount: PropTypes.func,
		postCountDel: PropTypes.func,
		postLocation: PropTypes.func
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
			
			e.target.parentElement.parentElement.className="non-select"

		}

	}
		    

	render(){

		return (
				
				<div className={"table-responsive col-xs-10 col-md-10 col-lg-10"}>
					<h2>User Table</h2>
					<div id="table-div" className={"col-xs-10 col-md-10 col-lg-10"}>
						<table className={"table table-bordered"}>
							 <thead>
							    <tr>
							      <th><input type="checkbox"></input></th>
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