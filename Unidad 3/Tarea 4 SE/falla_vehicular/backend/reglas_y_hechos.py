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
    diagnosticos.append("Motor de arranque defectuoso o batería débil")
    diagnosticos.append("El motor de arranque es esencial para que el motor encienda. Si la batería está débil o el motor de arranque tiene un problema, el vehículo no podrá arrancar.")
    
def FeR2():
    diagnosticos.append("Batería descargada o sulfatada")
    diagnosticos.append("La sulfatación ocurre cuando los depósitos de sulfato de plomo se acumulan en los terminales de la batería, reduciendo su capacidad para generar energía.")
    
def FeR3():
    diagnosticos.append("Falla eléctrica general (batería, fusibles o sistema de carga)")
    diagnosticos.append("Un problema en cualquier parte del sistema de carga puede afectar la capacidad del vehículo para arrancar o mantener la energía durante su funcionamiento.")
    
def FeR4():
    diagnosticos.append("Batería descargada o alternador no carga")
    diagnosticos.append("El alternador es responsable de recargar la batería mientras el motor está en marcha. Si falla, la batería se descargará rápidamente.")
    
def FeR5():
    diagnosticos.append("Mala conexión por corrosión que impide arranque")
    diagnosticos.append("La corrosión en las conexiones de la batería puede generar una alta resistencia, lo que impide que fluya suficiente corriente para arrancar el motor.")
    
def FeR6():
    diagnosticos.append("Alternador fallando o fugas de corriente")
    diagnosticos.append("Cuando el alternador falla, puede generar una fuga de corriente, lo que puede agotar la batería y causar otros problemas eléctricos en el vehículo.")
    
def FeR7():
    diagnosticos.append("Fusible principal quemado o desconexión eléctrica")
    diagnosticos.append("Los fusibles protegen los circuitos eléctricos del vehículo. Si un fusible se quema, puede causar la desconexión de componentes importantes, como el sistema de arranque.")
    
def FeR8():
    diagnosticos.append("Humedad en conexiones eléctricas o cortocircuito")
    diagnosticos.append("La humedad puede causar cortocircuitos en los sistemas eléctricos, lo que podría dar lugar a fallos intermitentes o daños permanentes en los componentes.")
    
def FeR9():
    diagnosticos.append("Falsos contactos, relés dañados o cableado defectuoso")
    diagnosticos.append("Un falso contacto en los relés o cables defectuosos pueden generar fallas intermitentes, haciendo que el sistema eléctrico del vehículo funcione de manera errática.")
    
def FeR10():
    diagnosticos.append("El alternador no está cargando adecuadamente")
    diagnosticos.append("Un alternador defectuoso puede causar que el vehículo dependa únicamente de la batería para funcionar, lo que puede llevar a una descarga rápida si el alternador no está cargando correctamente.")
    
def FeR11():
    diagnosticos.append("Problema en cableado, batería o ECU")
    diagnosticos.append("Un problema en el cableado puede afectar muchos sistemas eléctricos, mientras que una ECU defectuosa puede impedir la correcta gestión de los sistemas del vehículo.")
    
# REGLAS DE FALLAS EN MOTOR
def FmR1():
    diagnosticos.append("Fallo en sistema de encendido (Bujías, bobina, módulo de encendido)")
    diagnosticos.append("Un fallo en el sistema de encendido impide que la mezcla aire-combustible se encienda correctamente, lo que causa pérdida de potencia, tirones o que el motor no arranque.")

def FmR2():
    diagnosticos.append("Batería defectuosa")
    diagnosticos.append("Aunque comúnmente se relaciona con fallas eléctricas, una batería débil también puede afectar el sistema de arranque del motor y provocar fallos intermitentes.")

def FmR3():
    diagnosticos.append("Falla en chispa, mezcla de combustible o compresión")
    diagnosticos.append("Los tres elementos básicos para que el motor funcione correctamente son: chispa, mezcla adecuada de aire-combustible y buena compresión. Si alguno falla, el motor no arrancará.")

def FmR4():
    diagnosticos.append("Falla en sensor de cigüeñal, bomba de combustible o sistema antirrobo")
    diagnosticos.append("El sensor de cigüeñal envía señales vitales a la ECU. Si no funciona, el motor no sabrá cuándo encender las bujías o inyectar combustible.")

