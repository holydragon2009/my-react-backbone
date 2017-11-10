##Library 
* Manage http [axios](https://github.com/axios/axios)
* UI template [ant design](https://ant.design)
https://github.com/istarkov/google-map-react
##Blog following
* [React Component Patterns](https://medium.com/gitconnected/react-component-patterns-ab1f09be2c82)
* [How to better organize your React applications?](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1)
* [Testing-react-components-with-jest-and-enzyme](https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f)
* [Wnzyme-fast-and-simple-react-testing](https://www.theodo.fr/blog/2017/04/enzyme-fast-and-simple-react-testing/)
* [Twitter-lite-and-high-performance-react-progressive-web-apps-at-scale]( https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3)

##Testing 
1. Logic/Business with [Jest](https://facebook.github.io/jest/)
2. API with [axios](https://github.com/axios/axios) + mock + promise
3. UI components & interactions with [enzyme](http://airbnb.io/enzyme/)


##Git commit rules 

 Commit Messages

## Format of the commit message:
```
<type>(<scope>): <subject>

<body>

<footer>
```


## Message subject (first line)
First line cannot be longer than 70 characters, second line is always
blank and other lines should be wrapped at 80 characters.

### Allowed `<type>` values:

* **feature** (new feature for the user, not a new feature for build script)
* **fix** (bug fix for the user, not a fix to a build script)
* **dep** (change dependency versions)
* **docs** (changes to the documentation)
* **style** (formatting, missing semi colons, etc; no production code change)
* **refactor** (refactoring production code, eg. renaming a variable)
* **test** (adding missing tests, refactoring tests; no production code change)
* **chore** (updating grunt tasks etc; no production code change)
* **release** (updating package version numbers for a release)

### Example `<scope>` values:

* init
* runner
* watcher
* config
* web-server
* proxy
* etc.

The `<scope>` can be empty (eg. if the change is a global or difficult
to assign to a single component), in which case the parentheses are
omitted.


## Message body
* uses the imperative, present tense: `change` not `changed` nor `changes`
* includes motivation for the change and contrasts with previous behavior

For more info about message body, see:

* [Writing-git-commit-messages](http://365git.tumblr.com/post/3308646748/writing-git-commit-messages)
* [A-note-about-git-commit-messages](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)


## Message footer

### Referencing User/Tech Stories or Bugs
User/Tech Story or Bug number should be listed on a separate line in the footer prefixed with either a `"User Story"`, `"Tech Story"` or `"Bug"` keyword. 

```bash
# User Story
User Story #2312

#Tech Story
Tech Story #2333

#Bug
Bug #2323
```
## CSS Methodology
We will follow [BEM](http://getbem.com) structure rule.
Quick start with [bem-like-naming](https://cssguidelin.es/#bem-like-naming)