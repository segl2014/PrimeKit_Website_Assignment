import './App.css';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import FeatureComponent from './components/FeaturesComponent';
import FeedbackComponent from './components/FeedbackComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import PricingComponent from './components/PricingComponent';
import SolutionComponent from './components/SolutionsComponent';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <AboutComponent/>
      <FeatureComponent/>
      <SolutionComponent/>
      <PricingComponent/>
      <ContactComponent/>
      <FeedbackComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
