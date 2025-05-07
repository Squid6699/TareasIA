hechos = {
    # FALLAS ELECTRICAS
    "VE": False,  # Vehículo no enciende
    "CL": False,  # Se escucha un click
    "MG": False,  # Motor gira lentamente
    "LN": False,  # Luces no encienden
    "TN": False,  # Tablero no enciende
    "LT": False,  # Luces tenues
    "CT": False,  # Corrosion en terminales
    "BR": False,  # Batería recargada varias veces
    "LP": False,  # Limpia parabrisas no funcionan
    "RA": False,  # Radio no funciona
    "VN": False,  # Ventanas no funcionan
    "FL": False,  # Fallas tras la lluvia
    "FV": False,  # Fallas tras lavado
    "FI": False,  # Fallas de intermitente
    "TB": False,  # Testigo de batería encendido
    "IA": False,  # Indicadores de tablero apagados
    "IP": False,  # Indicadores de tablero parpadean

    #FALLAS EN MOTOR
    "MA": False,  # Motor no arranca
    "BE": False,  # Batería en buen estado
    "MGSA": False,  # Motor gira sin arrancar
    "MIA": False,  # Motor se apaga inmediatamente
    "TA": False,  # Tirones al acelerar
    "MTR": False,  # Motor tiembla en relenti
    "PPS": False,  # Pérdida de potencia en subidas
    "PPC": False,  # Pérdida de potencia con carga
    "MC": False,  # Motor se calienta
    "VC": False,  # Vapor del cofre
    "TT": False,  # Testigo de temperatura encendido
    "RMM": False,  # Ruido metálico en motor
    "CA": False,  # Chirrido al acelerar
    "HAZ": False,  # Humo azul del escape
    "HBL": False,  # Humo blanco del escape
    "HNE": False, # Humo negro del escape

    #FALLAS EN LA TRANSMISION
    "TP": False, # Transmision patina
    "CNE": False, # Cambios no entran
    "CB": False, # Cambios bruscos
    "DMM": False, # Dificultad en marchas manual
    "CSS": False, # Cambios se salen
    "RRC": False, # Retraso en respuesta del cambio
    "GC": False, # Golpeteo en cambio
    "ZM": False, # Sumbido en marcha
    "CM": False, # Chillido en marchas
    "VA": False, # Vibraciones al acelerar
    "LTO": False, # Liquido de transmision oscuro
    "LTB": False, # Liquido de transmision bajo

    # FRENOS DEFECTUOSO
    "PFVF": False, # Pedal se va al fondo
    "PFB": False, # Pedal de freno blando
    "PFD": False, # Pedal de freno duro
    "TEF": False, # Tarda en frenar
    "NFCF": False, # No frena con fuerza
    "VVF": False, # Vehiculo vibra al final
    "CAF": False, # Chillido al frenar
    "RM": False, # Rechinar metalico
    "LFB": False, # Liquido de frenos bajo
    "LFO": False, # Liquido de frenos oscuro
    "TFE": False, # Testigo de frenos encendido
    "TAE": False, # Testigo de ABS encendido

    # FALLAS EN SISTEMA DE REFRIGERACION
    "TSR": False, # Termostato sube rapidamente
    "SCU": False, # Sobrecalentamiento con uso
    "TI": False, # Temperatura inestable
    "RBC": False, # Refrigerante baja constantemente
    "CRS": False, # Charco de refrigerante
    "ODR": False, # Olor dulce
    "VEC": False, # Vapor en cofre
    "VEE": False, # Vapor en escape
    "BED": False, # Burbujeo en deposito
    "VNA": False, # Ventilador no se activa
    "RFF": False, # Ruido o fuga frontal
    "ROR": False, # Radiador obstruido
    "TTENC": False, # Testigo de temperatura encendido

    # FALLAS EN SUSPENCION
    "REB": False, # Rebote excesivo en baches
    "HFA": False, # Hundimineto al frenar o acelerar
    "IEC": False, # Inclinacion excesiva al girar
    "RAB": False, # Ruidos al pasar baches
    "RAGV": False, # Ruidos al girar el volante
    "RMB": False, # Rueda mas baja
    "AEA": False, # Aceite en amortiguadores
    "RMDV": False, # Rebota mas de dos veces
    "TI": False, # Trayectoria inestable
    "DIL": False, # Desgaste irregular de llantas

    # FALLAS EN DIRECCION
    "VP": False,   # Volante pesado
    "DGUS": False, # Dificultad al girar en un solo sentido
    "VT": False,   # Volante tiembla
    "RAG": False,  # Ruido al girar
    "VSD": False,  # Vehículo se desvía
    "DTL": False,  # Dirección tiende a un lado
    "LDB": False,  # Líquido de dirección bajo
    "LDO": False,  # Líquido de dirección oscuro
    "DF": False,   # Dirección floja
    "FVD": False,  # Fuga visible en la dirección
    "DEF": False,  # Dirección electrónica con falla

    # FALLAS EN SISTEMA DE ESCAPE
    "RFE": False,  # Ruido fuerte en el escape
    "RMC": False,  # Ruido metálico constante
    "SER": False,  # Sonido de escape roto
    "HCE": False,  # Humo de colores en el escape
    "VEE": False,  # Vapor excesivo en el escape
    "PP": False,   # Pérdida de potencia
    "AD": False,   # Arranque difícil
    "CCA": False,  # Consumo de combustible alto
    "FVE": False,  # Fuga visible en el escape
    "CD": False,   # Catalizador dañado
    "RNE": False,  # Residuos negros en el escape
    "CEE": False,  # Check engine encendido
}



def evaluar_reglas(hechos):
    diagnosticos = []

    if (hechos["VE"] and hechos["CL"]):
        diagnosticos.append("Motor de arranque o bateria debil")

    if (hechos["VE"] and hechos["MG"]):
        diagnosticos.append("Bateria descargada o sulfatada")

    if (hechos["VE"] and (hechos["TN"] or hechos["LN"])):
        diagnosticos.append("Falla electrica general")

    if (hechos["LT"] or hechos["LN"]):
        diagnosticos.append("Bateria descargada o alternador")

    if (hechos["CT"]):
        diagnosticos.append("Mala conexion que impide arranque")

    if (hechos["BR"]):
        diagnosticos.append("Alternador fallando o fugas de corriente")

    if (hechos["LP"] and hechos["RA"] and hechos["VN"]):
        diagnosticos.append("Fusible principal quemado o desconexion electrica")

    if (hechos["FL"] or hechos["FV"]):
        diagnosticos.append("Humedad en conexiones o cortocircuito")
        
    if (hechos["FI"]):
        diagnosticos.append("Falsos contactos, reles dañados o cableado defectuoso")

    return diagnosticos

hechos["VE"] = True





diagnosticos = evaluar_reglas(hechos)
print(f"Diagnóstico(s): {', '.join(diagnosticos)}")
