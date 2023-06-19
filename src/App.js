import { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './pages';
import { split } from './data/animation';
import CustomCursor from './components/Custom-cursor/CustomCursor';

function App() {
  const { pathname } = useLocation();
  const circleRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [pathname]);

  useEffect(() => {
    split();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    circleRef.current.moveTo(window.innerWidth / 2, window.innerHeight / 2);
    const onMouseMove = ({ clientX, clientY }) => {
      circleRef.current.moveTo(clientX, clientY);
    };

    window.addEventListener(`pointermove`, onMouseMove);
    return () => window.removeEventListener(`pointermove`, onMouseMove);
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <CustomCursor ref={circleRef} />
    </>
  );
}

export default App;
