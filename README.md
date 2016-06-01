# eslint-plugin-66nao

eslint config for 66nao projects

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-66nao`:

```
$ npm install eslint-plugin-66nao --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-66nao` globally.

## Usage

Add `66nao` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "66nao"
    ]
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

* Fill in provided rules here





