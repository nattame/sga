import Box from '@mui/material/Box';
import { useColorScheme } from '@mui/material/styles';
import MaterialUISwitch from './MaterialUISwitch';

export default function SelectorTema() {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }

  const modoOscuro = mode === 'dark';

  function cambiarModo(event) {
    setMode(event.target.checked ? 'dark' : 'light');
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 0.5,
        borderRadius: 999,
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: 1
      }}
    >
      <MaterialUISwitch
        checked={modoOscuro}
        onChange={cambiarModo}
        inputProps={{
          'aria-label': 'Cambiar entre modo claro y oscuro'
        }}
      />
    </Box>
  );
}

