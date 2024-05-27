#  Web Dev Server

## starting a project

```
npm init -y
```

### Install Web Dev Server


#### Environment
install a web environment
[Web Dev Server](https://modern-web.dev/docs/dev-server/overview/)

```
npm i --save-dev @web/dev-server
```

add to scripts

```
"start": "web-dev-server --node-resolve --open --watch"
```

### Install Lit

```
npm install lit
```

# Let's Go
```
npm run start
```


# Installing web pack
```
npm install -D webpack webpack-cli
```
add to scripts:
```
"build": "webpack --mode production"
```
```
npm run build
```