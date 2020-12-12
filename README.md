# Small React Projects

[![Website gkampitakis.github.io/small-react-projects](https://img.shields.io/website-up-down-green-red/https/gkampitakis.github.io/small-react-projects.svg)](https://gkampitakis.github.io/small-react-projects/)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

This is a repository for learning and practising concepts in React such as `Hooks` and `Testing`.

It follows this [React Course](https://www.youtube.com/watch?v=a_7Z7C_JCyo) and extends functionality in some projects.

You can [visit](https://gkampitakis.github.io/small-react-projects) and see the result of this repo.

## Usage

Install dependencies: `npm run install`

Run tests: `npm run test`

Run it locally: `npm run start`

## Contents

-   You can find projects under `/projects` folder.
-   You can find tests under `*.spec.ts` files.
-   Some commonly used hooks are under `/src/hooks`.

## Resources

While working on this I used:

### Learning & Articles

-   [React Course](https://www.youtube.com/watch?v=a_7Z7C_JCyo) for project ideas.
-   [Testing Library](https://testing-library.com/) for running tests and
    [Kent C. Dodds'](https://kentcdodds.com/blog/) blog for testing best practices and tips.
-   [Progressively Loading Images](https://codeburst.io/how-to-progressively-load-images-in-react-using-hooks-80c50fd447cd) and [React Blurhash](https://github.com/woltapp/react-blurhash) used in [Photo Album](https://gkampitakis.github.io/small-react-projects/photo-album).
-   Implementations of useful react hooks https://usehooks.com/ and typescript https://usehooks-typescript.com/.
-   Dark Theme in React by Kent C. Dodds, [css-variables](https://epicreact.dev/css-variables/).
-   [Embracing modern image formats](https://www.joshwcomeau.com/performance/embracing-modern-image-formats/) Optimizing images.

### Material

-   [Undraw](https://undraw.co/illustrations) for images and illustrations.
-   [Unsplash](https://unsplash.com/) The internet’s source of freely-usable images.


### Notes: 

- Project Cocktails

  On this project a context is used in order to inject data between components and share functions. Also there are some nested routes for navigating to `/cocktails/details` and `/cocktails/about`. One issue that was noticed is that the context gets re-rendered on every navigation. Not sure if this intended or can be resolved, the only solution I found is moving the context provider wrapping outside of the Router. 