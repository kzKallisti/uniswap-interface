import { Navigate } from 'react-router-dom'

export default function Landing() {
  // Redirect to swap page
  return <Navigate to={{ ...location, pathname: '/swap' }} replace />
}
