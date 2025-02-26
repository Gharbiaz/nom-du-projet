import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import ordi from './ordinateur.jpg'
function App() {
  const computer = {
    name: "Ordinateur Portable MSI",
    imageUrl: ordi, 
    description: "Un ordinateur portable performant avec un processeur puissant, un grand stockage et un écran haute définition. Idéal pour les professionnels et les gamers.",
    price: "1299DT"
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          {/* Image */}
          <img src={computer.imageUrl} alt={computer.name} className="img-fluid rounded shadow-lg" />
        </div>
        <div className="col-md-6">
          {/* Computer Details */}
          <h1>{computer.name}</h1>
          <p>{computer.description}</p>
          <h3 className="text-success">{computer.price}</h3>
          <button className="btn btn-primary btn-lg mt-3">Acheter Maintenant</button>
        </div>
      </div>
    </div>
  );
}

export default App;
