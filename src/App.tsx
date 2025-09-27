import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./routes/Routes";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import SnackbarWrapper from "./wrappers/snackbar-wrapper/SnackbarWrapper";
import LoaderWrapper from "./wrappers/loader-wrapper/LoaderWrapper";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarWrapper>
          <LoaderWrapper>
            <BrowserRouter>
              <ScrollToTop />
              <AppRoutes />
            </BrowserRouter>
          </LoaderWrapper>
        </SnackbarWrapper>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
