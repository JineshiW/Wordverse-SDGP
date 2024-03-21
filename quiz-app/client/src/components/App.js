// Importing the CSS file for styling
import '../styles/App.css';

// Importing necessary components from the react-router-dom library
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing custom components
import Main from './Main'; // Importing the Main component
import Quiz from './Quiz'; // Importing the Quiz component
import Result from './Result'; // Importing the Result component
import Levels from './Levels'; // Importing the Levels component
import Progress from './Progress'; // Importing the Progress component

// Defining the main App component
function App() {
  return (
    // Using BrowserRouter as Router for routing
    <Router>
      {/* Defining routes */}
      <Routes>
        {/* Route for the main page of the quiz */}
        <Route path="/mainQuiz" element={<Main />} />
        {/* Route for the quiz page */}
        <Route path="/mainQuiz/quiz" element={<Quiz />} />
        {/* Route for the result page */}
        <Route path="/mainQuiz/result" element={<Result />} />
        {/* Route for the levels page */}
        <Route path="/mainQuiz/level" element={<Levels />} />
        {/* Route for the progress page */}
        <Route path="/mainQuiz/progress" element={<Progress />} />
      </Routes>
    </Router>
  );
}

// Exporting the App component as the default export
export default App;
