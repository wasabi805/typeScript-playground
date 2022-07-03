after goint through the install process

https://stackoverflow.com/questions/39404922/tsc-command-not-found-in-compiling-typescript
or try..

run this: npx tsc index.ts
from https://stackoverflow.com/a/56279581/7857134

## Troubleshooting

if you get this error:
Property 'entries' does not exist on type 'ObjectConstructor'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2017' or later.ts(2550)

It's due to using something like 'Object.entrie(someObj)...'
So that the compiler know how to handle this, you'll need to update the compiler options in ts.config to look like:

    "lib": ["es2015", "es2017.object", "dom"]

solution found [here](https://stackoverflow.com/questions/45422573/property-entries-does-not-exist-on-type-objectconstructor)

statrting at this section: ![set up](./images/tsConfigOutDirSetup.png?raw=true "Optional Title")

This last will include the declarations for the very latest standard library features known to the TypeScript language. As it represents a moving target, this option should be used with care since polyfilling all of the corresponding runtime is by definition a complex task that will require research and may involve loading different polyfills depending on your target runtime.

Additionally, the array nature of the "lib" option allows you to combine multiple values to match your runtime. For example, to match es2015 capable web browsers with the addition of these object methods as provided by a polyfill, you can write

## Adding an output directory for compiled js file

Here are the tsconfig settings to add a directory for the compiled javascript. Also take notice to update html file to read from the dist directory.
