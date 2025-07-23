import './index.css';

function App() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-3xl font-semibold mb-8">👋 Hi, I&apos;m Brendan.</h1>

      <p className="mb-6">
        I live outside Boston, MA. I enjoy learning languages, music, coffee, writing, traveling, geocaching and hiking with my family. I am an active member of the <a href="https://abenakination.com/" className="text-blue-600 hover:underline">Abenaki tribe</a> and focus much of my volunteer efforts there.
      </p>
      <p className="mb-6">
        I currently work at <a href="https://www.berkshirehathaway.com/" className="text-blue-600 hover:underline">Berkshire Hathaway</a> on their Berxi platform. Previously, I worked in a number of leadership roles in technology, operations and strategy at <a href="https://ef.edu/" className="text-blue-600 hover:underline">EF Education First</a>. In the past I have also served on a few boards and ran a digital transformation consultancy.
      </p>

      <div className="mb-6">
        <p className="font-medium">Active Personal Projects:</p>
        <ul className="list-disc list-inside">
          <li>
            Move By Move: My son and I created a chess game where the LLM explains its every move to you. Great for understanding the other players mindset and building corresponding strategies.
          </li>
          <li>
            Yenta: Building a chat-based social connector for adults 30+. Designed to make friendship easier and warmer over WhatsApp.
          </li>
          <li>
            SuperUnderwriter: Based on my time in InsureTech, currently building an AI Underwriter that InsureTech companies can use plug-and-play.
          </li>
          <li>
            I publish a weekly newsletter for project and program managers at <a href="https://www.projectsunpacked.com/" className="text-blue-600 hover:underline">Projects Unpacked</a>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <p className="font-medium">Inactive or Previous Projects:</p>
        <ul className="list-disc list-inside">
          <li>
            <i>(Active)</i> Native Futures: an organization dedicated to leveraging emerging technologies to benefit Native American people. Our first initiative is Pathway, an AI college/career counselor designed to help Native American students.
          </li>
          <li>
            <i>(On Hold)</i> Melon Math: a math competition for K-8 students run on the <a href="https://www.base.com" className="text-blue-600 hover:underline">Base</a> platform.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <p className="font-medium">Want to Connect?</p>
        <ul className="list-disc list-inside">
          <li>Need to reach out directly? I&apos;m available on Signal: @bcooney.80</li>
          <li>Connect on <a href="https://www.linkedin.com/in/cooneyb" className="text-blue-600 hover:underline">LinkedIn</a></li>
          <li>My only verified social media is on <a href="https://bsky.app/profile/bcooney.info" className="text-blue-600 hover:underline">Bluesky</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;