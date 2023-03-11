let log = new Log(document.querySelector('.log'))
let char = new Knight('jr souza');
let monster = new BigMostner();

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)

stage.start();