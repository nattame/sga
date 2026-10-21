import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
function EjemploMUI(){
 return (
    <>
    <Stack spacing={5} direction="column">
      <Button variant="text">Accesorio</Button>
      <Button variant="contained">Empezar</Button>
      <Button variant="outlined">Configurar</Button>
    </Stack>

     <Stack direction="row" spacing={2} sx={{
        mt:2, mx:3
     }}>
      <Button variant="contained" startIcon={<DeleteIcon  />}color="error" >
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}
      sx={{
        bgcolor:"#ffffff",
        color: "#000000",
        "&:hover":{bgcolor:"#aaaaaa"}

      }}
      >
        Send
      </Button>
    </Stack>
     </>
  )
 
}

export default EjemploMUI