def FmR5():
    diagnosticos.append("Falla en sistema de inyección, bujías sucias o filtro de aire obstruido")
    diagnosticos.append("Un sistema de inyección sucio o mal calibrado puede causar fallos en el arranque y rendimiento irregular del motor.")

def FmR6():
    diagnosticos.append("Bujía fallando, cable dañado o inyectores sucios")
    diagnosticos.append("Las bujías y sus cables deben estar en buen estado para encender correctamente el combustible. Si no, el motor tendrá fallas de encendido.")

def FmR7():
    diagnosticos.append("Filtro de combustible obstruido, inyectores de combustible sucios, carburador sucio, filtro de aire sucio, bujías o bobina defectuosos")
    diagnosticos.append("Una obstrucción en el sistema de admisión o combustible puede impedir que llegue suficiente mezcla al motor, provocando pérdida de potencia y fallos en la aceleración.")

def FmR8():
    diagnosticos.append("Falla termostato, ventilador, bomba de agua o bajo refrigerante")
    diagnosticos.append("Estos componentes son clave para mantener la temperatura del motor. Si fallan, el motor puede sobrecalentarse y dañarse gravemente.")

def FmR9():
    diagnosticos.append("Sobrecalentamiento grave")
    diagnosticos.append("Un sobrecalentamiento puede deformar componentes metálicos del motor, romper el empaque de culata y ocasionar fallas irreversibles si no se atiende a tiempo.")

def FmR10():
    diagnosticos.append("Problema en válvulas, árbol de levas o bajo nivel de aceite")
    diagnosticos.append("El árbol de levas controla la apertura de válvulas; sin suficiente lubricación (aceite), su funcionamiento se ve afectado, lo que impacta directamente el desempeño del motor.")

def FmR11():
    diagnosticos.append("Banda floja o dañada")
    diagnosticos.append("La banda de distribución sincroniza el motor. Si se rompe, puede ocasionar que las válvulas choquen con los pistones, dañando severamente el motor.")

def FmR12():
    diagnosticos.append("El motor está quemando aceite (Posiblemente sellos de válvulas o aros de pistón desgastados)")
    diagnosticos.append("Cuando el motor quema aceite, se puede notar por humo azul en el escape y pérdida de potencia. Además, reduce la vida útil del motor.")

def FmR13():
    diagnosticos.append("Entra agua al motor (Posiblemente empaque de culata dañado)")
    diagnosticos.append("El agua en el motor puede mezclarse con el aceite, provocando una sustancia lechosa que arruina la lubricación y puede destruir el motor si no se repara.")

def FmR14():
    diagnosticos.append("Está quemando demasiada gasolina (Mezcla rica, sensores de oxígeno o inyectores defectuosos)")
    diagnosticos.append("Una mezcla demasiado rica (exceso de gasolina) genera bajo rendimiento, emisiones contaminantes y acumulación de hollín en el sistema de escape.")

# REGLAS DE FALLAS EN TRANSMISION
def FtR1():
    diagnosticos.append("Fluido de transmisión de mala calidad o haya perdido su calidad inicial")
    diagnosticos.append("El fluido de transmisión se degrada con el tiempo, perdiendo su capacidad de lubricación y refrigeración, lo que puede generar deslizamientos y desgaste acelerado.")

def FtR2():
    diagnosticos.append("Líquido de transmisión bajo o que no tenga la viscosidad correcta, se necesite ajustar cables de los cambios o la conexión con el embrague")
    diagnosticos.append("El nivel y viscosidad del fluido afectan directamente la suavidad del cambio. Si el nivel es bajo, el sistema no puede generar suficiente presión para operar correctamente.")

def FtR3():
    diagnosticos.append("Problemas en cuerpo de válvulas, sensores de velocidad, aceite contaminado o solenoide defectuoso")
    diagnosticos.append("El cuerpo de válvulas dirige el flujo del fluido hidráulico. Si está sucio o dañado, los cambios serán erráticos o no se realizarán.")

