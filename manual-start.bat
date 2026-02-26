@echo off
cls
echo ========================================
echo        KLsubmit - Manual Start
echo ========================================
echo.
echo [1/3] Starting server...
start /B node minimal-test.js
echo.
echo [2/3] Waiting for server to start...
timeout /t 2 >nul
echo.
echo [3/3] Opening Chrome manually...
start http://localhost:3000
echo.
echo If Chrome didn't open, try:
echo 1. Open Chrome manually
echo 2. Go to: http://localhost:3000
echo 3. You should see "KLsubmit is Working!" page
echo.
echo ========================================
pause
