REM ************************************************************
REM IMPORTANT!
REM Memba.Blog is the original project where any modifications
REM of locked read-only files should be completed.
REM ************************************************************


REM ------------------------------------------------------------
REM Root files
REM ------------------------------------------------------------

REM copy all dot files
ATTRIB -R .\.*
COPY ..\..\Memba\Memba.Blog\.* .\ /Y
ATTRIB +R .\.*

REM TODO Coverage

REM Dockerfile
ATTRIB -R .\Dockerfile
COPY ..\..\Memba\Memba.Blog\Dockerfile .\ /Y
ATTRIB +R .\Dockerfile

REM gruntfile.js
ATTRIB -R .\gruntfile.js
COPY ..\..\Memba\Memba.Blog\gruntfile.js .\ /Y
ATTRIB +R .\gruntfile.js

REM LICENSE
ATTRIB -R .\LICENSE-GPLv3
COPY ..\..\Memba\Memba.Blog\LICENSE-GPLv3 .\ /Y
ATTRIB +R .\LICENSE-GPLv3

REM webpack
ATTRIB -R .\webpack.config.js
COPY ..\..\Memba\Memba.Blog\webpack.config.js .\ /Y
ATTRIB +R .\webpack.config.js


REM ------------------------------------------------------------
REM Support Directories
REM ------------------------------------------------------------

REM Copy Javascript files
XCOPY ..\..\Memba\Memba.Blog\js .\js /E /I /R /Y
ATTRIB +R .\js\*.* /S

REM Copy styles
XCOPY ..\..\Memba\Memba.Blog\styles .\styles /E /I /R /Y
ATTRIB +R .\styles\*.* /S

REM TODO Copy tests

REM Copy web modules
XCOPY ..\..\Memba\Memba.Blog\web_modules .\web_modules /E /I /R /Y
ATTRIB +R .\web_modules\*.* /S


REM ------------------------------------------------------------
REM Web Application
REM ------------------------------------------------------------

XCOPY ..\..\Memba\Memba.Blog\webapp .\webapp /E /I /R /Y /EXCLUDE:excludelist.txt
ATTRIB +R .\webapp\*.* /S
ATTRIB -R .\webapp\cache\*.*
ATTRIB -R .\webapp\config\*.json
ATTRIB -R .\webapp\public\*.ico
ATTRIB -R .\webapp\public\assets\*.*
ATTRIB -R .\webapp\views\home.ejs
ATTRIB -R .\webapp\views\logo.ejs
