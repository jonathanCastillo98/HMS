import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from './models';
import { AuthGuard } from './guards';
import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import RoutesWithNotFound from './utilities/routesWithNotFound.utility';
import { Logout } from './components/Logout';
import { Admin } from './pages/Private';

const Login = lazy(() => import('./pages/Login/Login'));
const Private = lazy(() => import('./pages/Private/Private'));

function App() {

  return (
    <>
      {/* Cuando tarda en cargar un componente aqui se mete el spiner */}
      <Suspense fallback={<div>Cargando</div>}>
        <Provider store={store}>
          <BrowserRouter>
            <RoutesWithNotFound >
              <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />} />
              {/* Ruta para cuando se pida una ruta inexistente */}
              {/* <Route path='*' element={<>NOT FOUND</>} /> */}
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard privateValidation={true} />}>
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
              </Route>
            </RoutesWithNotFound>
            <Logout />
          </BrowserRouter>
        </Provider>
      </Suspense>
    </>
  )
}

export default App
