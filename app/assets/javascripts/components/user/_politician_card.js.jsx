var PoliticianCard = React.createClass({
	
	getInitialState() {
		return { leg: this.props.politician }
	},

	render() {
		leg = this.state.leg;
		var sen = <h3>{'Sen. ' + leg.first_name + ' ' + leg.last_name}</h3>
		var rep = <h3>{'Rep. ' + leg.first_name + ' ' + leg.last_name}</h3>
		return (
			<div key={leg.bioguide_id} className="politician-card"> 
				<a href={'/politician/' + leg.id}><img className="politician-img" src={leg.image_url} /></a>
				<a href={leg.website} target="_blank">{leg.chamber == 'house'? rep : sen}</a>	
				<p>{leg.party + ", " + leg.state}</p>
			</div>
		)
	}
});