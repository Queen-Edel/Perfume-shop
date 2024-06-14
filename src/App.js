import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Allkinds from './Components/AllKindSection';
import MoreProductsMen from './Components/MoreProductM';
import MoreProductsWomen from './Components/MoreProductW';
import ForManAndWomen from './Components/ForManAndWomen';
import NewCollections from './Components/NewCollections';
import BestTypes from './Components/BestTypes';
import OurFeatures from './Components/OurFeatures';
import CustomerOpinion from './Components/CustomersOpinion';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App  bg-bg-color text-white">
<Navbar/>
<Header/>
<Allkinds/>
<MoreProductsMen/>
<MoreProductsWomen/>
<ForManAndWomen/>
<BestTypes/>
<NewCollections/>
<OurFeatures/>
<CustomerOpinion/>
<Contact/>
<Footer/>
    </div>
  );
}

export default App;
