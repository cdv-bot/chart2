import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import AppRouter from './router/appRouter';
function App() {
  return (
    <Suspense fallback={'ad'}>
      <Router>
        <AppRouter />
      </Router>
      <ToastContainer
        position='top-right'
        autoClose={4998}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Suspense>
  );
}

export default App;
