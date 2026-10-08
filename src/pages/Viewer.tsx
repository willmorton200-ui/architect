import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Document, Page, pdfjs } from 'react-pdf';
import { ArrowLeft, Home, ZoomIn, ZoomOut, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up the PDF worker for Vite
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export function Viewer() {
  const { projectId, drawingId } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === projectId);
  const drawingIndex = project?.drawings.findIndex(d => d.id === drawingId) ?? -1;
  const drawing = drawingIndex >= 0 && project ? project.drawings[drawingIndex] : null;

  const [pageNumber] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  // Keyboard navigation for PDF pages
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        goToNextDrawing();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        goToPrevDrawing();
      } else if (e.key === 'Escape') {
        navigate(`/project/${projectId}`);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [drawingIndex, project, projectId, navigate]);

  if (!project || !drawing) {
    return <div className="viewer-container" style={{ color: 'white', justifyContent: 'center', alignItems: 'center' }}>Чертеж не найден</div>;
  }

  const goToPrevDrawing = () => {
    if (drawingIndex > 0) {
      navigate(`/project/${projectId}/drawing/${project.drawings[drawingIndex - 1].id}`);
    }
  };

  const goToNextDrawing = () => {
    if (drawingIndex < project.drawings.length - 1) {
      navigate(`/project/${projectId}/drawing/${project.drawings[drawingIndex + 1].id}`);
    }
  };

  function onDocumentLoadSuccess(): void {
    setLoading(false);
  }

  // Generate watermark pattern
  const watermarks = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => (
      <div key={i} className="watermark-text">АЛЕКСЕЙ | АРХИТЕКТОР</div>
    ));
  }, []);

  return (
    <div className="viewer-container animate-fade-in">
      {/* Security Overlay */}
      <div className="watermark-overlay no-select no-drag">
        {watermarks}
      </div>

      <div className="viewer-header">
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button onClick={() => navigate(`/project/${projectId}`)} className="icon-btn" title="Назад к проекту">
            <ArrowLeft size={24} />
          </button>
          <button onClick={() => navigate('/')} className="icon-btn" title="На главную">
            <Home size={24} />
          </button>
        </div>
        <div style={{ color: 'white', textAlign: 'center' }}>
          <div style={{ fontWeight: 500, letterSpacing: '0.05em' }}>{drawing.title}</div>
          <div style={{ fontSize: '0.8rem', color: '#a3a3a3' }}>{project.title}</div>
        </div>
        <div style={{ width: 88 }}>{/* Spacer for centering */}</div>
      </div>

      {drawingIndex > 0 && (
        <button onClick={goToPrevDrawing} className="nav-btn left" title="Предыдущий чертеж">
          <ChevronLeft size={32} />
        </button>
      )}

      {drawingIndex < project.drawings.length - 1 && (
        <button onClick={goToNextDrawing} className="nav-btn right" title="Следующий чертеж">
          <ChevronRight size={32} />
        </button>
      )}

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', cursor: 'grab' }}>
        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={5}
          centerOnInit={true}
          wheel={{ step: 0.1 }}
          panning={{ velocityDisabled: false }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              <div className="viewer-controls">
                <button onClick={() => zoomOut()} className="icon-btn" title="Уменьшить">
                  <ZoomOut size={24} />
                </button>
                <button onClick={() => resetTransform()} className="icon-btn" title="Подогнать по размеру">
                  <Maximize2 size={24} />
                </button>
                <button onClick={() => zoomIn()} className="icon-btn" title="Увеличить">
                  <ZoomIn size={24} />
                </button>
              </div>

              <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }}>
                <Document
                  file={`${import.meta.env.BASE_URL}${drawing.pdfUrl.replace(/^\//, '')}`}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={<div style={{ color: 'white' }}>Загрузка чертежа...</div>}
                  error={<div style={{ color: '#ff6b6b' }}>Ошибка загрузки PDF. Убедитесь, что файл существует.</div>}
                  className="no-select no-drag"
                >
                  {!loading && (
                    <Page 
                      pageNumber={pageNumber} 
                      renderTextLayer={false} 
                      renderAnnotationLayer={false}
                      className="no-select no-drag"
                      canvasBackground="white"
                      devicePixelRatio={window.devicePixelRatio || 2} // High quality rendering
                    />
                  )}
                </Document>
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>
    </div>
  );
}
