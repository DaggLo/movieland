import { ErrorBoundary } from "react-error-boundary";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";

import { ThemeProvider, useTheme } from "@entities";
import { Fallback } from "@pages";
import { cn } from "@shared";
import { router } from "./routes";
import { store, persistedStore } from "./store";

const block = cn("app");

function App() {
  const { theme } = useTheme();

  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <ThemeProvider>
            <div className={block({ theme }, ["container"])}>
              <RouterProvider router={router} />
            </div>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
