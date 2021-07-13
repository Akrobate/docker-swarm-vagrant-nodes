'use strict';

const port = process.env.PROBE_APP_PORT ? process.env.PROBE_APP_PORT : 3000;

require('express')()
    .use(
        (request, response) => {
            const result = {
                url: request.originalUrl,
                host: request.headers.host,
                env_vars: formatEnvVars(process.env),
            }
            const result_html = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
            console.log(`call: ${result.host} ${result.url}`);
            response
                .send(result_html)
        }
    )
    .listen(
        port,
        (error) => {
            if (error) {
                console.log(error);
                process.exit(1);
            }
            console.log(`probe app is listening on port ${port}`);
    });


function formatEnvVars(process_env) {
    const npm_config = {};
    const envs = {};
    Object.keys(process_env).forEach((item) => {
        if (item.includes('npm_config')) {
            npm_config[item] = process_env[item];
        } else {
            envs[item] = process_env[item];
        }
    });
    return {
        envs,
        npm_config,
    };
}
