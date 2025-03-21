# Script para desplegar en GitHub Pages (PowerShell)

# Asegúrate de estar en la rama principal
git checkout main

# Instala dependencias si es necesario
npm install

# Construye el proyecto
npm run build

# Crea una carpeta temporal para el despliegue
New-Item -ItemType Directory -Force -Path tmp-deploy
Copy-Item -Path out\* -Destination tmp-deploy -Recurse
Copy-Item -Path .gitignore -Destination tmp-deploy
New-Item -ItemType File -Path tmp-deploy\.nojekyll

# Guarda el commit actual
$COMMIT_MESSAGE = (git log -1 --pretty=%B)
$COMMIT_HASH = (git rev-parse --short HEAD)

# Cambia a la rama gh-pages (la crea si no existe)
$branchExists = git show-ref --quiet refs/heads/gh-pages
if ($branchExists -eq $true) {
    git checkout gh-pages
} else {
    git checkout --orphan gh-pages
    git rm -rf .
}

# Copia los archivos compilados
Copy-Item -Path tmp-deploy\* -Destination . -Recurse
Copy-Item -Path tmp-deploy\.nojekyll -Destination .

# Elimina la carpeta temporal
Remove-Item -Path tmp-deploy -Recurse -Force

# Agrega todos los archivos
git add -A

# Realiza el commit
git commit -m "Deploy: $COMMIT_MESSAGE ($COMMIT_HASH)"

# Sube los cambios
git push origin gh-pages --force

# Vuelve a la rama principal
git checkout main

# Limpia archivos no deseados
Remove-Item -Path out -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "¡Despliegue completado! Tu sitio estará disponible en https://TU-USUARIO.github.io/TU-REPOSITORIO/"