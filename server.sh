#!/bin/bash
helpFunction()
{
   echo ""
   echo "Usage: $PROGRAM_NAME [ -d | -p | -s ]"
   echo -e "\t-d Run server on development mode"
   echo -e "\t-p Run server on production mode"
}

STRMODE="MODE: "
PROGRAM_NAME=$0

if [[ $1 == "-d" ]]
then
    echo $STRMODE "Development"
    yarn --cwd ./client run build
    mkdir -p ./server/dist
    cp -r ./client/build ./server/dist
    npm run start --prefix ./server
elif [[ $1 == "-p" ]]
then
    echo $STRMODE "Production"
    yarn --cwd ./client run build
    mkdir -p ./server/dist
    cp -r ./client/build ./server/dist
    npm run start --prefix ./server
else
    export DJANGO_MODE=""
    helpFunction
    return
fi
