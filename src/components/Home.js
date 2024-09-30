import React from 'react';
import './Home.css'; // Home 전용 CSS 파일

function Home() {
  return (
    <main className="home">
      <div className="content-wrapper">
        <div className="image-container">
          <img src={process.env.PUBLIC_URL + '/rwd.png'} alt="RWD" />
        </div>
        <div className="text-container">
          <section>
            <h2>About DII-SRAX</h2>
            <p>
DII-SRAX is a comprehensive tool designed to evaluate the risk of sarcopenia in patients based on their Dietary Inflammatory Index (DII) score. The prediction model employs a multi-logistic regression approach, incorporating various factors such as smoking status, Body Mass Index (BMI), and C-Reactive Protein (CRP) levels to enhance accuracy. By analyzing these diverse indicators, DII-SRAX provides a nuanced assessment of sarcopenia risk, facilitating early intervention and personalized treatment strategies. This tool aims to support healthcare professionals in identifying high-risk individuals and improving patient outcomes through targeted nutritional and lifestyle modifications.
</p>
          </section>
          <section>
            <h2>Contact</h2>
            <p>E-mail: furim@daum.net</p>Tel: +82-32-890-2114
          </section>
        </div>
      </div>
    </main>
  );
}

export default Home;
