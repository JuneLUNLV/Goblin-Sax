import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createEmotionCache } from '../utils/create-emotion-cache';
import { theme } from '../theme';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import '../../global_style.css'

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <React.StrictMode>
        <CacheProvider value={emotionCache}>
      <Head>
        <title>
        Goblin Sax
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
            {getLayout(<Component {...pageProps} />)}
            </Provider>
          </ThemeProvider>
        </LocalizationProvider>
      </CacheProvider>
    </React.StrictMode>
  );
};

export default App;
