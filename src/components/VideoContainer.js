import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

    useEffect(() => {

        getVideos();

    }, []);

    const getVideos = async () => {
        const  data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        // console.log(json.items);
        setVideos(json.items)
    };

  return (
    <div className="flex flex-wrap gap-6">
      { videos.length > 0 && <AdVideoCard info={videos[Math.floor(Math.random() * 49)]}/>}
      {
        videos.map(video =>videos.length > 0 ? <Link to={"/watch?v="+ video.id} key={video.id}><VideoCard info={video} key={video.id} /> </Link> : <p>Loading...</p>)
      }
    </div>
  )
}

export default VideoContainer
