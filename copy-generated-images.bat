@echo off
chcp 65001 >nul
cd /d "%~dp0"

set "ASSETS=C:\Users\승주\.cursor\projects\d\assets"
set "IMAGES=%~dp0images"

if not exist "%IMAGES%" mkdir "%IMAGES%"

echo 화요일(도스토예프스키) -> story-tue.png
copy /Y "%ASSETS%\story-tue.png" "%IMAGES%\story-tue.png"
if %errorlevel% neq 0 (echo 실패) else (echo 완료)

echo 수요일(에픽테토스) -> story-wed.png
copy /Y "%ASSETS%\story-wed.png" "%IMAGES%\story-wed.png"
if %errorlevel% neq 0 (echo 실패) else (echo 완료)

echo.
echo 이미지 교체 완료.
pause
