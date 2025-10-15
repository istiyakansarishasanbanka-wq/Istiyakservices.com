import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="container home-page">
      <h1>Welcome to Istiyak Service Point</h1>
      <p>All Government & Online Services in One Place</p>
      <div className="premium-note">
        Premium Access ₹49 - <Link to="/payment">Pay Now</Link>
      </div>
    </div>
  );
}
export default Home;
