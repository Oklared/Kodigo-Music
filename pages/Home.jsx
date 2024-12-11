import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import './Home.css'; 

export function Home() {
  return (
    <>
      <Navbar />
      <section className="home-wrapper">
        <div className="home-content-wrapper">
          <h1 className="home-title">Kodigo Music</h1>
          <p className="home-description">Immerse yourself in the rhythm of life. Explore your favorite tracks and uncover new artists.</p>
          <div className="explore-section">
            <Link to="/library">
              <button className="btn btn-primary explore-btn">Start Exploring</button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}