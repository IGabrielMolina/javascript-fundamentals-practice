# Obtiene la ruta del archivo activo en VS Code
$activeFile = $args[0]

if (-not $activeFile) {
    Write-Output "❌ No hay ningún archivo activo en el editor. Abortando."
    exit
}

# Obtiene la carpeta padre del archivo activo
$sourceFolder = (Get-Item $activeFile).Directory.Name

# Pide el nombre para la nueva carpeta del ejercicio
$exerciseName = Read-Host -Prompt "Clonando '$sourceFolder'. Introduce el nombre para la NUEVA carpeta"

if (-not $exerciseName) {
    Write-Output "❌ Nombre inválido. Abortando."
    exit
}

# Copia la carpeta de origen a la nueva carpeta
Copy-Item -Path "./$sourceFolder" -Destination "./$exerciseName" -Recurse

Write-Output "✅ Carpeta '$exerciseName' creada como un clon de '$sourceFolder'."