def FtR4():
    diagnosticos.append("Fallo en sistema hidráulico, sincronizadores desgastados o varillaje dañado")
    diagnosticos.append("Los sincronizadores permiten cambios suaves en transmisiones manuales. Si fallan, los cambios se sienten bruscos o hacen ruido.")

def FtR5():
    diagnosticos.append("Falla en la caja de cambios")
    diagnosticos.append("Una caja de cambios dañada puede provocar ruidos metálicos, cambios que saltan o que directamente no entran.")

def FtR6():
    diagnosticos.append("Baja presión del fluido o falla en cuerpo de válvulas")
    diagnosticos.append("Una presión inadecuada del fluido compromete el funcionamiento de los embragues y bandas internas, afectando todos los cambios.")

def FtR7():
    diagnosticos.append("Problemas en soporte motor/transmisión o juego en los ejes")
    diagnosticos.append("Soportes defectuosos pueden generar vibraciones y golpeteos que se sienten especialmente al cambiar de marcha o acelerar.")

def FtR8():
    diagnosticos.append("Cojinetes o engranajes desgastados")
    diagnosticos.append("El desgaste en cojinetes o engranajes provoca ruidos, vibraciones y pérdida de tracción. A menudo requiere reconstrucción o reemplazo de la transmisión.")

def FtR9():
    diagnosticos.append("Ejes desbalanceados, flechas dañadas o soporte flojo")
    diagnosticos.append("Un eje desbalanceado puede provocar vibraciones fuertes al acelerar, mientras que una flecha dañada puede producir golpeteo o pérdida de fuerza.")

def FtR10():
    diagnosticos.append("Sobrecalentamiento o desgaste interno en la transmisión")
    diagnosticos.append("El calor excesivo puede quemar el fluido de transmisión y dañar componentes internos, reduciendo la vida útil del sistema.")

def FtR11():
    diagnosticos.append("Fuga que reduce presión y daña componentes")
    diagnosticos.append("Una fuga de fluido puede pasar desapercibida, pero reduce la presión necesaria para operar la transmisión, provocando fallos en los cambios y daños internos.")


# REGLAS DE FALLAS EN FRENOS
def FfR1():
    diagnosticos.append("Fuga de líquido, aire en el sistema, nivel bajo, líquido inadecuado, pastillas muy desgastadas")
    diagnosticos.append("El líquido de frenos transmite la presión del pedal a las ruedas. Si hay fugas o aire, la presión se pierde y el frenado se vuelve ineficaz o esponjoso.")

def FfR2():
    diagnosticos.append("Aire en líneas, líquido contaminado, caliper agarrotado, latiguillo dañado, pinza gripada")
    diagnosticos.append("El aire o suciedad en el sistema puede impedir el movimiento fluido de los pistones en las pinzas, causando frenado desigual o agarrotado.")

def FfR3():
    diagnosticos.append("Pastillas cristalizadas o contaminadas, servofreno, cilindros pegados, discos defectuosos")
    diagnosticos.append("Las pastillas cristalizadas pierden fricción, lo que alarga la distancia de frenado. También pueden causar chillidos al frenar.")

def FfR4():
    diagnosticos.append("Discos alabeados, pastillas contaminadas, pastillas o zapatas desgastadas, discos dañados, rodamientos sueltos, ruedas mal equilibradas")
    diagnosticos.append("Los discos alabeados generan vibraciones al frenar. Es un problema común tras frenadas muy fuertes o con discos de baja calidad.")

def FfR5():
    diagnosticos.append("Discos alabeados, pastillas contaminadas, rodamientos sueltos, ruedas mal equilibradas")
    diagnosticos.append("Un rodamiento suelto afecta la alineación del sistema de frenos y puede generar desgaste irregular o vibraciones fuertes.")

def FfR6():
    diagnosticos.append("Pastillas sucias, gastadas, de mala calidad o discos deformados")
    diagnosticos.append("Pastillas baratas o desgastadas no frenan eficientemente y aumentan la distancia de frenado, además de dañar los discos.")

def FfR7():
    diagnosticos.append("Pastillas completamente gastadas, fricción metal con metal")
    diagnosticos.append("Cuando las pastillas se gastan totalmente, el metal del soporte raspa contra el disco, causando daño severo y pérdida total de frenado.")

