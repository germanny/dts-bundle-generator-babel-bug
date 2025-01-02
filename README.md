# dts-bundle-generator bug

To recreate the bug, run the following commands:

```bash
npm install
npm run type-package
```

Produces the following output with error:

```
$ npm run type-package

> dts-bundle-generator-bug@1.0.0 type-package
> dts-bundle-generator --project tsconfig.json -o ./src/index.d.ts ./src/index.ts --verbose

Verbose log enabled
Total entries count=1
Compiling input files...
Using config: tsconfig.json
Changing module from .tsx to .d.ts for /Users/saddev/Sites/tmp/dts-bundle-generator-babel-bug/src/components/NiceLittleComponent/index.tsx
Changing module from .tsx to .d.ts for /Users/saddev/Sites/tmp/dts-bundle-generator-babel-bug/src/components/NiceLittleComponent/NiceLittleComponent.tsx
Processing ./src/index.ts
======= Processing /Users/saddev/Sites/tmp/dts-bundle-generator-babel-bug/node_modules/@types/react/global.d.ts =======
======= Processing /Users/saddev/Sites/tmp/dts-bundle-generator-babel-bug/node_modules/csstype/index.d.ts =======
======= Processing /Users/saddev/Sites/tmp/dts-bundle-generator-babel-bug/node_modules/@types/prop-types/index.d.ts =======
======= Processing /Users/saddev/Sites/tmp/dts-bundle-generator-babel-bug/node_modules/@types/react/index.d.ts =======
======= Processing /Users/saddev/Sites/tmp/dts-bundle-generator-babel-bug/node_modules/@types/react/jsx-runtime.d.ts =======
======= Processing /Users/saddev/Sites/tmp/dts-bundle-generator-babel-bug/src/components/NiceLittleComponent/NiceLittleComponent.d.ts =======
======= Processing /Users/saddev/Sites/tmp/dts-bundle-generator-babel-bug/src/components/NiceLittleComponent/index.d.ts =======
======= Processing src/index.d.ts =======
======= Processing /Users/saddev/Sites/tmp/dts-bundle-generator-babel-bug/node_modules/@types/aria-query/index.d.ts =======
======= Processing /Users/saddev/Sites/tmp/dts-bundle-generator-babel-bug/node_modules/@babel/types/lib/index.d.ts =======
======= Processing /Users/saddev/Sites/tmp/dts-bundle-generator-babel-bug/node_modules/@types/babel__generator/index.d.ts =======
======= Processing /Users/saddev/Sites/tmp/dts-bundle-generator-babel-bug/node_modules/@babel/parser/typings/babel-parser.d.ts =======
======= Processing /Users/saddev/Sites/tmp/dts-bundle-generator-babel-bug/node_modules/@types/babel__template/index.d.ts =======
======= Processing /Users/saddev/Sites/tmp/dts-bundle-generator-babel-bug/node_modules/@types/babel__traverse/index.d.ts =======
======= Processing /Users/saddev/Sites/tmp/dts-bundle-generator-babel-bug/node_modules/@types/babel__core/index.d.ts =======

Error: Something went wrong - getSymbolsUsingSymbol returned null but expected to be a set of symbols (symbol="/Users/saddev/Sites/tmp/dts-bundle-generator-babel-bug/node_modules/@babel/types/lib/index")
```
