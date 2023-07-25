import './App.css';
import Create from './components/create';

function App() {
  return (
    <div class="flex flex-col items-center mt-16 gap-6 bg-slate-500 mx-16 rounded-lg py-10">
      <h1 class="font-bold text-3xl">TASK MANAGER v2.0</h1>
      <Create />
    </div>
  );
}

export default App;