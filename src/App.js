import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import { routes } from './routes'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

function App() {

  
  
  // useEffect(() => {
  //   // Gọi hàm fetchApi khi component được mount
  //   fetchApi()
  // })
  console.log('api: ', process.env.REACT_APP_API_URL_BACKEND)
  const fetchApi = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL_BACKEND}/product/getAll`)
    return res.data
  }

  const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi })

  console.log('query: ', query)

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