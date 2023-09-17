import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';

import Home from './pages/Home';
import Search from './pages/Search';
import Playlist from './pages/Playlist';
// import Playlist from './components/Playlist';
// import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App h-[100vh] w-[100vw]">
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/search" element={<Search/>} />
            <Route path='/playlist/:id' element={<Playlist/>} />
            {/* <Route path="/playlist/:id" component={Playlist} /> */}
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
