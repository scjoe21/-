@echo off
chcp 65001 >nul
set "SRC=C:\Users\승주\.cursor\projects\d\assets\c__Users____AppData_Roaming_Cursor_User_workspaceStorage_dfb5e2b229cf0d89bc68360d726ccbc0_images_Gemini_Generated_Image_ze0vtoze0vtoze0v-6ff481f6-d4a9-4b69-9432-f5a77ff6ea4b.png"
set "DEST=%~dp0images\story-wed.png"
if not exist "%~dp0images" mkdir "%~dp0images"
copy /Y "%SRC%" "%DEST%"
if %errorlevel% equ 0 (echo Copied successfully.) else (echo Copy failed.)
