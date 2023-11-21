console.log('Sending Data...');

/*
    Notes:
    - Compiling multiple files
        1. add the external .js scripts src attribute in index.html
        2. create tsconfig.json using tsc --init command. It's automatically in this project folder where our 
           files is now managed by TypeScript.
        3. create multiple .ts files (e.g. app.ts and analytics.ts)
        4. to compile the .ts files, we can use tsc command (without pointing at a specific file)
*/
