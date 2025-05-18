# Preprocesamiento de Imágenes con TensorFlow

Este notebook (`preprocesador.ipynb`) contiene un flujo de preprocesamiento de imágenes usando `ImageDataGenerator` de Keras/TensorFlow, pensado para preparar conjuntos de datos antes del entrenamiento de modelos de clasificación.

## Autores

- AMARILLAS AVILES BRAYAN ALEXIS  
- CUEN ARMENTA ALMA VICTORIA

## Funcionalidades

- Reescalado de imágenes (`rescale`)
- Aumento de datos con:
  - Rotación aleatoria
  - Variación de brillo
  - Relleno automático de bordes
- Normalización del conjunto de validación
- Carga automatizada desde directorios con `flow_from_directory`

## Estructura esperada del dataset

El dataset debe estar organizado en subdirectorios por clase dentro de una carpeta `./dataset/train`

## Requisitos
```bash
pip install tensorflow
```