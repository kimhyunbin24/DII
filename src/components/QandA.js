import React from 'react';
import './QandA.css'; // CSS 파일을 추가하여 스타일을 적용

function QandA() {
  return (
    <div>
      <h1>Q&A</h1>
      <p>
        What is DII: The Dietary Inflammatory Index (DII) is a tool developed to assess the inflammatory potential of an individual's diet. <br />
        It quantifies the degree to which the foods and nutrients consumed are likely to increase or decrease inflammation in the body. <br />
        This index is based on a comprehensive review of scientific literature that links various dietary components <br />
        with markers of inflammation, such as C-reactive protein (CRP) and interleukins.
      </p>

      <div className="reference-section">
        <h2>References</h2>
        <p>
          <a href="https://doi.org/10.1016/j.jnut.2014.02.001" target="_blank" rel="noopener noreferrer">
            Shivappa, N., Steck, S. E., Hurley, T. G., Hussey, J. R., & Hébert, J. R. (2014). Designing and developing a literature-derived, population-based dietary inflammatory index. *The Journal of Nutrition*, 144(6), 1008-1016.
          </a>
        </p>
        <p>
          <a href="https://doi.org/10.1017/S0007114513002698" target="_blank" rel="noopener noreferrer">
            Hébert, J. R., Shivappa, N., Wirth, M. D., Hussey, J. R., & Hurley, T. G. (2013). Perspective: The Dietary Inflammatory Index (DII)—Lessons Learned, Improvements Made, and Future Directions. *The British Journal of Nutrition*, 110(11), 1853-1854.
          </a>
        </p>
        <p>
          <a href="https://doi.org/10.1017/S0007114513005074" target="_blank" rel="noopener noreferrer">
            Shivappa, N., Hébert, J. R., Rietzschel, E. R., De Buyzere, M. L., Langlois, M., & De Bacquer, D. (2015). Associations between dietary inflammatory index and inflammatory markers in the Asklepios Study. *The British Journal of Nutrition*, 113(4), 665-671.
          </a>
        </p>
        <p>
          <a href="https://doi.org/10.3945/ajcn.114.088435" target="_blank" rel="noopener noreferrer">
            Shivappa, N., Steck, S. E., Hussey, J. R., Ma, Y., Ockene, I. S., & Hébert, J. R. (2014). Inflammatory potential of diet and all-cause, cardiovascular, and cancer mortality in National Health and Nutrition Examination Survey III Study. *The American Journal of Clinical Nutrition*, 100(6), 1567-1573.
          </a>
        </p>
        <p>
          <a href="https://doi.org/10.1093/aje/kwt147" target="_blank" rel="noopener noreferrer">
            Shivappa, N., Bosetti, C., Zucchetto, A., Serraino, D., Rossi, M., La Vecchia, C., & Hébert, J. R. (2014). Dietary inflammatory index and risk of pancreatic cancer in an Italian case-control study. *American Journal of Epidemiology*, 178(9), 1446-1453.
          </a>
        </p>
      </div>
    </div>
  );
}

export default QandA;
