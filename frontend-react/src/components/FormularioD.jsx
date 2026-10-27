import { useState } from 'react';
import { Box, Button, Paper, Stack, Typography, useTheme } from '@mui/material';

const API_DOCENTES = 'http://localhost:3000/docentes';

function FormularioD({ onDocenteCreado, docenteEditar, onCancelar }) {
  const theme = useTheme();

  const [formulario, setFormulario] = useState({
    dni: String(docenteEditar?.dni ?? ''),
    nombre: docenteEditar?.nombre ?? '',
    escpecialidad: docenteEditar?.especialidad ?? '',
    correo: docenteEditar?.correo ?? ''
  });

  const [error, setError] = useState('');
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

    const docente = {
      ...formulario,
      dni: Number(formulario.dni)
    };

    const editando = Boolean(docenteEditar);
    const url = editando ? `${API_DOCENTES}/${docenteEditar.legajo}` : API_DOCENTES;

    try {
      const respuesta = await fetch(url, {
        method: editando ? 'PUT' : 'POST',
        header: { 'Content-Type': 'application' },
        body: JSON.stringify(docente)
      });

      if (!respuesta.ok) {
        throw new Error(`No se pudo guardar el docente. Estado HTTP: ${respuesta.status}`);
      }

      setFormulario({
        dni: '',
        nombre: '',
        especialidad: '',
        correo: ''
      });
      onDocenteCreado();
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
        {docenteEditar ? 'Editar Docente' : 'Nuevo Docente'}
      </Typography>

      <Box component="form" onSubmit={guardar} sx={{ display: 'grid', gap: 2 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Box sx={{ display: 'grid', gap: 1, width: '100%' }}>
            <label htmlFor="dni" style={{ fontWeight: 600 }}>DNI</label>
            <input id="dni" name="dni" value={formulario.dni} onChange={manejarCambio} required style={inputStyles} />
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
            <label htmlFor="especialidad" style={{ fontWeight: 600 }}>Especialidad</label>
            <input id="especialidad" name="especialidad" value={formulario.especialidad} onChange={manejarCambio} style={inputStyles} />
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
            {guardando ? 'Guardando...' : docenteEditar ? 'Guardar cambios' : 'Guardar'}
          </Button>

          {docenteEditar && (
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

export default FormularioD;