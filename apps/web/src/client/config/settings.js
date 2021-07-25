import { Utils } from 'pcmli.umbrella.uni-core'
const win = Utils.getWindow()

let Setting = {}

if (win) Setting = Utils.jsonTryParse(win.__ENV__)

export { Setting }
