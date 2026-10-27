import { Box, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LayoutPrincipal() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, rgba(23,28,34,1) 0%, rgba(16,24,32,0.96) 100%)'
            : 'linear-gradient(180deg, rgba(244,241,235,0.9) 0%, rgba(255,255,255,0.75) 100%)'
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flex: 1,
          width: '100%',
          maxWidth: 1200,
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 3, md: 4 }
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}