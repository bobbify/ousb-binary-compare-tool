const { exec } = require('child_process');
const fs = require('fs');

async function runBinary(name, inputcmd) {
    return new Promise((resolve, reject) => {
    exec(name + " " + inputcmd, async function (err, stdout, stderr) {
        if (err) {
            // node couldn't execute the command
            return;
        }

        // the *entire* stdout and stderr (buffered)
        //console.log(`stdout: ${stdout}`);
        //console.log(`stderr: ${stderr}`);
        
        resolve(stdout.trim());
        });
    });
}

function WriteFile(file, content) {
    return new Promise((resolve, reject) => {
    fs.writeFile(`${file}.txt`, content, err => {
        if (err) {
          console.error(err);
        } else {
          // file written successfully
          resolve(content)
        }
      });
    })
    }

exports.WriteFile = WriteFile
exports.runBinary = runBinary;
