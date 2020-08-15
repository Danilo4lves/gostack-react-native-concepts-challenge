// Dependencies
import React from "react";

// Presentational
import AppPresentational from "./presentational";

function App() {
  async function handleLikeRepository(id) {
    // Implement "Like Repository" functionality
  }

  return React.createElement(AppPresentational, {
    handleLikeRepository,
  });
}

export default App;
