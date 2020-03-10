const fs = require('fs')
const debug = require('debug')
const tenMoreShapes = require('./game/moreShapes');
const createStage = require('./game/createStage');
const Engine = require('./sockets');


let users = [];
let roomlist = [];

const logerror = debug('tetris:error')
  , loginfo = debug('tetris:log')

const initApp = (app, params, cb) => {
  const {host, port} = params
  const handler = (req, res) => {
    const file = req.url === '/bundle.js' ? '/../../build/bundle.js' : '/../../index.html'
    loginfo('file to read: ' + file)
    loginfo('ici')
    fs.readFile(__dirname + file, (err, data) => {
      if (err) {
        logerror(err)
        res.writeHead(500)
        return res.end('Error loading index.html')
      }
      res.writeHead(200)
      res.end(data)
    })
  }
  app.on('request', handler)
  app.listen({host, port}, () =>{
    loginfo(`tetris listen on ${params.url}`)
    cb()
  })
}

const create = (params) =>{
  
  const promise = new Promise( (resolve, reject) => {
    const app = require('http').createServer()
    
    initApp(app, params, () =>{
      const io = require('socket.io')(app, { pingTimeout: 60000 } )
      
      const stop = (cb) => {
        io.close()
        app.close( () => {
          app.unref()
        })
        loginfo(`Engine stopped.`)
        cb()
      }
      
      Engine(io)
      resolve({stop})
    })
  })

  return promise
}

module.exports = create;