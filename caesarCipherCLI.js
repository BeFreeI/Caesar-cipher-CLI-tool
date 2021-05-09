const fs = require('fs');
const { pipeline } = require('stream');
const Transform = require('./stream');
const { Command } = require('commander');
const program = new Command();

function parseShift(value) {
    const num = Number(value);
    if(Number.isNaN(num)) {
        process.stderr.write(`Unexpected value ${value}`);
        process.exit(-1);
    } else {
        return num;
    }
}

function parseInputFile(path) {
    path = path.trim();
    if (fs.existsSync(path)) {
        return fs.createReadStream(path, {
            flags: "r"
        });
    } else {
        process.stderr.write(`File ${path} not exist`);
        process.exit(-1);
    }
}

function parseOutputFile(path) {
    path = path.trim();
    if (fs.existsSync(path)) {
        return fs.createWriteStream(path, {
            flags: "a"
        })
    } else {
        process.stderr.write(`File ${path} not exist`);
        process.exit(-1);
    }
}

function parseAction(value) {
    switch(value) {
        case 'decode':
            return true;
        case 'encode':
            return false;
        default:
            process.stderr.write(`Unexpected value ${value}`);
            process.exit(-1);
    }
}

program
    .storeOptionsAsProperties()
    .option('-s, --shift <number>', 'quantity of shift', parseShift)
    .option('-i, --input <path>', 'path to input file', parseInputFile)
    .option('-o, --output <path>', 'path to output file', parseOutputFile)
    .option('-a, --action <string>', 'encode/code', parseAction);
;

program.parse(process.argv);

program.output = program.output || process.stdout;
program.input = program.input || process.stdin;

if(program.shift === undefined) {
    process.stderr.write(`Expect parametr shift`);
    process.exit(-1);
}

if(typeof program.action === 'function') {
    process.stderr.write(`Expect parametr of action`);
    process.exit(-1);
}

program.input.on("end", () => {
    program.output.write('\n');
});


const trans = new Transform((program.action)? -program.shift : program.shift);

pipeline (
    program.input,
    trans,
    program.output,
    (err) => {
        if(err) {
            console.log("err");
        } else {
            console.log("success");
        }
    }
);
