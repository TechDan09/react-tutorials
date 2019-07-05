import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import 'tachyons';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      blog: [
        {
          id: 1,
          blogTitle: 'PUBG',
          img: 'images/pubg.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!"
        },
        {
          id: 2,
          blogTitle: 'Need for speed',
          img: 'images/nfs.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!"
        },
        {
          id: 3,
          blogTitle: 'God of war',
          img: 'images/godofwar.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!"
        }
      ],
      appTitle: 'Learning React'
    };
  }

  render() {
    return (
      <div className="App">
        <Header daniel={this.state.appTitle} />
        <Route path="/" exact render={ (props) => <Home {...props} blog={this.state.blog} /> } />
        <Route path="/About" component={ About } />
        <Route path="/Services" component={ Services } />
        <Route path="/Contact" component={ Contact } />
        <Footer />
      </div>
    );
  }
}







/*function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/About" component={ About } />
      <Route path="/Services" component={ Services } />
      <Route path="/Contact" component={ Contact } />
      <Footer />
    </div>
  );
}*/

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'Daniel',
//       gender: 'Male',
//       color: 'Black',
//       appTitle: 'Start React Tutorial'
//     };
//   }



// }

export default App;
