import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionActions, Button, Modal } from '@mui/material';
import { useEffect, useState } from 'react';
import ModalComponente from './ModalComponente';

function App() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [modalContent, setModalContent] = useState({
    title: "",
    text: ""
  })

  const handleContent = (title, text) => {
    setModalContent({
      title: title,
      text: text
    })
  }

  const [fallasElectricas, setFallasElectricas] = useState({
    enciende: null,
    clic: null,
    motorGira: null,
    tableroLuces: null,
    corrosionTerminales: null,
    bateriaDescargada: null,
    fallasLluviaLavado: null,
    fallasPatron: null,

    lucesTenues: null,
    testigoBateria: null,
    funcionanLimpiaparabrisas: null,
    variosIndicadoresEncendidos: null,
  })

  const [disableFallasElectricas, setDisableFallasElectricas] = useState({
    enciende: false,
    clic: false,
    motorGira: false,
    tableroLuces: false,
    corrosionTerminales: false,
    bateriaDescargada: false,
    fallasLluviaLavado: false,
    fallasPatron: false,

    lucesTenues: false,
    testigoBateria: false,
    funcionanLimpiaparabrisas: false,
    variosIndicadoresEncendidos: false,
  })



  const [fallasElectricasFacts, setFallasElectricasFacts] = useState({})

  const handleFallasElectricas = (key, value, fact) => {
    setFallasElectricas(prevState => ({
      ...prevState,
      [key]: value
    }))

    setDisableFallasElectricas(prevState => ({
      ...prevState,
      [key]: true
    }))

    setFallasElectricasFacts(prevState => ({
      ...prevState,
      [fact]: value
    }))
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/diagnostico", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(fallasElectricasFacts)
        });

        const data = await response.json();

        if (data.diagnosticos && data.diagnosticos.length > 0) {
          console.log(data)
          handleContent("Diagnóstico", data.diagnosticos);
          setOpen(true)
        }

      } catch (error) {
        console.error("Error al guardar los datos de fallas electricas", error);
      }
    };

    fetchData();
  }, [fallasElectricasFacts]);

  return (
    <>
      <h2>FALLAS VEHICULARES</h2>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">FALLAS ELECTRICAS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          ¿El vehiculo enciende correctamente?
          <AccordionActions>
            <Button disabled={disableFallasElectricas.enciende} onClick={() => handleFallasElectricas("enciende", true, "VE")}>SI</Button>
            <Button disabled={disableFallasElectricas.enciende} onClick={() => handleFallasElectricas("enciende", false, "VE")}>NO</Button>
          </AccordionActions>
        </AccordionDetails>

        {
          !fallasElectricas.enciende && fallasElectricas.enciende != null && (
            <AccordionDetails>
              ¿Se escucha un clic?
              <AccordionActions>
                <Button disabled={disableFallasElectricas.clic} onClick={() => handleFallasElectricas("clic", true, "CL")}>SI</Button>
                <Button disabled={disableFallasElectricas.clic} onClick={() => handleFallasElectricas("clic", false, "CL")}>NO</Button>
              </AccordionActions>
            </AccordionDetails>
          )}

        {
          !fallasElectricas.clic && fallasElectricas.clic != null && (
            <AccordionDetails>
              ¿El motor gira lentamente?
              <AccordionActions>
                <Button disabled={disableFallasElectricas.motorGira} onClick={() => handleFallasElectricas("motorGira", true, "MG")}>SI</Button>
                <Button disabled={disableFallasElectricas.motorGira} onClick={() => handleFallasElectricas("motorGira", false, "MG")}>NO</Button>
              </AccordionActions>
            </AccordionDetails>
          )}

        {
          !fallasElectricas.motorGira && fallasElectricas.motorGira != null && (
            <AccordionDetails>
              ¿El tablero o las luces encienden?
              <AccordionActions>
                <Button disabled={disableFallasElectricas.tableroLuces} onClick={() => handleFallasElectricas("tableroLuces", true, "LN")}>SI</Button>
                <Button disabled={disableFallasElectricas.tableroLuces} onClick={() => handleFallasElectricas("tableroLuces", false, "LN")}>NO</Button>
              </AccordionActions>
            </AccordionDetails>
          )}

        {
          !fallasElectricas.tableroLuces && fallasElectricas.tableroLuces != null && (
            <AccordionDetails>
              ¿Hay corrosión visible en los terminales de la batería?
              <AccordionActions>
                <Button disabled={disableFallasElectricas.corrosionTerminales} onClick={() => handleFallasElectricas("corrosionTerminales", true, "CT")}>SI</Button>
                <Button disabled={disableFallasElectricas.corrosionTerminales} onClick={() => handleFallasElectricas("corrosionTerminales", false, "CT")}>NO</Button>
              </AccordionActions>
            </AccordionDetails>
          )}

        {
          !fallasElectricas.corrosionTerminales && fallasElectricas.corrosionTerminales != null && (
            <AccordionDetails>
              ¿La batería se ha descargado varias veces en poco tiempo?
              <AccordionActions>
                <Button disabled={disableFallasElectricas.bateriaDescargada} onClick={() => handleFallasElectricas("bateriaDescargada", true, "BR")}>SI</Button>
                <Button disabled={disableFallasElectricas.bateriaDescargada} onClick={() => handleFallasElectricas("bateriaDescargada", false, "BR")}>NO</Button>
              </AccordionActions>
            </AccordionDetails>
          )}

        {
          !fallasElectricas.bateriaDescargada && fallasElectricas.bateriaDescargada != null && (
            <AccordionDetails>
              ¿Fallas después de lluvia o lavado?
              <AccordionActions>
                <Button disabled={disableFallasElectricas.fallasLluviaLavado} onClick={() => handleFallasElectricas("fallasLluviaLavado", true, "FL")}>SI</Button>
                <Button disabled={disableFallasElectricas.fallasLluviaLavado} onClick={() => handleFallasElectricas("fallasLluviaLavado", false, "FL")}>NO</Button>
              </AccordionActions>
            </AccordionDetails>
          )}

        {
          !fallasElectricas.fallasLluviaLavado && fallasElectricas.fallasLluviaLavado != null && (
            <AccordionDetails>
              ¿Fallas aparecen y desaparecen sin patrón?
              <AccordionActions>
                <Button disabled={disableFallasElectricas.fallasPatron} onClick={() => handleFallasElectricas("fallasPatron", true, "FI")}>SI</Button>
                <Button disabled={disableFallasElectricas.fallasPatron} onClick={() => handleFallasElectricas("fallasPatron", false, "FI")}>NO</Button>
              </AccordionActions>
            </AccordionDetails>
          )}

        {
          fallasElectricas.enciende && fallasElectricas.enciende != null && (
            <AccordionDetails>
              ¿Las luces se ven tenues o no encienden correctamente?
              <AccordionActions>
                <Button disabled={disableFallasElectricas.lucesTenues} onClick={() => handleFallasElectricas("lucesTenues", true, "LT")}>SI</Button>
                <Button disabled={disableFallasElectricas.lucesTenues} onClick={() => handleFallasElectricas("lucesTenues", false, "LT")}>NO</Button>
              </AccordionActions>
            </AccordionDetails>
          )}

        {
          !fallasElectricas.lucesTenues && fallasElectricas.lucesTenues != null && (
            <AccordionDetails>
              ¿El testigo de batería está encendido durante la conducción?
              <AccordionActions>
                <Button disabled={disableFallasElectricas.testigoBateria} onClick={() => handleFallasElectricas("testigoBateria", true, "TB")}>SI</Button>
                <Button disabled={disableFallasElectricas.testigoBateria} onClick={() => handleFallasElectricas("testigoBateria", false, "TB")}>NO</Button>
              </AccordionActions>
            </AccordionDetails>
          )}

        {
          !fallasElectricas.testigoBateria && fallasElectricas.testigoBateria != null && (
            <AccordionDetails>
              ¿Funcionan limpiaparabrisas, radio y ventanas eléctricas?
              <AccordionActions>
                <Button disabled={disableFallasElectricas.funcionanLimpiaparabrisas} onClick={() => handleFallasElectricas("funcionanLimpiaparabrisas", true, "LP")}>SI</Button>
                <Button disabled={disableFallasElectricas.funcionanLimpiaparabrisas} onClick={() => handleFallasElectricas("funcionanLimpiaparabrisas", false, "LP")}>NO</Button>
              </AccordionActions>
            </AccordionDetails>
          )}

        {
          !fallasElectricas.funcionanLimpiaparabrisas && fallasElectricas.funcionanLimpiaparabrisas != null && (
            <AccordionDetails>
              ¿Varios indicadores del tablero parpadean o están apagados?
              <AccordionActions>
                <Button disabled={disableFallasElectricas.variosIndicadoresEncendidos} onClick={() => handleFallasElectricas("variosIndicadoresEncendidos", true, "IA")}>SI</Button>
                <Button disabled={disableFallasElectricas.variosIndicadoresEncendidos} onClick={() => handleFallasElectricas("variosIndicadoresEncendidos", false, "IA")}>NO</Button>
              </AccordionActions>
            </AccordionDetails>
          )}



      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">FALLAS EN MOTOR</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">FALLAS EN LA TRANSMISION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">FALLAS EN FRENOS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">FALLAS EN SISTEMA DE REFRIGERACION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">FALLAS DE SUSPENSION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">FALLAS EN LA DIRECCION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">FALLAS EN SISTEMA DE ESCAPE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <ModalComponente
        open={open}
        handleClose={handleClose}
        title={modalContent.title}
        text={modalContent.text}
      />
    </>
  )
}

export default App
