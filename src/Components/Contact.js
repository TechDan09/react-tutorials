import React from 'react';
import Sidebar from './Sidebar';

function Contact() {
	return (
		<div class="container mt5 mb5 ">
			<div class="row">
			  	<div class="col-md-8" >
				  		<h2>Get In Touch </h2>
				  		<p> Fill in the form below to contact us </p>
				  		<form action="/action_page.php" className= "pa3"style={{boxShadow: "2px 2px 8px 0px rgba( 0, 0, 0, 0.2 )"}}>
					    	<div class="form-group">
					      		<label for="email">Email:</label>
					      		<input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
					    	</div>
					    	<div class="form-group">
					      		<label for="pwd">Password:</label>
					      		<input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
					    	</div>
					    	<div class="form-group form-check">
					      		<label class="form-check-label">
					        		<input class="form-check-input" type="checkbox" name="remember" /> Remember me
					      		</label>
					    	</div>
					    	<button type="submit" class="btn btn-primary">Submit</button>
				  		</form>
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

export default Contact