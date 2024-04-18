import React from 'react';

function WelcomePage() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="text-white font-bold text-lg">My App</a>
            </div>
           
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold text-center mb-5">Welcome to My Contact App</h1>
        <p className="text-lg text-center">This is a simple welcome page.</p>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 mt-10">
        <div className="container mx-auto">
          <p className="text-center text-white">&copy; 2024 My App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default WelcomePage;
