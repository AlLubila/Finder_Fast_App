import './Video.css'
export const Video = ({ videos }) => {
    return (
      <>
        <div className="videos-container">
          {videos.map((video) => (
            <div key={video.id.videoId} className="video">
              <h3>{video.snippet.title}</h3>
             
              <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
              <img src={video.snippet.thumbnails.default.url} alt="Video Thumbnail" />
            </a>
            </div>
          ))}
        </div>
      </>
    );
  };
  