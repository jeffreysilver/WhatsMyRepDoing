var ShowUser = React.createClass({

	getInitialState() {
		return {
			legislators: this.props.legislators,
			searchResults: []
		}
	},
	
	render() {

		var legislators = this.state.legislators.map((leg) => { 
			return ( 
				<PoliticianCard key={leg.bioguide_id} politician={leg} />
				);
			});
		return (
			<div>
				<SearchBar />
				{legislators}
			</div>
		)
	}

});