import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Landingpage } from './pages/landingpage.tsx';
import { Dashboard } from './pages/dashboard.tsx';
import { Payments } from './pages/payments.tsx';
import { Save } from './pages/save.tsx';
import { Checklist } from './pages/checklist.tsx';
import { Posts } from './pages/posts.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <Landingpage />
      },
      {
        index: true,
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/payments",
        element: <Payments />
      },
      {
        path: "/save",
        element: <Save />
      },
      {
        path: "/checklist",
        element: <Checklist />
      },
      {
        path: "/posts",
        element: <Posts />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

postMessage({ payload: 'removeLoading' }, '*')
