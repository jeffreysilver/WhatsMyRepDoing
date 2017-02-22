var SearchResults = React.createClass({

	handleClick(result) {
		this.props.handleAddressClick(result)
	},

	render() {
		var results= this.props.results.map((result) => {
		 return ( 
		 	<div className='address-result' key={result.formatted_address}>
		 	    <a onClick={() => this.handleClick(result)} className="fill-div">
 			 		<p className="address">{result.formatted_address}</p> 
 			 	</a>
 			 </div> 
		 	)
		 });

	    return (
	    	<div>
	    		{results}
	    	</div>
		)	
	}
});