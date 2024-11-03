import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ApolloProvider } from "@apollo/client";
import client from "./services/apolloClient";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <AppRoutes />
      </Router>
    </ApolloProvider>
  );
};

export default App;
