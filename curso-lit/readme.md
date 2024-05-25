#configuration without open web components
install node
install npm

## start project
npm init -y

## Environment
install a web environment
- web dev server
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