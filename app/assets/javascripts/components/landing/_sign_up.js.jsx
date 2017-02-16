var Signup = React.createClass({

	getInitialState: function() {
		return { user: {
				  email: '',
				  password: '',
				  address: '',
				  location: {}
				 },
				 addresses: [],
				 showButton: false		
			}
	},

	getDivStyle() {
		return {
			backgroundColor: '#fafafa',
			paddingBottom: '50px',
			textAlign: 'center',
			paddingTop: 0,
			marginTop: 0
		}
	},

	handleSubmit() {
		this.props.handleRegister(this.state.user)
	},

	handlePasswordChange(e) {
		var user = this.state.user;
		user.password = e.target.value;
		this.setState({user: user})
	},

	handleEmailChange(e) {
		var user = this.state.user;
		user.email = e.target.value;
		this.setState({user: user})
	},

	handleAddressChange(e) {
		var user = this.state.user;
		user.address = e.target.value;
		this.setState({user: user})

		$.getJSON( {
		    url  : 'https://maps.googleapis.com/maps/api/geocode/json',
		    data : {
		        address : this.state.user.address
		    },
		    success: (response) => { 
		    	this.setState({addresses: response.results})
	    	},
		    error: (response) => { 
		    	console.log('it failed!', response);
    		}
		} );
	},

	handleAddressClick(address) {
		var user = this.state.user;
		user.address = address.formatted_address;
		user.location = address.geometry.location;
		this.setState({user: user,
						showButton: true
						})


		console.log(this.state)

	},
	
	render() {

		button = <button className='register-btn' onClick={this.handleSubmit}>Submit</button>
		addresses = <AddressResults results={this.state.addresses} handleAddressClick={this.handleAddressClick} />
			return (
				<div style={this.getDivStyle()}>
					<h1 className="sign-up">Sign up</h1>
					<form className="register">
				        <input type="text" onChange={this.handleEmailChange} className='full' placeholder='Email' value={this.state.user.email} />
				        <br/>
				        <input type="text" onChange={this.handlePasswordChange} className='full' placeholder='Password' value={this.state.user.password} />
				     	<br/>
				        <input type="text" onChange={this.handleAddressChange} className='full' placeholder='Address' value={this.state.user.address} /> <br/>
				     	{this.state.showButton? button : addresses}	
			     	</form>

				</div>
				)
	}

});