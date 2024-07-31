import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { SignedIn, SignedOut, UserProfile } from '@clerk/clerk-react';
import SignInPage from './components/signIn';
import App from './App';
import Card from './components/finalcard';
import LoadingPage from './components/loadingpage';

function AppRoutes() {
  return (
    <Router>
      <SignedOut>
        <SignInPage />
      </SignedOut>
      <SignedIn>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/*' element={<Navigate to='/' />} />
          <Route path='/final' element={<Card />} />
          <Route path='/user-profile' element={<UserProfile />} />
          <Route path='/$2y$10$Nm1iVYZpAQT9qXlSe2cEiOA4KToMAmRFkX4XksvYrs.IvYpqeOrra' element={<LoadingPage />} />
          <Route path='/$2y$10$JHStxLISdZy1jdWJGO.ajeNv3Le6MmNz/oiOY5IcnAWN2UT7Q74Re' element={<LoadingPage />} />
          <Route path='/$2y$10$kJ5FxDIFuOHZJ5IT./p8h.wgZc7i6yZ9VDuzc6uFctqig9d5G.Yde' element={<LoadingPage />} />
          <Route path='/$2y$10$KLioYumGhY2jKZsejeJDOOaSDEk83UXLFQUKRQW8ezGi0nDDahLqC' element={<LoadingPage />} />
          <Route path='/$2y$10$.SDpoZbCR/Xpf09Ao9SXBeMDDeZySjrSFI0uzFOyrU5ZM8H/pCmT' element={<LoadingPage />} />
          <Route path='/$2y$10$x7BEPL8CiA0BUcu/Fy8bWeIWb9p/IPr68fH2b7rhEqMJIYgHkPSc6' element={<LoadingPage />} />
          <Route path='/$2y$10$WextKBTIprT2Ee7wWOkgduYeZX4EhBjA7TNiSiVPblvMKK3tjWZSC' element={<LoadingPage />} />
          <Route path='/$2y$10$Eq/zi3VqBditD8d/JUEqyeAvHPCguLeKh1o.3DUKiyQ3OdSwDwNze' element={<LoadingPage />} />
        </Routes>
      </SignedIn>
    </Router>
  );
}

export default AppRoutes;
