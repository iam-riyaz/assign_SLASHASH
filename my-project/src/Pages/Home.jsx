
import { useEffect, useState } from "react";
import axios from "axios";
export const Home=()=>{

    const [data, setData] = useState([]);
    const [searchStr, setSearch] = useState("");
    const [query, setQuery] = useState("");
  
    const onSearch = () => {
      axios
        .get(
          `https://www.omdbapi.com/?i=tt3896198&apikey=1f4e27ac&s=${searchStr}`
        )
        .then((res) => {
          setData(res.data.Search);
        })
        .catch((err) => console.log(err));
    };
  
  
    const addToFav = (obj) => {
      const url = "http://localhost:2000/add_to_favorite";
  
      axios
        .post("http://localhost:2000/add_to_favorite", obj)
        .then((res) => {
          console.log("Response:", res);
        })
        .catch((err) => {
          console.log("Error:", err);
        }); 
    };
  
    console.log({ data });
    console.log({ searchStr });
    return (
      <>
        <h2>Page 1</h2>
        <hr />
        <div>
          <input
            id="input"
            placeholder="movie title"
            onChange={(e) => setSearch(e.target.value)}
            type="text"
          />
          <button id="search" onClick={onSearch}>
            Search
          </button>
        </div>
        <hr />
        <div>
          {data ? (
            <div id="box">
              {data.map((e) => {
                return (
                  <div id="mybox">
                    <span>
                      <h2>
                        {e.Title} ({e.Year})
                      </h2>{" "}
                      <h4>{e.Type}</h4> <img src={e.Poster} alt="" />{" "}
                    </span>
                    <br />
                    <button id="addto" onClick={() => addToFav(e)}>
                      add to FAVORITE
                    </button>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </>
    );
}