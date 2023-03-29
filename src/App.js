import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div className="App">
   
        <h1> Book store App</h1>
        <Book/>
    </div>
  );
}

function Book(){
  const book={
    name:"Tha Jungle Book",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdpPQxGVt_OrUAEbf3qc_o8P5KAmQ9iiS2dA&usqp=CAU",
    summery:"The stories tell mostly of Mowgli, an Indian boy who is raised by wolves and learns self-sufficiency and wisdom from the jungle animals. The book describes the social life of the wolf pack and, more fancifully, the justice and natural order of life in the jungle."
 ,rating:9.4
  };

  return(
    <div className="book-container"> 
    <img className="book-poster" src={book.poster} alt={book.name}/>
    <div className="book-spec">
       <h2 className="book-name">{book.name}</h2>
       <p className="book-rating"> ⭐{book.rating}</p>
      
    </div>
    <p className="book-rating">{book.summery}</p>
    </div>
  );
}

export default App
