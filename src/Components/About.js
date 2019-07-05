import React from 'react';
import Sidebar from './Sidebar';


function About() {
	return (
		<div className= "mt5">
			<header class="bg-primary text-center py-5 mb-4">
			  <div class="container">
			    <h1 class="font-weight-light text-white">Meet the Team</h1>
			  </div>
			</header>
			<div class="container">
			 	 <div class="row">
				  <div class="col-md-8">
				  	<div class="row">
					    <div class="col-xl-6 col-md-6 mb-4">
					      <div class="card border-0 shadow">
					        <img src="https://source.unsplash.com/TMgQMXoglsM/500x350" class="card-img-top" alt="..." />
					        <div class="card-body text-center">
					          <h5 class="card-title mb-0">Team Member</h5>
					          <div class="card-text text-black-50">Web Developer</div>
					        </div>
					      </div>
					    </div>
					    <div class="col-xl-6 col-md-6 mb-4">
					      <div class="card border-0 shadow">
					        <img src="https://source.unsplash.com/9UVmlIb0wJU/500x350" class="card-img-top" alt="..." />
					        <div class="card-body text-center">
					          <h5 class="card-title mb-0">Team Member</h5>
					          <div class="card-text text-black-50">Web Developer</div>
					        </div>
					      </div>
					    </div>
					    <div class="col-xl-6 col-md-6 mb-4">
					      <div class="card border-0 shadow">
					        <img src="https://source.unsplash.com/sNut2MqSmds/500x350" class="card-img-top" alt="..." />
					        <div class="card-body text-center">
					          <h5 class="card-title mb-0">Team Member</h5>
					          <div class="card-text text-black-50">Web Developer</div>
					        </div>
					      </div>
					    </div>
					    <div class="col-xl-6 col-md-6 mb-4">
					      <div class="card border-0 shadow">
					        <img src="https://source.unsplash.com/ZI6p3i9SbVU/500x350" class="card-img-top" alt="..." />
					        <div class="card-body text-center">
					          <h5 class="card-title mb-0">Team Member</h5>
					          <div class="card-text text-black-50">Web Developer</div>
					        </div>
					      </div>
					    </div>
					</div>
				  </div> 
				  	<div class="col-md-4">
				  		<div class="row">
							<Sidebar />
						</div>
					</div>
			  	</div>
			</div>
		</div>
	)
}

export default About