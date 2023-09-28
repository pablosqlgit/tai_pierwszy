import "./ErrorPage.css";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <main className="error-page">
      <div className="error-page-content">
        <h1>Page not found</h1>
        <button onClick={() => navigate("/")}>Go to home page</button>
      </div>
    </main>
  );
}

export default ErrorPage;
