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
          <Route path='/COPS23sntc' element={<LoadingPage />} />
          <Route path='/tqcsntc11' element={<LoadingPage />} />
          <Route path='/sntc55biz' element={<LoadingPage />} />
          <Route path='/csi999sntc0' element={<LoadingPage />} />
          <Route path='/sae100sntc001' element={<LoadingPage />} />
          <Route path='/sntcAMC' element={<LoadingPage />} />
          <Route path='/ROBOsntc77' element={<LoadingPage />} />
          <Route path='/astro69sntc' element={<LoadingPage />} />
        </Routes>
      </SignedIn>
    </Router>
  );
}

export default AppRoutes;
