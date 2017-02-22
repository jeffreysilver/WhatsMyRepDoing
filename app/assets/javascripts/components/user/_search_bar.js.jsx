var SearchBar = React.createClass({

	getInitialState() {
		return {
			input: '',
			results: []
		}
	},

	handleSearch(e) {
		query = e.target.value;
		this.setState({input: query});
		$.get( {
		    url  : '/search',
		    data : {
		        query : query
		    },
		    success: (response) => { 
		    	console.log(response);
		    	this.setState({results: response['politicians']})
	    	},
		    error: (response) => { 
		    	console.log('it failed!', response);
    		}
		} );
	},
	
	render() {
		return (
			<div className='search-bar'>
				<div className='search-input-results'>
					<input placeholder="Search politicians or addresses" className='search-input' value={this.state.input} onChange={this.handleSearch} />
					<SearchResults results={this.state.results} />
				</div>
			</div>
		)
	}

});