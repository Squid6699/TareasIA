import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionActions, Button } from '@mui/material';

function Fallas_Refrigeracion({ handleFallasRefrigeracion, fallasRefrigeracion, disableFallasRefrigeracion }) {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography component="span">FALLAS EN SISTEMA DE REFRIGERACION</Typography>
            </AccordionSummary>

            <AccordionDetails>
                ¿Hay señales de sobrecalentamiento?
                <AccordionActions>
                    <Button disabled={disableFallasRefrigeracion.fallaRefrigeracion} onClick={() => handleFallasRefrigeracion("fallaRefrigeracion", true, "FSDR")}>SI</Button>
                    <Button disabled={disableFallasRefrigeracion.fallaRefrigeracion} onClick={() => handleFallasRefrigeracion("fallaRefrigeracion", false, "FSDR")}>NO</Button>
                </AccordionActions>
            </AccordionDetails>

            {
                fallasRefrigeracion.fallaRefrigeracion && fallasRefrigeracion.fallaRefrigeracion != null && (
                    <AccordionDetails>
                        ¿La temperatura sube rápidamente al encender el motor?
                        <AccordionActions>
                            <Button disabled={disableFallasRefrigeracion.temperaturaSubeRapidamente} onClick={() => handleFallasRefrigeracion("temperaturaSubeRapidamente", true, "TSR")}>SI</Button>
                            <Button disabled={disableFallasRefrigeracion.temperaturaSubeRapidamente} onClick={() => handleFallasRefrigeracion("temperaturaSubeRapidamente", false, "TSR")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasRefrigeracion.temperaturaSubeRapidamente && fallasRefrigeracion.temperaturaSubeRapidamente != null && (
                    <AccordionDetails>
                        ¿El motor se sobrecalienta tras cierto tiempo?
                        <AccordionActions>
                            <Button disabled={disableFallasRefrigeracion.motorSeSobrecalienta} onClick={() => handleFallasRefrigeracion("motorSeSobrecalienta", true, "SCU")}>SI</Button>
                            <Button disabled={disableFallasRefrigeracion.motorSeSobrecalienta} onClick={() => handleFallasRefrigeracion("motorSeSobrecalienta", false, "SCU")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasRefrigeracion.motorSeSobrecalienta && fallasRefrigeracion.motorSeSobrecalienta != null && (
                    <AccordionDetails>
                        ¿La temperatura sube y baja de forma intermitente?
                        <AccordionActions>
                            <Button disabled={disableFallasRefrigeracion.temperaturaSubeYBaja} onClick={() => handleFallasRefrigeracion("temperaturaSubeYBaja", true, "TI")}>SI</Button>
                            <Button disabled={disableFallasRefrigeracion.temperaturaSubeYBaja} onClick={() => handleFallasRefrigeracion("temperaturaSubeYBaja", false, "TI")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasRefrigeracion.temperaturaSubeYBaja && fallasRefrigeracion.temperaturaSubeYBaja != null && (
                    <AccordionDetails>
                        ¿El nivel de refrigerante baja constantemente?
                        <AccordionActions>
                            <Button disabled={disableFallasRefrigeracion.nivelRefrigeranteBaja} onClick={() => handleFallasRefrigeracion("nivelRefrigeranteBaja", true, "RBC")}>SI</Button>
                            <Button disabled={disableFallasRefrigeracion.nivelRefrigeranteBaja} onClick={() => handleFallasRefrigeracion("nivelRefrigeranteBaja", false, "RBC")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasRefrigeracion.nivelRefrigeranteBaja && fallasRefrigeracion.nivelRefrigeranteBaja != null && (
                    <AccordionDetails>
                        ¿Hay refrigerante en el suelo al estacionar?
                        <AccordionActions>
                            <Button disabled={disableFallasRefrigeracion.refrigeranteEnSuelo} onClick={() => handleFallasRefrigeracion("refrigeranteEnSuelo", true, "CRS")}>SI</Button>
                            <Button disabled={disableFallasRefrigeracion.refrigeranteEnSuelo} onClick={() => handleFallasRefrigeracion("refrigeranteEnSuelo", false, "CRS")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasRefrigeracion.refrigeranteEnSuelo && fallasRefrigeracion.refrigeranteEnSuelo != null && (
                    <AccordionDetails>
                        ¿Se percibe olor dulce dentro/fuera del vehículo?
                        <AccordionActions>
                            <Button disabled={disableFallasRefrigeracion.olorDulce} onClick={() => handleFallasRefrigeracion("olorDulce", true, "OD")}>SI</Button>
                            <Button disabled={disableFallasRefrigeracion.olorDulce} onClick={() => handleFallasRefrigeracion("olorDulce", false, "OD")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasRefrigeracion.olorDulce && fallasRefrigeracion.olorDulce != null && (
                    <AccordionDetails>
                        ¿Sale vapor del cofre o escape?
                        <AccordionActions>
                            <Button disabled={disableFallasRefrigeracion.vaporDelCofre} onClick={() => handleFallasRefrigeracion("vaporDelCofre", true, "VEC")}>SI</Button>
                            <Button disabled={disableFallasRefrigeracion.vaporDelCofre} onClick={() => handleFallasRefrigeracion("vaporDelCofre", false, "VEC")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasRefrigeracion.vaporDelCofre && fallasRefrigeracion.vaporDelCofre != null && (
                    <AccordionDetails>
                        ¿Se ve burbujeo en el depósito de refrigerante?
                        <AccordionActions>
                            <Button disabled={disableFallasRefrigeracion.burbujeaRefrigerante} onClick={() => handleFallasRefrigeracion("burbujeaRefrigerante", true, "BED")}>SI</Button>
                            <Button disabled={disableFallasRefrigeracion.burbujeaRefrigerante} onClick={() => handleFallasRefrigeracion("burbujeaRefrigerante", false, "BED")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasRefrigeracion.burbujeaRefrigerante && fallasRefrigeracion.burbujeaRefrigerante != null && (
                    <AccordionDetails>
                        ¿El ventilador se activa con el motor caliente?
                        <AccordionActions>
                            <Button disabled={disableFallasRefrigeracion.veniladorNoEnciende} onClick={() => handleFallasRefrigeracion("veniladorNoEnciende", false, "VNA")}>SI</Button>
                            <Button disabled={disableFallasRefrigeracion.veniladorNoEnciende} onClick={() => handleFallasRefrigeracion("veniladorNoEnciende", true, "VNA")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasRefrigeracion.veniladorNoEnciende && fallasRefrigeracion.veniladorNoEnciende != null && (
                    <AccordionDetails>
                        ¿Se escucha ruido o se ve fuga frontal de agua?
                        <AccordionActions>
                            <Button disabled={disableFallasRefrigeracion.ruidoOFugaFrontal} onClick={() => handleFallasRefrigeracion("ruidoOFugaFrontal", true, "RFF")}>SI</Button>
                            <Button disabled={disableFallasRefrigeracion.ruidoOFugaFrontal} onClick={() => handleFallasRefrigeracion("ruidoOFugaFrontal", false, "RFF")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasRefrigeracion.ruidoOFugaFrontal && fallasRefrigeracion.ruidoOFugaFrontal != null && (
                    <AccordionDetails>
                        ¿El radiador está obstruido o sucio externamente?
                        <AccordionActions>
                            <Button disabled={disableFallasRefrigeracion.radiadorObstruido} onClick={() => handleFallasRefrigeracion("radiadorObstruido", true, "RO")}>SI</Button>
                            <Button disabled={disableFallasRefrigeracion.radiadorObstruido} onClick={() => handleFallasRefrigeracion("radiadorObstruido", false, "RO")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasRefrigeracion.radiadorObstruido && fallasRefrigeracion.radiadorObstruido != null && (
                    <AccordionDetails>
                        ¿Se enciende el testigo de temperatura?
                        <AccordionActions>
                            <Button disabled={disableFallasRefrigeracion.testigoTemperaturaEncendido} onClick={() => handleFallasRefrigeracion("testigoTemperaturaEncendido", true, "TTENC")}>SI</Button>
                            <Button disabled={disableFallasRefrigeracion.testigoTemperaturaEncendido} onClick={() => handleFallasRefrigeracion("testigoTemperaturaEncendido", false, "TTENC")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasRefrigeracion.testigoTemperaturaEncendido && fallasRefrigeracion.testigoTemperaturaEncendido != null && (
                    <Typography component="span">Sin posible diagnostico, visite un mecanico</Typography>
                )
            }

        </Accordion>
    )

}

export default Fallas_Refrigeracion;