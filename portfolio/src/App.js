import Header from './components/Header.js';
import Home from './pages/Home.js';
import Footer from './components/Footer.js';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  }
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App">
        <Header />
      </div>
      <Footer />
    </RouterProvider>
  );
}

export default App;
