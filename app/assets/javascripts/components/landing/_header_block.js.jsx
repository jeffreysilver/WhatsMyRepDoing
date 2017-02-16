var HeaderBlock = React.createClass({

	getDivStyle() {
		return {
	        display: "inline-block",
	        textAlign: "center",
	        backgroundColor: '#71A2B6',
	        width: '100%',
	       	margin: '0px',
	        paddingTop: '60px',
	        paddingBottom: '60px'
	      }
	},

	getH1Style() {
		return {
			fontFamily: 'Lato',
			fontSize: "40px",
			color: "white",
			fontWeight: "Bold"
		}
	},

	getH2Style() {
		return {
			fontFamily: 'Lato',
			fontSize: "24px",
			color: "white",
			fontWeight: 'Medium',
			padding: '20px'
		}
	},
	
	render() {
		return (
			<div style={this.getDivStyle()}>
				<h1 style={this.getH1Style()}>{this.props.m1}</h1>
				<h2 style={this.getH2Style()}>{this.props.m2}</h2>
			</div>
			)
	}
});