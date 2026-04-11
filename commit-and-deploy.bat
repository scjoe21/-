@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo === Git Status ===
git status --short

echo.
echo === Git Add ===
git add -A

echo.
echo === Git Commit ===
git commit -m "모바일 디자인 개선: 본문 16px, 터치영역 44px, 다크모드, 요일별 미세톤"

echo.
echo === Git Push ===
git push origin main

echo.
echo Done. GitHub Pages will auto-deploy from git push above.
pause
