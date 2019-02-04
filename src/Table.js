import React, { Component } from 'react';
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
		allCount: PropTypes.func,

    };

    /*liste elemanlarının input'una click yapıldığında çalışan fonksiyon*/
	onCountItem(e) {

		/*input checked durumundaysa bu koşul çalışır*/
		if (e.target.checked) {
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
		

		if (e.target.checked) {
			let check = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('tbody').querySelectorAll('input');
			for(let i=0; i<check.length; i++){
				check[i].setAttribute('checked', 'true');		
			}
			this.props.allCount(check)
			e.target.parentElement.parentElement.parentElement.parentElement.className="table table-bordered selected";
		}

		else{
			let check = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('tbody').querySelectorAll('input');
			for(let i=0; i<check.length; i++){
				check[i].removeAttribute('checked', 'true');
				check[i].setAttribute('unchecked', 'true');
			}
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
							      <th><input type="checkbox" className="" unchedked onChange={this.allCountItem }></input></th>
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
							  		  <td><input name="body" type="checkbox" className="" value={ user.id } unchecked onChange={this.onCountItem }></input></td>
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