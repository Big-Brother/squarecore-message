# Dash Message Verification and Signing for Bitcore-Dash


[![NPM Package](https://img.shields.io/npm/v/bitcore-message-square.svg?style=flat-square)](https://www.npmjs.org/package/bitcore-message-square)
[![Build Status](https://img.shields.io/travis/squarepay/bitcore-message-square.svg?branch=master&style=flat-square)](https://travis-ci.org/squarepay/bitcore-message-square)
[![Coverage Status](https://img.shields.io/coveralls/bitpay/bitcore-message-square.svg?style=flat-square)](https://coveralls.io/r/squarepay/bitcore-message-square?branch=master)

bitcore-message-square adds support for verifying and signing square messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main bitcore-square repo](https://github.com/squarepay/bitcore-square) for more information.

## Getting Started

```sh
npm install bitcore-message-square
```

```sh
bower install bitcore-message-square
```

To sign a message:

```javascript
var bitcore = require('bitcore-lib-square');
var Message = require('bitcore-message-square');

var privateKey = bitcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/squarepay/bitcore-square/blob/master/CONTRIBUTING.md) on the main bitcore-square repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

