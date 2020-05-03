import React, {Component} from 'react';
import Getdata from './Components/Getdata';
import Displaydata from './Components/Displaydata';
import Axios from 'axios';
import './App.css';

class App extends Component {
    state={
      query:'',
      finalquery:'',
      name:'',
      rating:'',
      plot:'',
      date:'',
      director:'',
      genre:'',
      image:''

    }
    
   async componentDidMount(){
  this.getdata();
   }
      

   
 async getdata(){


const res= await Axios.get(`http://www.omdbapi.com/?t=${this.state.query}&apikey=3ce7dd77`)
      .then ((response)=>{
              // console.log(response.data.Title)
              this.setState({
                name:response.data.Title,
                rating:response.data.imdbRating,
                plot:response.data.Plot,
                date:response.data.Released,
                director:response.data.Director,
                genre:response.data.Genre,
                image:response.data.Poster
              })

        
      })
       .catch ((error) =>{
                      console.log(error)

       });

  
 }

  

   inputHandler=async(e)=>{
      const inp=await e.target.value;
     
      this.setState({
        query:inp
        
      })
     this.componentDidMount(this.state.query)
   };

   

  render(){

  return (
    <div className="App">
    
    <Getdata  change={this.inputHandler} click={this.clickHandler}/>


    <Displaydata 
    name={this.state.name} 
    rat={this.state.rating} 
    plt={this.state.plot}
    dat={this.state.date}
    gen={this.state.genre}
    dir={this.state.director}
    img={this.state.image} />
    
    </div>
  );
}
}

export default App;
