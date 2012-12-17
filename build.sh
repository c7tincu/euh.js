#!/bin/sh

rm -rvf dist
mkdir dist
# node 2stojs.js src/euh.2s src/euh.js
# node 2stojs.js src/alter-euh.2s src/alter-euh.js
# node 2stojs.js src/ender.2s src/ender.js
# node 2stojs.js test/euh-browser.2s test/euh-browser.js
# node 2stojs.js test/euh-node.2s test/euh-node.js
# node 2stojs.js test/euh-ender.2s test/euh-ender.js
cp src/euh.js dist/euh.js
cp src/ender.js dist/ender.js
