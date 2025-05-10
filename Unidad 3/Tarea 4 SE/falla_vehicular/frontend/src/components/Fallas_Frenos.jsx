import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionActions, Button } from '@mui/material';

function Fallas_Frenos({ handleFallasFrenos, fallasFrenos, disableFallasFrenos }) {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography component="span">FALLAS EN FRENOS</Typography>
            </AccordionSummary>

            <AccordionDetails>
                ¿Encuentra alguna anomalia al frenar?
                <AccordionActions>
                    <Button disabled={disableFallasFrenos.fallasFrenos} onClick={() => handleFallasFrenos("fallasFrenos", true, "FD")}>SI</Button>
                    <Button disabled={disableFallasFrenos.fallasFrenos} onClick={() => handleFallasFrenos("fallasFrenos", false, "FD")}>NO</Button>
                </AccordionActions>
            </AccordionDetails>

            {
                fallasFrenos.fallasFrenos && fallasFrenos.fallasFrenos != null && (
                    <AccordionDetails>
                        ¿El pedal se va hasta el fondo fácilmente?
                        <AccordionActions>
                            <Button disabled={disableFallasFrenos.pedalFondo} onClick={() => handleFallasFrenos("pedalFondo", true, "PFVF")}>SI</Button>
                            <Button disabled={disableFallasFrenos.pedalFondo} onClick={() => handleFallasFrenos("pedalFondo", false, "PFVF")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasFrenos.pedalFondo && fallasFrenos.pedalFondo != null && (
                    <AccordionDetails>
                        ¿El pedal se siente esponjoso o blando?
                        <AccordionActions>
                            <Button disabled={disableFallasFrenos.pedalBlando} onClick={() => handleFallasFrenos("pedalBlando", true, "PFB")}>SI</Button>
                            <Button disabled={disableFallasFrenos.pedalBlando} onClick={() => handleFallasFrenos("pedalBlando", false, "PFB")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasFrenos.pedalBlando && fallasFrenos.pedalBlando != null && (
                    <AccordionDetails>
                        ¿El pedal está duro y cuesta frenar?
                        <AccordionActions>
                            <Button disabled={disableFallasFrenos.pedalDuro} onClick={() => handleFallasFrenos("pedalDuro", true, "PFD")}>SI</Button>
                            <Button disabled={disableFallasFrenos.pedalDuro} onClick={() => handleFallasFrenos("pedalDuro", false, "PFD")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasFrenos.pedalDuro && fallasFrenos.pedalDuro != null && (
                    <AccordionDetails>
                        ¿El vehículo tarda en detenerse o no frena bien?
                        <AccordionActions>
                            <Button disabled={disableFallasFrenos.vehiculoTardaFrenar} onClick={() => handleFallasFrenos("vehiculoTardaFrenar", true, "TEF")}>SI</Button>
                            <Button disabled={disableFallasFrenos.vehiculoTardaFrenar} onClick={() => handleFallasFrenos("vehiculoTardaFrenar", false, "TEF")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasFrenos.vehiculoTardaFrenar && fallasFrenos.vehiculoTardaFrenar != null && (
                    <AccordionDetails>
                        ¿El vehículo vibra al frenar?
                        <AccordionActions>
                            <Button disabled={disableFallasFrenos.vehiculoVibraFrenar} onClick={() => handleFallasFrenos("vehiculoVibraFrenar", true, "VVF")}>SI</Button>
                            <Button disabled={disableFallasFrenos.vehiculoVibraFrenar} onClick={() => handleFallasFrenos("vehiculoVibraFrenar", false, "VVF")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasFrenos.vehiculoVibraFrenar && fallasFrenos.vehiculoVibraFrenar != null && (
                    <AccordionDetails>
                        ¿Se escucha chillido agudo al frenar?
                        <AccordionActions>
                            <Button disabled={disableFallasFrenos.chillidoAlFrenar} onClick={() => handleFallasFrenos("chillidoAlFrenar", true, "CAF")}>SI</Button>
                            <Button disabled={disableFallasFrenos.chillidoAlFrenar} onClick={() => handleFallasFrenos("chillidoAlFrenar", false, "CAF")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasFrenos.chillidoAlFrenar && fallasFrenos.chillidoAlFrenar != null && (
                    <AccordionDetails>
                        ¿Se escucha rechinar metálico al frenar?
                        <AccordionActions>
                            <Button disabled={disableFallasFrenos.chillidoMetalicoAlFrenar} onClick={() => handleFallasFrenos("chillidoMetalicoAlFrenar", true, "RM")}>SI</Button>
                            <Button disabled={disableFallasFrenos.chillidoMetalicoAlFrenar} onClick={() => handleFallasFrenos("chillidoMetalicoAlFrenar", false, "RM")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasFrenos.chillidoMetalicoAlFrenar && fallasFrenos.chillidoMetalicoAlFrenar != null && (
                    <AccordionDetails>
                        ¿El nivel del líquido de frenos está bajo?
                        <AccordionActions>
                            <Button disabled={disableFallasFrenos.nivelLiquidoFrenosBajo} onClick={() => handleFallasFrenos("nivelLiquidoFrenosBajo", true, "LFB")}>SI</Button>
                            <Button disabled={disableFallasFrenos.nivelLiquidoFrenosBajo} onClick={() => handleFallasFrenos("nivelLiquidoFrenosBajo", false, "LFB")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasFrenos.nivelLiquidoFrenosBajo && fallasFrenos.nivelLiquidoFrenosBajo != null && (
                    <AccordionDetails>
                        ¿El líquido está oscuro o con residuos?
                        <AccordionActions>
                            <Button disabled={disableFallasFrenos.liquidoFrenosContaminado} onClick={() => handleFallasFrenos("liquidoFrenosContaminado", true, "LFO")}>SI</Button>
                            <Button disabled={disableFallasFrenos.liquidoFrenosContaminado} onClick={() => handleFallasFrenos("liquidoFrenosContaminado", false, "LFO")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasFrenos.liquidoFrenosContaminado && fallasFrenos.liquidoFrenosContaminado != null && (
                    <AccordionDetails>
                        ¿Se enciende el testigo de freno en el tablero?
                        <AccordionActions>
                            <Button disabled={disableFallasFrenos.testigoFrenosEncendido} onClick={() => handleFallasFrenos("testigoFrenosEncendido", true, "TFE")}>SI</Button>
                            <Button disabled={disableFallasFrenos.testigoFrenosEncendido} onClick={() => handleFallasFrenos("testigoFrenosEncendido", false, "TFE")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasFrenos.testigoFrenosEncendido && fallasFrenos.testigoFrenosEncendido != null && (
                    <AccordionDetails>
                        ¿Se enciende el testigo de freno en el tablero?
                        <AccordionActions>
                            <Button disabled={disableFallasFrenos.testigoABSEncendido} onClick={() => handleFallasFrenos("testigoABSEncendido", true, "TAE")}>SI</Button>
                            <Button disabled={disableFallasFrenos.testigoABSEncendido} onClick={() => handleFallasFrenos("testigoABSEncendido", false, "TAE")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasFrenos.testigoABSEncendido && fallasFrenos.testigoABSEncendido != null && (
                    <Typography component="span">Sin posible diagnostico, visite un mecanico</Typography>
                )
            }





        </Accordion>
    );
}

export default Fallas_Frenos;