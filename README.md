# 💻  HACKATON · Talent Digigal - BACK END
---
#  DESCRIPCIÓN DEL PROYECTO:

## 👇 Importar el proyecto para utilizar con Visual Studio Code:

iegue los pasos detallados a continuación:
* Clona el proyecto desde Github Platform. Ejecuta:
  ```
  git clone https://github.com/fbages/hackaton-td-equip4.git
  ```
* Abre el proyecto descargado.



## 💾  Utilidades que se han de instalar antes de ejecutar la aplicación:

Para instalar las dependencias necesarias, con las que se ha desarrollado la aplicación:

* npm i

* npm start


## 🔎 Endpoints para acceder a la aplicación:

Recibimos los datos, por parte del equipo de Data Science, con el archivo 'dades.json', y necesitamos convertir algunos de estos datos recibidos con caracteres acentuados y que están codificados en formato Unicode. 
Para ello se pasa el siguiente endpoint con el fin de sustituir estos caracteres a formato UTF-8, para que sean compatibles con los datos que trabaja el equipo de Front-End.
Convierte los datos del archivo CSV a JSON.



 > **POST/convertidorcsv**

La KEY en el body ha de ser 'file', del fichero CSV.


Con el siguiente endpoint nos retorna la información de todos los barrios, en formato JSON.
  
 > **GET/barris**


Con el siguiente endpoint se le tiene que indicar el  nombre del barrio (:nom) del cual nos interese recibir la información.

 > **GET/barri/:nom**
  

Todos los endpoints anteriores los recoge la parte de Front para consumir las API.


