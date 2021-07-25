require('@babel/register')({ rootMode: 'upward' })
require('chai/register-expect')
require('ignore-styles')
require('raf/polyfill')
const jsDomGlobal = require('jsdom-global/index')
jsDomGlobal(undefined, { url: 'http://localhost' })

function mockCanvas(window) {
  window.HTMLCanvasElement.prototype.getContext = function () {
    return {
      fillRect: function () {},
      clearRect: function () {},
      getImageData: function (x, y, w, h) {
        return {
          data: new Array(w * h * 4),
        }
      },
      putImageData: function () {},
      createImageData: function () {
        return []
      },
      setTransform: function () {},
      drawImage: function () {},
      save: function () {},
      fillText: function () {},
      restore: function () {},
      beginPath: function () {},
      moveTo: function () {},
      lineTo: function () {},
      closePath: function () {},
      stroke: function () {},
      translate: function () {},
      scale: function () {},
      rotate: function () {},
      arc: function () {},
      fill: function () {},
      measureText: function () {
        return { width: 0 }
      },
      transform: function () {},
      rect: function () {},
      clip: function () {},
    }
  }

  window.HTMLCanvasElement.prototype.toDataURL = function () {
    return ''
  }
}
mockCanvas(window)

//configure the environment variables used in test
// const dotEnvPath = path.resolve('./.tools/.env.test')
// require('dotenv').config({ path: dotEnvPath })

//configure the logger to be silent
// require('pcmli.umbrella.backend').Logger.configure({
//   silent: true,
// })

process.env.NODE_ENV = 'test'

//setup the chai
const chai = require('chai')
//setup the chai-subset
const chaiSubset = require('chai-subset')
chai.use(chaiSubset)

//setup chai-as-promissed
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

//setup chai moment
var chaiMoment = require('chai-moment')
chai.use(chaiMoment)

//setup chai dom
var chaiDom = require('chai-dom')
chai.use(chaiDom)
