import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom'
import logo from '../logo.svg'

export const Navigation = () => {
  const setIsActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'nav-active' : ''

  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='React logo' />
          <ul>
            <li>
              <NavLink to='/home' className={setIsActive}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' className={setIsActive}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/users' className={setIsActive}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='about' element={<h1>About Page</h1>} />
          <Route path='users' element={<h1>Users Page</h1>} />
          <Route path='home' element={<h1>Home Page</h1>} />

          <Route path='/*' element={<Navigate to='/home' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
