import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import AdminUploadPage from './pages/AdminUploadPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/works" element={<WorksPage />} />
      <Route path="/admin/upload" element={<AdminUploadPage />} />
    </Routes>
  );
}