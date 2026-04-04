@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo === Fly.io 배포 (kaeyugam) ===
fly deploy --config fly.toml --app kaeyugam

if %errorlevel% equ 0 (
  echo.
  echo 배포 완료.
) else (
  echo.
  echo 배포 실패. fly auth login 확인 후 다시 시도하세요.
)
pause
