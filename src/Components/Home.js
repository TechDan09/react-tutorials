import React from 'react';
import Sidebar from './Sidebar';

function Home(props) {
	console.log(props.blog);
	return (
		<div className="container mt5">
		  <div className="row">
		    <div className="col-md-8">
		      <h1 className="my-4"> Our Blog
		        <small> Secondary Text</small>
		      </h1>
		      {props.blog.map(obj => {
		      	return (
		      		<div className="card mb-4">
		      		  <img className="card-img-top" src={obj.img} alt="Card image cap" />
		      		  <div className="card-body">
		      		    <h2 className="card-title">{obj.blogTitle}</h2>
		      		    <p className="card-text">{obj.description}</p>
		      		    <a href="#" className="btn btn-primary">Read More &rarr;</a>
		      		  </div>
		      		  <div className="card-footer text-muted">
		      		    Posted on January 1, 2017 by
		      		    <a href="#"> Start Bootstrap</a>
		      		  </div>
		      		</div>
		      	)
		      })}
		      
		      <ul className="pagination justify-content-center mb-4">
		        <li className="page-item">
		          <a className="page-link" href="#">&larr; Older</a>
		        </li>
		        <li className="page-item disabled">
		          <a className="page-link" href="#">Newer &rarr;</a>
		        </li>
		      </ul>
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

export default Home