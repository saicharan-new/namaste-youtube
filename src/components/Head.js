import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSugg, setShowsugg] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector(store => store.search)

  useEffect(() => {
    console.log(searchQuery);

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
      

    }, 200);
  
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API call - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);

    dispatch(cacheResults({
      [searchQuery] : json[1],
    }));
  };
  
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className=" flex gap-4 col-span-1">
        <img
          onClick={toggleMenuHandler}
          className=" h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=512"
        />
        <a href="/">
          <img
            className=" h-8"
            alt="youtube"
            title="Home"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9wVREZz_bH2Sl_SQ1F1hQhkE4FgzHa47PGw&s"
          />
        </a>
      </div>
      <div className="col-span-10 ml-24">
        <div className="relative">
          <input
            className="w-1/2 border border-gray-600 py-2 px-5 rounded-l-full"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowsugg(true)}
            onBlur={() => setShowsugg(false)}
          />
          <button className="border border-gray-400 py-2 px-5 rounded-r-full border-l-0 bg-gray-100">
            🔍
          </button>
        </div>
        { showSugg && searchQuery.length >0 &&
          <div className=" absolute px-5 py-2 bg-white border border-gray-100 shadow-lg w-1/3 rounded-2xl">
          <ul>
            {suggestions.map((s) => (
              <li key={s} className="py-2 hover:bg-gray-100">🔍 {s}</li>
            ))}
          </ul>
        </div>
        }
        
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
