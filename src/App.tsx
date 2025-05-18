import { BrowserRouter as Router,Routes,Route } from "react-router"
import Home from "./pages/Home"
import Found from "./pages/Found"
import History from "./pages/History"
import Leaderboard from "./pages/Leaderboard"
import Article from "./pages/Article"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/found" element={<Found />} />
        <Route path="/history" element={<History />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/article/:destination" element={<Article />} />
      </Routes>
    </Router>
  )
}

export default App
