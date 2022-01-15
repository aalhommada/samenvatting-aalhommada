export default function BackgroundVideo() {
  return (
    <div className="relative flex items-center justify-center h-screen m-0 p-0 overflow-hidden">
      <div className="relative z-30 p-5 text-2xl text-white bg-indigo-800 bg-opacity-60 rounded-xl mx-5">
        <h2 className="text-5xl font-extrabold">Welkom op de website van Samenvatten.</h2>
        <p className="text-md">Ik ben Ali en ik doe Samenvatting van een boeken die ik heb gelezen.</p>
      </div>
      <video
        src="/videos/video-books.mp4"
        autoPlay
        loop
        muted
        className="absolute z-10 w-full h-full object-cover"
      />
    </div>
  );
}
