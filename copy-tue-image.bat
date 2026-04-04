@echo off
chcp 65001 >nul
cd /d "%~dp0"
set "SRC=C:\Users\승주\.cursor\projects\d\assets\story-tue.png"
set "DEST=%~dp0images\story-tue.png"
if not exist "%~dp0images" mkdir "%~dp0images"
copy /Y "%SRC%" "%DEST%"
if %errorlevel% equ 0 (echo Copied successfully.) else (echo Copy failed.)
pause
