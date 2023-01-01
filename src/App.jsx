import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchAllCategories = async () => {
      await axios
        .get("https://web-production-dfb0.up.railway.app/api/v1/categories/")
        .then((response) => {
          setCategories(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchAllCategories();
  }, []);

  return (
    <div className="App">
      <p>{categories[0]['slug']}</p>
    </div>
  )
}

export default App
