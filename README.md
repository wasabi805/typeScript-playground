after goint through the install process

https://stackoverflow.com/questions/39404922/tsc-command-not-found-in-compiling-typescript
or try..

run this: npx tsc index.ts
from https://stackoverflow.com/a/56279581/7857134

# Instal Process

## Instal Via Terminal

run:
npm install typescript

if issues [see](https://hdorgeval.gitbooks.io/setup-your-mac-to-develop-nativescript-apps/content/define-your-project-as-a-typescript-project.html)

## generate a tsconfig.json file

you're supposed to be able to generate a tsconfig file if you run this in the terminal:

    tsc --init

hoever if you see this error:

    bash: tsc: command not found

the add the `tsc --init` command as a script in package.json. This would look something like:

//inside package.json

    {
    "name": "webpack-typescript-tailwind",
    "version": "1.0.0",
    "description": "",
    "private": true,
    "scripts": {
        ...
        "generate-tsconfig": "tsc --init"
        ...
        },
    }

You should now see a tsconfig.json file genereate in the root directory of your app.

## convert index file into a typescript file

after installing typescript via the terminal and generating a tsconfig.json file , rename your index.js file to index.ts

next, if you ran this in the terminal:

    npx tsc ./src/index.ts

it will scan the index.ts file and create a javascript version of index.js. This file will show up next to your index.ts in the same directory. We'll want this file to show up in a dist directory.

It will be convient for you to make a script like we did for generating the tsconfig file. Here, I'll call it script "typescript".

    {
        "name": "webpack-typescript-tailwind",
        "version": "1.0.0",
        "description": "",
        "private": true,
        "scripts": {
            ...
            "typescript": "npx tsc ./src/index.ts",
            "generate-tsconfig": "tsc --init"
            ...
        },
    }

## Adding an output directory for compiled js file

First, create a dist directory in the root of your project
Next, add outDir key with value of dist into the tsconfig

Here are the tsconfig settings to add a directory for the compiled javascript. Also take notice to update html file to read from the dist directory.
![set up](./images/tsConfigOutDirSetup.png?raw=true "Optional Title")

make sure to run :

    npm run typescript

again so that the compiler will scan your index.ts file to output index.js into your dist directory.

## Troubleshooting

if you get this error:
Property 'entries' does not exist on type 'ObjectConstructor'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2017' or later.ts(2550)

It's due to using something like 'Object.entrie(someObj)...'
So that the compiler know how to handle this, you'll need to update the compiler options in ts.config to look like:

    "lib": ["es2015", "es2017.object", "dom"]

solution found [here](https://stackoverflow.com/questions/45422573/property-entries-does-not-exist-on-type-objectconstructor)

statrting at this section:

> This last will include the declarations for the very latest standard library features known to the TypeScript language. As it represents a moving target, this option should be used with care since polyfilling all of the corresponding runtime is by definition a complex task that will require research and may involve loading different polyfills depending on your target runtime.Additionally, the array nature of the "lib" option allows you to combine multiple values to match your runtime. For example, to match es2015 capable web browsers with the addition of these object methods as provided by a polyfill, you can write
