import { lazy, Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";

const YouTubePlayer = lazy(() => import("../components/YoutubePlayer"));

const HomePage = () => {
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/large-content");
  };

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handlePlayClick}>Play Video</button>
      {showVideo && (
        <Suspense fallback={<div>Loading Video...</div>}>
          <YouTubePlayer videoId="aW2m-BtCJyE" />
        </Suspense>
      )}
      <button onClick={handleRedirect}>Go to Infinite Scroll</button>
    </div>
  );
};

export default HomePage;
