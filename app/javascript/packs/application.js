import Rails from '@rails/ujs'
import * as ActiveStorage from '@rails/activestorage'
import Turbolinks from 'turbolinks'

import '../css/application.scss'
require.context('../images', true)

Rails.start()
ActiveStorage.start()
Turbolinks.start()
