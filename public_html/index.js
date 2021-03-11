const port = process.env.PORT || 3000;

import {Server} from 'http';
const s = Server((req, res) => {
    res.end('OK\n');
});
s.listen(port);
alert("Hello");
