import './index.css';

function App() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-3xl font-mono mb-8">Hi, I&apos;m Brendan.</h1>
      
      <p className="font-mono mb-6">
        I live outside Boston, MA. I enjoy learning languages, music, coffee, writing, traveling, geocaching and hiking with my family. I am an active member of the <a href="https://abenakination.com/" className="text-blue-600 hover:underline">Abenaki tribe</a> and focus much of my volunteer efforts there.
      </p>
      <p className="font-mono mb-6">
        I currently work at <a href="https://www.berkshirehathaway.com/" className="text-blue-600 hover:underline">Berkshire Hathaway</a> on their Berxi platform. Previously, I worked in a number of leadership roles in technology, operations and strategy at <a href="https://ef.edu/" className="text-blue-600 hover:underline">EF Education First</a>. In the past I have also served on a few boards and ran a digital transformation consultancy.
      </p>
      <div className="font-mono mb-6">
        <p>Active Personal Projects:</p>
        <ul className="list-disc list-inside">
          <li>Melon Math: a math competition for K-8 students run on the <a href="https://www.base.com" className="text-blue-600 hover:underline">Base</a> platform.</li>
          <li>Native Futures: an organization dedicated to leveraging emerging technologies to benefit Native American people. Our first initiative is Pathway, an AI college/career counselor designed to help Native American students.</li>
        </ul>
      </div>

      <div className="font-mono mb-6">
        <p>Want to Connect?</p>
        <ul className="list-disc list-inside">
          <li>Need to reach out directly? I&apos;m available on Signal: @bcooney.80</li>
          <li>Connect on <a khref="https://www.linkedin.com/in/cooneyb" className="text-blue-600 hover:underline">LinkedIn</a></li>
          <li>You can also check out my project/program management newsletter <a href="https://www.projectsunpacked.com/" className="text-blue-600 hover:underline">Projects Unpacked</a></li>
          <li>I also keep a personal blog on <a href="https://bsky.app/profile/bcooney.info" className="text-blue-600 hover:underline">Bluesky</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
