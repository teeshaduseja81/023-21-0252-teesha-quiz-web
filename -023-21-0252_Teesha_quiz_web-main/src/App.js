import './App.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'font-awesome/css/font-awesome.min.css';



import HeroSection from './pages/HomePage/components/heroSection/heroSection';
import Navbar from './pages/HomePage/components/navbar/navbar';
import ThirdSection from './pages/HomePage/components/third-section/third-sec';




function App() {
  return (
    <div >
     
      <Navbar/>
    <HeroSection/>
    <ThirdSection/>
   
   
   
    

    </div>
  );
}

export default App;
