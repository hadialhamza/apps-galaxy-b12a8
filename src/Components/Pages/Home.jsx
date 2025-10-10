import React from "react";
import Hero from "../HeroSection/Hero";
import TrendingApps from "../Apps/TrendingApps";
import useApplications from "../../Hooks/useApplications";
import Loader from "../Loader and Skeleton/Loader";

const Home = () => {
  const { loading } = useApplications();
    
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <Hero></Hero>
      <TrendingApps></TrendingApps>
    </div>
  );
};

export default Home;
