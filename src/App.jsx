import { useState } from "react";
import { Video } from './DisplayVideo/Video'
import { Form } from './form/Form'
import './index.css'

export const App = () => {
  const [videos, setVideos] = useState([]);

  const handleVideoData = (videoData) => {
    setVideos(videoData);
  };

  return (
    <>
      <Form onVideoData={handleVideoData} />
      <Video videos={videos} />
    </>
  );
};
