import AddressBookForm from './components/address-book-form/AddressBookForm'
import HomePage from './components/home-page/HomePage';
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
        <Route path="/" element={<HomePage />} />
        <Route path="/address-book-form/" element={<AddressBookForm />} />
        <Route path="/address-book-form/:id" element={<AddressBookForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
