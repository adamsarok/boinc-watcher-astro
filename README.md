# BOINC watcher

Simple static app for displaying BOINC host and project stats.

# Instructions

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

# Setup

Data is fetched during build time from Azure Function App (https://github.com/adamsarok/BoincWatcherService) using the following environment variables:

FUNCTION_APP_URI=https://my-functions.azurewebsites.net
X_FUNCTIONS_KEY=your_function_key_here

# Attributions

Favicon was generated using the following graphics from Twitter Twemoji:

- Graphics Title: 1f440.svg
- Graphics Author: Copyright 2020 Twitter, Inc and other contributors (https://github.com/twitter/twemoji)
- Graphics Source: https://github.com/twitter/twemoji/blob/master/assets/svg/1f440.svg
- Graphics License: CC-BY 4.0 (https://creativecommons.org/licenses/by/4.0/)