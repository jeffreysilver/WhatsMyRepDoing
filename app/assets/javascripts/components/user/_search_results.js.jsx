var SearchResults = React.createClass({

	render() {

		var results= this.props.results.map((result) => {
		 return ( 
		 	<div key={result.id}>
		 	    <a className="fill-div">
 			 		<p>{result.first_name + " " + result.last_name}</p> 
 			 	</a>
 			 </div> 
		 	)
		 });
		return (
			<div className='mixed-search-results' >
				{results}
			</div>
		)
	}
});