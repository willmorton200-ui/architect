import { Link } from 'react-router-dom';
import { projects } from '../data';

export function Home() {
  return (
    <div className="container animate-fade-in">
      <header className="header">
        <div>
          <h1 className="header-title">ПОРТФОЛИО</h1>
          <p className="header-subtitle">Архитектурные проекты и чертежи</p>
        </div>
      </header>

      <div className="grid">
        {projects.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id} className="card">
            <div className="card-image-container">
              <img 
                src={project.coverImage.startsWith('/') ? `${import.meta.env.BASE_URL}${project.coverImage.substring(1)}` : project.coverImage} 
                alt="" 
                className="card-image" 
              />
            </div>
            <div className="card-content">
              <h2 className="card-title">{project.title}</h2>
              <p className="card-desc">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
