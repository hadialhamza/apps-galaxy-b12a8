import AllApplications from "./Components/Apps/AllApplications";
import AppDetailsPage from "./Components/Apps/AppDetailsPage";
import InstalledApps from "./Components/Apps/InstalledApps";
import TrendingApps from "./Components/Apps/TrendingApps";
import AppError from "./Components/Error/AppError";
import PageError from "./Components/Error/PageError";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/HeroSection/Hero";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <AllApplications></AllApplications> */}
      {/* <Hero></Hero>
      <TrendingApps></TrendingApps> */}
      {/* <InstalledApps></InstalledApps> */}
      {/* <AppDetailsPage></AppDetailsPage> */}
      {/* <AppError></AppError> */}
      <PageError></PageError>
      <Footer></Footer>
    </>
  );
}

export default App;
