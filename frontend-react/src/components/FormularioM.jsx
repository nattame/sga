import { useState } from 'react';
import { Box, Button, Paper, Stack, Typography, useTheme } from '@mui/material';

const API_MATERIAS = "http://localhost:3000/materias";

function FormularioM({ onMateriaCreada, materiaEditar, onCancelar }) {
  const theme = useTheme();

  const [formulario, setFormulario] = useState({
    codigo: String(materiaEditar?.codigo ?? ""),
    nombre: materiaEditar?.nombre ?? "",
    descripcion: materiaEditar?.descripcion ?? "",
    cargaHoraria: Number(materiaEditar?.cargaHoraria ?? ""),
    Estado: materiaEditar?.Estado ?? ""
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

    const materia = {
      ...formulario,
      codigo: String(formulario.codigo),
      cargaHoraria: Number(formulario.cargaHoraria)
    };

    const editando = Boolean(materiaEditar);
    const url = editando 
                ? `${API_MATERIAS}/${materiaEditar.codigo}` 
                : API_MATERIAS;

    try {
      const respuesta = await fetch(url, {
        method: editando ? 'PUT' : 'POST',
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify(materia)
      });

      if (!respuesta.ok) {
        throw new Error(`No se pudo guardar la materia. Estado HTTP: ${respuesta.status}`);
      }

      setFormulario({
        codigo: '',
        nombre: '',
        descripcion: '',
        cargaHoraria: '',
        Estado:''
      });
      onMateriaCreada()
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
        {materiaEditar ? 'Editar Materia' : 'Nueva Materia'}
      </Typography>

      <Box component="form" onSubmit={guardar} sx={{ display: 'grid', gap: 2 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Box sx={{ display: 'grid', gap: 1, width: '100%' }}>
            <label htmlFor="codigo" style={{ fontWeight: 600 }}>Codigo</label>
            <input id="codigo" name="codigo" value={formulario.codigo.trim().toUpperCase()} onChange={manejarCambio} required style={inputStyles} />
          </Box>

          <Box sx={{ display: 'grid', gap: 1, width: '100%' }}>
            <label htmlFor="nombre" style={{ fontWeight: 600 }}>Nombre</label>
            <input id="nombre" name="nombre" value={formulario.nombre} onChange={manejarCambio} required style={inputStyles} />
          </Box>
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Box sx={{ display: 'grid', gap: 1, width: '100%' }}>
            <label htmlFor="descripcion" style={{ fontWeight: 600 }}>Descripcion</label>
            <input id="descripcion" name="descripcion" value={formulario.descripcion} onChange={manejarCambio} style={inputStyles} />
          </Box>

          <Box sx={{ display: 'grid', gap: 1, width: '100%' }}>
            <label htmlFor="cargaHoraria" style={{ fontWeight: 600 }}>Carga Horaria</label>
            <input id="cargaHoraria" name="cargaHoraria" value={Number(formulario.cargaHoraria)} onChange={manejarCambio} style={inputStyles} />
          </Box>

            <Box sx={{ display: 'grid', gap: 1, width: '100%' }}>
            <label htmlFor="Estado" style={{ fontWeight: 600 }}>Estado</label>
            <input id="Estado" name="Estado" value={formulario.Estado} onChange={manejarCambio} style={inputStyles} />
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
            {guardando ? 'Guardando...' : materiaEditar ? 'Guardar cambios' : 'Guardar'}
          </Button>

          {materiaEditar && (
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

export default FormularioM;