
run this project

npm i 
npm start

to compile 

npm run grunt

to run test cases

npm test

#########################################################################################
Creating Node Project with Typescript  without grunt-file
  
Global Installation : 
1 . npm install -g typescript 
 2.  nom install -g typings 

then set project directory

 1 . mkdir <express-ts> ( directory name ) 
 2. cd <expres-ts>  ( switch to directoy )

execute command in terminal

1. tsc —init
   2. tsconfig.json 
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": false,
        "sourceMap": false,
	"outDir": "build"
    },
    "exclude": [
        "node_modules"
    ]
}

3.run typings init 

then run the following commands in terminal

typings install dt~node --save --global
typings install dt~es6-shim --save --global
typings install dt~express --save
typings install dt~serve-static --save 
typings install dt~express-serve-static-core --save 
typings install dt~mime --save

then run 

 npm init -y 


then install your desired  server side framework

touch command is used to create file in ubuntu and mac system 



for test cases :

typings install dt~mocha —global  to correct the descibe not find

run tsc to compile 

and then go to the build directory and execute node server.js/app.js to start your node-server




##########################################################################################

TS project with grunt file


Typescript with gruntfile 

create project folder 



 then mkdir bin  - > cd bin — > touch www ( to create file in macOS)

write the /bin/ww

code from the repo in the your file

1.npm install typescript --save
2. npm install grunt --save
3.npm install grunt-cli --save
4.npm install grunt-ts --save
5.npm install grunt-tslint --save
6.npm install grunt-contrib-watch --save
7.npm install tslint --save
8. touch gruntfile.js

create grunt file and run 
 npm run grunt

install express , body-parser  and required dependencies

install typings 
npm install typings --save

