import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionActions, Button } from '@mui/material';

function Fallas_Motor({ handleFallasMotor, fallasMotor, disableFallasMotor }) {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography component="span">FALLAS EN MOTOR</Typography>
            </AccordionSummary>
            <AccordionDetails>
                ¿El motor arranca correctamente?
                <AccordionActions>
                    <Button disabled={disableFallasMotor.motorArranca} onClick={() => handleFallasMotor("motorArranca", true, "MA")}>SI</Button>
                    <Button disabled={disableFallasMotor.motorArranca} onClick={() => handleFallasMotor("motorArranca", false, "MA")}>NO</Button>
                </AccordionActions>
            </AccordionDetails>

            {
                !fallasMotor.motorArranca && fallasMotor.motorArranca != null && (
                    <AccordionDetails>
                        ¿La batería está en buen estado?
                        <AccordionActions>
                            <Button disabled={disableFallasMotor.bateriaBuenEstado} onClick={() => handleFallasMotor("bateriaBuenEstado", true, "BE")}>SI</Button>
                            <Button disabled={disableFallasMotor.bateriaBuenEstado} onClick={() => handleFallasMotor("bateriaBuenEstado", false, "BE")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasMotor.bateriaBuenEstado && fallasMotor.bateriaBuenEstado != null && (
                    <AccordionDetails>
                        ¿La bateria funciona correctamente?
                        <AccordionActions>
                            <Button disabled={disableFallasMotor.bateriaFuncionaCorrectamente} onClick={() => handleFallasMotor("bateriaFuncionaCorrectamente", false, "BFC")}>SI</Button>
                            <Button disabled={disableFallasMotor.bateriaFuncionaCorrectamente} onClick={() => handleFallasMotor("bateriaFuncionaCorrectamente", true, "BFC")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasMotor.bateriaFuncionaCorrectamente && fallasMotor.bateriaFuncionaCorrectamente != null && (
                    <AccordionDetails>
                        ¿El motor gira pero no enciende?
                        <AccordionActions>
                            <Button disabled={disableFallasMotor.motorGiraPeroNoEnciende} onClick={() => handleFallasMotor("motorGiraPeroNoEnciende", true, "MGSA")}>SI</Button>
                            <Button disabled={disableFallasMotor.motorGiraPeroNoEnciende} onClick={() => handleFallasMotor("motorGiraPeroNoEnciende", false, "MGSA")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasMotor.motorGiraPeroNoEnciende && fallasMotor.motorGiraPeroNoEnciende != null && (
                    <AccordionDetails>
                        ¿El motor enciende y se apaga inmediatamente?
                        <AccordionActions>
                            <Button disabled={disableFallasMotor.motorEnciendeYAapaga} onClick={() => handleFallasMotor("motorEnciendeYAapaga", true, "MIA")}>SI</Button>
                            <Button disabled={disableFallasMotor.motorEnciendeYAapaga} onClick={() => handleFallasMotor("motorEnciendeYAapaga", false, "MIA")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                fallasMotor.motorArranca && fallasMotor.motorArranca != null && (
                    <AccordionDetails>
                        ¿El motor funciona con jaloneos al acelerar?
                        <AccordionActions>
                            <Button disabled={disableFallasMotor.motorFuncionaConJalones} onClick={() => handleFallasMotor("motorFuncionaConJalones", true, "TA")}>SI</Button>
                            <Button disabled={disableFallasMotor.motorFuncionaConJalones} onClick={() => handleFallasMotor("motorFuncionaConJalones", false, "TA")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasMotor.motorFuncionaConJalones && fallasMotor.motorFuncionaConJalones != null && (
                    <AccordionDetails>
                        ¿Tiembla en ralentí?
                        <AccordionActions>
                            <Button disabled={disableFallasMotor.tiemblaRelenti} onClick={() => handleFallasMotor("tiemblaRelenti", true, "MTR")}>SI</Button>
                            <Button disabled={disableFallasMotor.tiemblaRelenti} onClick={() => handleFallasMotor("tiemblaRelenti", false, "MTR")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasMotor.tiemblaRelenti && fallasMotor.tiemblaRelenti != null && (
                    <AccordionDetails>
                        ¿Pierde potencia en subidas o con carga?
                        <AccordionActions>
                            <Button disabled={disableFallasMotor.PierdeMotencia} onClick={() => handleFallasMotor("PierdeMotencia", true, "PPS")}>SI</Button>
                            <Button disabled={disableFallasMotor.PierdeMotencia} onClick={() => handleFallasMotor("PierdeMotencia", false, "PPS")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasMotor.PierdeMotencia && fallasMotor.PierdeMotencia != null && (
                    <AccordionDetails>
                        ¿Testigo de temperatura encendido?
                        <AccordionActions>
                            <Button disabled={disableFallasMotor.testigoTemperatura} onClick={() => handleFallasMotor("testigoTemperatura", true, "TT")}>SI</Button>
                            <Button disabled={disableFallasMotor.testigoTemperatura} onClick={() => handleFallasMotor("testigoTemperatura", false, "TT")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasMotor.testigoTemperatura && fallasMotor.testigoTemperatura != null && (
                    <AccordionDetails>
                        ¿Sale vapor del cofre?
                        <AccordionActions>
                            <Button disabled={disableFallasMotor.saleVaporCofre} onClick={() => handleFallasMotor("saleVaporCofre", true, "VC")}>SI</Button>
                            <Button disabled={disableFallasMotor.saleVaporCofre} onClick={() => handleFallasMotor("saleVaporCofre", false, "VC")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasMotor.saleVaporCofre && fallasMotor.saleVaporCofre != null && (
                    <AccordionDetails>
                        ¿Se escuchan ruidos metálicos?
                        <AccordionActions>
                            <Button disabled={disableFallasMotor.ruidoMetalico} onClick={() => handleFallasMotor("ruidoMetalico", true, "RMM")}>SI</Button>
                            <Button disabled={disableFallasMotor.ruidoMetalico} onClick={() => handleFallasMotor("ruidoMetalico", false, "RMM")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasMotor.ruidoMetalico && fallasMotor.ruidoMetalico != null && (
                    <AccordionDetails>
                        ¿Se escuchan ruidos metálicos?
                        <AccordionActions>
                            <Button disabled={disableFallasMotor.chillidoAcelerar} onClick={() => handleFallasMotor("chillidoAcelerar", true, "CA")}>SI</Button>
                            <Button disabled={disableFallasMotor.chillidoAcelerar} onClick={() => handleFallasMotor("chillidoAcelerar", false, "CA")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasMotor.chillidoAcelerar && fallasMotor.chillidoAcelerar != null && (
                    <AccordionDetails>
                        ¿Sale humo azul del escape?
                        <AccordionActions>
                            <Button disabled={disableFallasMotor.humoAzul} onClick={() => handleFallasMotor("humoAzul", true, "HAZ")}>SI</Button>
                            <Button disabled={disableFallasMotor.humoAzul} onClick={() => handleFallasMotor("humoAzul", false, "HAZ")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasMotor.humoAzul && fallasMotor.humoAzul != null && (
                    <AccordionDetails>
                        ¿Sale humo blanco continuo del escape?
                        <AccordionActions>
                            <Button disabled={disableFallasMotor.humoBlanco} onClick={() => handleFallasMotor("humoBlanco", true, "HBL")}>SI</Button>
                            <Button disabled={disableFallasMotor.humoBlanco} onClick={() => handleFallasMotor("humoBlanco", false, "HBL")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasMotor.humoBlanco && fallasMotor.humoBlanco != null && (
                    <AccordionDetails>
                        ¿Sale humo negro del escape?
                        <AccordionActions>
                            <Button disabled={disableFallasMotor.humoNegro} onClick={() => handleFallasMotor("humoNegro", true, "HNE")}>SI</Button>
                            <Button disabled={disableFallasMotor.humoNegro} onClick={() => handleFallasMotor("humoNegro", false, "HNE")}>NO</Button>
                        </AccordionActions>
                    </AccordionDetails>
                )
            }

            {
                !fallasMotor.humoNegro && fallasMotor.humoNegro != null ||  !fallasMotor.motorEnciendeYAapaga && fallasMotor.motorEnciendeYAapaga != null && (
                    <Typography component="span">Sin posible diagnostico, visite un mecanico</Typography>
                )
            }

        </Accordion>
    )
}

export default Fallas_Motor;