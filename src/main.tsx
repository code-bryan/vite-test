import React from 'react'
import ReactDOM from 'react-dom'
import { ApplicationProvider } from '@models/state'

import App from '@pages/app'
import '@theme/style.css'

ReactDOM.render(
  <React.StrictMode>
    <ApplicationProvider>
      <App />
    </ApplicationProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
