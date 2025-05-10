import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionActions, Button } from '@mui/material';

function Fallas_Direccion({ handleFallasDireccion, disabeFallasDireccion, fallasDireccion }) {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography component="span">FALLAS EN SISTEMA DE DIRECCION</Typography>
            </AccordionSummary>

            <AccordionDetails>
                ¿El volante o la dirección presenta comportamiento anormal?
                <AccordionActions>
                    <Button disabled={disabeFallasDireccion.fallaDireccion} onClick={() => handleFallasDireccion("fallaDireccion", true, "FSD")}>SI</Button>
                    <Button disabled={disabeFallasDireccion.fallaDireccion} onClick={() => handleFallasDireccion("fallaDireccion", false, "FSD")}>NO</Button>
                </AccordionActions>
            </AccordionDetails>

            {
                fallasDireccion.fallaDireccion && fallasDireccion.fallaDireccion != null && (
                    <AccordionDetails>
                        ¿El volante se siente pesado o difícil de girar?
                        <AccordionActions>
                            <Button disabled={disabeFallasDireccion.volantePesadoGirar} onClick={() => handleFallasDireccion("volantePesadoGirar", true, "VP")}>SI</Button>
                            <Button disabled={disabeFallasDireccion.volantePesadoGirar} onClick={() => handleFallasDireccion("volantePesadoGirar", false, "VP")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasDireccion.volantePesadoGirar && fallasDireccion.volantePesadoGirar != null && (
                    <AccordionDetails>
                        ¿El volante es difícil de mover solo hacia un lado?
                        <AccordionActions>
                            <Button disabled={disabeFallasDireccion.volanteDificilMover} onClick={() => handleFallasDireccion("volanteDificilMover", true, "DGUS")}>SI</Button>
                            <Button disabled={disabeFallasDireccion.volanteDificilMover} onClick={() => handleFallasDireccion("volanteDificilMover", false, "DGUS")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasDireccion.volanteDificilMover && fallasDireccion.volanteDificilMover != null && (
                    <AccordionDetails>
                        ¿El volante tiembla o vibra al girar?
                        <AccordionActions>
                            <Button disabled={disabeFallasDireccion.volanteTiembla} onClick={() => handleFallasDireccion("volanteTiembla", true, "VT")}>SI</Button>
                            <Button disabled={disabeFallasDireccion.volanteTiembla} onClick={() => handleFallasDireccion("volanteTiembla", false, "VT")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasDireccion.volanteTiembla && fallasDireccion.volanteTiembla != null && (
                    <AccordionDetails>
                        ¿Se escuchan ruidos (chirrido, zumbido o metálico) al girar?
                        <AccordionActions>
                            <Button disabled={disabeFallasDireccion.ruidosAlGirar} onClick={() => handleFallasDireccion("ruidosAlGirar", true, "RAG")}>SI</Button>
                            <Button disabled={disabeFallasDireccion.ruidosAlGirar} onClick={() => handleFallasDireccion("ruidosAlGirar", false, "RAG")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasDireccion.ruidosAlGirar && fallasDireccion.ruidosAlGirar != null && (
                    <AccordionDetails>
                        ¿El vehículo se desvía al soltar el volante?
                        <AccordionActions>
                            <Button disabled={disabeFallasDireccion.vehiculoDesvia} onClick={() => handleFallasDireccion("vehiculoDesvia", true, "VSD")}>SI</Button>
                            <Button disabled={disabeFallasDireccion.vehiculoDesvia} onClick={() => handleFallasDireccion("vehiculoDesvia", false, "VSD")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasDireccion.vehiculoDesvia && fallasDireccion.vehiculoDesvia != null && (
                    <AccordionDetails>
                        ¿Se va hacia un lado al girar?
                        <AccordionActions>
                            <Button disabled={disabeFallasDireccion.seVaHaciaUnLado} onClick={() => handleFallasDireccion("seVaHaciaUnLado", true, "DTL")}>SI</Button>
                            <Button disabled={disabeFallasDireccion.seVaHaciaUnLado} onClick={() => handleFallasDireccion("seVaHaciaUnLado", false, "DTL")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasDireccion.seVaHaciaUnLado && fallasDireccion.seVaHaciaUnLado != null && (
                    <AccordionDetails>
                        ¿El líquido está bajo, oscuro o huele quemado?
                        <AccordionActions>
                            <Button disabled={disabeFallasDireccion.LiquidoBajo} onClick={() => handleFallasDireccion("LiquidoBajo", true, "LDB")}>SI</Button>
                            <Button disabled={disabeFallasDireccion.LiquidoBajo} onClick={() => handleFallasDireccion("LiquidoBajo", false, "LDB")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasDireccion.LiquidoBajo && fallasDireccion.LiquidoBajo != null && (
                    <AccordionDetails>
                        ¿La dirección se siente floja?
                        <AccordionActions>
                            <Button disabled={disabeFallasDireccion.direccionFloja} onClick={() => handleFallasDireccion("direccionFloja", true, "DF")}>SI</Button>
                            <Button disabled={disabeFallasDireccion.direccionFloja} onClick={() => handleFallasDireccion("direccionFloja", false, "DF")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasDireccion.direccionFloja && fallasDireccion.direccionFloja != null && (
                    <AccordionDetails>
                        ¿Hay fugas visibles en mangueras o bomba?
                        <AccordionActions>
                            <Button disabled={disabeFallasDireccion.fugasVisibles} onClick={() => handleFallasDireccion("fugasVisibles", true, "FVD")}>SI</Button>
                            <Button disabled={disabeFallasDireccion.fugasVisibles} onClick={() => handleFallasDireccion("fugasVisibles", false, "FVD")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasDireccion.fugasVisibles && fallasDireccion.fugasVisibles != null && (
                    <AccordionDetails>
                        ¿Es dirección electrónica y se apaga o falla?
                        <AccordionActions>
                            <Button disabled={disabeFallasDireccion.direccionElectrica} onClick={() => handleFallasDireccion("direccionElectrica", true, "DEF")}>SI</Button>
                            <Button disabled={disabeFallasDireccion.direccionElectrica} onClick={() => handleFallasDireccion("direccionElectrica", false, "DEF")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasDireccion.direccionElectrica && fallasDireccion.direccionElectrica != null && (
                    <Typography component="span">Sin posible diagnostico, visite un mecanico</Typography>
                )
            }

        </Accordion>
    );
}

export default Fallas_Direccion;