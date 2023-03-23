import { FC } from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { privateRoutes } from './private.routes';
import { publicRoutes } from './public.routes';

interface RouterProps {};

const Router: FC<RouterProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        { privateRoutes.map(el => <Route path={el.path} element={el.Component} /> )}
        { publicRoutes.map(el => <Route path={el.path} element={el.Component} /> )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;