import React, { Suspense } from "react";
import router from "./router";// Importing the router configuration
import { RouterProvider } from "react-router-dom";// Importing RouterProvider from react-router-dom
import ErrorBoundary from "./pages/Error/error"; // Importing the ErrorBoundary component


function App() {
  return (
    <div>
      <Suspense>
        <ErrorBoundary>
          <RouterProvider router={router} />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

export default App;
