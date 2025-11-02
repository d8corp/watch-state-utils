
<a href="https://github.com/d8corp/watch-state">
  <img src="https://raw.githubusercontent.com/d8corp/watch-state/v3.3.1/img/logo.svg" align="left" width="90" height="90" alt="InnetJs logo by Mikhail Lysikov">
</a>

# &nbsp; @watch-state/utils

&nbsp;

[![NPM](https://img.shields.io/npm/v/@watch-state/utils.svg)](https://www.npmjs.com/package/@watch-state/utils)
[![downloads](https://img.shields.io/npm/dm/@watch-state/utils.svg)](https://www.npmtrends.com/@watch-state/utils)
[![tests](https://img.shields.io/github/actions/workflow/status/d8corp/watch-state-utils/node.js.yml?branch=main&label=tests
)](https://github.com/d8corp/watch-state-utils/actions/workflows/node.js.yml)
[![changelog](https://img.shields.io/badge/Changelog-⋮-brightgreen)](https://changelogs.xyz/@watch-state/utils)
[![license](https://img.shields.io/npm/l/@watch-state/utils)](https://github.com/d8corp/watch-state-utils/blob/main/LICENSE)

## Index

## Overview
`@watch-state/utils` is a utility package for [watch-state](https://github.com/d8corp/watch-state).

[![stars](https://img.shields.io/github/stars/d8corp/watch-state-utils?style=social)](https://github.com/d8corp/watch-state-utils/stargazers)
[![watchers](https://img.shields.io/github/watchers/d8corp/watch-state-utils?style=social)](https://github.com/d8corp/watch-state-utils/watchers)


## Index

<sup>[Install](#install) • [use](#use) • [inject](#inject)</sup>


## Install
###### [🏠︎](#index) / Install

To get started with this package, run the following command:

```shell
npm i @watch-state/utils
```

## use
###### [🏠︎](#index) / use

The `use` function helps you retrieve the current value from an observable.

```shell
import { State } from 'watch-state'
import { use } from '@watch-state/utils'

const name = new State('Mike')

console.log(use(name)) // 'Mike'
```

## inject
###### [🏠︎](#index) / inject

The `inject` function allows you to transform observable value using a callback.

```shell
import { State } from 'watch-state'
import { inject } from '@watch-state/utils'

const name = new State('Mike')

console.log(inject('Mike', name => `Name: ${name}`)) // 'Name: Mike'
console.log(inject(name, name => `Name: ${name}`)) // () => 'Name: Mike'
```

## Links
You can find more tools [here](https://www.npmjs.com/search?q=%40watch-state)

## Issues
If you find a bug or have a suggestion, please file an issue on [GitHub](https://github.com/d8corp/watch-state-utils/issues)

[![issues](https://img.shields.io/github/issues-raw/d8corp/watch-state-utils)](https://github.com/d8corp/watch-state-utils/issues)

