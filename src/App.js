import Results from './components/results/results';
import Search from './components/search/search';

function App() {
  return (
    <div className="grid grid-cols-2">
      <Search />
      <Results />
    </div>
  );
}

export default App;
