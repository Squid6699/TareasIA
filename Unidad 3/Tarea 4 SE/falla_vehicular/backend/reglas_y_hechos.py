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
    "BFC": False,  # Bateria funciona correctamente
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

    # FALLAS ELECTRICAS
    if (hechos["VE"] and hechos["CL"]):
        FeR1()

    if (hechos["VE"] and hechos["MG"]):
        FeR2()

    if (hechos["VE"] and (hechos["TN"] or hechos["LN"])):
        FeR3()

    if (hechos["LT"] or hechos["LN"]):
        FeR4()

    if (hechos["CT"]):
        FeR5()

    if (hechos["BR"]):
        FeR6()

    if (hechos["LP"] and hechos["RA"] and hechos["VN"]):
        FeR7()

    if (hechos["FL"] or hechos["FV"]):
        FeR8()
        
    if (hechos["FI"]):
        FeR9()
    
    if (hechos["TB"]):
        FeR10()
        
    if (hechos["IA"] or hechos["IP"]):
        FeR11()
        
    # FALLAS EN MOTOR
    if (hechos["MA"] and hechos["BE"]):
        FmR1()
        
    if (hechos["BE"] and not hechos["BFC"]):
        FmR2()
    
    if (hechos["MGSA"]):
        FmR3()
        
    if (hechos["MIA"]):
        FmR4()
        
    if (hechos["TA"]):
        FmR5()
        
    if (hechos["MTR"]):
        FmR6()
        
    if (hechos["PPS"] or hechos["PPC"]):
        FmR7()
        
    if (hechos["MC"]):
        FmR8()
    
    if (hechos["VC"] or hechos["TT"]):
        FmR9()
    
    if (hechos["RMM"]):
        FmR10()
        
    if (hechos["CA"]):
        FmR11()
    
    if (hechos["HAZ"]):
        FmR12()
    
    if (hechos["HBL"]):
        FmR13()
    
    if (hechos["HNE"]):
        FmR14()
    
    # FALLAS EN TRANSMISION
    if (hechos["TP"]):
        FtR1()
    
    if (hechos["CNE"]):
        FtR2()
        
    if (hechos["CB"]):
        FtR3()
    
    if (hechos["DMM"]):
        FtR4()
    
    if (hechos["CSS"]):
        FtR5()
    
    if (hechos["RRC"]):
        FtR6()
    
    if (hechos["GC"]):
        FtR7()
    
    if (hechos["ZM"] or hechos["CM"]):
        FtR8()
    
    if (hechos["VA"]):
        FtR9()
    
    if (hechos["LTO"]):
        FtR10()
    
    if (hechos["LTB"]):
        FtR11()
        
    # FALLAS EN FRENOS

    return diagnosticos

# REGLAS DE FALLAS ELECTRICAS
def FeR1():
    diagnosticos.append("Motor de arranque o bateria debil")

def FeR2():
    diagnosticos.append("Bateria descargada o sulfatada")

def FeR3():
    diagnosticos.append("Falla electrica general")
    
def FeR4():
    diagnosticos.append("Bateria descargada o alternador")
    
def FeR5():
    diagnosticos.append("Mala conexion que impide arranque")
    
def FeR6():
    diagnosticos.append("Alternador fallando o fugas de corriente")
    
def FeR7():
    diagnosticos.append("Fusible principal quemado o desconexion electrica")
    
def FeR8():
    diagnosticos.append("Humedad en conexiones o cortocircuito")

def FeR9():
    diagnosticos.append("Falsos contactos, reles dañados o cableado defectuoso")

def FeR10():
    diagnosticos.append("El alternador no esta cargando adecuadamente")
    
def FeR11():
    diagnosticos.append("Problema en cableado, bateria o ECU")
    
# REGLAS DE FALLAS EN MOTOR
def FmR1():
    diagnosticos.append("Fallo en sistema de encendido (Bujias, bobina, modulo de encendido)")

def FmR2():
    diagnosticos.append("Bateria defectuosa")

def FmR3():
    diagnosticos.append("Falla en chispa, mezcla de combustible o compresión")
    
def FmR4():
    diagnosticos.append("Falla en sensor de cigüeñal, bomba de combustible o sistema antirrobo")
    
def FmR5():
    diagnosticos.append("Fall en sistema de inyección, bujías sucias o filtro de aire obstruido")
    
def FmR6():
    diagnosticos.append("Bujía fallando, cable dañado o inyectores sucios")
    
def FmR7():
    diagnosticos.append("Filtro de combustible obstruido, inyectores de combustible sucios, carburador sucio, filtro de aire sucio, bujías o bobina defectuosos")

def FmR8():
    diagnosticos.append("Falla termostato, ventilador, bomba de agua o bajo refrigerante")
    
def FmR9():
    diagnosticos.append("Sobrecalentamiento grave")

def FmR10():
    diagnosticos.append("Problema en válvulas, árbol de levas o bajo nivel de aceite")
    
def FmR11():
    diagnosticos.append("Banda floja o dañada")
    
def FmR12():
    diagnosticos.append("El motor esta quemando aceite (Posiblemente sellos de valvulas o aros de piston desgastados)")

def FmR13():
    diagnosticos.append("Entra agua al motor (Posiblemente empaque de culata dañado)")
    
def FmR14():
    diagnosticos.append("Esta quemando demasiada gasolina (Mezcla rica, sensores de oxigeno o inyectores defectuosos)")

# REGLAS DE FALLAS EN TRANSMISION
def FtR1():
    diagnosticos.append("Fluido de transmision de mala calidad o haya perdido su calidad inicial")
    
def FtR2():
    diagnosticos.append("Líquido de transmisión bajo o que no tenga la viscosidad correcta, se necesite ajustar cables de los cambios o la conexión con el embrague")
    
def FtR3():
    diagnosticos.append("Problemas en cuerpo de válvulas, sensores de velocidad, aceite contaminado o solenoide defectuoso")
    
def FtR4():
    diagnosticos.append("Fallo en sistema hidráulico, sincronizadores desgastados o varillaje dañado")
    
def FtR5():
    diagnosticos.append("Falla en la caja de cambios")

def FtR6():
    diagnosticos.append("Baja presión del fluido o falla en cuerpo de válvulas")

def FtR7():
    diagnosticos.append("Problemas en soporte motor/transmisión o juego en los ejes")
    
def FtR8():
    diagnosticos.append("Cojinetes o engranajes desgastados")
    
def FtR9():
    diagnosticos.append("Ejes desbalanceados, flechas dañadas o soporte flojo")

def FtR10():
    diagnosticos.append("Sobrecalentamiento o desgaste interno en la transmisión")
    
def FtR11():
    diagnosticos.append("Fuga que reduce presión y daña componentes")

# REGLAS DE FALLAS EN FRENOS






# Ejemplo de uso
hechos["VE"] = True

diagnosticos = evaluar_reglas(hechos)
print(f"Diagnóstico(s): {', '.join(diagnosticos)}")
