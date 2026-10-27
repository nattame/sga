import { useState, useEffect } from 'react';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';

const API_ALUMNOS = 'http://localhost:3000/alumnos';

export function ListaAlumnos({ actualizar, onAlumnoCreado, onEditarAlumno }) {
  const [alumnos, setAlumnos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  async function eliminarAlumno(legajo) {
    const confirmar = window.confirm('Seguro que queres eliminar este alumno?');
    if (!confirmar) {
      return;
    }

    try {
      const respuesta = await fetch(`${API_ALUMNOS}/${legajo}`, {
        method: 'DELETE'
      });

      if (!respuesta.ok) {
        throw new Error(`No se puedo eliminar. Estado HTTP: ${respuesta.status}`);
      }

      onAlumnoCreado();
    } catch (error) {
      console.error('Error al eliminar: ', error);
      alert(error.message || 'No se pudo eliminar alumno');
    }
  }

  useEffect(() => {
    async function cargarAlumnos() {
      setCargando(true);
      setError('');

      try {
        const respuesta = await fetch(API_ALUMNOS);

        if (!respuesta.ok) {
          throw new Error('No se pudo obtener la lista', respuesta.status);
        }

        const datos = await respuesta.json();
        setAlumnos(datos);
      } catch (error) {
        console.error('Error de conexion', error);
        setError('No se pudo cargar la lista de alumnos');
      } finally {
        setCargando(false);
      }
    }

    cargarAlumnos();
  }, [actualizar]);

  if (cargando) {
    return (
      <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>Cargando alumnos...</Typography>
      </Paper>
    );
  }

  if (error) {
    return (
      <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
        <Typography role="alert" color="error.main" sx={{ fontWeight: 600 }}>
          {error}
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, sm: 3 },
        borderRadius: 4,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
        boxShadow: '0 18px 45px rgba(15, 23, 42, 0.06)'
      }}
    >
      <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 800 }}>
        Alumnos
      </Typography>

      {alumnos.length === 0 ? (
        <Box sx={{ py: 2, color: 'text.secondary' }}>No hay alumnos registrados.</Box>
      ) : (
        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'grid', gap: 1.5 }}>
          {alumnos.map((alumno) => (
            <Box
              component="li"
              key={alumno.legajo}
              sx={{
                display: 'flex',
                alignItems: { xs: 'flex-start', sm: 'center' },
                justifyContent: 'space-between',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 1.5,
                p: 1.5,
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'action.hover'
              }}
            >
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  {alumno.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Legajo: {alumno.legajo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Carrera: {alumno.carrera}
                </Typography>
              </Box>

              <Stack direction="row" spacing={1}>
                <Button
                  type="button"
                  variant="contained"
                  size="small"
                  onClick={() => onEditarAlumno(alumno)}
                  sx={{ borderRadius: 999, fontWeight: 700 }}
                >
                  Editar
                </Button>

                <Button
                  type="button"
                  variant="outlined"
                  color="error"
                  size="small"
                  onClick={() => eliminarAlumno(alumno.legajo)}
                  sx={{ borderRadius: 999, fontWeight: 700 }}
                >
                  Eliminar
                </Button>
              </Stack>
            </Box>
          ))}
        </Box>
      )}
    </Paper>
  );
}
