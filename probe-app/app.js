'use strict';

const port = process.env.PROBE_APP_PORT ? process.env.PROBE_APP_PORT : 3000;

const express = require('express');
const app = express();
app.use((request, response) => {

    const result = {
        url: request.originalUrl,
        host: request.headers.host,
        env_vars: process.env,
    }
    console.log(`call: ${result.host} ${result.url}`);
    response
        .status(200)
        // .send(result);
        .send(`<pre>${JSON.stringify(result, null, 2)}</pre>`)
    }
);

app.listen(port, (error) => {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    console.log(`service-nylas is listening on port ${port}`);
});
