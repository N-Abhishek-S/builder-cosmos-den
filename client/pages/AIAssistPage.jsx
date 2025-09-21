const AIAssistPage = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('');
    const [analysisResult, setAnalysisResult] = useState(null);
    const [error, setError] = useState(null);
    const fileInputRef = useRef(null);
    const resultsRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
            setAnalysisResult(null);
            setError(null);
        }
    };

    const handleAnalyze = async () => {
        if (!image) {
            setError("Please upload an image first.");
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            setLoadingMessage("Analyzing your style...");

            // Simulate API call with timeout
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Mock analysis result
            const mockResult = {
                confidence: 0.92,
                faceShape: 'oval',
                skinTone: 'medium',
                recommendedColors: ['Navy Blue', 'Emerald Green', 'Burgundy', 'Soft Pink'],
                accessories: ['Statement earrings', 'Delicate necklace', 'Cat-eye sunglasses'],
                style_summary: "Your balanced features and warm undertones make you an ideal candidate for both classic and contemporary styles. We recommend focusing on pieces that highlight your facial structure while complementing your skin tone."
            };

            setAnalysisResult(mockResult);
        } catch (err) {
            setError("Analysis failed. Please try again.");
            console.error(err);
        } finally {
            setIsLoading(false);
            setLoadingMessage('');
        }
    };

    useEffect(() => {
        if (analysisResult && resultsRef.current) {
            // Scroll to results when available
            resultsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [analysisResult]);

    const recommendedProducts = analysisResult
        ? getRecommendedProducts(analysisResult)
        : [];

    return (
        <div className="ai-assist-page">
            <div className="container">
                <div className="header">
                    <h2>Your Personal AI Stylist</h2>
                    <p>Upload a photo for instant analysis and personalized recommendations.</p>
                </div>
                
                <div className="upload-section">
                    <div className="upload-area" onClick={() => fileInputRef.current.click()}>
                        <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/png, image/jpeg" />
                        {preview ? (
                            <img src={preview} alt="Preview" className="preview-image" />
                        ) : (
                            <div className="upload-placeholder">
                                <FaUpload className="upload-icon" />
                                <p>Click to upload</p>
                            </div>
                        )}
                    </div>
                    
                    {error && <p className="error-message">{error}</p>}
                    
                    <button
                        onClick={handleAnalyze}
                        disabled={isLoading}
                        className="analyze-btn"
                    >
                        {isLoading ? (
                            <>
                                <FaSpinner className="spinner" />
                                {loadingMessage}
                            </>
                        ) : (
                            'Get My Recommendations'
                        )}
                    </button>
                </div>

                {analysisResult && (
                    <div ref={resultsRef} className="results-section">
                        <div className="analysis-section">
                            <h3>Your Style Analysis</h3>
                            <AnalysisResult result={analysisResult} />
                        </div>

                        <div className="products-section">
                            <h3>Recommended For You</h3>
                            <div className="products-grid">
                                {recommendedProducts.length > 0 ? (
                                    recommendedProducts.map(p => <ProductCard key={p.id} product={p} />)
                                ) : (
                                    <p className="no-products">No specific products matched the analysis.</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
            <style jsx>{`
                .ai-assist-page {
                    padding: 2rem 0;
                    min-height: 100vh;
                    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                }
                
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }
                
                .header {
                    text-align: center;
                    margin-bottom: 2rem;
                }
                
                .header h2 {
                    font-size: 2.5rem;
                    color: #2D3748;
                    margin-bottom: 0.5rem;
                }
                
                .header p {
                    font-size: 1.1rem;
                    color: #718096;
                    max-width: 600px;
                    margin: 0 auto;
                }
                
                .upload-section {
                    background: white;
                    border-radius: 12px;
                    padding: 2rem;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    max-width: 800px;
                    margin: 0 auto;
                }
                
                .upload-area {
                    border: 2px dashed #E2E8F0;
                    border-radius: 8px;
                    padding: 2rem;
                    text-align: center;
                    cursor: pointer;
                    transition: border-color 0.3s;
                }
                
                .upload-area:hover {
                    border-color: #667EEA;
                }
                
                .preview-image {
                    max-width: 100%;
                    max-height: 300px;
                    border-radius: 8px;
                }
                
                .upload-placeholder {
                    color: #A0AEC0;
                }
                
                .upload-icon {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                }
                
                .error-message {
                    color: #E53E3E;
                    text-align: center;
                    margin-top: 1rem;
                }
                
                .analyze-btn {
                    width: 100%;
                    background: #667EEA;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    padding: 1rem;
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin-top: 1.5rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    transition: background 0.3s;
                }
                
                .analyze-btn:hover:not(:disabled) {
                    background: #5A67D8;
                }
                
                .analyze-btn:disabled {
                    background: #A0AEC0;
                    cursor: not-allowed;
                }
                
                .spinner {
                    animation: spin 1s linear infinite;
                }
                
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                .results-section {
                    margin-top: 3rem;
                }
                
                .analysis-section, .products-section {
                    background: white;
                    border-radius: 12px;
                    padding: 2rem;
                    margin-bottom: 2rem;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                }
                
                .analysis-section h3, .products-section h3 {
                    font-size: 1.8rem;
                    color: #2D3748;
                    text-align: center;
                    margin-bottom: 2rem;
                }
                
                .result-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }
                
                .result-card {
                    background: #F7FAFC;
                    border-radius: 8px;
                    padding: 1.5rem;
                    text-align: center;
                }
                
                .result-card h4 {
                    color: #718096;
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 0.5rem;
                }
                
                .result-value {
                    color: #2D3748;
                    font-size: 1.5rem;
                    font-weight: 700;
                }
                
                .recommendation-section {
                    margin-bottom: 2rem;
                }
                
                .recommendation-section h4 {
                    color: #2D3748;
                    margin-bottom: 1rem;
                }
                
                .color-recommendations, .accessory-recommendations {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }
                
                .color-tag, .accessory-tag {
                    background: #EBF4FF;
                    color: #667EEA;
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    font-size: 0.9rem;
                }
                
                .accessory-tag {
                    background: #FAF5FF;
                    color: #9F7AEA;
                }
                
                .style-summary {
                    line-height: 1.6;
                    color: #4A5568;
                }
                
                .products-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 1.5rem;
                }
                
                .no-products {
                    grid-column: 1 / -1;
                    text-align: center;
                    color: #718096;
                    padding: 2rem;
                }
                
                /* Product Card Styles */
                .product-card {
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                
                .product-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
                }
                
                .product-image {
                    position: relative;
                    height: 250px;
                    overflow: hidden;
                }
                
                .product-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                
                .product-card:hover .product-image img {
                    transform: scale(1.05);
                }
                
                .product-palette {
                    position: absolute;
                    bottom: 10px;
                    right: 10px;
                    display: flex;
                    gap: 5px;
                }
                
                .color-swatch {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    border: 2px solid white;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }
                
                .product-info {
                    padding: 1.5rem;
                }
                
                .product-info h3 {
                    font-size: 1.2rem;
                    margin-bottom: 0.5rem;
                    color: #2D3748;
                }
                
                .product-meta {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                }
                
                .product-style {
                    background: #E2E8F0;
                    color: #4A5568;
                    padding: 0.25rem 0.5rem;
                    border-radius: 4px;
                    font-size: 0.8rem;
                    text-transform: capitalize;
                }
                
                .product-rating {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                }
                
                .star {
                    color: #E2E8F0;
                    font-size: 0.9rem;
                }
                
                .star.filled {
                    color: #F6AD55;
                }
                
                .rating-value {
                    font-size: 0.9rem;
                    color: #718096;
                    margin-left: 0.25rem;
                }
                
                .product-price {
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: #2D3748;
                    margin-bottom: 1rem;
                }
                
                .add-to-cart-btn {
                    width: 100%;
                    background: #4A5568;
                    color: white;
                    border: none;
                    border-radius: 6px;
                    padding: 0.75rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                }
                
                .add-to-cart-btn:hover {
                    background: #2D3748;
                }
                
                @media (max-width: 768px) {
                    .header h2 {
                        font-size: 2rem;
                    }
                    
                    .result-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .products-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default AIAssistPage;