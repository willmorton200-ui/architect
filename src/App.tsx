import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProjectDetails } from './pages/ProjectDetails';
import { Viewer } from './pages/Viewer';
import { useEffect } from 'react';

function App() {
  // Global protection against right click and basic shortcuts
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent PrintScreen, Ctrl+P (Print), Ctrl+S (Save)
      if (
        e.key === 'PrintScreen' || 
        (e.ctrlKey && e.key === 'p') || 
        (e.ctrlKey && e.key === 's') ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') || // DevTools
        e.key === 'F12'
      ) {
        e.preventDefault();
      }
    };

    // Try to clear clipboard on copy
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      e.clipboardData?.setData('text/plain', 'Конфиденциальная информация');
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('copy', handleCopy);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('copy', handleCopy);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="no-select no-drag">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/project/:projectId/drawing/:drawingId" element={<Viewer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
