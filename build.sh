#!/bin/bash
cd "$(dirname "$0")"
mkdir -p build
tsc -p tsconfig.json
lessc src/style.less build/style.css
cp src/index.html src/data.json build/
