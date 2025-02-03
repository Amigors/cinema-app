import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import SessionList from './components/SessionList';
import Booking from './components/Booking';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/sessions/:movieId" element={<SessionList />} />
        <Route path="/booking/:sessionId" element={<Booking />} />
      </Routes>
    </Router>
  );
}