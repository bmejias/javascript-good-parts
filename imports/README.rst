Importing scripts with RhinoScript and NodeJs
=============================================

Interesting difference between these two engines. None of them complains about
the double definition of function main, which is very good, but the Rhino engine
simply discards the second definition in the script foo.js
