import React, { useState, useEffect } from 'react';
import './Page1.css'; // 스타일 파일 필요

import * as XLSX from 'xlsx';
import foodNutritionData from './음식DB.xlsx';

function Page1() {
  // Page1 상태
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [smoking, setSmoking] = useState('');
  const [drinking, setDrinking] = useState('');

  // Page2 상태
  const [breakfastFrequency, setBreakfastFrequency] = useState('');
  const [lunchFrequency, setLunchFrequency] = useState('');
  const [dinnerFrequency, setDinnerFrequency] = useState('');
  const [vegetableFrequency, setVegetableFrequency] = useState('');
  const [fruitFrequency, setFruitFrequency] = useState('');
  const [strengthTraining, setStrengthTraining] = useState('');
  const [aerobicExercise, setAerobicExercise] = useState('');
  const [crpLevel, setCrpLevel] = useState('');

  // 페이지 전환 상태
  const [currentPage, setCurrentPage] = useState(1);

  // 엑셀 데이터 상태
  const [excelData, setExcelData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState([]);

  // 선택된 음식 목록 상태
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [selectedFoodDetails, setSelectedFoodDetails] = useState([]);

  useEffect(() => {
    // 엑셀 파일 로드 및 데이터 처리
    const fetchExcelData = async () => {
      try {
        const response = await fetch(foodNutritionData);
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        setExcelData(data);

        // Create a list of unique suggestions from the first column
        const suggestions = Array.from(new Set(data.map(row => row[0] || '').filter(Boolean)));
        setAutocompleteSuggestions(suggestions);
      } catch (error) {
        console.error('Error fetching excel data:', error);
      }
    };

    fetchExcelData();
  }, []);

  // 첫 번째 열의 데이터로 검색
  const handleSearch = () => {
    if (excelData.length === 0) {
      alert('No data loaded');
      return;
    }

    const searchColumn = excelData.map(row => row[0] || ''); // 첫 번째 열 데이터 가져오기
    const filteredResults = searchColumn.filter(cell =>
      cell.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  // Autocomplete Suggestions Update
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filteredSuggestions = autocompleteSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filteredSuggestions);
    } else {
      setSearchResults([]);
    }
  };

  // 음식 추가
  const handleAddFood = () => {
    if (!searchTerm) {
      alert('Please select a food item to add');
      return;
    }

    const foodDetail = excelData.find(row => row[0] === searchTerm);
    if (foodDetail && !selectedFoods.includes(searchTerm)) {
      setSelectedFoods(prevFoods => [...prevFoods, searchTerm]);
      setSelectedFoodDetails(prevDetails => [...prevDetails, { food: searchTerm, amount: '' }]);
      setSearchTerm(''); // 검색어 초기화
      setSearchResults([]); // 검색 결과 초기화
    }
  };

  // 음식 섭취량 업데이트
  const handleAmountChange = (index, value) => {
    const updatedDetails = [...selectedFoodDetails];
    updatedDetails[index].amount = value;
    setSelectedFoodDetails(updatedDetails);
  };

  // Page1과 Page2의 Submit 버튼 클릭 시 데이터 처리 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentPage === 1) {
      // 페이지1 제출 처리 후 페이지2로 전환
      setCurrentPage(2);
    } else if (currentPage === 2) {
      // 페이지2 제출 처리
      console.log({
        age,
        gender,
        height,
        weight,
        smoking,
        drinking,
        breakfastFrequency,
        lunchFrequency,
        dinnerFrequency,
        vegetableFrequency,
        fruitFrequency,
        strengthTraining,
        aerobicExercise,
        crpLevel,
        selectedFoods,
        selectedFoodDetails
      });
      // 여기에서 데이터를 서버로 전송하거나 추가 작업을 수행할 수 있습니다.
    }
  };

  return (
    <div className="page1-container">
      {currentPage === 1 && (
        <div className="page-section">
          <h2>기본정보 설문</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                연령:
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
              </label>
            </div>
            <div className="form-group">
              <label>
                성별:
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>
            <div className="form-group">
              <label>
                키 (cm):
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
              </label>
            </div>
            <div className="form-group">
              <label>
                몸무게 (kg):
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
              </label>
            </div>
            <fieldset className="form-group">
              <legend>흡연여부</legend>
              <label>
                <input type="radio" value="none" checked={smoking === 'none'} onChange={(e) => setSmoking(e.target.value)} />
                하지 않음
              </label>
              <label>
                <input type="radio" value="1-2 per month" checked={smoking === '1-2 per month'} onChange={(e) => setSmoking(e.target.value)} />
                1달에 1~2번
              </label>
              <label>
                <input type="radio" value="weekly" checked={smoking === 'weekly'} onChange={(e) => setSmoking(e.target.value)} />
                주 1회
              </label>
              <label>
                <input type="radio" value="3 times a week or more" checked={smoking === '3 times a week or more'} onChange={(e) => setSmoking(e.target.value)} />
                주 3회 이상
              </label>
            </fieldset>
            <fieldset className="form-group">
              <legend>음주여부</legend>
              <label>
                <input type="radio" value="none" checked={drinking === 'none'} onChange={(e) => setDrinking(e.target.value)} />
                하지 않음
              </label>
              <label>
                <input type="radio" value="1-2 per month" checked={drinking === '1-2 per month'} onChange={(e) => setDrinking(e.target.value)} />
                1달에 1~2번
              </label>
              <label>
                <input type="radio" value="weekly" checked={drinking === 'weekly'} onChange={(e) => setDrinking(e.target.value)} />
                주 1회
              </label>
              <label>
                <input type="radio" value="3 times a week or more" checked={drinking === '3 times a week or more'} onChange={(e) => setDrinking(e.target.value)} />
                주 3회 이상
              </label>
            </fieldset>
            <button type="submit">Next</button>
          </form>
        </div>
      )}

      {currentPage === 2 && (
        <div className="page-section">
          <h2>24시간 회상법 식품섭취설문조사</h2>
          <form onSubmit={handleSubmit}>
            <h3>설문시각으로부터 24시간 이전까지 섭취한 음식을 검색하고 먹은 양을 조절하여 제출해 주십시요.</h3>
            <input
              type="text"
              placeholder="Search by first column..."
              value={searchTerm}
              onChange={handleInputChange}
            />
            {searchResults.length > 0 && (
              <ul className="autocomplete-suggestions">
                {searchResults.map((suggestion, index) => (
                  <li key={index} onClick={() => setSearchTerm(suggestion)}>
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
            <button type="button" onClick={handleSearch}>Search</button>
            <button type="button" onClick={handleAddFood}>Add</button>
            {selectedFoods.length > 0 && (
              <table>
                <thead>
                  <tr>
                    <th>Food Name</th>
                    <th>Amount (g)</th> {/* 섭취량을 입력하는 칸 추가 */}
                  </tr>
                </thead>
                <tbody>
                  {selectedFoodDetails.map((foodDetail, index) => (
                    <tr key={index}>
                      <td>{foodDetail.food}</td>
                      <td>
                        <input
                          type="number"
                          value={foodDetail.amount}
                          onChange={(e) => handleAmountChange(index, e.target.value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Page1;
