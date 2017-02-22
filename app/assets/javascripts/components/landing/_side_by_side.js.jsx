var SideBySide = React.createClass({

	getBlockStyle: function () {
		return {
	        display: "inline-block",
	        textAlign: "center",
	        backgroundColor: '#29D9C2',
	        width: '100%',
	        paddingTop: '40px',
	        paddingBottom: '50px',
	        color: 'white',
			fontFamily: 'Lato'
	      }
	},

	getLeftStyle: function () {
		return {
			width: '50%',
			height: '100%',
			display: 'inline-block'
		}
	},

	getRightStyle: function () {
		return {
			width: '50%',
			height: '100%',
			display: 'inline-block',
			color: 'white'
		}
	},

	getH1Style: function () {
		return {
			padding: '10px'
		}
	},

	render: function () {
		return (
			<div style={this.getBlockStyle()}>
				<div style={this.getLeftStyle()}>
					<h2 style={this.getH1Style()}>Know your Representatives</h2>
					<h2 style={this.getH1Style()}>Get daily digests of votes and news</h2>
					<h2 style={this.getH1Style()}>Let them know how you feel</h2>
				</div>
				<div style={this.getRightStyle()}>
					<h1>HOLDER FOR MCCAIN CHUNK</h1>
				</div>
			</div>
		)
	}
});