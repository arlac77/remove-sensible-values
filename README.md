[![npm](https://img.shields.io/npm/v/remove-sensible-values.svg)](https://www.npmjs.com/package/remove-sensible-values)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![minified size](https://badgen.net/bundlephobia/min/remove-sensible-values)](https://bundlephobia.com/result?p=remove-sensible-values)
[![downloads](http://img.shields.io/npm/dm/remove-sensible-values.svg?style=flat-square)](https://npmjs.org/package/remove-sensible-values)
[![GitHub Issues](https://img.shields.io/github/issues/arlac77/remove-sensible-values.svg?style=flat-square)](https://github.com/arlac77/remove-sensible-values/issues)
[![Build Status](https://travis-ci.com/arlac77/remove-sensible-values.svg?branch=master)](https://travis-ci.com/arlac77/remove-sensible-values)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/arlac77/remove-sensible-values.git)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Known Vulnerabilities](https://snyk.io/test/github/arlac77/remove-sensible-values/badge.svg)](https://snyk.io/test/github/arlac77/remove-sensible-values)
[![Coverage Status](https://coveralls.io/repos/arlac77/remove-sensible-values/badge.svg)](https://coveralls.io/r/arlac77/remove-sensible-values)

## remove-sensible-values

remove sensible values from an object tree

<!-- skip-example -->

```es6
import { removeSensibleValues } from "remove-sensible-values";

console.log(removeSensibleValues({password : "secret", other: "present" }));
```

```json
{"password" : "...", "other": "present" }
```

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [removeSensibleValues](#removesensiblevalues)
    -   [Parameters](#parameters)

## removeSensibleValues

generates a new object tree by removing sensible values like credentials from the given one

### Parameters

-   `object` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** source
-   `toBeRemoved`   (optional, default `key=>key.match(/pass|auth|key|user|secret|token/i)`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** object tree hopefully free of sensible data

# install

With [npm](http://npmjs.org) do:

```shell
npm install remove-sensible-values
```

# license

BSD-2-Clause