def FfR8():
    diagnosticos.append("Posible fuga en el sistema")
    diagnosticos.append("Una fuga puede ocurrir en las mangueras, calipers o cilindro maestro. Si no se repara, puede causar fallo total del freno.")

def FfR9():
    diagnosticos.append("Necesita purgado y reemplazo")
    diagnosticos.append("El purgado elimina burbujas de aire del sistema de frenos. Si no se hace, el pedal se sentirá esponjoso y el frenado será deficiente.")

def FfR10():
    diagnosticos.append("Freno de mano activado, bajo nivel, falla ABS")
    diagnosticos.append("Un freno de mano mal calibrado o bajo nivel de líquido puede encender luces de advertencia, mientras que una falla ABS afecta el frenado de emergencia.")

def FfR11():
    diagnosticos.append("Falla en sensor de rueda, módulo ABS o cableado")
    diagnosticos.append("El ABS evita el bloqueo de ruedas. Si hay problemas en sus sensores o módulo, se pierde esta asistencia, especialmente en frenadas de emergencia.")


# REGLAS DE FALLAS EN SISTEMA DE REFRIGERACION
def FsrR1():
    diagnosticos.append("Termostato cerrado o falta de refrigerante")
    diagnosticos.append("Si el termostato se queda cerrado, impide el flujo de refrigerante hacia el radiador, provocando un rápido sobrecalentamiento del motor.")

def FsrR2():
    diagnosticos.append("Falla en ventilador, radiador obstruido o bomba de agua")
    diagnosticos.append("El ventilador y la bomba aseguran que el refrigerante circule y se enfríe. Una falla puede provocar que el motor se sobrecaliente, incluso a bajas velocidades.")

def FsrR3():
    diagnosticos.append("Aire en el sistema, falla en termostato o sensor")
    diagnosticos.append("El aire atrapado interrumpe el flujo del refrigerante y puede engañar a los sensores de temperatura, causando lecturas incorrectas.")

def FsrR4():
    diagnosticos.append("Fuga en mangueras, radiador, bomba o tapón")
    diagnosticos.append("Una fuga reduce el nivel de refrigerante y puede causar sobrecalentamiento progresivo si no se detecta a tiempo.")

def FsrR5():
    diagnosticos.append("Fuga en mangueras inferiores o radiador")
    diagnosticos.append("Las fugas en las mangueras inferiores suelen ser más difíciles de ver, pero pueden drenar el sistema rápidamente mientras el motor está en marcha.")

def FsrR6():
    diagnosticos.append("Fuga en calefactor interior o depósito")
    diagnosticos.append("Una fuga en el calefactor puede dejar humedad en el interior del vehículo, empañar cristales y producir olor a refrigerante.")

def FsrR7():
    diagnosticos.append("Sobrecalentamiento severo o junta de culata dañada")
    diagnosticos.append("Una junta de culata dañada puede permitir que el refrigerante entre a los cilindros, causando humo blanco, pérdida de potencia y daño al motor.")

def FsrR8():
    diagnosticos.append("Aire en el sistema o fuga interna (junta o tapa)")
    diagnosticos.append("Las fugas internas son difíciles de detectar pero peligrosas: pueden causar mezcla de aceite y refrigerante o presión excesiva en el sistema.")

def FsrR9():
    diagnosticos.append("Falla en motor del ventilador, fusible, relé o sensor")
    diagnosticos.append("El ventilador eléctrico solo funciona cuando es necesario. Si falla su sensor o fusible, el motor puede sobrecalentarse en tráfico o al detenerse.")

def FsrR10():
    diagnosticos.append("Bomba de agua defectuosa (rodamientos o sello)")
    diagnosticos.append("La bomba de agua es el corazón del sistema. Si sus rodamientos fallan, puede hacer ruido o filtrar refrigerante antes de dejar de funcionar.")

def FsrR11():
    diagnosticos.append("Transferencia térmica deficiente")
    diagnosticos.append("Esto puede deberse a una mezcla de refrigerante incorrecta, obstrucciones internas o suciedad que impide al radiador disipar el calor correctamente.")

