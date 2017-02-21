var SearchBar = React.createClass({

	getInitialState() {
		return {
			input: ''
		}
	},

	handleSearch(e) {
		if (e.target.value.length > 0) {
			this.setState({input: e.target.value});
			this.props.handleSearch(this.state.input);
		}
	},
	
	render() {
		return (
			<div className='search-bar'>
				<input placeholder="Search politicians or addresses" className='search-input' value={this.state.input} onChange={this.handleSearch} />
			</div>
		)
	}

});