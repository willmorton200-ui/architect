import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import { projects } from '../data';
import type { Drawing } from '../data';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up PDF worker if not already set
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function DrawingThumbnailCard({ 
  drawing, 
  onClick 
}: { 
  drawing: Drawing; 
  onClick: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const pdfSource = drawing.pdfUrl.startsWith('http')
    ? drawing.pdfUrl
    : `${import.meta.env.BASE_URL}${drawing.pdfUrl}`;

  return (
    <div 
      className="card drawing-card"
      style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
      onClick={onClick}
    >
      <div className="card-image-container drawing-thumbnail-container">
        {/* Fallback skeleton/loader */}
        {!loaded && (
          <div className="drawing-thumbnail-skeleton">
            <span className="drawing-thumbnail-loading-text">Загрузка чертежа...</span>
          </div>
        )}

        <Document
          file={pdfSource}
          loading=""
          error={
            <img 
              src={drawing.thumbnailUrl} 
              alt={drawing.title} 
              className="card-image" 
            />
          }
        >
          <Page
            pageNumber={drawing.pageNumber || 1}
            width={380}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            onRenderSuccess={() => setLoaded(true)}
            className="drawing-pdf-page"
          />
        </Document>

        {/* Premium subtle lighting & fade overlay: высветление к верху плашки и стильный градиент */}
        <div className="drawing-card-overlay" />
        
        {/* Subtle badge on the thumbnail */}
        <div className="drawing-sheet-badge">
          {drawing.title}
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{drawing.title}</h3>
      </div>
    </div>
  );
}

export function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="container">
        <h1>Проект не найден</h1>
        <button onClick={() => navigate('/')}>На главную</button>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in">
      <header className="header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={() => navigate('/')} className="icon-btn" title="Назад">
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="header-title">{project.title}</h1>
            <p className="header-subtitle">Чертежи и документация</p>
          </div>
        </div>
      </header>

      <div className="grid">
        {project.drawings.map((drawing) => (
          <DrawingThumbnailCard
            key={drawing.id}
            drawing={drawing}
            onClick={async () => {
              try {
                if (document.documentElement.requestFullscreen) {
                  await document.documentElement.requestFullscreen();
                }
              } catch (err) {
                console.log("Fullscreen request blocked or not supported", err);
              }
              navigate(`/project/${project.id}/drawing/${drawing.id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
}

