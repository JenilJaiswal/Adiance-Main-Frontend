"use client";

import React, { useState, useMemo } from "react";
import "./ProductFilter.css";
import data from "./ecoProducts.json";

const filterConfig = [
  {
    key: "type",
    label: "Camera Type",
    options: ["All", "Bullet", "Dome", "PTZ/PT", "Indoor"],
  },
  {
    key: "connectivity",
    label: "Connectivity",
    options: ["All", "WiFi", "PoE", "4G", "IP/Ethernet"],
  },
  {
    key: "resolution",
    label: "Resolution",
    options: ["All", "3MP", "5MP"],
  },
];

const allProducts = data.categories.flatMap((c) => c.products);

const ProductFilter = () => {
  const [filters, setFilters] = useState({
    type: "All",
    connectivity: "All",
    resolution: "All",
  });

  const handleFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredCategories = useMemo(() => {
    return data.categories
      .map((category) => ({
        ...category,
        products: category.products.filter((product) => {
          const typeMatch = filters.type === "All" || product.type === filters.type;
          const connMatch = filters.connectivity === "All" || product.connectivity === filters.connectivity;
          const resMatch = filters.resolution === "All" || product.resolution === filters.resolution;
          return typeMatch && connMatch && resMatch;
        }),
      }))
      .filter((category) => category.products.length > 0);
  }, [filters]);

  const totalFiltered = filteredCategories.reduce((sum, c) => sum + c.products.length, 0);

  return (
    <section className="eco-filter-section">
      <div className="eco-filter-container">
        {/* Section Title */}
        <div className="eco-filter-header">
          <h2 className="eco-filter-title">Explore ECO Series Cameras</h2>
          <p className="eco-filter-subtitle">
            Filter by camera type, connectivity, and resolution to find the perfect fit.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="eco-filter-bar">
          {filterConfig.map((filter) => (
            <div key={filter.key} className="eco-filter-group">
              <h3 className="eco-filter-label">{filter.label}</h3>
              <div className="eco-filter-options">
                {filter.options.map((option) => (
                  <button
                    key={option}
                    className={`eco-filter-btn ${filters[filter.key] === option ? "eco-filter-btn-active" : ""}`}
                    onClick={() => handleFilter(filter.key, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Results Count */}
        <div className="eco-filter-results-count">
          Showing <strong>{totalFiltered}</strong> of {allProducts.length} products
        </div>

        {/* Category Groups */}
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <div key={category.name} className="eco-category-group">
              <div className="eco-category-header">
                <h3 className="eco-category-title">{category.name}</h3>
                <div className="eco-category-line" />
              </div>

              <div className="eco-product-grid">
                {category.products.map((product) => (
                  <div key={product.id} className="eco-product-card">
                    <div className="eco-card-header">
                      <h3 className="eco-card-title">{product.title}</h3>
                      <span className="eco-card-model">{product.model}</span>
                    </div>

                    <div className="eco-card-specs">
                      <div className="eco-spec-row">
                        <div className="eco-spec">
                          <span className="eco-spec-label">RESOLUTION</span>
                          <span className="eco-spec-value">{product.resolution}</span>
                        </div>
                        <div className="eco-spec">
                          <span className="eco-spec-label">CONNECTIVITY</span>
                          <span className="eco-spec-value">{product.connectivity}</span>
                        </div>
                      </div>
                      <div className="eco-spec-row">
                        <div className="eco-spec">
                          <span className="eco-spec-label">IR RANGE</span>
                          <span className="eco-spec-value">{product.irRange}</span>
                        </div>
                        <div className="eco-spec">
                          <span className="eco-spec-label">IP RATING</span>
                          <span className="eco-spec-value">{product.ipRating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="eco-card-actions">
                      <a href="/contact" className="eco-card-btn eco-card-btn-outline">Request Quote</a>
                      <a href="/contact" className="eco-card-btn eco-card-btn-filled">Datasheet</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="eco-no-results">
            <p>No products match the selected filters.</p>
            <button
              className="eco-filter-btn eco-filter-btn-active"
              onClick={() => setFilters({ type: "All", connectivity: "All", resolution: "All" })}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductFilter;
