import './index.css';

function App() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-3xl font-mono mb-8">Hi, I&apos;m Brendan.</h1>
      
      <p className="font-mono mb-6">
        I live in Boston, MA. I enjoy learning languages, music, technology, writing, traveling, geocaching and hiking with my family. I am a member of the <a href="https://abenakination.com/missisquoi-tribe">Abenaki Nation</a>.
      </p>

      <p className="font-mono mb-6">
        I currently work for <a href="https://www.berkshirehathaway.com/" className="text-blue-600 hover:underline">Berkshire Hathaway</a> on their Berxi platform. Previously, I worked in a number of sectors.
      </p>

      <div className="font-mono mb-6">
        <p>Current Projects Include:</p>
        <p><a href="https://v1.melonmath.win/" className="text-blue-600 hover:underline">1. Melon Math</a>, an AI-developed math competition for K-8 students run entirely on the <a href="https://www.bas">Base</a> platform.</p>
        <p>2. Native Futures, an organization dedicated to leveraging emerging technologies to benefit Native American people. Our first initiative is Pathway, an AI college/career counselor designed to help Native American students.</p>
      </div>

      <div className="font-mono mb-6">
        <p>Want to Connect?</p>
        <ul>
          <li>Need to reach out directly? I&apos;m available on Signal: @bcooney.80</li>
          <li>Connect on <a href="https://www.linkedin.com/in/cooneyb" className="text-blue-600 hover:underline">LinkedIn</a></li>
          <li>My only <i>verified</i> social media is on <a href="https://bsky.app/profile/bcooney.info" className="text-blue-600 hover:underline">Bluesky</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
