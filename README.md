setting up a tsconfig file: https://code.visualstudio.com/docs/typescript/typescript-compiling


after goint through the install process

https://stackoverflow.com/questions/39404922/tsc-command-not-found-in-compiling-typescript
or try..

run this: npx tsc index.ts
from https://stackoverflow.com/a/56279581/7857134

##Troubleshooting

if you get this error:
  Property 'entries' does not exist on type 'ObjectConstructor'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2017' or later.ts(2550)
  
It's due to using something like 'Object.entrie(someObj)...'
So that the compiler know how to handle this, you'll need to update the compiler options in ts.config to look like:

  ddd
  
solution found [here](https://stackoverflow.com/questions/45422573/property-entries-does-not-exist-on-type-objectconstructor)
