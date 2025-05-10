diagnosticos = []

hechos = {
    # FALLAS ELECTRICAS
    "VE": False,  # Vehículo enciende
    "CL": False,  # Se escucha un click
    "MG": False,  # Motor gira lentamente
    "LN": False,  # Luces encienden
    "TN": False,  # Tablero enciende
    "LT": False,  # Luces tenues
    "CT": False,  # Corrosion en terminales
    "BR": False,  # Batería recargada varias veces
    "LP": False,  # Limpia parabrisas funcionan
    "RA": False,  # Radio funciona
    "VN": False,  # Ventanas funcionan
    "FL": False,  # Fallas tras la lluvia
    "FV": False,  # Fallas tras lavado
    "FI": False,  # Fallas de intermitente
    "TB": False,  # Testigo de batería encendido
    "IA": False,  # Indicadores de tablero apagados
    "IP": False,  # Indicadores de tablero parpadean

    #FALLAS EN MOTOR
    "MA": False,  # Motor arranca
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
    "FT": False, # Falla transmision
    "TP": False, # Transmision patina
    "CNE": False, # Cambios entran correctamente
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
    "FD": False, # Frenos defectuoso
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
    "FSDR": False, # Falla sistema de refrigeracion
    "TSR": False, # Termostato sube rapidamente
    "SCU": False, # Sobrecalentamiento con uso
    "TI": False, # Temperatura inestable
    "RBC": False, # Refrigerante baja constantemente
    "CRS": False, # Charco de refrigerante
    "OD": False, # Olor dulce
    "VEC": False, # Vapor en cofre
    "VEE": False, # Vapor en escape
    "BED": False, # Burbujeo en deposito
    "VNA": False, # Ventilador no se activa
    "RFF": False, # Ruido o fuga frontal
    "RO": False, # Radiador obstruido
    "TTENC": False, # Testigo de temperatura encendido

    # FALLAS EN SUSPENCION
    "FSS": False, # Falla en suspension
    "REB": False, # Rebote excesivo en baches
    "HFA": False, # Hundimineto al frenar o acelerar
    "IEC": False, # Inclinacion excesiva al girar
    "RAB": False, # Ruidos al pasar baches
    "RAGV": False, # Ruidos al girar el volante
    "RMB": False, # Rueda mas baja
    "AEA": False, # Aceite en amortiguadores
    "RMDV": False, # Rebota mas de dos veces
    "TIS": False, # Trayectoria inestable
    "DIL": False, # Desgaste irregular de llantas

    # FALLAS EN DIRECCION
    "FSD": False, # Falla en direccion
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
    "FSES": False, # Falla en sistema de escape
    "RFE": False,  # Ruido fuerte en el escape
    "RMC": False,  # Ruido metálico constante
    "SER": False,  # Sonido de escape roto
    "HCE": False,  # Humo de colores en el escape
    "VEEE": False,  # Vapor excesivo en el escape
    "PP": False,   # Pérdida de potencia
    "AD": False,   # Arranque difícil
    "CCA": False,  # Consumo de combustible alto
    "FVE": False,  # Fuga visible en el escape
    "CD": False,   # Catalizador dañado
    "RNE": False,  # Residuos negros en el escape
    "CEE": False,  # Check engine encendido
}

