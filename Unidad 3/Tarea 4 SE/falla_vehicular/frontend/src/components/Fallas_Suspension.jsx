import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionActions, Button } from '@mui/material';

function Fallas_Suspension({ handleFallasSuspension, fallasSuspension, disabeFallasSuspension }) {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography component="span">FALLAS EN SISTEMA DE SUSPENSION</Typography>
            </AccordionSummary>

            <AccordionDetails>
                ¿Comportamiento anormal en la suspension?
                <AccordionActions>
                    <Button disabled={disabeFallasSuspension.fallaSuspension} onClick={() => handleFallasSuspension("fallaSuspension", true, "FSS")}>SI</Button>
                    <Button disabled={disabeFallasSuspension.fallaSuspension} onClick={() => handleFallasSuspension("fallaSuspension", false, "FSS")}>NO</Button>
                </AccordionActions>
            </AccordionDetails>

            {
                fallasSuspension.fallaSuspension && fallasSuspension.fallaSuspension != null && (
                    <AccordionDetails>
                        ¿El vehículo rebota excesivamente al pasar baches?
                        <AccordionActions>
                            <Button disabled={disabeFallasSuspension.vehiculoRebota} onClick={() => handleFallasSuspension("vehiculoRebota", true, "REB")}>SI</Button>
                            <Button disabled={disabeFallasSuspension.vehiculoRebota} onClick={() => handleFallasSuspension("vehiculoRebota", false, "REB")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasSuspension.vehiculoRebota && fallasSuspension.vehiculoRebota != null && (
                    <AccordionDetails>
                        ¿Se hunde más de lo normal al frenar o acelerar?
                        <AccordionActions>
                            <Button disabled={disabeFallasSuspension.seHunde} onClick={() => handleFallasSuspension("seHunde", true, "HFA")}>SI</Button>
                            <Button disabled={disabeFallasSuspension.seHunde} onClick={() => handleFallasSuspension("seHunde", false, "HFA")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasSuspension.seHunde && fallasSuspension.seHunde != null && (
                    <AccordionDetails>
                        ¿Se inclina al tomar curvas?
                        <AccordionActions>
                            <Button disabled={disabeFallasSuspension.seInclinaCurvas} onClick={() => handleFallasSuspension("seInclinaCurvas", true, "IEC")}>SI</Button>
                            <Button disabled={disabeFallasSuspension.seInclinaCurvas} onClick={() => handleFallasSuspension("seInclinaCurvas", false, "IEC")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasSuspension.seInclinaCurvas && fallasSuspension.seInclinaCurvas != null && (
                    <AccordionDetails>
                        ¿Se escuchan golpeteos o crujidos al pasar por baches o curvas?
                        <AccordionActions>
                            <Button disabled={disabeFallasSuspension.escuchanGolpeteos} onClick={() => handleFallasSuspension("escuchanGolpeteos", true, "RAB")}>SI</Button>
                            <Button disabled={disabeFallasSuspension.escuchanGolpeteos} onClick={() => handleFallasSuspension("escuchanGolpeteos", false, "RAB")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasSuspension.escuchanGolpeteos && fallasSuspension.escuchanGolpeteos != null && (
                    <AccordionDetails>
                        ¿Hay ruido al girar el volante a baja velocidad?
                        <AccordionActions>
                            <Button disabled={disabeFallasSuspension.ruidoGirar} onClick={() => handleFallasSuspension("ruidoGirar", true, "RAGV")}>SI</Button>
                            <Button disabled={disabeFallasSuspension.ruidoGirar} onClick={() => handleFallasSuspension("ruidoGirar", false, "RAGV")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasSuspension.ruidoGirar && fallasSuspension.ruidoGirar != null && (
                    <AccordionDetails>
                        ¿Alguna rueda está más baja que las otras?
                        <AccordionActions>
                            <Button disabled={disabeFallasSuspension.ruedaMasBaja} onClick={() => handleFallasSuspension("ruedaMasBaja", true, "RMB")}>SI</Button>
                            <Button disabled={disabeFallasSuspension.ruedaMasBaja} onClick={() => handleFallasSuspension("ruedaMasBaja", false, "RMB")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasSuspension.ruedaMasBaja && fallasSuspension.ruedaMasBaja != null && (
                    <AccordionDetails>
                        ¿Se ve aceite en el cuerpo del amortiguador?
                        <AccordionActions>
                            <Button disabled={disabeFallasSuspension.aceiteCuerpoAmortiguador} onClick={() => handleFallasSuspension("aceiteCuerpoAmortiguador", true, "AEA")}>SI</Button>
                            <Button disabled={disabeFallasSuspension.aceiteCuerpoAmortiguador} onClick={() => handleFallasSuspension("aceiteCuerpoAmortiguador", false, "AEA")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasSuspension.aceiteCuerpoAmortiguador && fallasSuspension.aceiteCuerpoAmortiguador != null && (
                    <AccordionDetails>
                        ¿El vehículo rebota más de dos veces al presionarlo?
                        <AccordionActions>
                            <Button disabled={disabeFallasSuspension.rebotaPresionarlo} onClick={() => handleFallasSuspension("rebotaPresionarlo", true, "RMDV")}>SI</Button>
                            <Button disabled={disabeFallasSuspension.rebotaPresionarlo} onClick={() => handleFallasSuspension("rebotaPresionarlo", false, "RMDV")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasSuspension.rebotaPresionarlo && fallasSuspension.rebotaPresionarlo != null && (
                    <AccordionDetails>
                        ¿Se siente inestable o tiende a salirse de trayectoria?
                        <AccordionActions>
                            <Button disabled={disabeFallasSuspension.seSienteInestable} onClick={() => handleFallasSuspension("seSienteInestable", true, "TIS")}>SI</Button>
                            <Button disabled={disabeFallasSuspension.seSienteInestable} onClick={() => handleFallasSuspension("seSienteInestable", false, "TIS")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasSuspension.seSienteInestable && fallasSuspension.seSienteInestable != null && (
                    <AccordionDetails>
                        ¿Las llantas tienen desgaste irregular o 'dientes de sierra'?
                        <AccordionActions>
                            <Button disabled={disabeFallasSuspension.desgasteIrregular} onClick={() => handleFallasSuspension("desgasteIrregular", true, "DIL")}>SI</Button>
                            <Button disabled={disabeFallasSuspension.desgasteIrregular} onClick={() => handleFallasSuspension("desgasteIrregular", false, "DIL")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasSuspension.desgasteIrregular && fallasSuspension.desgasteIrregular != null && (
                    <Typography component="span">Sin posible diagnostico, visite un mecanico</Typography>
                )
            }

        </Accordion>
    )
}
export default Fallas_Suspension;