import AddressBookForm from './components/address-book-form/AddressBookForm'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<AddressBookForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
