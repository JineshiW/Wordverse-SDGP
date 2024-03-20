import { useParams } from "react-router-dom";

// Functional component representing the Build page
const Build = () => {
  // Extracts the parameter 'bID' from the URL using useParams hook
  const { bID } = useParams();
  
  // Renders an <h1> element displaying the text "Build /" followed by the value of 'bID'
  return <h1>Build / {bID}</h1>;
};

export default Build; // Exports the Build component
