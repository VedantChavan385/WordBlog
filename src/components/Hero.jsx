import heroVideo from '../1851768-uhd_3840_2160_30fps.mp4';

function Hero() {
  return (
    <>
      <div id="center">
        <div id="left">
          <h3>
            &quot;WordBlog is a platform that empowers voices to share
            meaningful stories, inspire change, spark conversations, and connect
            communities through impactful writing.&quot;
          </h3>
        </div>
        <div id="right">
          <h1>
            STORIES <br />
            THAT <br />
            MATTER
          </h1>
        </div>
      </div>
      <video autoPlay loop muted src={heroVideo}></video>
    </>
  );
}

export default Hero;
