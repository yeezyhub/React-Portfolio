import Header from './components/Header.js';
import Footer from './components/Footer.js';

import Home from './pages/Home.js';

import React from 'react';
import Navigation from './components/Navigation.js';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   }
// ]);

function App() {
  return (
    // <RouterProvider router={router}>
    //   <div className="App">
    //     <Header />
    //   </div>
    //   <Footer />
    // </RouterProvider>
    <Header />
  );
}

export default App;
