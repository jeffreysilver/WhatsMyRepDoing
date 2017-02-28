var SocialMedia = React.createClass({
	
	getContact() {
		if (this.props.politician.contact_form == null) {
			return null;
		} else {
			return (<a href={this.props.politician.contact_form} target="_blank">Contact Form</a>)
		}
	},

	getTwitter() {
		if (this.props.politician.twitter_id == null) {
			return null;
		} else {
			return (<div><a href={"http://www.twitter.com/" + this.props.politician.twitter_id} target="_blank">{"@" + this.props.politician.twitter_id}</a></div>)
		}
	},

	getFacebook() {
		if (this.props.politician.facebook_id == null) {
			return null;
		} else {
			return (<div><a href={"http://www.facebook.com/" + this.props.politician.facebook_id} target="_blank">Facebook</a></div>)
		}
	},

	getGovtrack() {
		if (this.props.politician.govtrack_id == null) {
			return null;
		} else {
			var url = 'https://www.govtrack.us/congress/members/';
			return (<div><a href={url + this.props.politician.govtrack_id} target="_blank">Govtrack</a></div>)
		}
	},

	render() {
		var that = this;
		var pol = this.props.politician;
		return (
			<div className='social-media'>
				{that.getContact()}
				{that.getTwitter()}
				{that.getFacebook()}
				{that.getGovtrack()}
			</div>
		)
	}

});