def evaluar_reglas(hechos):
    diagnosticos.clear()
    # FALLAS ELECTRICAS
    if (not hechos["VE"] and hechos["CL"]):
        FeR1()

    if (not hechos["VE"] and hechos["MG"]):
        FeR2()
    
    if (not hechos["VE"] and (hechos["TN"] or hechos["LN"])):
        FeR3()
    
    if (hechos["VE"] and (hechos["LT"] or hechos["LN"])):
        FeR4()
    
    if (hechos["CT"]):
        FeR5()
    
    if (hechos["BR"]):
        FeR6()
    
    if (hechos["LP"]):
        FeR7()
    
    if (hechos["FL"] or hechos["FV"]):
        FeR8()
            
    if (hechos["FI"]):
        FeR9()
        
    if (hechos["VE"] and hechos["TB"]):
        FeR10()
            
    if (hechos["IA"] or hechos["IP"]):
        FeR11()
            
    # FALLAS EN MOTOR
    if (not hechos["MA"] and hechos["BE"]):
        FmR1()
        
    if (not hechos["BE"] and hechos["BFC"]):
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
        
    if (hechos["TT"]):
        FmR8()
    
    if (hechos["VC"]):
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
    if (hechos["PFVF"]):
        FfR1()

    if (hechos["PFB"]):
        FfR2()

    if (hechos["PFD"]):
        FfR3()

    if (hechos["TEF"] or hechos["NFCF"]):
        FfR4()

    if (hechos["VVF"]):
        FfR5()
    
    if (hechos["CAF"]):
        FfR6()

    if (hechos["RM"]):
        FfR7()
    
    if (hechos["LFB"]):
        FfR8()

    if (hechos["LFO"]):
        FfR9()

    if (hechos["TFE"]):
        FfR10()
    
    if (hechos["TAE"]):
        FfR11()

    # FALLAS EN SISTEMA DE REFRIGERACION
    if (hechos["TSR"]):
        FsrR1()

    if (hechos["SCU"]):
        FsrR2()

    if (hechos["TI"]):
        FsrR3()
    
    if (hechos["RBC"]):
        FsrR4()

    if (hechos["CRS"]):
        FsrR5()

    if (hechos["OD"]):
        FsrR6()

    if (hechos["VEC"] or hechos["VEE"]):
        FsrR7()

    if (hechos["BED"]):
        FsrR8()
    
    if (hechos["VNA"]):
        FsrR9()
    
    if (hechos["RFF"]):
        FsrR10()

    if (hechos["RO"]):
        FsrR11()

    if (hechos["TTENC"]):
        FsrR12()

    # FALLAS EN SUSPENCION
    if (hechos["REB"]):
        FsR1()

    if (hechos["HFA"]):
        FsR2()
    
    if (hechos["IEC"]):
        FsR3()
    
    if (hechos["RAB"]):
        FsR4()
    
    if (hechos["RAGV"]):
        FsR5()
    
    if (hechos["RMB"]):
        FsR6()
    
    if (hechos["AEA"]):
        FsR7()
    
    if (hechos["RMDV"]):
        FsR8()
    
    if (hechos["TIS"]):
        FsR9()
    
    if (hechos["DIL"]):
        FsR10()

    # FALLAS EN DIRECCION
    if (hechos["VP"]):
        FdR1()
    
    if (hechos["DGUS"]):
        FdR2()
    
    if (hechos["VT"]):
        FdR3()

    if (hechos["RAG"]):
        FdR4()

    if (hechos["VSD"]):
        FdR5()

    if (hechos["DTL"]):
        FdR6()

    if (hechos["LDB"] or hechos["LDO"]):
        FdR7()  

    if (hechos["DF"]):
        FdR8()
    
    if (hechos["FVD"]):
        FdR9()

    if (hechos["DEF"]):
        FdR10()

    # FALLAS EN SISTEMA DE ESCAPE
    if (hechos["RFE"]):
        FseR1()

    if (hechos["RMC"]):
        FseR2()
    
    if (hechos["SER"]):
        FseR3()
    
    if (hechos["HCE"]):
        FseR4()

    if (hechos["VEEE"]):
        FseR5()
    
    if (hechos["PP"]):
        FseR6()
    
    if (hechos["AD"]):
        FseR7()
    
    if (hechos["CCA"]):
        FseR8()

    if (hechos["FVE"]):
        FseR9()
    
    if (hechos["CD"]):
        FseR10()
    
    if (hechos["RNE"]):
        FseR11()
    
    if (hechos["CEE"]):
        FseR12()

    return diagnosticos

# REGLAS DE FALLAS ELECTRICAS
def FeR1():
    diagnosticos.append("Motor de arranque defectuoso o bateria debil")

def FeR2():
    diagnosticos.append("Bateria descargada o sulfatada")

def FeR3():
    diagnosticos.append("Falla eléctrica general (batería, fusibles o sistema de carga)")
    
def FeR4():
    diagnosticos.append("Bateria descargada o alternador no carga")
    
def FeR5():
    diagnosticos.append("Mala conexion por corrosion que impide arranque")
    
def FeR6():
    diagnosticos.append("Alternador fallando o fugas de corriente")
    
def FeR7():
    diagnosticos.append("Fusible principal quemado o desconexión eléctrica")
    
def FeR8():
    diagnosticos.append("Humedad en conexiones electricas o cortocircuito")

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
    diagnosticos.append("Falla en sistema de inyección, bujías sucias o filtro de aire obstruido")
    
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
def FfR1():
    diagnosticos.append("Fuga de líquido, aire en el sistema, nivel bajo, líquido inadecuado, pastillas muy desgastadas")

def FfR2():
    diagnosticos.append("Aire en líneas, líquido contaminado, caliper agarrotado, latiguillo dañado, pinza gripada")

def FfR3():
    diagnosticos.append("Pastillas cristalizadas o contaminadas, servofreno, cilindros pegados, discos defectuosos")

def FfR4():
    diagnosticos.append("Discos alabeados, pastillas contamina, pastillas o zapatas desgastadas, discos dañadosdas, rodamientos sueltos, ruedas mal equilibradas")

def FfR5():
    diagnosticos.append("Discos alabeados, pastillas contaminadas, rodamientos sueltos, ruedas mal equilibradas")

def FfR6():
    diagnosticos.append("Pastillas sucias, gastadas, de mala calidad o discos deformados")

def FfR7():
    diagnosticos.append("Pastillas completamente gastadas, fricción metal con metal")

