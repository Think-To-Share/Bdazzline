import { WOW } from 'wowjs/dist/wow'
import DiscountPopup from './class/DiscountPopup'

require('bootstrap')

new WOW().init()

try {
    require('./_homepage')
}catch(e) {
    console.error(e)
}

setTimeout(() => {
    new DiscountPopup().show()
}, 8000)
