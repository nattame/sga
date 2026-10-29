import { useState } from 'react';
import { Box, Button, Paper, Stack, Typography, useTheme } from '@mui/material';

const API_ALUMNOS = "http://localhost:3000/alumnos";

function FormularioA({ onAlumnoCreado, alumnoEditar, onCancelar }) {
  const theme = useTheme();

  const [formulario, setFormulario] = useState({
    legajo: String(alumnoEditar?.legajo ?? ""),
    nombre: alumnoEditar?.nombre ?? "",
    carrera: alumnoEditar?.carrera ?? "",
    correo: alumnoEditar?.correo ?? ""
  });

  const [error, setError] = useState("");
  const [guardando, setGuardando] = useState(false);

  function manejarCambio(e) {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  }

  async function guardar(e) {
    e.preventDefault();
    setError('');
    setGuardando(true);

    const alumno = {
      ...formulario,
      legajo: Number(formulario.legajo)
    };

    const editando = Boolean(alumnoEditar);
    const url = editando 
                ? `${API_ALUMNOS}/${alumnoEditar.legajo}` 
                : API_ALUMNOS;

    try {
      const respuesta = await fetch(url, {
        method: editando ? 'PUT' : 'POST',
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify(alumno)
      });

      if (!respuesta.ok) {
        throw new Error(`No se pudo guardar el alumno. Estado HTTP: ${respuesta.status}`);
      }

      setFormulario({
        legajo: '',
        nombre: '',
        carrera: '',
        correo: ''
      });
      onAlumnoCreado()
    } catch (error) {
      console.error('Error al guardar:', error);
      setError(error.message || 'No se puede conectar con el servidor');
    } finally {
      setGuardando(false);
    }
  }

  function cancelar() {
    onCancelar();
  }

  const inputStyles = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '0.8rem 0.9rem',
    borderRadius: 12,
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    fontSize: '0.95rem',
    transition: 'all 0.2s ease',
    outline: 'none'
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, sm: 3 },
        mb: 3,
        borderRadius: 4,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
        boxShadow: '0 18px 45px rgba(15, 23, 42, 0.08)'
      }}
    >
      <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 800 }}>
        {alumnoEditar ? 'Editar Alumno' : 'Nuevo Alumno'}
      </Typography>

      <Box component="form" onSubmit={guardar} sx={{ display: 'grid', gap: 2 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Box sx={{ display: 'grid', gap: 1, width: '100%' }}>
            <label htmlFor="legajo" style={{ fontWeight: 600 }}>Legajo</label>
            <input id="legajo" name="legajo" value={formulario.legajo} onChange={manejarCambio} required style={inputStyles} />
          </Box>

          <Box sx={{ display: 'grid', gap: 1, width: '100%' }}>
            <label htmlFor="nombre" style={{ fontWeight: 600 }}>Nombre</label>
            <input id="nombre" name="nombre" value={formulario.nombre} onChange={manejarCambio} required style={inputStyles} />
          </Box>
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Box sx={{ display: 'grid', gap: 1, width: '100%' }}>
            <label htmlFor="correo" style={{ fontWeight: 600 }}>Correo</label>
            <input id="correo" name="correo" value={formulario.correo} onChange={manejarCambio} style={inputStyles} />
          </Box>

          <Box sx={{ display: 'grid', gap: 1, width: '100%' }}>
            <label htmlFor="carrera" style={{ fontWeight: 600 }}>Carrera</label>
            <input id="carrera" name="carrera" value={formulario.carrera} onChange={manejarCambio} style={inputStyles} />
          </Box>
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ pt: 1 }}>
          <Button
            type="submit"
            variant="contained"
            disabled={guardando}
            sx={{
              borderRadius: 999,
              px: 3,
              py: 1.2,
              fontWeight: 700,
              boxShadow: 'none',
              '&:hover': { boxShadow: 'none' }
            }}
          >
            {guardando ? 'Guardando...' : alumnoEditar ? 'Guardar cambios' : 'Guardar'}
          </Button>

          {alumnoEditar && (
            <Button
              type="button"
              variant="outlined"
              onClick={cancelar}
              disabled={guardando}
              sx={{ borderRadius: 999, px: 3, py: 1.2, fontWeight: 700 }}
            >
              Cancelar
            </Button>
          )}
        </Stack>

        {error && (
          <Typography role="alert" color="error.main" sx={{ mt: 1, fontWeight: 500 }}>
            {error}
          </Typography>
        )}
      </Box>
    </Paper>
  );
}

export default FormularioA;