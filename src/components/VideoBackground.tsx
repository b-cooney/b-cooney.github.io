const VideoBackground = () => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-background"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-abstract-lights-in-dark-background-48734-large.mp4"
          type="video/mp4"
        />
      </video>
      <div className="overlay" />
    </>
  );
};

export default VideoBackground;
