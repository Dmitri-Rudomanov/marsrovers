import { useState, useEffect } from 'react';
import roversApi from '../../services/roversApi.js';
import s from '../HomePage/HomePage.module.css';
import PhotoCards from '../PhotoCards/PhotoCards';
export default function HomePage() {
  const [rovers, setRovers] = useState([]);
  const [roverName, setRoverName] = useState('');

  useEffect(() => {
    roversApi.fetchRovers().then(result => setRovers(result.rovers));
  }, []);

  const onRoverPick = e => {
    e.preventDefault();
    setRoverName(e.target.select.value);
  };
  return (
    <div className={s.bg}>
      <h1 className={s.text}>Pick any Rover</h1>
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
      {roverName && <PhotoCards roverName={roverName} />}
    </div>
  );
}
