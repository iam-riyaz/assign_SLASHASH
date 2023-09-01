import axios from "axios";
import { useEffect, useState } from "react";

export const Favorite=()=>{

    const [data,setData]= useState([])

    useEffect(()=>{
        axios.get("http://localhost:2000/get_data").then((res)=>{
            setData(res.data.results)
            
        })
    },[])

    return(
        <>
        <h2>Page 2</h2>
        <hr />
        
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
                    
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        </>
    )
}