import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Booking() {
  const { sessionId } = useParams();
  const [session, setSession] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/sessions/${sessionId}`)
      .then(res => res.json())
      .then(setSession);
  }, [sessionId]);

  const toggleSeat = (seatId) => {
    setSelectedSeats(prev => 
      prev.includes(seatId)
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId]
    );
  };

  if (!session) return <div>Loading...</div>;

  return (
    <div className="booking">
      <h1>Выбор мест</h1>
      <div className="seats-grid">
        {session.seats.map(seat => (
          <button
            key={seat.id}
            className={`seat ${seat.booked ? 'booked' : ''} ${selectedSeats.includes(seat.id) ? 'selected' : ''}`}
            onClick={() => !seat.booked && toggleSeat(seat.id)}
            disabled={seat.booked}
          >
            {seat.row}-{seat.number}
          </button>
        ))}
      </div>
      <button 
        className="btn confirm-btn"
        onClick={() => alert(`Выбрано мест: ${selectedSeats.length}`)}
      >
        Подтвердить выбор
      </button>
    </div>
  );
}