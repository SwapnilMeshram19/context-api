import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorSearch, getSearch, loadingSearch } from "../store/action";
import { GithubCard } from "./GithubCard";

export const Github = () => {
  const [searchInputText, setSearchInputText] = useState("");
  const [searchText, setSearchText] = useState("React");

  const { loading, error, data } = useSelector((state) => state);
  console.log(loading,error,data);

  const searchButton = () => {
    setSearchText(searchInputText);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingSearch());
    axios({
      method: "get",
      url: `https://api.github.com/search/repositories?q=${searchText}`,
    })
      .then((res) => {
        dispatch(getSearch(res.data));
      })
      .catch((error) => dispatch(errorSearch()));
  }, [dispatch,searchText]);

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          value={searchInputText}
          onChange={(event) => setSearchInputText(event.target.value)}
        />
        <button onClick={searchButton}>Search</button>
      </div>
      {data.items==null ? (
        <div>Loading....</div>
      ) : error ? (
        <div>Error....</div>
      ) : (
        <div className="github-cards">
          {data.items.map((el) => (
            <GithubCard repo={el} key={el.id} />
          ))}
        </div>
      )}
    </div>
  );
};
