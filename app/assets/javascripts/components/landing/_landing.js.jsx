var Landing = React.createClass({

	getInitialState() {
		return {
			registerMode: true
		}
	}, 
	
	handleRegister (user) {
	    var that = this;
	    
	  	$.post({
	      data: {
	         user: user
	      },
	      url: '/register',
	      success: function(res) {
	      	console.log(res);
	      },
	      error: function(res) {
	      	console.log("ERROR: " + res)
	      }
	    });
	 },

	render() {
		if (this.state.registerMode) {

			return (
				<div>
					<HeaderBlock
								m1="What Are Your Representatives Up To?"
								m2="Stay informed and get in touch with them when it matters most to you" />
					<SideBySide />
					<Signup handleRegister={this.handleRegister} />
				</div>
				)
		} else {
			return (
				<div>
					<CreateUser />
				</div>
				)
		}
		

	}
});