import PantryList from './components/PantryList.jsx';
import PantryForm from './components/PantryForm.jsx';

function App() {
  return (
    <div className="flex flex-col bg-blue-200 border-white">
      <PantryList />
      <PantryForm />
    </div>
  )
}

export default App;