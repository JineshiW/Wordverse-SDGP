import React, { Suspense } from "react";
import router from "./router";// Importing the router configuration
import { RouterProvider } from "react-router-dom";// Importing RouterProvider from react-router-dom
import ErrorBoundary from "./pages/Error/error"; // Importing the ErrorBoundary component


// Main component of the application
function App() {
  return (
    <div>
      {/* Suspense component used to handle asynchronous loading */}
      <Suspense>
        {/* ErrorBoundary component to catch errors in the rendering tree */}
        <ErrorBoundary>
          {/* RouterProvider component from react-router-dom to provide routing context */}
          <RouterProvider router={router} />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}