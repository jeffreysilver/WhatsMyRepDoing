var ShowUser = React.createClass({

	getInitialState() {
		return {
			legislators: this.props.legislators,
			searchResults: [],
			user_id: this.props.user.id
		}
	},

	handleAddressClick(address) {
		var that = this;
	  	$.post({
	      data: {
	         user_id: this.state.user_id,
	         lat: address.latitude,
	         lng: address.longitude
	      },
	      url: '/follow_address',
	      success: function(res) {
	      	console.log(res);
	      	that.setState({legislators: res['politicians']});
	      },
	      error: function(res) {
	      	console.log("ERROR: " + res)
	      }
	    });

		return;
	},
	
	render() {

		var legislators = this.state.legislators.map((leg) => { 
			return ( 
				<PoliticianCard key={leg.bioguide_id} politician={leg} />
				);
			});
		return (
			<div>
				<SearchBar handleAddressClick={this.handleAddressClick} />
				<div className='legistlator-card-holder'>
					{legislators}
				</div>
			</div>
		)
	}

});