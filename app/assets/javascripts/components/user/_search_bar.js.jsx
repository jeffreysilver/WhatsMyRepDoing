var SearchBar = React.createClass({

	getInitialState() {
		return {
			input: '',
			results: [],
			addresses: [],
			showResults: false
		}
	},

	handleSearch(e) {
		query = e.target.value;
		this.setState({input: query});
		if (query.length == 0) {
			this.setState({results: [], addresses: [], showResults: false})
		} else {
			$.get( {
			    url  : '/search',
			    data : {
			        query : query
			    },
			    success: (response) => { 
			    	if (this.state.input.length != 0) {
			    		this.setState({results: response['politicians'], addresses: response['addresses'], showResults: true})

			    	}
		    	},
			    error: (response) => { 
			    	console.log('it failed!', response);
	    		}
			} );
		}
	},
	
	render() {
		return (
			<div className='search-widget'>
				<div className='search-bar'>
					<div className='search-input-results'>
						<input placeholder="Search politicians or addresses" className='search-input' value={this.state.input} onChange={this.handleSearch} />
					</div>
				</div>
				{this.state.showResults ? <SearchResults results={this.state.results} addresses={this.state.addresses} handleAddressClick={this.props.handleAddressClick} /> : null }
			</div>
		)
	}

});