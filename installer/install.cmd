@echo off
rem Joins the installer parts next to this script, checks the result and starts it.
rem GitHub does not accept files over 100 MB, so the installer is stored in parts.
setlocal
cd /d "%~dp0"
set "OUT=T3-Code-0.1.9-x64.exe"
set "EXPECTED=03f5a14c8c846e0f21b36d72883ca96c71a630274b6d214d44370a4afc4609d2"

for %%P in (001 002 003) do (
  if not exist "%OUT%.%%P" (
    echo Missing "%OUT%.%%P". Put all three parts in this folder and run install.cmd again.
    pause
    exit /b 1
  )
)

echo Joining the installer...
copy /b "%OUT%.001" + "%OUT%.002" + "%OUT%.003" "%OUT%" >nul
if errorlevel 1 (
  echo Could not join the parts.
  pause
  exit /b 1
)

set "ACTUAL="
for /f "skip=1 delims=" %%H in ('certutil -hashfile "%OUT%" SHA256') do if not defined ACTUAL set "ACTUAL=%%H"
set "ACTUAL=%ACTUAL: =%"
if /i not "%ACTUAL%"=="%EXPECTED%" (
  echo The joined installer does not match its checksum. Download the parts again.
  del "%OUT%"
  pause
  exit /b 1
)

echo Starting the installer...
start "" "%OUT%"
