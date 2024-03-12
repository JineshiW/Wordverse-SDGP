import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/** import components */
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import Levels from './Levels';
import Progress from './Progress';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/mainQuiz" element={<Main />} />
        <Route path="/mainQuiz/quiz" element={<Quiz />} />
        <Route path="/mainQuiz/result" element={<Result />} />
        <Route path="/mainQuiz/level" element={<Levels />} />
        <Route path="/mainQuiz/progress" element={<Progress />} />
      </Routes>
    </Router>
  );
}

export default App;
