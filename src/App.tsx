import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PageLayout } from './components/layout/PageLayout'
import { LanguageProvider } from './i18n/LanguageContext'

const Home = lazy(() => import('./pages/Home'))
const Member = lazy(() => import('./pages/Member'))
const Fasilitas = lazy(() => import('./pages/Fasilitas'))
const Edukasi = lazy(() => import('./pages/Edukasi'))
const EducationDetailPage = lazy(() => import('./pages/EducationDetailPage'))
const Berkas = lazy(() => import('./pages/Berkas'))
const NotFound = lazy(() => import('./pages/NotFound'))

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/member', element: <Member /> },
      { path: '/fasilitas', element: <Fasilitas /> },
      {
        path: '/edukasi',
        children: [
          { index: true, element: <Edukasi /> },
          { path: ':slug', element: <EducationDetailPage /> },
        ],
      },
      { path: '/berkas-icu', element: <Berkas /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  )
}
