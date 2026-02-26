@echo off
echo Starting KLsubmit...
echo.
echo [1/2] Starting server on port 3000...
start /B node src/index.js
echo.
echo [2/2] Opening Chrome in 3 seconds...
timeout /t 3 >nul
start http://localhost:3000
echo.
echo KLsubmit is running! Check Chrome window.
pause
