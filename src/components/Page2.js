// src/components/Page2.js
import React, { useState } from 'react';
import './Page2.css';  // 스타일 파일 추가

function Page2() {
  const [breakfastFrequency, setBreakfastFrequency] = useState('');
  const [lunchFrequency, setLunchFrequency] = useState('');
  const [dinnerFrequency, setDinnerFrequency] = useState('');
  const [vegetableFrequency, setVegetableFrequency] = useState('');
  const [fruitFrequency, setFruitFrequency] = useState('');
  const [strengthTraining, setStrengthTraining] = useState('');
  const [aerobicExercise, setAerobicExercise] = useState('');
  const [crpLevel, setCrpLevel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      breakfastFrequency,
      lunchFrequency,
      dinnerFrequency,
      vegetableFrequency,
      fruitFrequency,
      strengthTraining,
      aerobicExercise,
      crpLevel
    });
  };

  return (
    <div className="page2-container">
      <h2>DII Calculation Survey</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Breakfast Frequency (per year):</legend>
          <label>
            <input type="radio" value="rarely" checked={breakfastFrequency === 'rarely'} onChange={(e) => setBreakfastFrequency(e.target.value)} />
            Rarely
          </label>
          <label>
            <input type="radio" value="sometimes" checked={breakfastFrequency === 'sometimes'} onChange={(e) => setBreakfastFrequency(e.target.value)} />
            Sometimes
          </label>
          <label>
            <input type="radio" value="often" checked={breakfastFrequency === 'often'} onChange={(e) => setBreakfastFrequency(e.target.value)} />
            Often
          </label>
        </fieldset>
        <fieldset>
          <legend>Lunch Frequency (per year):</legend>
          <label>
            <input type="radio" value="rarely" checked={lunchFrequency === 'rarely'} onChange={(e) => setLunchFrequency(e.target.value)} />
            Rarely
          </label>
          <label>
            <input type="radio" value="sometimes" checked={lunchFrequency === 'sometimes'} onChange={(e) => setLunchFrequency(e.target.value)} />
            Sometimes
          </label>
          <label>
            <input type="radio" value="often" checked={lunchFrequency === 'often'} onChange={(e) => setLunchFrequency(e.target.value)} />
            Often
          </label>
        </fieldset>
        <fieldset>
          <legend>Dinner Frequency (per year):</legend>
          <label>
            <input type="radio" value="rarely" checked={dinnerFrequency === 'rarely'} onChange={(e) => setDinnerFrequency(e.target.value)} />
            Rarely
          </label>
          <label>
            <input type="radio" value="sometimes" checked={dinnerFrequency === 'sometimes'} onChange={(e) => setDinnerFrequency(e.target.value)} />
            Sometimes
          </label>
          <label>
            <input type="radio" value="often" checked={dinnerFrequency === 'often'} onChange={(e) => setDinnerFrequency(e.target.value)} />
            Often
          </label>
        </fieldset>
        <label>
          Average Vegetable Consumption (per year):
          <select value={vegetableFrequency} onChange={(e) => setVegetableFrequency(e.target.value)}>
            <option value="">Select</option>
            <option value="rarely">Rarely</option>
            <option value="sometimes">Sometimes</option>
            <option value="often">Often</option>
          </select>
        </label>
        <label>
          Average Fruit Consumption (per year):
          <select value={fruitFrequency} onChange={(e) => setFruitFrequency(e.target.value)}>
            <option value="">Select</option>
            <option value="rarely">Rarely</option>
            <option value="sometimes">Sometimes</option>
            <option value="often">Often</option>
          </select>
        </label>
        <fieldset>
          <legend>Strength Training Frequency (per year):</legend>
          <label>
            <input type="radio" value="rarely" checked={strengthTraining === 'rarely'} onChange={(e) => setStrengthTraining(e.target.value)} />
            Rarely
          </label>
          <label>
            <input type="radio" value="sometimes" checked={strengthTraining === 'sometimes'} onChange={(e) => setStrengthTraining(e.target.value)} />
            Sometimes
          </label>
          <label>
            <input type="radio" value="often" checked={strengthTraining === 'often'} onChange={(e) => setStrengthTraining(e.target.value)} />
            Often
          </label>
        </fieldset>
        <fieldset>
          <legend>Aerobic Exercise Frequency (per year):</legend>
          <label>
            <input type="radio" value="rarely" checked={aerobicExercise === 'rarely'} onChange={(e) => setAerobicExercise(e.target.value)} />
            Rarely
          </label>
          <label>
            <input type="radio" value="sometimes" checked={aerobicExercise === 'sometimes'} onChange={(e) => setAerobicExercise(e.target.value)} />
            Sometimes
          </label>
          <label>
            <input type="radio" value="often" checked={aerobicExercise === 'often'} onChange={(e) => setAerobicExercise(e.target.value)} />
            Often
          </label>
        </fieldset>
        <label>
          CRP Blood Test 1Result (mg/L):
          <input type="number" value={crpLevel} onChange={(e) => setCrpLevel(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Page2;
