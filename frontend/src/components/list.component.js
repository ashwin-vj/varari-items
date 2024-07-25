// // ExampleComponent.js
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function ExampleComponent() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     axios
//       .get("https://api.example.com/data")
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error making the request!", error);
//       });
//   }, []);

//   return (
//     <div className="container">
//       <h1>Data from API</h1>
//       {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
//     </div>
//   );
// }

// export default ExampleComponent;
// src/components/ExampleComponent.js
import React, { useEffect, useState } from 'react';
import apiClient from '../api/axios';

function ExampleComponent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    apiClient
      .get("http://127.0.0.1:8000/api/products/get/1")
      .then((response) => {
        console.log(response);
        setItems(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the items!", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExampleComponent;