def FfR8():
    diagnosticos.append("Posible fuga en el sistema")

def FfR9():
    diagnosticos.append("Necesita purgado y reemplazo")

def FfR10():
    diagnosticos.append("Freno de mano activado, bajo nivel, falla ABS")

def FfR11():
    diagnosticos.append("Falla en sensor de rueda, módulo ABS o cableado")

# REGLAS DE FALLAS EN SISTEMA DE REFRIGERACION
def FsrR1():
    diagnosticos.append("Termostato cerrado o falta de refrigerante")

def FsrR2():
    diagnosticos.append("Falla en ventilador, radiador obstruido o bomba de agua")

def FsrR3():
    diagnosticos.append("Aire en el sistema, falla en termostato o sensor")

def FsrR4():
    diagnosticos.append("Fuga en mangueras, radiador, bomba o tapón")

def FsrR5():
    diagnosticos.append("Fuga en mangueras inferiores o radiador")

def FsrR6():
    diagnosticos.append("Fuga en calefactor interior o depósito")

def FsrR7():
    diagnosticos.append("Sobrecalentamiento severo o junta de culata dañada")

def FsrR8():
    diagnosticos.append("Aire en el sistema o fuga interna (junta o tapa)")

def FsrR9():
    diagnosticos.append("Falla en motor del ventilador, fusible, relé o sensor")

def FsrR10():
    diagnosticos.append("Bomba de agua defectuosa (rodamientos o sello)")

def FsrR11():
    diagnosticos.append("Transferencia térmica deficiente")

def FsrR12():
    diagnosticos.append("Sobrecalentamiento real o falla del sensor")

# REGLAS DE FALLAS EN SUSPENCION
def FsR1():
    diagnosticos.append("Amortiguadores o struts desgastados o dañados")

def FsR2():
    diagnosticos.append("Desgaste en amortiguadores delanteros o traseros")

def FsR3():
    diagnosticos.append("Fallas en barras estabilizadoras o amortiguadores debilitados")

def FsR4():
    diagnosticos.append("Bujes, rótulas o soportes de amortiguador desgastados o sueltos")

def FsR5():
    diagnosticos.append("Fallo en topes de suspensión o rótulas")

def FsR6():
    diagnosticos.append("Resorte roto o muelle hundido")

def FsR7():
    diagnosticos.append("Amortiguador con fuga, debe reemplazarse")

def FsR8():
    diagnosticos.append("Amortiguadores no funcionan correctamente")

def FsR9():
    diagnosticos.append("Componentes desgastados o desalineación")

def FsR10():
    diagnosticos.append("Problemas de alineación, amortiguadores o partes flojas")

# REGLAS DE FALLAS EN DIRECCION
def FdR1():
    diagnosticos.append("Falta de líquido o fuga en la dirección hidráulica")

def FdR2():
    diagnosticos.append("Falla en bomba o sistema hidráulico")

def FdR3():
    diagnosticos.append("Desbalanceo, mala alineación o rótulas defectuosas")

def FdR4():
    diagnosticos.append("Falta de líquido, bomba dañada o correa defectuosa")

def FdR5():
    diagnosticos.append("Mala alineación, presión desigual o falla en suspensión")

def FdR6():
    diagnosticos.append("Falla en rótulas o alineación")

def FdR7():
    diagnosticos.append("Fuga o bomba defectuosa")

def FdR8():
    diagnosticos.append("Barra de acoplamiento o brazo de pitman desgastados")

def FdR9():
    diagnosticos.append("Fugas en sistema hidráulico")

def FdR10():
    diagnosticos.append("Falla en sensor, módulo o unidad de potencia")

# REGLAS DE FALLAS EN SISTEMA DE ESCAPE
def FseR1():
    diagnosticos.append("Fugas en catalizador o uniones del escape")

def FseR2():
    diagnosticos.append("Daño en silenciador, catalizador o mangueras del escape")

def FseR3():
    diagnosticos.append("Fuga en tubo de escape o catalizador defectuoso")

def FseR4():
    diagnosticos.append("Motor quemando aceite o exceso de combustible (posible fuga interna)") 

def FseR5():
    diagnosticos.append("Problemas con refrigeración (junta de culata quemada)")

def FseR6():
    diagnosticos.append("Obstrucción o fuga en catalizador/silenciador")

def FseR7():
    diagnosticos.append("Bloqueo o daño en catalizador o escape")

def FseR8():
    diagnosticos.append("Obstrucción en el escape que exige más al motor")

def FseR9():
    diagnosticos.append("Fuga que afecta eficiencia y emisiones")

def FseR10():
    diagnosticos.append("Catalizador obstruido o inoperante")

def FseR11():
    diagnosticos.append("Combustión incompleta (problema en inyectores o encendido)")

def FseR12():
    diagnosticos.append("Problema en sensor de oxígeno o catalizador")