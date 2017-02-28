var SearchResults = React.createClass({
	
	render() {

		var results= this.props.results.map((result) => {
		 return ( 
		 	<div key={result.id}>
		 	    <a className="result-row" href={'../politician/' + result.id}>
 			 		<p>{result.first_name + " " + result.last_name + ", " + result.party + ", " + result.state}</p> 
 			 	</a>
 			 </div> 
		 	)
		 });

		var addresses = this.props.addresses.map((address) => {
			return (
				<div key={address.place_id}>
		 	    <a className="result-row" onClick={() => this.props.handleAddressClick(address)}>
	 			 		<p>{address.formatted_address}</p> 
	 			 	</a>
 			 	</div>
			)
		});
		
		return (
			<div className='outer-mixed-search-results'>
			<div className='mixed-search-results' >
				{results}
				{addresses}
			</div>
			</div>
		)
	}
});