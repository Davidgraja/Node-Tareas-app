## Node tareas app

Este es un gestor de tareas  orientado cien porciento a la terminal , Sus menus son totalmente interativos con los usuarios , permitiendo de esta manera tener una mejor experiencia y totalmente distinto a lo normal

## Herramientas usadas  
Este proyecto esta construido sobre [node js](https://nodejs.org/es/)  y varios de sus paquetes como:

- [inquirer](https://www.npmjs.com/package/inquirer) : Para el manejo de la terminal interactiva

- [colors](https://www.npmjs.com/package/colors) : Manejo de los colores dentro de la consola

- [uuid](https://www.npmjs.com/package/uuid) : Para la creación de ids unicos

# Instalación 
1. Clona este repositorio en tu maquina local : ``` git@github.com:Davidgraja/Node-tareas-App.git ```

2. Abre tu terminal , navega hacia la carpeta donde has clonado este repositorio : ``` cd Node-tareas-App ```

3. Reconstruye los modulos de node : `$npm install`

4. Ejecuta el comando `node app.js` para ejecutar el programa 

## Uso de la aplicación
El uso de esta aplicación es simple , dentro de esta vamos a tener las sigientes opciones :

- Crear tarea 
- Listar tareas 
- Listar tareas completadas
- Listar tareas pendientes
- Completar tareas 
- Borrar tareas 
- salir 

Vamos a poder acceder a cada uno de estas opciones por medio de un menu interactivo y este se ve de la siguiente manera :

![Menu principal](https://i.postimg.cc/HWBw7c1q/Node-tareas-app-Menu-principal.png)


**vista de listar tareas :**

![vista de listar tareas ](https://i.postimg.cc/GmsGNXTR/Node-tareas-app-vista-listar-tareas.png)

**vista de listar tareas completadas , como información adicional se añadio la fecha en la cual se completo la tarea :**

![vista de listar tareas ](https://i.postimg.cc/7L80ySS2/Node-tareas-app-vista-tareas-completadas.png)


**vista de listar tareas pendientes:**

![vista de listar tareas ](https://i.postimg.cc/65PCYk3z/Node-tareas-app-vista-listar-pendientes.png)


**vista de  completar tareas , en esta opción podremos seleccionar mas de una nota y hacer uso atajos de teclados para la selección de las notas:**

![vista de listar tareas ](https://i.postimg.cc/VNqMs5FH/Node-tareas-app-Menu-completar-tareas.png)

Las notas creadas van a ser persistentes y aunque bajes la aplicación  la información  se mantendrá intacta.