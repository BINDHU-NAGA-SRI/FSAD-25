@echo off
echo ========================================
echo        Starting KLsubmit Platform
echo ========================================
echo.
echo [1/3] Starting server...
node server.js
echo.
echo [2/3] Server is running on http://localhost:3000
echo [3/3] Opening Chrome...
timeout /t 2 >nul
start chrome http://localhost:3000
echo.
echo KLsubmit is now running!
echo Press Ctrl+C to stop the server
echo ========================================
pause
