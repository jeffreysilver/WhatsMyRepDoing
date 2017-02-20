var ShowUser = React.createClass({

	getInitialState() {
		return {
			legislators: this.props.legislators
		}
	},
	
	render() {
		console.log(this.state.legislators[0])

		var legislators = this.state.legislators.map((leg) => { 
			return ( 
				<PoliticianCard key={leg.bioguide_id} politician={leg} />
				);
			});
		return (
			<div>
				{legislators}
			</div>
		)
	}

});