import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Wand2, Github, Cpu } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Welcome to Pollinations DIY
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Create and experiment with AI-powered creative tools
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/create"
            className="flex items-center space-x-2 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Wand2 className="h-5 w-5" />
            <span>Start Creating</span>
          </Link>
          <a
            href="https://github.com/pollinations/pollinations.diy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Sparkles className="h-8 w-8 text-purple-500" />}
          title="AI-Powered Creation"
          description="Leverage state-of-the-art AI models to bring your creative ideas to life"
        />
        <FeatureCard
          icon={<Cpu className="h-8 w-8 text-purple-500" />}
          title="Open Source"
          description="Built on open-source technology, fully customizable and free to use"
        />
        <FeatureCard
          icon={<Wand2 className="h-8 w-8 text-purple-500" />}
          title="Easy to Use"
          description="Simple interface designed for both beginners and advanced users"
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="p-6 bg-gray-800/50 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Home;