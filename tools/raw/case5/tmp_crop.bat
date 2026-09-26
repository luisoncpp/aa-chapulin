@echo off
cd /d C:\Proyectos\ace-attorney-gemini\tools\raw\case5
ffmpeg -y -v error -i plate_foto_pericial.jpg -vf "crop=440:300:560:700,scale=1320:-1" tmp_pl_tomo2.png
ffmpeg -y -v error -i plate_foto_pericial.jpg -vf "crop=520:320:830:560,scale=1200:-1" tmp_pl_cuerpo2.png
