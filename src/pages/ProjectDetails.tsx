import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data';

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
          <Link 
            to={`/project/${project.id}/drawing/${drawing.id}`} 
            key={drawing.id} 
            className="card"
          >
            <div className="card-image-container">
              <img src={drawing.thumbnailUrl} alt={drawing.title} className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">{drawing.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
