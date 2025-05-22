// import MyNav from './MyNav'
import MyFooter from './component/MyFooter'
import Welcome from './component/Welcome'
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
import React from 'react'
import BookList from "./component/BookList";
import fantasyBooks from "./data/fantasy.json"
import MyNav from "./component/MyNav"

function App(){
  return(
    
    <div className="App">
      <MyNav />
      <Welcome />
      <BookList books={fantasyBooks}/>
      <MyFooter />
    </div>
  )
}

export default App;
