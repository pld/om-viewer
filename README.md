# om-viewer

A [ClojureScript](https://github.com/clojure/clojurescript) and [Om](https://github.com/swannodette/om) web application to interact with [Ona](https://ona.io)'s views

## Demo

Here is a [demo](http://peet.ldee.org/om-viewer/?#) which connects to [Ona](https://ona.io)'s staging site.

For best results load in Google Chrome and, if necessary, disable AdBlock for the page (the demo has debug options enabled which confuse AdBlock).

## Compiling

To autocompile the JavaScript run:

```sh
lein cljsbuild auto dev
```

Then open [`resources/public/html/index.html`](https://github.com/pld/om-viewer/blob/master/resources/public/html/index.html) in a web browser (Google Chrome has good ClojureScript debug support).
