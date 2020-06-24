import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
        <Paper elevation={3}>
          <div style={{ height: '300px', padding: '20px' }}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <h1>{t('test.language')}</h1>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
              spacing={3}
            >
              <Grid item>
                <Button
                  variant="contained"
                  onClick={() => {
                    changeLanguage('ja');
                  }}
                >
                  日本語
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  onClick={() => {
                    changeLanguage('en');
                  }}
                >
                  English
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <h2>{t('test.message')}</h2>
            </Grid>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
