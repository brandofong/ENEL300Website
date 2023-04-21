import React from "react";
import { motion } from "framer-motion";
import fresh from "../assets/pict.png";
import prod from "../assets/rose.jpg";

const Home = () => {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 200, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="shadow-md py-8 font-semibold font-Lato flex justify-between items-center w-full h-14 px-5 border-b-4 border-b-blue-700 ">
        <div className="h-screen w-full text-lg text-blue-800">
          <div className="absolute top-0 left-0 p-4">
            <div className="text-blue-800 font-semibold">Fresh Freshet</div>
          </div>
          <div className="absolute top-0 right-0 p-4">
            <nav className="flex flex-row gap-12">
              <a href="#home" className="font-semibold">
                Home
              </a>
              <a href="#probe" className="font-semibold">
                Our Product
              </a>

              <a href="#contact" className="font-semibold pr-8">
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </div>

      <div id="home" className="p-8">
        <h2 className="text-2xl font-bold text-center ">
          Welcome to Fresh Freshet!
        </h2>
        <img
          src={fresh}
          alt="poster"
          className=" rounded-3xl mx-auto  mt-10 mb-10 drop-shadow-md shadow-gray-700 z-10 w-[500px]"
        />
        <p className="text-center px-80 py-10 ">
          Clean drinking water is essential for good health, yet for many people
          around the world, access to safe water is a challenge. Even in
          developed countries, travelers can face issues with the quality of the
          water they drink or use. This is especially true for people with weak
          immune systems, who are more vulnerable to different waterborne
          illnesses.
        </p>
      </div>

      <div id="probe" className=" text-center px-80 ">
        <h2 className="text-2xl font-bold mb-4">
          Our Product: Water Quality Probe
        </h2>
        <img
          src={prod}
          alt="product"
          className=" rounded-xl mx-auto  mt-10 mb-10 drop-shadow-md shadow-gray-700 z-10 w-[500px]"
        />

        <p>
          Our group recognized this problem and set out to find a solution. We
          wanted to design and create a product that could help us ensure the
          water we drink or use while traveling is safe and healthy, especially
          in tropical locations where the ice may not necessarily be the safest
          for consumption. After weeks of research and brainstorming, we decided
          to design a probe that measures the conductivity and turbidity of
          water and this would allow us to test the quality of a sample water
          quickly and accurately.
        </p>

        <h2 className="text-2xl font-bold mb-4 pt-8">How It Works</h2>
        <p>
          Our product is a small device that can help make sure that the water
          you drink is safe. It has a power source that you can turn on and off
          to test a sample of water. The device has LED lights that will turn on
          or off to let you know if the water is safe or not. You just have to
          put two probes into the water to test it. Sometimes, bad things in the
          water can't be seen with the naked eye, but this device can detect
          them. It's a good value because it only costs about $50 and can save
          you from getting sick or ruining a trip. The Fresh Freshet has some
          parts inside of it, like a microcontroller, resistors, LEDs, a power
          source, and two sensors. These sensors measure things like how cloudy
          or dirty the water is, and how much stuff is dissolved in it. We set
          the standards for what we think is "clean" water using a special
          computer program and adjusting a knob. The power comes from a battery
          that we made a little bit weaker so it doesn't hurt the device. We
          made a special 3D printed case to hold everything in place, with the
          sensors in the best spots for testing the water. We also soldered all
          the parts together to make sure they work well.
        </p>
      </div>

      <div id="benefits" className="p-8 text-center px-80 ">
        <h2 className="text-2xl font-bold mb-4">Benefits of our Product</h2>
        <p>
          Our initial prototype underwent several rounds of testing and
          refinement. We did extensive research to find the most accurate way to
          test the quality of the water. Through our testing, we found that our
          product was effective in detecting water quality issues, including
          high levels of contaminants and pollutants by testing it with salt and
          soiled water. We believe that our product will be beneficial not only
          for travelers but also for people who live in areas with poor water
          quality. By providing a simple and affordable tool for testing water
          quality, we hope to empower people to take control of their health and
          well-being.
        </p>

        <div className="p-8 text-center ">
          <h2 className="text-2xl font-bold mb-4">
            Sustainable Development Goals
          </h2>
          <p>
            The UN has set sustainability goals that include clean water and
            sanitation (goal 6), responsible production and consumption (goal
            12), as well as climate action (goal 13) and life on land (goal 15).
            Our product can help achieve these goals by measuring the pollution
            levels in water and ice. Clean water should have low conductivity,
            while polluted water will have a high conductivity due to nitrate,
            phosphate, and other ions. With over 2 billion people worldwide
            drinking contaminated water, our product can contribute to ensuring
            access to clean and safe water, especially for vulnerable
            communities. In addition, our team made a conscious effort to
            practice responsible consumption by using existing resources for our
            project, rather than buying new ones unnecessarily.
          </p>
        </div>
        <div id="contact" className="p-8 text-center ">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            Have a question? Come visit us on site at the Schulich School of
            Engineering located at 622 Collegiate Pl NW, Calgary, AB T2N 4V8!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
