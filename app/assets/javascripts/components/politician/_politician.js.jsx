var Politician = React.createClass({

	getInitialState() {
		return {politician: this.props.politician}
	},

	getCorrectDate(date) {
		var elems = date.split("-");
		return elems[0];
	},

	getTitledName() {
		var name = '';
		this.props.politician.chamber == 'house'? name = 'Rep. ' : name = "Sen. ";
		name = name + this.props.politician.first_name + " " + this.props.politician.last_name;
		return name;
	},
	
	render() {
		var pol = this.state.politician;
		return (
			<div>
				<img src={pol.image_url} />
				<h1>{this.getTitledName()}</h1>
				<h2>{pol.party+", " + pol.state_name}</h2>
				<h3>{'Up for reelection: ' + this.getCorrectDate(pol.next_election)}</h3>
				<SocialMedia politician={this.state.politician} />
				<p>{'Office Address: ' + pol.office_address}</p>
				<p>{'Votes with party: ' + pol.votes_with_party_pct + "%"}</p>
				<p>{'Missed votes: ' + pol.missed_votes_pct + "%"}</p>

			</div>
		);
	}
});