import './App.css';
import Header from "./Components/Header"
import AboutUs from "./Components/AboutUs"


export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
            <Route path="/about-us" element={<AboutUs  />} />
          </Routes>

    </div>
  );
}
