const AnalysisResult = ({ result }) => {
  return (
    <div className="analysis-result">
      <div className="result-grid">
        <div className="result-card">
          <h4>Face Shape</h4>
          <p className="result-value">{result.faceShape}</p>
        </div>
        <div className="result-card">
          <h4>Skin Tone</h4>
          <p className="result-value">{result.skinTone}</p>
        </div>
        <div className="result-card">
          <h4>Confidence</h4>
          <p className="result-value">{(result.confidence * 100).toFixed(0)}%</p>
        </div>
      </div>
      
      <div className="recommendations">
        <div className="recommendation-section">
          <h4>Recommended Colors</h4>
          <div className="color-recommendations">
            {result.recommendedColors.map((color, index) => (
              <span key={index} className="color-tag">{color}</span>
            ))}
          </div>
        </div>
        
        <div className="recommendation-section">
          <h4>Recommended Accessories</h4>
          <div className="accessory-recommendations">
            {result.accessories.map((item, index) => (
              <span key={index} className="accessory-tag">{item}</span>
            ))}
          </div>
        </div>
        
        <div className="recommendation-section">
          <h4>Style Summary</h4>
          <p className="style-summary">{result.style_summary}</p>
        </div>
      </div>
    </div>
  );
};
