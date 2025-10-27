import React, { useState } from 'react';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import LandingPage from './pages/LandingPage';
import DashboardApp from './DashboardApp';
import ContactPage from './pages/ContactPage';

// Note: We've removed all useState hooks except the one for showing the contact page.
// Clerk will handle login and logout automatically.

function App() {
  // This state is just for showing the contact page.
  const [showContactPage, setShowContactPage] = useState(false);

  if (showContactPage) {
    return <ContactPage onBack={() => setShowContactPage(false)} />;
  }

  return (
    <>
      <SignedIn>
        {/* If the user is signed in, show the DashboardApp. */}
        <DashboardApp />
      </SignedIn>
      <SignedOut>
        {/* If the user is signed out, show the LandingPage. */}
        <LandingPage onContactClick={() => setShowContactPage(true)} />
      </SignedOut>
    </>
  );
}

export default App;
