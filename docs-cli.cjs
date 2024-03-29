#!/usr/bin/env node

const os = require('os');
const {spawn} = require('child_process');
const path = require('path');

const cliPath = path.join(__dirname, 'node_modules', '@shopware-docs', 'cli', 'dist', 'docs-cli.js');
const args = process.argv.slice(2);

const child = os.platform() === 'win32'
    ? spawn('node', [cliPath, ...args], {stdio: 'inherit'})
    : spawn(cliPath, [...args], {stdio: 'inherit'});

child.on('exit', (code) => {
    process.exit(code);
});