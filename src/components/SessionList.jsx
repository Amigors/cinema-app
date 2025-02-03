import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function SessionList() {
  const { movieId } = useParams();
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/sessions?movieId=${movieId}`)
      .then(res => res.json())
      .then(setSessions);
  }, [movieId]);

  return (
    <div className="session-list">
      <h1>Доступные сеансы</h1>
      <div className="sessions-container">
        {sessions.map(session => (
          <div key={session.id} className="session-card">
            <h3>{new Date(session.time).toLocaleString()}</h3>
            <Link to={`/booking/${session.id}`} className="btn">
              Выбрать места
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}