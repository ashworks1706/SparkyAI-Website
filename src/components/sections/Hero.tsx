
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20" id="hero">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30 z-0"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-sparky-gold/10 rounded-full filter blur-3xl z-0 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-sparky-maroon/10 rounded-full filter blur-3xl z-0 animate-pulse-slow animation-delay-400"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-sparky-maroon/10 text-sparky-maroon text-sm font-medium animate-fade-down opacity-0" style={{ animationDelay: "200ms" }}>
            Multi-Agent Architecture
          </div>
          
          <h1 className="heading-xl mb-6 animate-fade-down opacity-0" style={{ animationDelay: "400ms" }}>
            Meet <span className="text-gradient font-bold">SparkyAI</span>,<br />
            Your Intelligent Campus Assistant
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 animate-fade-down opacity-0" style={{ animationDelay: "600ms" }}>
            An AI assistant leveraging cutting-edge multi-agent architecture with 
            real-time data integration for comprehensive campus resource retrieval.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-down opacity-0" style={{ animationDelay: "800ms" }}>
            <Button className="bg-sparky-maroon hover:bg-sparky-maroon/90 text-white px-8 py-6">
              Get Started
            </Button>
            <Button variant="outline" className="border-sparky-maroon text-sparky-maroon hover:bg-sparky-maroon hover:text-white transition-all px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#features" aria-label="Scroll to features">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
