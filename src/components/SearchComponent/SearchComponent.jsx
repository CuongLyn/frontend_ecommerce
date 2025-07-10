import React, { useState } from 'react'
import { Input, AutoComplete, Card, Typography, Space, Image } from 'antd'
import { SearchOutlined, ShoppingOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const { Text } = Typography

const WrapperSearchInput = styled.div`
  .ant-input-affix-wrapper {
    border-radius: 8px;
    border: 2px solid #e1e5e9;
    
    &:hover {
      border-color: #1890ff;
    }
    
    &:focus-within {
      border-color: #1890ff;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
  }
`

const WrapperSearchResult = styled.div`
  .ant-select-item {
    padding: 12px;
    
    &:hover {
      background-color: #f5f5f5;
    }
  }
`

const SearchResultItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  .product-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 4px;
  }
  
  .product-info {
    flex: 1;
    
    .product-name {
      font-weight: 500;
      margin-bottom: 4px;
    }
    
    .product-price {
      color: #ff4d4f;
      font-weight: 600;
    }
  }
`

const SearchComponent = ({ width = '100%', placeholder = 'Tìm kiếm sản phẩm...' }) => {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')
  const [options, setOptions] = useState([])

  // Mock data - trong thực tế sẽ gọi API
  const mockProducts = [
    {
      id: '1',
      name: 'iPhone 15 Pro Max 256GB',
      price: 34990000,
      image: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg',
      category: 'Điện thoại'
    },
    {
      id: '2', 
      name: 'Samsung Galaxy S24 Ultra',
      price: 32990000,
      image: 'https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-grey-thumbnew-600x600.jpg',
      category: 'Điện thoại'
    },
    {
      id: '3',
      name: 'MacBook Air M3 13 inch',
      price: 27999000,
      image: 'https://cdn.tgdd.vn/Products/Images/44/322036/macbook-air-13-inch-m3-2024-grey-thumbnew-600x600.jpg',
      category: 'Laptop'
    },
    {
      id: '4',
      name: 'iPad Air 11 inch M2',
      price: 16999000,
      image: 'https://cdn.tgdd.vn/Products/Images/522/309013/ipad-air-11-inch-m2-2024-wifi-purple-thumbnew-600x600.jpg',
      category: 'Tablet'
    },
    {
      id: '5',
      name: 'AirPods Pro 2nd Gen',
      price: 5990000,
      image: 'https://cdn.tgdd.vn/Products/Images/54/289780/airpods-pro-2nd-gen-usb-c-thumbnew-600x600.jpg',
      category: 'Tai nghe'
    }
  ]

  const handleSearch = (value) => {
    setSearchValue(value)
    
    if (value.length > 0) {
      const filteredProducts = mockProducts.filter(product =>
        product.name.toLowerCase().includes(value.toLowerCase()) ||
        product.category.toLowerCase().includes(value.toLowerCase())
      )
      
      const searchOptions = filteredProducts.map(product => ({
        value: product.id,
        label: (
          <SearchResultItem>
            <Image
              src={product.image}
              alt={product.name}
              className="product-image"
              preview={false}
            />
            <div className="product-info">
              <div className="product-name">{product.name}</div>
              <div className="product-price">{product.price.toLocaleString()}₫</div>
              <Text type="secondary" style={{ fontSize: '12px' }}>{product.category}</Text>
            </div>
          </SearchResultItem>
        ),
        product: product
      }))
      
      // Thêm option "Xem tất cả kết quả"
      if (filteredProducts.length > 0) {
        searchOptions.push({
          value: 'see-all',
          label: (
            <div style={{ textAlign: 'center', padding: '8px', borderTop: '1px solid #f0f0f0' }}>
              <Text style={{ color: '#1890ff' }}>
                <SearchOutlined /> Xem tất cả {filteredProducts.length} kết quả cho "{value}"
              </Text>
            </div>
          )
        })
      }
      
      setOptions(searchOptions)
    } else {
      setOptions([])
    }
  }

  const handleSelect = (value, option) => {
    if (value === 'see-all') {
      // Navigate to search results page
      navigate(`/search?q=${encodeURIComponent(searchValue)}`)
    } else {
      // Navigate to product detail page
      navigate(`/product-details/${value}`)
    }
    setSearchValue('')
    setOptions([])
  }

  const handlePressEnter = () => {
    if (searchValue.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchValue.trim())}`)
      setSearchValue('')
      setOptions([])
    }
  }

  return (
    <WrapperSearchInput>
      <WrapperSearchResult>
        <AutoComplete
          style={{ width }}
          options={options}
          onSearch={handleSearch}
          onSelect={handleSelect}
          value={searchValue}
          onChange={setSearchValue}
          notFoundContent={
            searchValue.length > 0 ? (
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <ShoppingOutlined style={{ fontSize: '24px', color: '#ccc', marginBottom: '8px' }} />
                <br />
                <Text type="secondary">Không tìm thấy sản phẩm nào</Text>
              </div>
            ) : null
          }
        >
          <Input
            size="large"
            placeholder={placeholder}
            prefix={<SearchOutlined style={{ color: '#999' }} />}
            onPressEnter={handlePressEnter}
            allowClear
          />
        </AutoComplete>
      </WrapperSearchResult>
    </WrapperSearchInput>
  )
}

export default SearchComponent