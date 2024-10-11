import { useState, useEffect } from "react";


const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = import.meta.env.VITE_API_KEY;

export default function Search() {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchFood(){
       const res =  await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
       const data = await res.json();
       console.log(data.results);
    }
    fetchFood();
  },[query]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
