import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Row, Col, Card, Typography, Space, Button, Slider, Checkbox, Select, Pagination, Empty } from 'antd'
import { FilterOutlined, AppstoreOutlined, BarsOutlined, StarFilled } from '@ant-design/icons'
import styled from 'styled-components'
import CardComponent from '../../components/CardComponent/CardComponent'

const { Title, Text } = Typography
const { Option } = Select

const WrapperSearchPage = styled.div`
  padding: 20px;
  background: #f5f5f5;
  min-height: 100vh;
`

const WrapperSearchContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const WrapperFilterSidebar = styled(Card)`
  margin-bottom: 20px;
  
  .ant-card-body {
    padding: 16px;
  }
  
  .filter-section {
    margin-bottom: 24px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .filter-title {
    font-weight: 600;
    margin-bottom: 12px;
    display: block;
  }
`

const WrapperProductGrid = styled.div`
  .grid-view {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }
  
  .list-view {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`

const WrapperSortHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 16px;
  background: white;
  border-radius: 8px;
`

const SearchResultsPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('q') || ''
  
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('relevance')
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize] = useState(12)
  const [filters, setFilters] = useState({
    priceRange: [0, 50000000],
    brands: [],
    categories: [],
    rating: 0
  })

  // Mock data - trong thực tế sẽ gọi API
  const mockProducts = [
    {
      id: '1',
      name: 'iPhone 15 Pro Max 256GB Titanium Blue',
      price: 34990000,
      originalPrice: 36990000,
      image: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg',
      brand: 'Apple',
      category: 'Điện thoại',
      rating: 4.8,
      reviewCount: 1250,
      discount: 5
    },
    {
      id: '2',
      name: 'Samsung Galaxy S24 Ultra 256GB',
      price: 32990000,
      originalPrice: 34990000,
      image: 'https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-grey-thumbnew-600x600.jpg',
      brand: 'Samsung',
      category: 'Điện thoại',
      rating: 4.7,
      reviewCount: 980,
      discount: 6
    },
    {
      id: '3',
      name: 'MacBook Air M3 13 inch 8GB/256GB',
      price: 27999000,
      originalPrice: 29999000,
      image: 'https://cdn.tgdd.vn/Products/Images/44/322036/macbook-air-13-inch-m3-2024-grey-thumbnew-600x600.jpg',
      brand: 'Apple',
      category: 'Laptop',
      rating: 4.9,
      reviewCount: 750,
      discount: 7
    },
    {
      id: '4',
      name: 'iPad Air 11 inch M2 WiFi 128GB',
      price: 16999000,
      originalPrice: 18999000,
      image: 'https://cdn.tgdd.vn/Products/Images/522/309013/ipad-air-11-inch-m2-2024-wifi-purple-thumbnew-600x600.jpg',
      brand: 'Apple',
      category: 'Tablet',
      rating: 4.6,
      reviewCount: 540,
      discount: 11
    },
    {
      id: '5',
      name: 'AirPods Pro 2nd Generation USB-C',
      price: 5990000,
      originalPrice: 6990000,
      image: 'https://cdn.tgdd.vn/Products/Images/54/289780/airpods-pro-2nd-gen-usb-c-thumbnew-600x600.jpg',
      brand: 'Apple',
      category: 'Tai nghe',
      rating: 4.8,
      reviewCount: 890,
      discount: 14
    },
    {
      id: '6',
      name: 'Sony WH-1000XM5 Wireless Headphones',
      price: 7990000,
      originalPrice: 8990000,
      image: 'https://cdn.tgdd.vn/Products/Images/54/307734/sony-wh-1000xm5-den-thumbnew-600x600.jpg',
      brand: 'Sony',
      category: 'Tai nghe',
      rating: 4.7,
      reviewCount: 450,
      discount: 11
    }
  ]

  const [filteredProducts, setFilteredProducts] = useState(mockProducts)

  useEffect(() => {
    // Filter products based on search query and filters
    let results = mockProducts

    // Search filter
    if (searchQuery) {
      results = results.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Price filter
    results = results.filter(product =>
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    )

    // Brand filter
    if (filters.brands.length > 0) {
      results = results.filter(product => filters.brands.includes(product.brand))
    }

    // Category filter
    if (filters.categories.length > 0) {
      results = results.filter(product => filters.categories.includes(product.category))
    }

    // Rating filter
    if (filters.rating > 0) {
      results = results.filter(product => product.rating >= filters.rating)
    }

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        results.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        results.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        results.sort((a, b) => b.rating - a.rating)
        break
      case 'name':
        results.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        // relevance - keep original order
        break
    }

    setFilteredProducts(results)
  }, [searchQuery, filters, sortBy])

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  const clearFilters = () => {
    setFilters({
      priceRange: [0, 50000000],
      brands: [],
      categories: [],
      rating: 0
    })
  }

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  const brands = [...new Set(mockProducts.map(p => p.brand))]
  const categories = [...new Set(mockProducts.map(p => p.category))]

  return (
    <WrapperSearchPage>
      <WrapperSearchContent>
        <Title level={2}>
          {searchQuery ? `Kết quả tìm kiếm cho "${searchQuery}"` : 'Tất cả sản phẩm'}
        </Title>
        
        <Row gutter={[20, 20]}>
          {/* Filter Sidebar */}
          <Col xs={24} md={6}>
            <WrapperFilterSidebar title={<><FilterOutlined /> Bộ lọc</>}>
              {/* Price Range */}
              <div className="filter-section">
                <Text className="filter-title">Khoảng giá</Text>
                <Slider
                  range
                  min={0}
                  max={50000000}
                  step={1000000}
                  value={filters.priceRange}
                  onChange={(value) => handleFilterChange('priceRange', value)}
                  tooltip={{
                    formatter: (value) => `${(value / 1000000).toFixed(0)}M`
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                  <Text type="secondary">{(filters.priceRange[0] / 1000000).toFixed(0)}M₫</Text>
                  <Text type="secondary">{(filters.priceRange[1] / 1000000).toFixed(0)}M₫</Text>
                </div>
              </div>

              {/* Brands */}
              <div className="filter-section">
                <Text className="filter-title">Thương hiệu</Text>
                <Checkbox.Group
                  options={brands}
                  value={filters.brands}
                  onChange={(value) => handleFilterChange('brands', value)}
                />
              </div>

              {/* Categories */}
              <div className="filter-section">
                <Text className="filter-title">Danh mục</Text>
                <Checkbox.Group
                  options={categories}
                  value={filters.categories}
                  onChange={(value) => handleFilterChange('categories', value)}
                />
              </div>

              {/* Rating */}
              <div className="filter-section">
                <Text className="filter-title">Đánh giá</Text>
                <Space direction="vertical">
                  {[4, 3, 2, 1].map(rating => (
                    <Checkbox
                      key={rating}
                      checked={filters.rating === rating}
                      onChange={(e) => handleFilterChange('rating', e.target.checked ? rating : 0)}
                    >
                      <Space>
                        {Array.from({ length: rating }, (_, i) => (
                          <StarFilled key={i} style={{ color: '#ffd700', fontSize: '12px' }} />
                        ))}
                        <Text>từ {rating} sao trở lên</Text>
                      </Space>
                    </Checkbox>
                  ))}
                </Space>
              </div>

              <Button onClick={clearFilters} style={{ width: '100%' }}>
                Xóa bộ lọc
              </Button>
            </WrapperFilterSidebar>
          </Col>

          {/* Product Results */}
          <Col xs={24} md={18}>
            <WrapperSortHeader>
              <div>
                <Text strong>{filteredProducts.length} sản phẩm</Text>
              </div>
              
              <Space>
                <Select
                  value={sortBy}
                  onChange={setSortBy}
                  style={{ width: 200 }}
                >
                  <Option value="relevance">Liên quan nhất</Option>
                  <Option value="price-asc">Giá thấp đến cao</Option>
                  <Option value="price-desc">Giá cao đến thấp</Option>
                  <Option value="rating">Đánh giá cao nhất</Option>
                  <Option value="name">Tên A-Z</Option>
                </Select>
                
                <Button.Group>
                  <Button
                    type={viewMode === 'grid' ? 'primary' : 'default'}
                    icon={<AppstoreOutlined />}
                    onClick={() => setViewMode('grid')}
                  />
                  <Button
                    type={viewMode === 'list' ? 'primary' : 'default'}
                    icon={<BarsOutlined />}
                    onClick={() => setViewMode('list')}
                  />
                </Button.Group>
              </Space>
            </WrapperSortHeader>

            {paginatedProducts.length > 0 ? (
              <>
                <WrapperProductGrid>
                  <div className={`${viewMode}-view`}>
                    {paginatedProducts.map(product => (
                      <CardComponent
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        discount={product.discount}
                        rating={product.rating}
                        reviewCount={product.reviewCount}
                        onClick={() => navigate(`/product-details/${product.id}`)}
                      />
                    ))}
                  </div>
                </WrapperProductGrid>

                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                  <Pagination
                    current={currentPage}
                    total={filteredProducts.length}
                    pageSize={pageSize}
                    onChange={setCurrentPage}
                    showSizeChanger={false}
                    showQuickJumper
                    showTotal={(total, range) =>
                      `${range[0]}-${range[1]} của ${total} sản phẩm`
                    }
                  />
                </div>
              </>
            ) : (
              <Empty
                description="Không tìm thấy sản phẩm nào"
                style={{ marginTop: '60px' }}
              >
                <Button type="primary" onClick={clearFilters}>
                  Xóa bộ lọc
                </Button>
              </Empty>
            )}
          </Col>
        </Row>
      </WrapperSearchContent>
    </WrapperSearchPage>
  )
}

export default SearchResultsPage