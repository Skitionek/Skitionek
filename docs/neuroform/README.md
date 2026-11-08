# Vendored Neuroform build

`neuroform.standalone.js` is the standalone build of [Skitionek/Neuroform](https://github.com/Skitionek/Neuroform)
(MIT, see `LICENSE`), built from commit `c11b5bd758f84e50232da4fd1cb834928e82f060` with:

```
npm install && npm run build:lib   # dist-lib/neuroform.standalone.js
```

It bundles three.js (MIT) and the scan-brain grid derived from the MNI ICBM152 template,
whose notice is in `brain-mni152.LICENSE.txt`. It defines the `<neuro-form>` element used for the
opening animation on the portfolio page. To update it, rebuild from the repository and replace the file.

The placeholder stills in `../media/neuroform-hero-*.jpg` were rendered with the repository's own
`neuroform-snapshot` tool: `--width 1250 --height 1000 --nodes 70000 --theme dark|light --background 0A101A|F3F5F9`.