def FsrR12():
    diagnosticos.append("Sobrecalentamiento real o falla del sensor")
    diagnosticos.append("A veces el motor está bien, pero el sensor de temperatura está dañado y reporta valores erróneos. Lo ideal es validar con un escáner o termómetro externo.")


# REGLAS DE FALLAS EN SUSPENCION
def FsR1():
    diagnosticos.append("Amortiguadores o struts desgastados o dañados")
    diagnosticos.append("Los amortiguadores absorben las vibraciones del camino. Cuando están dañados, el vehículo rebota excesivamente y se pierde estabilidad.")

def FsR2():
    diagnosticos.append("Desgaste en amortiguadores delanteros o traseros")
    diagnosticos.append("El desgaste irregular de los amortiguadores puede causar que el auto se incline al frenar o gire con menos precisión.")

def FsR3():
    diagnosticos.append("Fallas en barras estabilizadoras o amortiguadores debilitados")
    diagnosticos.append("Las barras estabilizadoras ayudan a mantener el equilibrio del vehículo en curvas. Si fallan, el auto puede sentirse inestable al girar.")

def FsR4():
    diagnosticos.append("Bujes, rótulas o soportes de amortiguador desgastados o sueltos")
    diagnosticos.append("Los bujes y rótulas permiten movimiento controlado. Si están sueltos, puede haber ruidos metálicos y pérdida de alineación.")

def FsR5():
    diagnosticos.append("Fallo en topes de suspensión o rótulas")
    diagnosticos.append("Los topes limitan el recorrido de la suspensión. Si fallan, el vehículo puede golpear bruscamente en baches o al cargar peso.")

def FsR6():
    diagnosticos.append("Resorte roto o muelle hundido")
    diagnosticos.append("Un resorte roto desequilibra la altura del vehículo, provocando desgaste irregular en neumáticos y pérdida de confort.")

def FsR7():
    diagnosticos.append("Amortiguador con fuga, debe reemplazarse")
    diagnosticos.append("Una fuga de aceite en el amortiguador indica que ya no puede controlar los rebotes del vehículo, afectando la seguridad.")

def FsR8():
    diagnosticos.append("Amortiguadores no funcionan correctamente")
    diagnosticos.append("Amortiguadores defectuosos provocan que el auto rebote después de pasar por un bache. También reducen el control del volante.")

def FsR9():
    diagnosticos.append("Componentes desgastados o desalineación")
    diagnosticos.append("Una desalineación causada por componentes desgastados afecta la dirección, el desgaste de neumáticos y el manejo general del vehículo.")

def FsR10():
    diagnosticos.append("Problemas de alineación, amortiguadores o partes flojas")
    diagnosticos.append("Una mala alineación o piezas flojas pueden hacer que el vehículo tire hacia un lado, vibre a altas velocidades o desgaste los neumáticos de forma irregular.")


# REGLAS DE FALLAS EN DIRECCION
def FdR1():
    diagnosticos.append("Falta de líquido o fuga en la dirección hidráulica")
    diagnosticos.append("Una fuga en la dirección hidráulica provoca que el volante se sienta duro, especialmente al girar en parado o a baja velocidad.")

def FdR2():
    diagnosticos.append("Falla en bomba o sistema hidráulico")
    diagnosticos.append("La bomba hidráulica proporciona la presión necesaria para facilitar el giro del volante. Si falla, se pierde asistencia y maniobrabilidad.")

def FdR3():
    diagnosticos.append("Desbalanceo, mala alineación o rótulas defectuosas")
    diagnosticos.append("Un volante que vibra o se siente impreciso puede indicar un desbalanceo o problemas en los componentes de la dirección y suspensión.")

def FdR4():
    diagnosticos.append("Falta de líquido, bomba dañada o correa defectuosa")
    diagnosticos.append("Si la correa de la bomba se rompe o resbala, el sistema pierde asistencia hidráulica, haciendo el volante muy difícil de girar.")

def FdR5():
    diagnosticos.append("Mala alineación, presión desigual o falla en suspensión")
    diagnosticos.append("Una mala alineación o presión desigual de neumáticos puede provocar que el auto se desvíe hacia un lado o que el volante se sienta flojo.")

