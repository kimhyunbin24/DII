import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Reference from './components/Reference'; // Reference 페이지 추가
import QandA from './components/QandA'; // Q&A 페이지 추가
import Result from './components/result'; // result 페이지 추가
import Footer from './components/Footer';

// Footer를 조건부로 렌더링하는 컴포넌트
const FooterWrapper = () => {
  const location = useLocation();
  // 현재 경로가 '/'인 경우에만 Footer를 표시
  const showFooter = location.pathname === '/';

  return (
    <>
      {/* 다른 컴포넌트 */}
      {showFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/reference" element={<Reference />} /> {/* Reference 페이지 추가 */}
            <Route path="/qa" element={<QandA />} /> {/* Q&A 페이지 추가 */}
            <Route path="/result" element={<Result />} /> {/* result 페이지 추가 */}
          </Routes>
        </main>
        <FooterWrapper />
      </div>
    </Router>
  );
}

export default App;
