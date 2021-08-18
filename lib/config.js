const mappedOption = new Map([
    ['port', 'port'],
    ['p', 'port'],
    ['o', 'open'],
    ['e', 'entryPoint'],
    ['open', 'open'],
    ['host', 'host'],
    ['entryPoint', 'entryPoint']
]);

const config = {
    port: 3000,
    open: false,
    host: '127.0.0.1',
    entryPoint: 'index.html'
};

function setOption(optionName, optionValue) {
    config[optionName] = optionValue
}

function getOption(optionName) {
    return config[optionName];
}


module.exports = {
    config,
    setOption,
    getOption,
    mappedOption
}