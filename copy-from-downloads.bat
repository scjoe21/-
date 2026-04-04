@echo off
setlocal enabledelayedexpansion
chcp 65001 >nul
cd /d "%~dp0"

set "DOWNLOADS=%USERPROFILE%\Downloads"
set "IMAGES=%~dp0images"

if not exist "%IMAGES%" mkdir "%IMAGES%"

:: Get first two files by date (newest first) - 1st=수요일, 2nd=화요일
set "FIRST_FILE="
set "SECOND_FILE="
for /f "delims=" %%a in ('dir /b /o:-d "%DOWNLOADS%\*.png" 2^>nul') do (
  if not defined FIRST_FILE (
    set "FIRST_FILE=%%a"
  ) else if not defined SECOND_FILE (
    set "SECOND_FILE=%%a"
    goto :done
  )
)
:done

if not defined FIRST_FILE (
  echo No PNG files found in Downloads.
  pause
  exit /b 1
)

if not defined SECOND_FILE (
  echo Only one PNG found. Copying as story-wed.png
  copy /Y "%DOWNLOADS%\!FIRST_FILE!" "%IMAGES%\story-wed.png"
  goto :end
)

echo First file (수요일): !FIRST_FILE! -> story-wed.png
copy /Y "%DOWNLOADS%\!FIRST_FILE!" "%IMAGES%\story-wed.png"

echo Second file (화요일): !SECOND_FILE! -> story-tue.png
copy /Y "%DOWNLOADS%\!SECOND_FILE!" "%IMAGES%\story-tue.png"

:end
echo.
echo Done.
pause
