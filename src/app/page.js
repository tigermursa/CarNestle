import About from "./components/About";
import Cars from "./components/Cars";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import TopButton from "./components/TopButton";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden ">
      <Header />
      <Hero />
      <Cars />
      <About />
      <WhyUs />
      <Testimonial />
      <Cta />
      <Footer />
      <TopButton />
      <div className="h-[4000px]"></div>
    </main>
  );
}
