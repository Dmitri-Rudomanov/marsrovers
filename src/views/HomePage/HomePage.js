import { useState, useEffect } from 'react';
import moviesApi from '../../services/moviesApi.js';
import s from '../HomePage/HomePage.module.css';
import RoversPhoto from '../MovieDetailsPage/MovieDetailsPage';
export default function HomePage() {
  const [rovers, setRovers] = useState([]);
  const [roverName, setRoverName] = useState('');

  useEffect(() => {
    moviesApi.fetchRovers().then(result => setRovers(result.rovers));
  }, []);

  const onRoverPick = e => {
    e.preventDefault();
    console.log(e.target.select.value);
    setRoverName(e.target.select.value);
  };
  return (
    <div className={s.bg}>
      <form className={s.form} onSubmit={onRoverPick}>
        <select className={s.select} name="select">
          {rovers.map(rover => (
            <option className={s.option} key={rover.id} value={rover.name}>
              {rover.name}
            </option>
          ))}
        </select>
        <button className={s.btn}>Search</button>
      </form>
      {roverName && <RoversPhoto roverName={roverName} />}
    </div>
  );
}
