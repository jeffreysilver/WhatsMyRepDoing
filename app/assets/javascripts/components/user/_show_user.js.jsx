var ShowUser = React.createClass({

	getInitialState() {
		return {
			legislators: this.props.legislators
		}
	},

	handleSearch(query) {
		$.get( {
		    url  : '/search',
		    data : {
		        query : query
		    },
		    success: (response) => { 
		    	console.log(response);
	    	},
		    error: (response) => { 
		    	console.log('it failed!', response);
    		}
		} );
	},
	
	render() {

		var legislators = this.state.legislators.map((leg) => { 
			return ( 
				<PoliticianCard key={leg.bioguide_id} politician={leg} />
				);
			});
		return (
			<div>
				<SearchBar handleSearch={this.handleSearch} />
				{legislators}
			</div>
		)
	}

});