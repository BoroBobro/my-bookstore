// import MyNav from './MyNav'
// import MyFooter from './MyFooter'
// import Welcome from './Welcome'
// import AllTheBooks from './AllTheBooks'

// function App() {
//   return (
//     <>
//       <MyNav />
//       <Welcome />
//       <AllTheBooks />
//       <MyFooter />
//     </>
//   )
// }

// export default App

// import SingleBook from "./SingleBook";
// import "bootstrap/dist/css/bootstrap.min.css"

// const book = {
//   "asin": "0316438960",
//     "title": "The Last Wish: Introducing the Witcher",
//     "img": "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
//     "price": 9.59,
//     "category": "fantasy"
// };

// function App() {
//   return (
//     <div className="App">
//       <h1 className="text-center">Test Singolo Libro</h1>
//       <SingleBook book={book} />
//     </div>
//   )
// }

// export default App;

import BookList from "./BookList";
import fantasyBooks from "./data/fantasy.json"

function App(){
  return(
    <div className="App">
      <BookList books={fantasyBooks}/>
    </div>
  )
}

export default App;