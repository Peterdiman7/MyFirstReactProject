import './App.css';
import BookList from './components/BookList';
import Counter from './components/Counter';
import Heading from "./components/Heading";

let booksData = [
  {title: "Harry Potter", description: "The boy who lived..."},
  {title: "The Lord of The Rings", description: "Frodo's adventure!"},
  {title: "Orconomics", description: "Fun is inevitable!"},
  {title: "The Chronicles of Narnia", description: "The Lion, the Witch and the Dresser!"}
];

function App() {
  return (
    <div className="site-wrapper">
      <Heading />
      <Counter />
      <BookList books={booksData} />
    </div>
  )
}

export default App;