import * as React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Home from './components/home/Home';
import { Header } from "./components/header/Header";
import Footer from './components/footer/Footer';
import SharedHosting from "./components/sharedHosting/SharedHosting";
import ScrollToTop from "./components/ScrollToTop";
import DedicatedServer from "./components/dedicatedServer/DedicatedServer";
import ResellerHosting from "./components/sharedHosting/ResellerHosting";
import UnmanagedServer from "./components/unmanagedServer/UnmanagedServer";
import ManagedServer from "./components/managedServer/ManagedVps";
import 'aos/dist/aos.css';
import AOS from 'aos';
import EmailHosting from "./components/emailHosting/EmailHosting";
import LocationDatatabel from "./components/dedicatedServer/locationDatatable/LocationDatatabel";
import AboutUs from "./components/aboutUs/AboutUs";
import TermsOfService from "./components/termsOfService/TermsOfService";
import NorthAmerica from "./components/serverCountrywise/northAmerica/NorthAmerica";
import Europe from "./components/serverCountrywise/europe/Europe";
import SouthAmerica from './components/serverCountrywise/SouthAmerica';
import Asia from "./components/serverCountrywise/Asia";
import Africa from "./components/serverCountrywise/Africa";
import NetherLand from "./components/serverCountrywise/NetherLand";
import Canada from "./components/serverCountrywise/Canada";
import UnitedState from "./components/serverCountrywise/UnitedState";
import Germany from "./components/serverCountrywise/Germany";
import UnitedKingdom from "./components/serverCountrywise/UnitedKingdom";
import PrivacyPolicy from "./components/privacyPolicy/PrivacyPolicy";
import DomainRegistration from "./components/domains/domainRegistration/DomainRegistration";
import SslCertificate from "./components/otherServices/sslCertificatet/SslCertificate";
import RemoteAssistant from "./components/otherServices/remoteAssistant/RemoteAssistant";
import WrodpressCustomization from "./components/otherServices/wordpressCustomization/WrodpressCustomization";
import WrodpressMigration from "./components/otherServices/wordpressMigration/WrodpressMigration";
function App() {
  // for aos animation
  React.useEffect(() => {
    AOS.init({
      duration: "2000"
    });
  }, [])
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header></Header>
      <Routes>
        {/* login page       */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/shared-hosting" element={<SharedHosting />} />
        <Route path="/dedicated-server" element={<DedicatedServer />} />
        <Route path="/dedicated-servers/:location" element={<LocationDatatabel />} />
        <Route path="/reseller-hosting" element={<ResellerHosting />} />
        <Route path="/unmanaged-vps" element={<UnmanagedServer />} />
        <Route path="/managed-vps" element={<ManagedServer />} />
        <Route path="/email-hosting" element={<EmailHosting />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/termsOfService" element={<TermsOfService />} />
        <Route path="/north-america" element={<NorthAmerica />} />
        <Route path="/europe" element={<Europe />} />
        <Route path="/south-america" element={<SouthAmerica />} />
        <Route path="/asia" element={<Asia />} />
        <Route path="/africa" element={<Africa />} />
        <Route path="/netherland" element={<NetherLand />} />
        <Route path="/canada" element={<Canada />} />
        <Route path="/united-state" element={<UnitedState />} />
        <Route path="/germany" element={<Germany />} />
        <Route path="/united-kingdom" element={<UnitedKingdom />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/domain-registration" element={<DomainRegistration />} />
        {/* <Route path="/privacy-protection" element={<PrivacyProtection />} /> */}
        <Route path="/ssl-certificate" element={<SslCertificate />} />
        <Route path="/remote-assistant" element={<RemoteAssistant />} />
        <Route path="/wordpress-customization" element={<WrodpressCustomization />} />
        <Route path="/wordpress-migration" element={<WrodpressMigration />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

  );
}

export default App;
