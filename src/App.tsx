import './index.css';

function App() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-3xl font-mono mb-8">Renegades</h1>
      
      <p className="font-mono mb-6">
        Renegades is a cryptonative consumer software company founded in 2024.
      </p>

      <p className="font-mono mb-8">
        We craft software that aims to make you <span className="font-bold">feel</span> something.
      </p>

      <div className="font-mono space-y-2 mb-8">
        <p>We move fast.</p>
        <p>We fear the midwit within us.</p>
        <p>We embrace cultural taboos when it makes sense to.</p>
        <p>We don't cut corners.</p>
        <p>We have fun.</p>
      </div>

      <p className="font-mono mb-6">
        So far, we've released <a href="#" className="text-blue-600 hover:underline">Scoop</a> - which did $2.5M in volume, $100k of revenue, and had 12k users within the first 10 days of launch.
      </p>

      <p className="font-mono mb-6">
        We made a lot of mistakes building Scoop.
      </p>

      <p className="font-mono mb-8">
        And we plan to make different ones with our next release.
      </p>

      <a href="#" className="font-mono text-blue-600 hover:underline">Join us</a>
    </div>
  );
}

export default App;
