#!/bin/bash
cd "$(dirname "$0")"
mkdir -p build
tsc -p tsconfig.json
lessc src/style.less build/style.css
cp src/index.html src/data.json build/
if command -v typescript-json-schema &> /dev/null
then
  typescript-json-schema src/data.d.ts typeSupportData > typeSupportData.schema.json
else
  echo "typeSupportData.schema.json not rebuilt, didn't find typescript-json-schema" >&2
fi

