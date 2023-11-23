import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"
import { store } from "@/store/index"
import { LocationWatchHooks } from "@/hooks/useLocationWatchHooks"
 
ReactDOM.createRoot(document.getElementById('root')!).render(  
  <Provider store={store}>
    <BrowserRouter>
      <LocationWatchHooks>
        <React.Suspense>
          <App />
        </React.Suspense> 
      </LocationWatchHooks>
    </BrowserRouter>
  </Provider>,
)
