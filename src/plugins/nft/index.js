const { exec } = require("child_process");




export function serverStatus(body) {

    exec("./cli-wallet server-status", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

}


export function sendAsset(color, address) {

    let command = `./cli-wallet send-funds -color ${color} -amount 1 -dest-addr ${address}`
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

}

