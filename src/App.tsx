import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { ApolloProvider } from "@apollo/client";
import client from "./services/apolloClient";
import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <AppRoutes />
      </ApolloProvider>
    </Provider>
  );
};

export default App;
