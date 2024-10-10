const config = require('./config.json')
const chalk = require('chalk');
const { runBinary, WriteFile } = require('./runBinary');
var NotMatches = []

increment = 0
i = config.test_commands.length

async function compare() {
    test = config.test_commands[increment]
    await WriteFile("p_ADC5", test.adc5)
    await WriteFile("pinc", test.pinc)
    studentResponse = await runBinary(config.EnterYourFileName,test.command)
    sampleResponse = await runBinary(config.SampleBinaryFileName, test.command)
    

    if (studentResponse !== sampleResponse) {
        console.log(chalk.red("Not a match: " + test.command))
        NotMatches.push(test)
        console.log("Student Response: " + studentResponse)
        console.log("Sample Response: " + sampleResponse)
    } else {
        console.log(chalk.green("Match: " + test.command ))
        console.log("Output: " + sampleResponse)
    }
    if (i-1 > increment) {
    setTimeout(compare,0)
    }
    increment++
};



compare()