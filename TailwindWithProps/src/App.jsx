import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Components/Card.jsx';

function App() {
  return (
    <div className="App">
      <Card username="Delba" btn="Learn More" />
      <Card username="John Doe" btn="Contact" />
    </div>
  );
}
export default App
