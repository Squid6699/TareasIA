import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionActions, Button } from '@mui/material';

function Fallas_Transmision({ handleFallasTransmision, fallasTransmision, disableFallasTransmision }) {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography component="span">FALLAS EN TRANSMISION</Typography>
            </AccordionSummary>

            <AccordionDetails>
                ¿Encuentra alguna anomalia en la transmision?
                <AccordionActions>
                    <Button disabled={disableFallasTransmision.fallaTransmision} onClick={() => handleFallasTransmision("fallaTransmision", true, "FT")}>SI</Button>
                    <Button disabled={disableFallasTransmision.fallaTransmision} onClick={() => handleFallasTransmision("fallaTransmision", false, "FT")}>NO</Button>
                </AccordionActions>
            </AccordionDetails>

            {
                fallasTransmision.fallaTransmision && fallasTransmision.fallaTransmision != null && (
                    <AccordionDetails>
                        ¿Transmisión patina (arranca pero no avanza)?
                        <AccordionActions>
                            <Button disabled={disableFallasTransmision.transmisionPatina} onClick={() => handleFallasTransmision("transmisionPatina", true, "TP")}>SI</Button>
                            <Button disabled={disableFallasTransmision.transmisionPatina} onClick={() => handleFallasTransmision("transmisionPatina", false, "TP")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasTransmision.transmisionPatina && fallasTransmision.transmisionPatina != null && (
                    <AccordionDetails>
                        ¿Los cambios entran correctamente?
                        <AccordionActions>
                            <Button disabled={disableFallasTransmision.CambiosNoEntran} onClick={() => handleFallasTransmision("CambiosNoEntran", false, "CNE")}>SI</Button>
                            <Button disabled={disableFallasTransmision.CambiosNoEntran} onClick={() => handleFallasTransmision("CambiosNoEntran", true, "CNE")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasTransmision.CambiosNoEntran && fallasTransmision.CambiosNoEntran != null && (
                    <AccordionDetails>
                        ¿Cambios bruscos o con tirones?
                        <AccordionActions>
                            <Button disabled={disableFallasTransmision.cambiosBruscos} onClick={() => handleFallasTransmision("cambiosBruscos", true, "CB")}>SI</Button>
                            <Button disabled={disableFallasTransmision.cambiosBruscos} onClick={() => handleFallasTransmision("cambiosBruscos", false, "CB")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasTransmision.cambiosBruscos && fallasTransmision.cambiosBruscos != null && (
                    <AccordionDetails>
                        ¿Dificultad para meter velocidades (manual)?
                        <AccordionActions>
                            <Button disabled={disableFallasTransmision.dificultadMeterVelocidades} onClick={() => handleFallasTransmision("dificultadMeterVelocidades", true, "DMM")}>SI</Button>
                            <Button disabled={disableFallasTransmision.dificultadMeterVelocidades} onClick={() => handleFallasTransmision("dificultadMeterVelocidades", false, "DMM")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasTransmision.dificultadMeterVelocidades && fallasTransmision.dificultadMeterVelocidades != null && (
                    <AccordionDetails>
                        ¿Los cambios se salen solos?
                        <AccordionActions>
                            <Button disabled={disableFallasTransmision.cambiosSeSalenSolo} onClick={() => handleFallasTransmision("cambiosSeSalenSolo", true, "CSS")}>SI</Button>
                            <Button disabled={disableFallasTransmision.cambiosSeSalenSolo} onClick={() => handleFallasTransmision("cambiosSeSalenSolo", false, "CSS")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasTransmision.cambiosSeSalenSolo && fallasTransmision.cambiosSeSalenSolo != null && (
                    <AccordionDetails>
                        ¿Retraso al cambiar de “P” a “D” o “R”?
                        <AccordionActions>
                            <Button disabled={disableFallasTransmision.retrasoAlCambiarCambios} onClick={() => handleFallasTransmision("retrasoAlCambiarCambios", true, "RRC")}>SI</Button>
                            <Button disabled={disableFallasTransmision.retrasoAlCambiarCambios} onClick={() => handleFallasTransmision("retrasoAlCambiarCambios", false, "RRC")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasTransmision.retrasoAlCambiarCambios && fallasTransmision.retrasoAlCambiarCambios != null && (
                    <AccordionDetails>
                        ¿Se escucha golpeteo al cambiar o al acelerar/desacelerar?
                        <AccordionActions>
                            <Button disabled={disableFallasTransmision.golpeteoAlCambiarCambios} onClick={() => handleFallasTransmision("golpeteoAlCambiarCambios", true, "GC")}>SI</Button>
                            <Button disabled={disableFallasTransmision.golpeteoAlCambiarCambios} onClick={() => handleFallasTransmision("golpeteoAlCambiarCambios", false, "GC")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasTransmision.golpeteoAlCambiarCambios && fallasTransmision.golpeteoAlCambiarCambios != null && (
                    <AccordionDetails>
                        ¿Zumbido o chillido en ciertas marchas?
                        <AccordionActions>
                            <Button disabled={disableFallasTransmision.zumbidoMarchas} onClick={() => handleFallasTransmision("zumbidoMarchas", true, "ZM")}>SI</Button>
                            <Button disabled={disableFallasTransmision.zumbidoMarchas} onClick={() => handleFallasTransmision("zumbidoMarchas", false, "ZM")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasTransmision.zumbidoMarchas && fallasTransmision.zumbidoMarchas != null && (
                    <AccordionDetails>
                        ¿Vibraciones al acelerar?
                        <AccordionActions>
                            <Button disabled={disableFallasTransmision.vibracionMarchas} onClick={() => handleFallasTransmision("vibracionMarchas", true, "VA")}>SI</Button>
                            <Button disabled={disableFallasTransmision.vibracionMarchas} onClick={() => handleFallasTransmision("vibracionMarchas", false, "VA")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasTransmision.vibracionMarchas && fallasTransmision.vibracionMarchas != null && (
                    <AccordionDetails>
                        ¿Líquido de transmisión oscuro o huele a quemado?
                        <AccordionActions>
                            <Button disabled={disableFallasTransmision.liquidoTransmisionOscuro} onClick={() => handleFallasTransmision("liquidoTransmisionOscuro", true, "LTO")}>SI</Button>
                            <Button disabled={disableFallasTransmision.liquidoTransmisionOscuro} onClick={() => handleFallasTransmision("liquidoTransmisionOscuro", false, "LTO")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasTransmision.liquidoTransmisionOscuro && fallasTransmision.liquidoTransmisionOscuro != null && (
                    <AccordionDetails>
                        ¿Nivel de fluido de transmisión muy bajo?
                        <AccordionActions>
                            <Button disabled={disableFallasTransmision.liquidoTransmisionBajo} onClick={() => handleFallasTransmision("liquidoTransmisionBajo", true, "LTB")}>SI</Button>
                            <Button disabled={disableFallasTransmision.liquidoTransmisionBajo} onClick={() => handleFallasTransmision("liquidoTransmisionBajo", false, "LTB")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }
            
            {
                !fallasTransmision.liquidoTransmisionBajo && fallasTransmision.liquidoTransmisionBajo != null && (
                    <Typography component="span">Sin posible diagnostico, visite un mecanico</Typography>
                )
            }
        </Accordion>
    )
}

export default Fallas_Transmision;