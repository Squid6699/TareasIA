import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionActions, Button } from '@mui/material';

function Fallas_Escape({ handleFallasEscape, disabeFallasEscape, fallasEscape }) {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography component="span">FALLAS EN SISTEMA DE ESCAPE</Typography>
            </AccordionSummary>

            <AccordionDetails>
                ¿Hay ruidos, humo o fallas relacionadas con el escape?
                <AccordionActions>
                    <Button disabled={disabeFallasEscape.fallaEscape} onClick={() => handleFallasEscape("fallaEscape", true, "FSES")}>SI</Button>
                    <Button disabled={disabeFallasEscape.fallaEscape} onClick={() => handleFallasEscape("fallaEscape", false, "FSES")}>NO</Button>
                </AccordionActions>
            </AccordionDetails>

            {
                fallasEscape.fallaEscape && fallasEscape.fallaEscape != null && (
                    <AccordionDetails>
                        ¿Se escucha un ruido fuerte o golpeteo debajo del vehículo?
                        <AccordionActions>
                            <Button disabled={disabeFallasEscape.ruidoDebajoVehiculo} onClick={() => handleFallasEscape("ruidoDebajoVehiculo", true, "RFE")}>SI</Button>
                            <Button disabled={disabeFallasEscape.ruidoDebajoVehiculo} onClick={() => handleFallasEscape("ruidoDebajoVehiculo", false, "RFE")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasEscape.ruidoDebajoVehiculo && fallasEscape.ruidoDebajoVehiculo != null && (
                    <AccordionDetails>
                        ¿Hay ruido metálico constante o zumbido con el motor en marcha?
                        <AccordionActions>
                            <Button disabled={disabeFallasEscape.ruidoMetalico} onClick={() => handleFallasEscape("ruidoMetalico", true, "RMC")}>SI</Button>
                            <Button disabled={disabeFallasEscape.ruidoMetalico} onClick={() => handleFallasEscape("ruidoMetalico", false, "RMC")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasEscape.ruidoMetalico && fallasEscape.ruidoMetalico != null && (
                    <AccordionDetails>
                        ¿Se escucha sonido de “escape roto” al acelerar o frenar?
                        <AccordionActions>
                            <Button disabled={disabeFallasEscape.sonidoEscapeRoto} onClick={() => handleFallasEscape("sonidoEscapeRoto", true, "SER")}>SI</Button>
                            <Button disabled={disabeFallasEscape.sonidoEscapeRoto} onClick={() => handleFallasEscape("sonidoEscapeRoto", false, "SER")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasEscape.sonidoEscapeRoto && fallasEscape.sonidoEscapeRoto != null && (
                    <AccordionDetails>
                        ¿Se ve humo blanco, negro o azul del escape?
                        <AccordionActions>
                            <Button disabled={disabeFallasEscape.humoEscape} onClick={() => handleFallasEscape("humoEscape", true, "HCE")}>SI</Button>
                            <Button disabled={disabeFallasEscape.humoEscape} onClick={() => handleFallasEscape("humoEscape", false, "HCE")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasEscape.humoEscape && fallasEscape.humoEscape != null && (
                    <AccordionDetails>
                        ¿El escape emite vapor excesivo incluso con motor caliente?
                        <AccordionActions>
                            <Button disabled={disabeFallasEscape.escapeVaporoso} onClick={() => handleFallasEscape("escapeVaporoso", true, "VEEE")}>SI</Button>
                            <Button disabled={disabeFallasEscape.escapeVaporoso} onClick={() => handleFallasEscape("escapeVaporoso", false, "VEEE")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasEscape.escapeVaporoso && fallasEscape.escapeVaporoso != null && (
                    <AccordionDetails>
                        ¿El vehículo pierde potencia o acelera lentamente?
                        <AccordionActions>
                            <Button disabled={disabeFallasEscape.vehiculoPierdePotencia} onClick={() => handleFallasEscape("vehiculoPierdePotencia", true, "PP")}>SI</Button>
                            <Button disabled={disabeFallasEscape.vehiculoPierdePotencia} onClick={() => handleFallasEscape("vehiculoPierdePotencia", false, "PP")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasEscape.vehiculoPierdePotencia && fallasEscape.vehiculoPierdePotencia != null && (
                    <AccordionDetails>
                        ¿El motor arranca mal o falla a bajas RPM?
                        <AccordionActions>
                            <Button disabled={disabeFallasEscape.motorArrancaMal} onClick={() => handleFallasEscape("motorArrancaMal", true, "AD")}>SI</Button>
                            <Button disabled={disabeFallasEscape.motorArrancaMal} onClick={() => handleFallasEscape("motorArrancaMal", false, "AD")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasEscape.motorArrancaMal && fallasEscape.motorArrancaMal != null && (
                    <AccordionDetails>
                        ¿El consumo de combustible ha aumentado?
                        <AccordionActions>
                            <Button disabled={disabeFallasEscape.consumoCombustibleExcesivo} onClick={() => handleFallasEscape("consumoCombustibleExcesivo", true, "CCA")}>SI</Button>
                            <Button disabled={disabeFallasEscape.consumoCombustibleExcesivo} onClick={() => handleFallasEscape("consumoCombustibleExcesivo", false, "CCA")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasEscape.consumoCombustibleExcesivo && fallasEscape.consumoCombustibleExcesivo != null && (
                    <AccordionDetails>
                        ¿Hay fugas visibles alrededor de uniones del escape?
                        <AccordionActions>
                            <Button disabled={disabeFallasEscape.fugasVisibles} onClick={() => handleFallasEscape("fugasVisibles", true, "FVE")}>SI</Button>
                            <Button disabled={disabeFallasEscape.fugasVisibles} onClick={() => handleFallasEscape("fugasVisibles", false, "FVE")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasEscape.fugasVisibles && fallasEscape.fugasVisibles != null && (
                    <AccordionDetails>
                        ¿Catalizador dañado, agrietado o roto?
                        <AccordionActions>
                            <Button disabled={disabeFallasEscape.catalizardorRoto} onClick={() => handleFallasEscape("catalizardorRoto", true, "CD")}>SI</Button>
                            <Button disabled={disabeFallasEscape.catalizardorRoto} onClick={() => handleFallasEscape("catalizardorRoto", false, "CD")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasEscape.catalizardorRoto && fallasEscape.catalizardorRoto != null && (
                    <AccordionDetails>
                        ¿Carbonilla o residuos negros en escape o silenciador?
                        <AccordionActions>
                            <Button disabled={disabeFallasEscape.residuosEscape} onClick={() => handleFallasEscape("residuosEscape", true, "RNE")}>SI</Button>
                            <Button disabled={disabeFallasEscape.residuosEscape} onClick={() => handleFallasEscape("residuosEscape", false, "RNE")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasEscape.residuosEscape && fallasEscape.residuosEscape != null && (
                    <AccordionDetails>
                        ¿Luz de 'check engine' encendida?
                        <AccordionActions>
                            <Button disabled={disabeFallasEscape.checkEngineEncendido} onClick={() => handleFallasEscape("checkEngineEncendido", true, "CEE")}>SI</Button>
                            <Button disabled={disabeFallasEscape.checkEngineEncendido} onClick={() => handleFallasEscape("checkEngineEncendido", false, "CEE")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasEscape.checkEngineEncendido && fallasEscape.checkEngineEncendido != null && (
                    <Typography component="span">Sin posible diagnostico, visite un mecanico</Typography>
                )
            }



        </Accordion>
    );
}

export default Fallas_Escape;