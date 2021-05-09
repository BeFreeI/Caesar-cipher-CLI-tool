# Caesar-cipher-CLI-tool

For using the prgramm clone repo, go to directory "caesar-cipher-cli" and install all dependencies with command:

```bash
$ npm i
```

for code/decode text in file you should have files 'input.txt' and 'output.txt' in directory "caesar-cipher-cli" (or some different files for input and output text)

so, cli take parameters:

1. **-s, --shift**: a shift - required
2. **-i, --input**: an input file
3. **-o, --output**: an output file
4. **-a, --action**: an action encode/decode - required

you can set shift for cipter throught parameter "shift"
and you can decode or encode text with parameter "action"

all reult writes to te end of file "output.txt"

for encoding/decoding from file in file:

**example:**

```bash
$ node index -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```bash
$ node index —action encode —shift 7 —input input.txt —output output.txt
```

```bash
$ node index —action decode —shift 7 —input input.txt —output output.txt
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

for encoding/decoding from console in file:

**example**

```bash
$ node index —action encode —shift 7 —output output.txt
This is secret. Message about "_" symbol!
```

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

for encoding/decoding from file in console:

**example**

```bash
$ node index —action encode —shift 7 —input input.txt
`Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
```

> input.txt
> This is secret. Message about "_" symbol!

for instant encoding without files (throught console) do not use parameters input and output

**example**

```bash
$ node index -s 7 —action encode
This is secret. Message about "_" symbol!
Vjku ku ugetgv. Oguucig cdqwv "_" uaodqn!
```
