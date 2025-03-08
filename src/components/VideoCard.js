import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-t-lg" alt="thumbnails" src= {thumbnails.medium.url}/>
      <ul>
        <li className="font-bold my-2 line-clamp-2 overflow-hidden h-12" title={title}>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  )
};

export const AdVideoCard = ({info}) => {
    return (
        <div className="p-0.5 border border-gray-400 rounded-lg">
        <VideoCard info={info}/>
        </div>
    )
}

export default VideoCard
