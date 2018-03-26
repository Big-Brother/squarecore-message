# Dash Message Verification and Signing for Bitcore-Dash


[![NPM Package](https://img.shields.io/npm/v/squarecore-message.svg?style=flat-square)](https://www.npmjs.org/package/squarecore-message)
[![Build Status](https://img.shields.io/travis/squarepay/squarecore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/squarepay/squarecore-message)
[![Coverage Status](https://img.shields.io/coveralls/bitpay/squarecore-message.svg?style=flat-square)](https://coveralls.io/r/squarepay/squarecore-message?branch=master)

squarecore-message adds support for verifying and signing square messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main squarecore-square repo](https://github.com/squarepay/squarecore-square) for more information.

## Getting Started

```sh
npm install squarecore-message
```

```sh
bower install squarecore-message
```

To sign a message:

```javascript
var squarecore = require('squarecore-lib');
var Message = require('squarecore-message');

var privateKey = squarecore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/squarepay/squarecore-square/blob/master/CONTRIBUTING.md) on the main squarecore-square repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/squarecore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

