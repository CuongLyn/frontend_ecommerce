import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import { routes } from './routes'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <>
                  {/* Hiển thị HeaderComponent nếu isShowHeader là true */}
                  {route.isShowHeader && <HeaderComponent />}
                  <route.page />
                </>
              }
            />
          ))}
        </Routes>
      </Router>
    </div>
  )
}

export default App