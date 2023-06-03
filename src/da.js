import "./App.css";
import { useEffect, useState } from "react";

// let URl = `https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole`;

// function App() {
//   const [data, setData] = useState([]);

//   const getData = async () => {
//     const response = await fetch(URl);
//     const data = await response.json();
//     setData(data);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   // console.log(data);

//   return (
//     <div className="App">
//       {
//         <div className="card">
//           {data.map(
//             (item, i) => (
//               (
//                 <img
//                   key={i}
//                   src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"
//                   alt=""
//                 />
//               ),
//               (
//                 <h1>
//                   {item.first}
//                   {item.last}
//                 </h1>
//               ),
//               (<h1>{item.email}</h1>),
//               (<h1>{item.address}</h1>)
//             )
//           )}
//         </div>
//       }
//       <div></div>
//     </div>
