// ProtectedRoute.js
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const  userInfo  = useSelector((state) => state.user.profile)

  // show unauthorized screen if no user is found in redux store
  if (!userInfo) {
    return (
      <div className='bg-dark unauthorized'>
        <h1>Unauthorized : </h1>
        <h2>You do not have access to this page</h2>
        <span>
          <NavLink to='/login'>Sign in</NavLink> to gain access
        </span>
      </div>
    )
  }

  // returns child route elements
  return <Outlet />
}
export default ProtectedRoute