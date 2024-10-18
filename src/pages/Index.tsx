import React from 'react';
import GrantWriterAssistant from '../components/GrantWriterAssistant';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">AI-PGF Grant Writer Assistant</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <GrantWriterAssistant />
        </div>
      </main>
    </div>
  );
};

export default Index;