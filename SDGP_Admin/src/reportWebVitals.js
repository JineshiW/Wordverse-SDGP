// This function, reportWebVitals, takes a callback function, onPerfEntry, as a parameter
const reportWebVitals = onPerfEntry => {
  // Check if onPerfEntry is defined and is a function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Asynchronously import the 'web-vitals' module
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // After importing the module, invoke the functions provided by 'web-vitals' to measure various web vitals
      // Each function takes the onPerfEntry callback function as an argument to handle the collected data
      getCLS(onPerfEntry); // Cumulative Layout Shift (CLS)
      getFID(onPerfEntry); // First Input Delay (FID)
      getFCP(onPerfEntry); // First Contentful Paint (FCP)
      getLCP(onPerfEntry); // Largest Contentful Paint (LCP)
      getTTFB(onPerfEntry); // Time to First Byte (TTFB)
    });
  }
};

// Export the reportWebVitals function as the default export of this module
export default reportWebVitals;
