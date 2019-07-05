import React from 'react';
import Sidebar from './Sidebar';

function Services() {
	return (
		<div class="container">
	 		<div class="row">
				<div class="col-md-8">
				  <div class="jumbotron">
				    <h1>Bootstrap Tutorial</h1>      
				    <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
				  </div>
				</div>
			  	<div class="col-md-4">
			  		<div class="row">
						<Sidebar />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services