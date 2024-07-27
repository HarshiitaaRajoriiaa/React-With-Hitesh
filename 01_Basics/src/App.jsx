import Playing from './Playing.jsx';

function App() {
  return (
      // <h1>Harshita</h1>  // *!here you can't return more than one tag , whatever you want to be between < > closing tags and nothing else.
      // TODO so here we return everything inside one div
      // <Playing/> //for this i have to import playing in App.jsx too
      // <div>
        // <Playing/>
      // <h2>resolved problem</h2>
      // <p> happy coding🥰🥰</p>
      // </div>
      // ** another way = we <> a fragment === return everything in fragment
      <>
        <Playing/>
        <h2>resolved problem</h2>
        <p> happy coding🥰🥰</p>
      </>
  )
}

export default App
// ** which use of javascript we can return html element and can use it in our webpage which increase functionality with HTML.
// here we made a function called App return html element can export app.jsx file to main html page === index.html