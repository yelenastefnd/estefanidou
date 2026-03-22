import Sidebar from "@/components/Sidebar";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="pt-20 px-4 pb-12 lg:pt-10 lg:pl-72 lg:pr-8 lg:pb-16">
        <Gallery />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
