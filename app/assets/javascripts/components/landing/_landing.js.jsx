var Landing = React.createClass({
	
	handleRegister (user) {
	    var that = this;
	    
	  	$.ajax({
	      method: 'POST',
	      data: {
	         user: user
	      },
	      url: '/register',
	      success: function(res) {
	      	alert(res)
	      },
	      error: function(res) {
	      	alert(res)
	      }
	    });
	 },

	render() {
		return (
		<div>
			<HeaderBlock
						m1="What Are Your Representatives Up To?"
						m2="Stay informed and get in touch with them when it matters most to you" />
			<Signup handleRegister={this.handleRegister} />
		</div>
		)

	}
});