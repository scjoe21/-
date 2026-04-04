@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo 이미지 복사 중...
python copy_images.py 2>nul
if %errorlevel% equ 0 (
  echo 완료.
  goto :end
)

echo Python 실패, copy 명령 시도...
call copy-provided-images.bat
:end
pause
