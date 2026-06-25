import { useEffect,useRef } from 'react';
import {BrowserRouter,Routes,Route,useLocation} from 'react-router-dom';
import {useMediaQuery,ThemeProvider} from '@mui/material';
import { createTheme} from '@mui/material/styles';
import { Box} from '@mui/system';
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import NavBar from './components/NavBar.jsx';
import Registration  from './components/Resistration/Registration.jsx';
import Home from  './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import News from './components/Blogs/News.jsx';
import Logoutpage from './components/Logout/Logoutpage.jsx';
import PropertyDetails from './components/FeatureProperty/PropertyDetail.jsx';
import Agentcard from './components/Home/Agentcard.jsx';
import Footer from './components/Footer/Footer.jsx';
import Wrapper from './components/TopProject/Wrapper.jsx';
import TrustedpageLayout from './components/TrustedDeveloperProject/TrustedpageLayout.jsx';
import Allreview from './components/TrustedDeveloperProject/Allreview.jsx';
import PriceTrend from './components/Treding/PriceTrend.jsx';
import TrendDetails from './components/Treding/TrendDetails.jsx';
import Propertylisting from './components/PropertyListing/Propertylisting.jsx';
import Forsale from './components/Home/Forsale.jsx';
import Forseller from './components/Sellers/Forseller.jsx';
import Broker from './components/Sellers/Broker.jsx';
import Owners from './components/Sellers/Owners.jsx';
import Payment from './components/PaymentGateway/Payment.jsx';
import Homeprotect from './components/Services/Homeprotect.jsx';
import Housingpremium from './components/Services/Housingpremium.jsx';

const theme = createTheme();

function ScrollNavigationOnTop(){
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return null;
}

function App() {
  const ref = useRef(null);
  const isMobile = useMediaQuery("(max-width:600)")

  return (
   <ThemeProvider theme={theme}>
    <BrowserRouter>
    <ScrollNavigationOnTop />
    <Box
    sx={{
      minHeight:'100vh',
      display:'flex',
      flexDirection:'column',
    }}
    >
      <NavBar
      useref = {ref}
      sx={{
        pt:isMobile ? "5px":0,
        positions:isMobile ? "fixed":"sticky",
        top:isMobile ? 0:0,
        width:'100%',
        zIndex:1200,
        backgroundColor:'black',
        borderTop:isMobile ? '1px solid #cccc':'none',
      }}
      />
      <Box sx={{flexGrow:1, paddingTop:isMobile ? '70px':'0px'}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registration' element={<Registration />}  />
          <Route path='/login' element={<Login />} />
          <Route path='/agent' element={<Agentcard />} />
          <Route path='/news' element={<News />} />
          <Route path='/Logoutpage' element={<Logoutpage />} />
          <Route path='/propertydetails/:id' element={<PropertyDetails />} />
          <Route path='/agentcard/:id' element={<Agentcard />}/>
          <Route path='/wrapper' element={<Wrapper />} />
          <Route path='/trustedpagelayout/:id' element={<TrustedpageLayout />} />
          <Route path='/reviews' element={<Allreview />} />
          <Route path="/price" element={<PriceTrend />} />
          <Route path="/details" element={<TrendDetails />} />
          <Route path="/propertylisting" element={<Propertylisting />} />
          <Route path="/forsale" element={<Forsale />} />
          <Route path="/forseller" element={<Forseller />} />
          <Route path="/broker" element={<Broker />} />
          <Route path="/owners"  element={<Owners />}/>
          <Route path="/payment" element={<Payment />} />
          <Route path="/homeprotect" element={<Homeprotect />} />
          <Route path="/housingpremium" element={<Housingpremium />} />
        </Routes>
      </Box>
    </Box>
    </BrowserRouter>

    {/* footer page */}
    <Footer />

    <ToastContainer 
    toastClassName="custom-progress"
    progressClassName="custom-progress-bar"
    position="top-right"
    autoClose={1000}
    hideProgressBar={true}
    />
   </ThemeProvider>
  );
}

export default App;
