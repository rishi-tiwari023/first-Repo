@echo off
echo Safe Shutdown Script
echo ====================
echo.
echo This script will safely shutdown your laptop in 5 seconds.
echo Press Ctrl+C to cancel if needed.
echo.
echo Shutting down in...
timeout /t 5
echo.
choice /c YN /m "Are you sure you want to shutdown now? (Y/N)"
if errorlevel 2 (
    echo Shutdown cancelled.
    exit /b
)
echo.
echo Initiating safe shutdown...
shutdown /s /t 0