def FdR6():
    diagnosticos.append("Falla en rótulas o alineación")
    diagnosticos.append("Las rótulas conectan la suspensión a las ruedas. Si fallan, puede haber juego en la dirección, vibraciones o ruidos al girar.")

def FdR7():
    diagnosticos.append("Fuga o bomba defectuosa")
    diagnosticos.append("Las fugas reducen el nivel de fluido hidráulico, mientras que una bomba defectuosa puede generar ruidos y pérdida de asistencia en el giro.")

def FdR8():
    diagnosticos.append("Barra de acoplamiento o brazo de pitman desgastados")
    diagnosticos.append("Estos componentes son clave para transferir el movimiento del volante a las ruedas. Su desgaste afecta la precisión y estabilidad en la dirección.")

def FdR9():
    diagnosticos.append("Fugas en sistema hidráulico")
    diagnosticos.append("Las fugas en mangueras o sellos del sistema hidráulico deben atenderse rápido para evitar daños a la bomba y pérdida total de asistencia.")

def FdR10():
    diagnosticos.append("Falla en sensor, módulo o unidad de potencia")
    diagnosticos.append("En sistemas de dirección asistida electrónica (EPS), una falla electrónica puede desactivar completamente la asistencia al volante.")


# REGLAS DE FALLAS EN SISTEMA DE ESCAPE
def FseR1():
    diagnosticos.append("Fugas en catalizador o uniones del escape")
    diagnosticos.append("Las fugas en el sistema de escape pueden generar ruidos fuertes y permitir la entrada de gases tóxicos a la cabina.")

def FseR2():
    diagnosticos.append("Daño en silenciador, catalizador o mangueras del escape")
    diagnosticos.append("El silenciador y catalizador ayudan a reducir ruido y emisiones. Si están dañados, el vehículo puede fallar en la verificación ambiental.")

def FseR3():
    diagnosticos.append("Fuga en tubo de escape o catalizador defectuoso")
    diagnosticos.append("Un escape defectuoso puede reducir la eficiencia del motor y causar pérdida de potencia.")

def FseR4():
    diagnosticos.append("Motor quemando aceite o exceso de combustible (posible fuga interna)")
    diagnosticos.append("El humo azul indica que el motor quema aceite, lo cual puede dañar el catalizador y aumentar la contaminación.")

def FseR5():
    diagnosticos.append("Problemas con refrigeración (junta de culata quemada)")
    diagnosticos.append("Una junta de culata dañada puede permitir que refrigerante entre al escape, generando humo blanco y sobrecalentamiento.")

def FseR6():
    diagnosticos.append("Obstrucción o fuga en catalizador/silenciador")
    diagnosticos.append("Un catalizador obstruido restringe el flujo de gases, lo que aumenta el consumo de combustible y reduce el rendimiento.")

def FseR7():
    diagnosticos.append("Bloqueo o daño en catalizador o escape")
    diagnosticos.append("Un escape bloqueado hace que el motor trabaje más, reduciendo su vida útil y provocando aceleración lenta.")

def FseR8():
    diagnosticos.append("Obstrucción en el escape que exige más al motor")
    diagnosticos.append("El sistema de escape debe liberar gases eficientemente. Una obstrucción puede sobrecalentar el motor o dañar sensores.")

def FseR9():
    diagnosticos.append("Fuga que afecta eficiencia y emisiones")
    diagnosticos.append("Las fugas en el escape pueden falsear las lecturas del sensor de oxígeno, afectando la mezcla aire-combustible.")

def FseR10():
    diagnosticos.append("Catalizador obstruido o inoperante")
    diagnosticos.append("El catalizador convierte gases nocivos en menos dañinos. Si falla, las emisiones aumentan considerablemente.")

def FseR11():
    diagnosticos.append("Combustión incompleta (problema en inyectores o encendido)")
    diagnosticos.append("Una combustión incompleta produce más contaminantes y puede dañar el catalizador con residuos de combustible sin quemar.")

def FseR12():
    diagnosticos.append("Problema en sensor de oxígeno o catalizador")
    diagnosticos.append("El sensor de oxígeno regula la mezcla aire-combustible. Si falla, se pierde eficiencia y aumentan las emisiones.")