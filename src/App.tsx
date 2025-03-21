import './index.css';

function App() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-3xl font-mono mb-8">Hi, I&apos;m Brendan.</h1>
      
      <p className="font-mono mb-6">
        I live in Boston, MA. I enjoy learning languages, music, technology, writing, traveling, geocaching and hiking with my family. I am a member of the <a href="https://abenakination.com/" className="text-blue-600 hover:underline">Abenaki tribe</a>.
      </p>
      <p className="font-mono mb-6">
        I currently work for <a href="https://www.berkshirehathaway.com/" className="text-blue-600 hover:underline">Berkshire Hathaway</a> on their Berxi platform. Previously, I worked in a number of education technology, operations and strategy roles at <a href="https://ef.edu/" className="text-blue-600 hover:underline">EF Education First</a>. In the past I served on a few boards and ran a digital transformation consultancy.
      </p>
      <div className="font-mono mb-6">
        <p>Current Projects:</p>
        <ul className="list-disc list-inside">
          <li>Melon Math: a math competition for K-8 students run on the <a href="https://www.base.com" className="text-blue-600 hover:underline">Base</a> platform.</li>
          <li>Native Futures: an organization dedicated to leveraging emerging technologies to benefit Native American people. Our first initiative is Pathway, an AI college/career counselor designed to help Native American students.</li>
        </ul>
      </div>

      <div className="font-mono mb-6">
        <p>Want to Connect?</p>
        <ul className="list-disc list-inside">
          <li>Need to reach out directly? I&apos;m available on Signal: @bcooney.80</li>
          <li>Connect on <a href="https://www.linkedin.com/in/cooneyb" className="text-blue-600 hover:underline">LinkedIn</a></li>
          <li>My only <i>verified</i> social media is on <a href="https://bsky.app/profile/bcooney.info" className="text-blue-600 hover:underline">Bluesky</a></li>
          <li>My Twitter account (used mostly for networking) is <a href="https://x.com/bcooney_info" className="text-blue-600 hover:underline">@bcooney_info</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
