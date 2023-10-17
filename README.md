# Cómo colaborar en el repositorio
### Empezar en el proyecto:
1. Descargar **git bash** https://git-scm.com/downloads (Buscar como configurar gitbash en internet).
2. Crear una carpeta para guardar el proyecto -> mkdir Desktop/nombre-carpeta (creará una carpeta en el escritorio). 
3. Dentro de esa carpeta clonamos el repo por HTTPS -> git clone enlace-del-repo.
4. Creamos un branch -> git branch tu-nombre-de-branch.
5. Nos movemos a ese branch -> git checkout tu-nombre-de-branch.
6. Listo! empezamos a programar.
* Es posible que te pida que inicies sesión en github cada vez que interactúes con el repositorio.
### Cómo hacer pull al repositorio:
Hacer **pull** significa traer las actualizaciones del repo a tu código local, lo trabajaremos de la siguiente manera:  
1. Nos movemos a la rama (branch) **master** -> git checkout master.
2. Luego -> git pull origin master.
3. Listo! ya tienes tu código actualizado.
4. Recuerda regresar a tu rama -> git checkout tu-nombre-de-branch, **no se trabaja sobre la rama master!!**.
### Cómo hacer un commit:
Hacer **commit** significa guardar el estado de tu código hasta el momento actual, se trabaja de la siguiente manera:
1. Debemos añadir los archivos al seguimiento de git -> git add -A
2. Ahora ya podemos hacer commit con -> git commit -am "un msj que explica los cambios/añadidos que realizaste"
3. Listo! ya tienes un commit.
4. Puedes observar todos los commit del repo con -> git log. Para salir del git log presiona **Q**.
### Cómo hacer merge del master con tu rama:
Hacer **merge** significa juntar los cambios del **master** con **tu-nombre-de-branch**, es **importante** que hagas esto siempre antes de hacer push al repositorio. Lo trabajaremos de la siguiente manera:
1. Dentro de tu rama -> git merge master.
2. Si ocurren conflictos **comunícate con la persona que hizo el último aporte al repositorio**.
### Cómo hacer push al repositorio:
Hacer **push** significa enviar tus cambios/añadidos del último commit que hiciste al repositorio, es **importante** que siempre hagas push **única y exclusivamente a tu rama**.  Lo trabajaremos de la siguiente manera:
1. Dentro de tu rama (branch) -> git push origin tu-nombre-de-branch
2. Te pedirá que inicies sesión en github antes de realizar el push, probablemente tengas que generar un key.
s
Semestral DS7 - SIG
