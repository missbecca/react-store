import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/card";
import Avator from "./components/Avator";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="p-10 flex flex-wrap gap-10">
        <Card
          img="https://images.pexels.com/photos/14309956/pexels-photo-14309956.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          title="Pineaaple"
          text="I love pineapple because they are sweet"
        />
        <Card
          img="https://images.pexels.com/photos/29085679/pexels-photo-29085679/free-photo-of-elegant-baroque-interior-library-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          title="library"
          text="The enviroment looks great for studying"
        />
        <Card
          img="https://images.pexels.com/photos/29465911/pexels-photo-29465911/free-photo-of-cozy-winter-scene-with-christmas-lights-and-pillows.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          title="Christmas bedroom"
          text="Am getting prepared for christmas this year "
        />
      </div>

      <Footer />
    </div>
  );
};

export default App;
