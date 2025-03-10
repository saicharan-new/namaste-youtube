import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  },[]);
  return (
    <div className="Flex flex-col w-full">
    <div className="px-5 flex">
        <div>
        <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?autoplay=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullscreen
        ></iframe>
        </div>
      <div>
            <LiveChat/>
      </div>
    </div>
    <div>
        <CommentsContainer/>
    </div>
    </div>

  );
};

export default WatchPage;
