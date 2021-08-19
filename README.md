# http-server-node
Simple, Based on NodeJs, command-line http server

![Example of running http-server](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/1280px-Node.js_logo_2015.svg.png)

# http-server-node: on NodeJs based, command-line http server

`http-server-node` is a http server. It is not for Production usage only for test or learning purpose


## Installation:

#### Globally via `npm`

    npm install --global http-server-node

This will install `http-server-node` globally so that it may be run from the command line anywhere.


#### Running on-demand:

Using `npx` you can run the script without installing it first:

    npx http-server-node 
     
#### As a dependency in your `npm` package:

    npm install http-server-node

## Usage:

     http-server-node [entryPoint]

`[entryPoint]` defaults to `./index.html` (Relative to Current Working directory)

*Now you can visit http://http://127.0.0.1:3030 to view your server*


## Available Options:

| Command         | 	Description         | Defaults  |
| -------------  |-------------|-------------|
|`-p` or `--port` |Port to use..|3030|
|`-o ` or `--open`  |Open browser window after starting the server.  |false |
|`-h` or `--host`  |Host to use |  127.0.0.1 |
|`-e` or `--entryPoint`  |Entry Point to use |./index.html |


## Magic Files

- `index.html` will be served as the default file to any directory requests.


