// src/components/MainContent.js
import React from 'react';
import './MainContent.css'; // MainContent 전용 CSS 파일

function MainContent() {
  return (
    <main className="main-content">
      <section>
        <h2>About DII-SRAX</h2>
        <p>DII-SRAX is a tool used to evaluate sarcopenia risk of patients based on DII score. <br />The prediction model used a multi-logistic regression model and included various factors such as smoking, BMI, and CRP level.</p>
      </section>
      <section>
        <h2>How to Use</h2>
        <p>Follow the instructions to use sarcopenia risk assessment.</p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>furim@daum.net</p>
      </section>
      <section>
        <h2>Copyright</h2>
        <p>All copyrights belong to GAIME LAB. Please indicate the source.</p>
      </section>
    </main>
  );
}

export default MainContent;
