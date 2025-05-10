import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import ModalComponente from './ModalComponente';
import Fallas_Electricas from './components/Fallas_Electricas';
import Fallas_Motor from './components/Fallas_Motor';
import Fallas_Transmision from './components/Fallas_Transmision';
import Fallas_Frenos from './components/Fallas_Frenos';
import Fallas_Refrigeracion from './components/Fallas_Refrigeracion';
import Fallas_Suspension from './components/Fallas_Suspension';
import Fallas_Direccion from './components/Fallas_Direccion';
import Fallas_Escape from './components/Fallas_Escape';

function App() {

  const [open, setOpen] = useState(false);
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

  const handleVerDiagnostico = () => {
    if (modalContent.text.length === 0 && modalContent.title.length === 0) {
      handleContent("Sin diagnostico", "No hay diagnostico para mostrar")
    }
    setOpen(true)
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

  const [fallasMotor, setFallasMotor] = useState({
    motorArranca: null,
    bateriaBuenEstado: null,
    bateriaFuncionaCorrectamente: null,
    motorGiraPeroNoEnciende: null,
    motorEnciendeYAapaga: null,

    motorFuncionaConJalones: null,
    tiemblaRelenti: null,
    PierdeMotencia: null,
    testigoTemperatura: null,
    saleVaporCofre: null,
    ruidoMetalico: null,
    chillidoAcelerar: null,
    humoAzul: null,
    humoBlanco: null,
    humoNegro: null
  })

  const [disableFallasMotor, setDisableFallasMotor] = useState({
    motorArranca: false,
    bateriaBuenEstado: false,
    bateriaFuncionaCorrectamente: false,
    motorGiraPeroNoEnciende: false,
    motorEnciendeYAapaga: false,

    motorFuncionaConJalones: false,
    tiemblaRelenti: false,
    PierdeMotencia: false,
    testigoTemperatura: false,
    saleVaporCofre: false,
    ruidoMetalico: false,
    chillidoAcelerar: false,
    humoAzul: false,
    humoBlanco: false,
    humoNegro: false
  })

  const [fallasTransmision, setFallasTransmision] = useState({
    fallaTransmision: null,
    transmisionPatina: null,
    CambiosNoEntran: null,
    cambiosBruscos: null,
    dificultadMeterVelocidades: null,
    cambiosSeSalenSolo: null,
    retrasoAlCambiarCambios: null,
    golpeteoAlCambiarCambios: null,
    zumbidoMarchas: null,
    vibracionMarchas: null,
    liquidoTransmisionOscuro: null,
    liquidoTransmisionBajo: null
  })

  const [disableFallasTransmision, setDisableFallasTransmision] = useState({
    fallaTransmision: false,
    transmisionPatina: false,
    CambiosNoEntran: false,
    cambiosBruscos: false,
    dificultadMeterVelocidades: false,
    cambiosSeSalenSolo: false,
    retrasoAlCambiarCambios: false,
    golpeteoAlCambiarCambios: false,
    zumbidoMarchas: false,
    vibracionMarchas: false,
    liquidoTransmisionOscuro: false,
    liquidoTransmisionBajo: false
  })

  const [fallasFrenos, setFallasFrenos] = useState({
    fallaFrenos: null,
    pedalFondo: null,
    pedalBlando: null,
    pedalDuro: null,
    vehiculoTardaFrenar: null,
    vehiculoVibraFrenar: null,
    chillidoAlFrenar: null,
    chillidoMetalicoAlFrenar: null,
    nivelLiquidoFrenosBajo: null,
    liquidoFrenosContaminado: null,
    testigoFrenosEncendido: null,
    testigoABSEncendido: null
  })

  const [fallaRefrigeracion, setFallaRefrigeracion] = useState({
    fallaRefrigeracion: null,
    temperaturaSubeRapidamente: null,
    motorSeSobrecalienta: null,
    temperaturaSubeYBaja: null,
    nivelRefrigeranteBaja: null,
    refrigeranteEnSuelo: null,
    olorDulce: null,
    vaporDelCofre: null,
    burbujeaRefrigerante: null,
    veniladorNoEnciende: null,
    ruidoOFugaFrontal: null,
    radiadorObstruido: null,
    testigoTemperaturaEncendido: null,
  })

  const [disableFallasRefrigeracion, setDisableFallasRefrigeracion] = useState({
    fallaRefrigeracion: false,
    temperaturaSubeRapidamente: false,
    motorSeSobrecalienta: false,
    temperaturaSubeYBaja: false,
    nivelRefrigeranteBaja: false,
    refrigeranteEnSuelo: false,
    olorDulce: false,
    vaporDelCofre: false,
    burbujeaRefrigerante: false,
    veniladorNoEnciende: false,
    ruidoOFugaFrontal: false,
    radiadorObstruido: false,
    testigoTemperaturaEncendido: false
  })

  const [disableFallasFrenos, setDisableFallasFrenos] = useState({
    fallaFrenos: false,
    pedalFondo: false,
    pedalBlando: false,
    pedalDuro: false,
    vehiculoTardaFrenar: false,
    vehiculoVibraFrenar: false,
    chillidoAlFrenar: false,
    chillidoMetalicoAlFrenar: false,
    nivelLiquidoFrenosBajo: false,
    liquidoFrenosContaminado: false,
    testigoFrenosEncendido: false,
    testigoABSEncendido: false
  })

  const [fallasSuspension, setFallasSuspension] = useState({
    fallaSuspension: null,
    vehiculoRebota: null,
    seHunde: null,
    seInclinaCurvas: null,
    escuchanGolpeteos: null,
    ruidoGirar: null,
    ruedaMasBaja: null,
    aceiteCuerpoAmortiguador: null,
    rebotaPresionarlo: null,
    seSienteInestable: null,
    desgasteIrregular: null,

  })

  const [disableFallasSuspension, setDisableFallasSuspension] = useState({
    fallaSuspension: false,
    vehiculoRebota: false,
    seHunde: false,
    seInclinaCurvas: false,
    escuchanGolpeteos: false,
    ruidoGirar: false,
    ruedaMasBaja: false,
    aceiteCuerpoAmortiguador: false,
    rebotaPresionarlo: false,
    seSienteInestable: false,
    desgasteIrregular: false
  })

  const [fallasDireccion, setFallasDireccion] = useState({
    fallaDireccion: null,
    volantePesadoGirar: null,
    volanteDificilMover: null,
    volanteTiembla: null,
    ruidosAlGirar: null,
    vehiculoDesvia: null,
    seVaHaciaUnLado: null,
    LiquidoBajo: null,
    direccionFloja: null,
    fugasVisibles: null,
    direccionElectrica: null
  })

  const [disableFallasDireccion, setDisableFallasDireccion] = useState({
    fallaDireccion: false,
    volantePesadoGirar: false,
    volanteDificilMover: false,
    volanteTiembla: false,
    ruidosAlGirar: false,
    vehiculoDesvia: false,
    seVaHaciaUnLado: false,
    LiquidoBajo: false,
    direccionFloja: false,
    fugasVisibles: false,
    direccionElectrica: false
  })

  const [fallasEscape, setFallasEscape] = useState({
    fallaEscape: null,
    ruidoDebajoVehiculo: null,
    ruidoMetalico: null,
    sonidoEscapeRoto: null,
    humoEscape: null,
    escapeVaporoso: null,
    vehiculoPierdePotencia: null,
    motorArrancaMal: null,
    consumoCombustibleExcesivo: null,
    fugasVisibles: null,
    catalizardorRoto: null,
    residuosEscape: null,
    checkEngineEncendido: null
  })

  const [disableFallasEscape, setDisableFallasEscape] = useState({
    fallaEscape: false,
    ruidoDebajoVehiculo: false,
    ruidoMetalico: false,
    sonidoEscapeRoto: false,
    humoEscape: false,
    escapeVaporoso: false,
    vehiculoPierdePotencia: false,
    motorArrancaMal: false,
    consumoCombustibleExcesivo: false,
    fugasVisibles: false,
    catalizardorRoto: false,
    residuosEscape: false,
    checkEngineEncendido: false
  })


  const [fallasFacts, setFallasFacts] = useState({})

  const handleFallasElectricas = (key, value, fact) => {
    setFallasElectricas(prevState => ({
      ...prevState,
      [key]: value
    }))

    setDisableFallasElectricas(prevState => ({
      ...prevState,
      [key]: true
    }))

    setFallasFacts(prevState => ({
      ...prevState,
      [fact]: value
    }))
  }

  const handleFallasMotor = (key, value, fact) => {
    setFallasMotor(prevState => ({
      ...prevState,
      [key]: value
    }))

    setDisableFallasMotor(prevState => ({
      ...prevState,
      [key]: true
    }))

    setFallasFacts(prevState => ({
      ...prevState,
      [fact]: value
    }))
  }

  const handleFallasTransmision = (key, value, fact) => {
    setFallasTransmision(prevState => ({
      ...prevState,
      [key]: value
    }))

    setDisableFallasTransmision(prevState => ({
      ...prevState,
      [key]: true
    }))

    setFallasFacts(prevState => ({
      ...prevState,
      [fact]: value
    }))
  }

  const handleFallasFrenos = (key, value, fact) => {
    setFallasFrenos(prevState => ({
      ...prevState,
      [key]: value
    }))

    setDisableFallasFrenos(prevState => ({
      ...prevState,
      [key]: true
    }))

    setFallasFacts(prevState => ({
      ...prevState,
      [fact]: value
    }))
  }

  const handleFallasRefrigeracion = (key, value, fact) => {
    setFallaRefrigeracion(prevState => ({
      ...prevState,
      [key]: value
    }))

    setDisableFallasRefrigeracion(prevState => ({
      ...prevState,
      [key]: true
    }))

    setFallasFacts(prevState => ({
      ...prevState,
      [fact]: value
    }))
  }

  const handleFallasSuspension = (key, value, fact) => {
    setFallasSuspension(prevState => ({
      ...prevState,
      [key]: value
    }))

    setDisableFallasSuspension(prevState => ({
      ...prevState,
      [key]: true
    }))

    setFallasFacts(prevState => ({
      ...prevState,
      [fact]: value
    }))
  }

  const handleFallasDireccion = (key, value, fact) => {
    setFallasDireccion(prevState => ({
      ...prevState,
      [key]: value
    }))

    setDisableFallasDireccion(prevState => ({
      ...prevState,
      [key]: true
    }))

    setFallasFacts(prevState => ({
      ...prevState,
      [fact]: value
    }))
  }

  const handleFallasEscape = (key, value, fact) => {
    setFallasEscape(prevState => ({
      ...prevState,
      [key]: value
    }))

    setDisableFallasEscape(prevState => ({
      ...prevState,
      [key]: true
    }))

    setFallasFacts(prevState => ({
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
          body: JSON.stringify(fallasFacts)
        });

        const data = await response.json();

        if (data.diagnosticos && data.diagnosticos.length > 0) {
          handleContent("Diagnóstico", data.diagnosticos);
          setOpen(true)
        }

      } catch (error) {
        console.error("Error al guardar los datos", error);
      }
    };

    fetchData();
  }, [fallasFacts]);

  const handleReiniciar = async () => {
    setFallasElectricas({
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

    setDisableFallasElectricas({
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

    setFallasMotor({
      motorArranca: null,
      bateriaBuenEstado: null,
      bateriaFuncionaCorrectamente: null,
      motorGiraPeroNoEnciende: null,
      motorEnciendeYAapaga: null,

      motorFuncionaConJalones: null,
      tiemblaRelenti: null,
      PierdeMotencia: null,
      calientaExecesivamente: null,
      saleVaporCofre: null,
      ruidoMetalico: null,
      chillidoAcelerar: null,
      humoAzul: null,
      humoBlanco: null,
      humoNegro: null
    })

    setDisableFallasMotor({
      motorArranca: false,
      bateriaBuenEstado: false,
      bateriaFuncionaCorrectamente: false,
      motorGiraPeroNoEnciende: false,
      motorEnciendeYAapaga: false,

      motorFuncionaConJalones: false,
      tiemblaRelenti: false,
      PierdeMotencia: false,
      calientaExecesivamente: false,
      saleVaporCofre: false,
      ruidoMetalico: false,
      chillidoAcelerar: false,
      humoAzul: false,
      humoBlanco: false,
      humoNegro: false
    })

    setFallasTransmision({
      fallaTransmision: null,
      transmisionPatina: null,
      CambiosNoEntran: null,
      cambiosBruscos: null,
      dificultadMeterVelocidades: null,
      cambiosSeSalenSolo: null,
      retrasoAlCambiarCambios: null,
      golpeteoAlCambiarCambios: null,
      zumbidoMarchas: null,
      vibracionMarchas: null,
      liquidoTransmisionOscuro: null,
      liquidoTransmisionBajo: null
    })

    setDisableFallasTransmision({
      fallaTransmision: false,
      transmisionPatina: false,
      CambiosNoEntran: false,
      cambiosBruscos: false,
      dificultadMeterVelocidades: false,
      cambiosSeSalenSolo: false,
      retrasoAlCambiarCambios: false,
      golpeteoAlCambiarCambios: false,
      zumbidoMarchas: false,
      vibracionMarchas: false,
      liquidoTransmisionOscuro: false,
      liquidoTransmisionBajo: false
    })

    setFallasFrenos({
      fallaFrenos: null,
      pedalFondo: null,
      pedalBlando: null,
      pedalDuro: null,
      vehiculoTardaFrenar: null,
      vehiculoVibraFrenar: null,
      chillidoAlFrenar: null,
      chillidoMetalicoAlFrenar: null,
      nivelLiquidoFrenosBajo: null,
      liquidoFrenosContaminado: null,
      testigoFrenosEncendido: null,
      testigoABSEncendido: null
    })

    setDisableFallasFrenos({
      fallaFrenos: false,
      pedalFondo: false,
      pedalBlando: false,
      pedalDuro: false,
      vehiculoTardaFrenar: false,
      vehiculoVibraFrenar: false,
      chillidoAlFrenar: false,
      chillidoMetalicoAlFrenar: false,
      nivelLiquidoFrenosBajo: false,
      liquidoFrenosContaminado: false,
      testigoFrenosEncendido: false,
      testigoABSEncendido: false
    })

    setFallaRefrigeracion({
      fallaRefrigeracion: null,
      temperaturaSubeRapidamente: null,
      motorSeSobrecalienta: null,
      temperaturaSubeYBaja: null,
      nivelRefrigeranteBaja: null,
      refrigeranteEnSuelo: null,
      olorDulce: null,
      vaporDelCofre: null,
      burbujeaRefrigerante: null,
      veniladorNoEnciende: null,
      ruidoOFugaFrontal: null,
      radiadorObstruido: null,
      testigoTemperaturaEncendido: null
    })

    setDisableFallasRefrigeracion({
      fallaRefrigeracion: false,
      temperaturaSubeRapidamente: false,
      motorSeSobrecalienta: false,
      temperaturaSubeYBaja: false,
      nivelRefrigeranteBaja: false,
      refrigeranteEnSuelo: false,
      olorDulce: false,
      vaporDelCofre: false,
      burbujeaRefrigerante: false,
      veniladorNoEnciende: false,
      ruidoOFugaFrontal: false,
      radiadorObstruido: false,
      testigoTemperaturaEncendido: false
    })

    setFallasSuspension({
      fallaSuspension: null,
      vehiculoRebota: null,
      seHunde: null,
      seInclinaCurvas: null,
      escuchanGolpeteos: null,
      ruidoGirar: null,
      ruedaMasBaja: null,
      aceiteCuerpoAmortiguador: null,
      rebotaPresionarlo: null,
      seSienteInestable: null,
      desgasteIrregular: null
    })

    setDisableFallasSuspension({
      fallaSuspension: false,
      vehiculoRebota: false,
      seHunde: false,
      seInclinaCurvas: false,
      escuchanGolpeteos: false,
      ruidoGirar: false,
      ruedaMasBaja: false,
      aceiteCuerpoAmortiguador: false,
      rebotaPresionarlo: false,
      seSienteInestable: false,
      desgasteIrregular: false
    })

    setFallasDireccion({
      fallaDireccion: null,
      volantePesadoGirar: null,
      volanteDificilMover: null,
      volanteTiembla: null,
      ruidosAlGirar: null,
      vehiculoDesvia: null,
      seVaHaciaUnLado: null,
      LiquidoBajo: null,
      direccionFloja: null,
      fugasVisibles: null,
      direccionElectrica: null
    })

    setDisableFallasDireccion({
      fallaDireccion: false,
      volantePesadoGirar: false,
      volanteDificilMover: false,
      volanteTiembla: false,
      ruidosAlGirar: false,
      vehiculoDesvia: false,
      seVaHaciaUnLado: false,
      LiquidoBajo: false,
      direccionFloja: false,
      fugasVisibles: false,
      direccionElectrica: false
    })

    setFallasEscape({
      fallaEscape: null,
      ruidoDebajoVehiculo: null,
      ruidoMetalico: null,
      sonidoEscapeRoto: null,
      humoEscape: null,
      escapeVaporoso: null,
      vehiculoPierdePotencia: null,
      motorArrancaMal: null,
      consumoCombustibleExcesivo: null,
      fugasVisibles: null,
      catalizardorRoto: null,
      residuosEscape: null,
      checkEngineEncendido: null
    })

    setDisableFallasEscape({
      fallaEscape: false,
      ruidoDebajoVehiculo: false,
      ruidoMetalico: false,
      sonidoEscapeRoto: false,
      humoEscape: false,
      escapeVaporoso: false,
      vehiculoPierdePotencia: false,
      motorArrancaMal: false,
      consumoCombustibleExcesivo: false,
      fugasVisibles: false,
      catalizardorRoto: false,
      residuosEscape: false,
      checkEngineEncendido: false
    })

    setModalContent({
      title: "",
      text: ""
    })
    setFallasFacts({})
  }

  return (
    <>
      <header>
        <h2>FALLAS VEHICULARES</h2>
        <Button onClick={() => handleReiniciar()}>REINICIAR</Button>
        <Button onClick={() => handleVerDiagnostico()}>DIAGNOSTICO</Button>
      </header>

      <Fallas_Electricas handleFallasElectricas={handleFallasElectricas} fallasElectricas={fallasElectricas} disableFallasElectricas={disableFallasElectricas} />

      <Fallas_Motor handleFallasMotor={handleFallasMotor} fallasMotor={fallasMotor} disableFallasMotor={disableFallasMotor} />

      <Fallas_Transmision handleFallasTransmision={handleFallasTransmision} fallasTransmision={fallasTransmision} disableFallasTransmision={disableFallasTransmision} />

      <Fallas_Frenos handleFallasFrenos={handleFallasFrenos} fallasFrenos={fallasFrenos} disableFallasFrenos={disableFallasFrenos} />

      <Fallas_Refrigeracion handleFallasRefrigeracion={handleFallasRefrigeracion} fallasRefrigeracion={fallaRefrigeracion} disableFallasRefrigeracion={disableFallasRefrigeracion} />

      <Fallas_Suspension handleFallasSuspension={handleFallasSuspension} fallasSuspension={fallasSuspension} disabeFallasSuspension={disableFallasSuspension} />

      <Fallas_Direccion handleFallasDireccion={handleFallasDireccion} fallasDireccion={fallasDireccion} disabeFallasDireccion={disableFallasDireccion} />

      <Fallas_Escape handleFallasEscape={handleFallasEscape} fallasEscape={fallasEscape} disabeFallasEscape={disableFallasEscape} />

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
