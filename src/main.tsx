import React from 'react'
import ReactDOM from 'react-dom'
import { ApplicationProvider } from '@models/state'

import App from '@pages/app'
import KanvasCore from '@kanvas/core'
// import '@theme/style.css'

const client = new KanvasCore({
  url: '',
  key: '',
  middlewares: []
})

ReactDOM.render(
  <React.StrictMode>
    <ApplicationProvider>
      <App />
    </ApplicationProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
