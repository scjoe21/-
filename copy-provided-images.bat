@echo off
chcp 65001 >nul
cd /d "%~dp0"

set "ASSETS=C:\Users\승주\.cursor\projects\d\assets"
set "IMAGES=%~dp0images"

set "WED_SRC=%ASSETS%\c__Users____AppData_Roaming_Cursor_User_workspaceStorage_dfb5e2b229cf0d89bc68360d726ccbc0_images_Gemini_Generated_Image_ze0vtoze0vtoze0v-22c3adcb-1cc7-4de9-8990-2c203046c699.png"
set "TUE_SRC=%ASSETS%\c__Users____AppData_Roaming_Cursor_User_workspaceStorage_dfb5e2b229cf0d89bc68360d726ccbc0_images_Gemini_Generated_Image_rmemanrmemanrmem-dbb9797e-67a0-43f3-bf78-682276ef05b3.png"

if not exist "%IMAGES%" mkdir "%IMAGES%"

echo Copying 수요일 (Epictetus) -> story-wed.png
copy /Y "%WED_SRC%" "%IMAGES%\story-wed.png"
if %errorlevel% neq 0 (echo FAILED) else (echo OK)

echo Copying 화요일 (Dostoevsky) -> story-tue.png
copy /Y "%TUE_SRC%" "%IMAGES%\story-tue.png"
if %errorlevel% neq 0 (echo FAILED) else (echo OK)

echo.
echo Done.
pause
