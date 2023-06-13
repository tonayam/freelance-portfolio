import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './pages';
import { split } from './data/animation';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [pathname]);

  useEffect(() => {
    split();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
