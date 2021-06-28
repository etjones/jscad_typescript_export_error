Here's a minimal repo that yielded Typescript compile errors on MacOS 11.4 and Windows 10, with node v14.17.1 and Typescript v4.3.4.

To install:
``` shell
git clone git@github.com:etjones/jscad_typescript_export_error.git
cd jscad_typescript_export_error
npm install
npx tsc -p tsconfig.json
```

On both Windows & MacOS machines, this yielded the following errors:
```shell

node_modules/.pnpm/@jscad+modeling@2.5.0/node_modules/@jscad/modeling/src/maths/vec3/index.d.ts:33:33 - error TS2307: Cannot find module './unit' or its corresponding type declarations.

33 export { default as unit } from './unit'
                                   ~~~~~~~~

node_modules/.pnpm/@jscad+modeling@2.5.0/node_modules/@jscad/modeling/src/operations/transforms/index.d.ts:5:1 - error TS2308: Module './rotate' has already exported a member named 'Vec'. Consider explicitly re-exporting to resolve the ambiguity.

5 export * from './scale'
  ~~~~~~~~~~~~~~~~~~~~~~~

node_modules/.pnpm/@jscad+modeling@2.5.0/node_modules/@jscad/modeling/src/operations/transforms/index.d.ts:7:1 - error TS2308: Module './rotate' has already exported a member named 'Vec'. Consider explicitly re-exporting to resolve the ambiguity.

7 export * from './translate'
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~


Found 3 errors.
```
