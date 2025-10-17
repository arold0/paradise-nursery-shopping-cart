import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1 className="company-name">Paradise Nursery</h1>
          <p className="company-description">
            Welcome to Paradise Nursery, where green meets serenity! We are a premier 
            destination for plant lovers, offering a wide variety of high-quality indoor 
            and outdoor plants. Our mission is to bring the beauty of nature into your 
            home and create a peaceful, green environment for you to enjoy.
          </p>
          <Link to="/products">
            <button className="get-started-btn">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
