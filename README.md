# eslint-plugin-66nao

eslint config for 66nao projects

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-config-66nao`:

```
$ npm install eslint-config-66nao --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-config-66nao` globally.

## Usage

Add `66nao` to the extends section of your `.eslintrc` configuration file.

```json
{
  "extends": "66nao",
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "66nao/rule-name": 2
    }
}
```

## Supported Rules
This follows the [vue rules](https://github.com/vuejs/eslint-config-vue) and overwrite some rules:
* `'semi': [2, 'always']`
* `'operator-linebreak': [2, 'before']`
