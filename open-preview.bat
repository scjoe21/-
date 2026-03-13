@echo off
cd /d "%~dp0"
echo Starting server at http://localhost:8080
start /b python -m http.server 8080
timeout /t 2 /nobreak >nul
start http://localhost:8080
echo.
echo Browser opened. Server running at http://localhost:8080
echo Close this window to stop the server.
pause
