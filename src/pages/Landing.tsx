import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Lightbulb, Rocket, Brain, Target } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <div className="relative">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <div className="text-center animate-fade-in">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block animate-slide-up">AI-Powered</span>
                  <span className="block text-primary animate-slide-up-delayed">
                    Grant Writing Assistant
                  </span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl animate-fade-in-delayed">
                  Streamline your grant writing process with our advanced AI assistant. 
                  Get professional-quality grant proposals in minutes.
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                  <Button
                    size="lg"
                    onClick={() => navigate("/auth")}
                    className="w-full sm:w-auto animate-bounce"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
                <Lightbulb className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Smart Suggestions</h3>
                <p className="text-gray-600">
                  AI-powered suggestions to improve your grant proposals
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
                <Rocket className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Fast Generation</h3>
                <p className="text-gray-600">
                  Generate complete grant proposals in minutes
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
                <Brain className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">AI Analysis</h3>
                <p className="text-gray-600">
                  Get insights and improvements for your proposals
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
                <Target className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Targeted Writing</h3>
                <p className="text-gray-600">
                  Customize content for specific grant requirements
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;