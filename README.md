<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el respositorio

2. Ejecutar
```
npm install
```

3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```

4. Levantar la base de datos
```
docker-compose- up -d
```

5. Clonar el archivo __.env.template__ y renombrar a __.env__

6. Llenar las variables de entorno en el __.env__

7. Ejecutar la aplicacion con el comando:
```
npm run start:dev
yarn start:dev
```

8. Reconstruir la base de datos con el seed
```
https://localhost:3000/api/v2/seed
``` 


# Production build

1. Crear el archivo 
```
.env.prod
```

2. Llenar las variables de entorno de produccion

3. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```


# Notas

Heroku redeploy sin cambios:
```
git commit -m --allow-empty -m "Trigger Heroku deploy"
git push heroku <master|main>
```

## Stack usado
* MongoDB
* Nest