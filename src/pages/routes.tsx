import { Route, Routes, useLocation } from 'react-router-dom'
import { ROUTES } from '../shared/const' 
import { Accounts } from './Accounts/Accounts'
import { Authorization } from './Authorization'


export function PageRoutes() {
  const location = useLocation()

  return (
      <Routes location={location} key={location.pathname}>
        <Route
          path={ROUTES.MAIN_BOARD}
          element={
            <Accounts />
          }
        />
        <Route
          path={ROUTES.LOGIN}
          element={
            <Authorization />
          }
        />
      </Routes>
  )
}