const server = require('./server')
const params = {
    server:{
       host: '0.0.0.0'
     , port: 4000
     , get url(){ return 'http://' + this.host + ':' + this.port } 
    },
  }
server(params.server).then( () => console.log('Tetris Server Running') )
