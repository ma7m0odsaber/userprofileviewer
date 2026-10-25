@echo off
setlocal

set "PROJECT_DIR=%~dp0"

echo Starting User Profile Viewer...
echo.
echo Make sure MongoDB is running on localhost:27017 before using the app.
echo.

start "User Profile Viewer - Backend" cmd /k "cd /d ""%PROJECT_DIR%backend"" && npm start"
start "User Profile Viewer - Frontend" cmd /k "cd /d ""%PROJECT_DIR%frontend"" && npm start"

echo Backend:  http://localhost:3000
echo Frontend: http://localhost:4200
echo.
echo Close the Backend and Frontend windows to stop the app.

endlocal
