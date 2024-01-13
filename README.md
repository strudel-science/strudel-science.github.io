# STRUDEL Website: Production

This repo houses the production build of the strudel website. The build files are copied over from the [strudel-web](https://github.com/strudel-science/strudel-web) repo into the `public` directory of this repo.

:exclamation: DO NOT edit the code in the `public` directory of this repo.

## Deploying

### 1. Go to the strudel-web repo page on GitHub

The code for the production website is handled by the [strudel-web](https://github.com/strudel-science/strudel-web) repo. From there you will run a GitHub action to copy the website build files into this repo.

### 2. Run the production deployment workflow

If the staging website looks good ([strudel.science/strudel-web](https://strudel.science/strudel-web/)), go to the [actions page for the Copy Build to Production Repo workflow](https://github.com/strudel-science/strudel-web/actions/workflows/prod.yml). Click the "Run workflow" dropdown, ensure that the `main` branch is selected, then click the "Run workflow" button. This will create build files for the website and copy them to the [strudel-science.github.io](https://github.com/strudel-science/strudel-science.github.io) repo. This will automatically trigger a new deployment to the production website at https://strudel.science.

### 3. Confirm your changes on the production website

Go to the the production website at https://strudel.science and confirm that everything looks as expected.

You're done!