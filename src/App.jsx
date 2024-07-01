import React, { Suspense, memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'

const App = memo(() => {
    return (
        <div className="app">
            <AppHeader />
            <Suspense fallback={<h2>loading...</h2>}>
                <div className="page">
                    {useRoutes(routes)}
                </div>
            </Suspense>
            <AppFooter />
        </div>
    )
})

export default App
