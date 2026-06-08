const http = require('http');
const url = require('url')

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

const server = http.createServer((req, res) => {
    const parsed = url.parse(req.url, true);

    if (!parsed.pathname.includes('rayimbekoveldar7_gmail_com')) {
        res.writeHead(404);
        res.end('Not found');
        return;
    }
    
    const x = parsed.query.x;
    const y = parsed.query.y;

    const xNum = Number(x);
    const yNum = Number(y);

    const isNatural = n => 
        Number.isInteger(n) && n > 0;

    res.setHeader('Content-Type', 'text/plain');

    if (!isNatural(xNum) || !isNatural(yNum)) {
        res.end('NaN');
    } else {
        res.end(String(lcm(xNum, yNum)));
    }
})

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})