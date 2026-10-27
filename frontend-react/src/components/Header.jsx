import { alpha, AppBar, Box, Link, Stack, Toolbar, Typography, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SelectorTema from './SelectorTema';
import logo from '../assets/hat.png';

const menuItems = [
  { label: 'Inicio', to: '/' },
  { label: 'Alumnos', to: '/alumnos' },
  {label:'Docentes',to:'/docentes'},
  { label: 'Ayuda', to: '/ayuda', ariaLabel: 'Ayuda' }
];

export default function Header() {
  const theme = useTheme();

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: 'blur(12px)',
        backgroundColor: alpha(theme.palette.background.default, 0.74),
        borderBottom: '1px solid',
        borderColor: 'divider',
        boxShadow: 'none'
      }}
    >
      <Toolbar
        sx={{
          gap: 2,
          minHeight: { xs: 72, md: 84 },
          px: { xs: 2, sm: 3, lg: 4 },
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}
      >
        <Box
          component={RouterLink}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            textDecoration: 'none',
            color: 'text.primary',
            flexShrink: 0
          }}
        >
          <Box
            sx={{
              width: { xs: 42, sm: 52 },
              height: { xs: 42, sm: 52 },
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.palette.mode === 'dark' ? '#FFFFFF' : theme.palette.background.paper,
              boxShadow: 3,
              p: 0.5
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo SGA"
              sx={{
                width: '100%',
                height: '100%',
                borderRadius: 1.5,
                objectFit: 'contain'
              }}
            />
          </Box>
          <Typography
            variant="h5"
            component="span"
            sx={{
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'text.primary'
            }}
          >
            SGA
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={1}
          sx={{
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'flex-end'
          }}
        >
          {menuItems.map((item) => (
            <Link
              key={item.label}
              component={RouterLink}
              to={item.to}
              underline="none"
              aria-label={item.ariaLabel}
              sx={{
                px: 1.5,
                py: 0.9,
                borderRadius: 999,
                fontWeight: 600,
                color: 'text.primary',
                transition: 'all 0.2s ease',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'action.hover',
                  color: 'primary.main'
                }
              }}
            >
              {item.label}
            </Link>
          ))}

          <Box sx={{ display: 'flex', alignItems: 'center', ml: { xs: 0, sm: 1 } }}>
            <SelectorTema />
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}