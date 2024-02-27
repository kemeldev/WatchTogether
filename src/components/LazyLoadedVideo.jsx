import { JohnWickVideo } from "../assets/videos";

const LazyLoadedVideo = () => (
  <video loop muted autoPlay controls>
    <source src={JohnWickVideo} />
  </video>
);

export default LazyLoadedVideo;