@echo off
title Deploy to GitHub - PadelSphere
echo ========================================================
echo          DEPLOY PROYEK KE GITHUB REPOSITORY
echo          Repository: solusilokal/PadelSphere
echo ========================================================
echo.
set "PATH=%LOCALAPPDATA%\Programs\nodejs;%LOCALAPPDATA%\Programs\Git\cmd;%LOCALAPPDATA%\Programs\gh;%PATH%"

echo [1/3] Melakukan build aset produksi (npm run build)...
call npm.cmd run build
if %errorlevel% neq 0 (
    echo [ERROR] Build gagal. Silakan periksa pesan error di atas.
    pause
    exit /b 1
)
echo [OK] Build berhasil.
echo.

echo [2/3] Menyiapkan commit git...
git add .
git commit -m "feat: complete PadelSphere mini website for deployment" 2>nul
echo [OK] Git commit siap.
echo.

echo [3/3] Mengupload (Push) ke GitHub: https://github.com/solusilokal/PadelSphere ...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo [SUKSES] Proyek berhasil di-deploy ke GitHub!
    echo Repository: https://github.com/solusilokal/PadelSphere
    echo ========================================================
) else (
    echo.
    echo [INFO] Jika gagal karena izin akses, pastikan akun GitHub Anda memiliki hak akses write/push ke repository solusilokal/PadelSphere.
)
echo.
pause
