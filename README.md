# TeslaConnect

Angular application to enable interaction with your Tesla vehicles.

This web application can also be packaged as an Electron application.

## Yarn usage

Yarn is highly recommended instead of npm for the whole project.

If you do not have installed already, run `npm install -g yarn` to install it globally.

## Developing locally

### Resolving project dependencies

Run `yarn install` to install project dependencies.

### Launching DEV servers

Run `yarn run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

The application needs also to connect to the Tesla API endpoints through a reverse proxy. Run `docker-compose up` to start NGINX reverse proxy.

### HTTPS

Obviously, SSL communication is enabled between the dev server (angular app) and the backend docker container (the reverse proxy).

As self signed certificates are used locally for SSL you will be forced to allow insecure localhost in your browser.

In Chrome all you need to do is to open enter this URL chrome://flags/#allow-insecure-localhost into the address bar to find the configuration setting for allowing invalid certificates for localhost.

Click on Enable and restart Chrome. From now on invalid certificates on localhost (and just on localhost) are ignored and you can develop with your self-signed certificate.

More information: https://improveandrepeat.com/2016/09/allowing-self-signed-certificates-on-localhost-with-chrome-and-firefox/

## Production build

Run `yarn run build` to generate production ready angular app.

## Electron packaging

Run `yarn run electron:dist` to build your electron distribution.

Please note that only mac platform is supported at this time.
