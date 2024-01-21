import React from 'react'

export default function Categories() {
  return (
   <div>
  <div className="featured-categories">
    <h2>Featured Categories
        <a href="">cack & Milk</a>
        <a href="">Coffee & Tea</a>
        <a href="">Pet Foods</a>
        <a href="">Vegetables</a>
    </h2>
    <div className="categories">
      <div className="category-card">
      <img src="cack.jpeg"  className="cate" alt="cack" />
        <p>Cake &amp; Milk</p>
        <span>26 items</span>
      </div>
      <div className="category-card">
      <img src="Kiwi.webp" className="cate" alt="kiwi" />
        <p>Organic Kiwi</p>
        <span>28 items</span>
      </div>
      <div className="category-card">
        <img src="peach.jpeg" className="cate" alt="Peach" />
        <p>Peach</p>
        <span>14 items</span>
      </div>
      <div className="category-card">
        <img src="red apple.jpeg" className="cate" alt="Red Apple" />
        <p>Red Apple</p>
        <span>54 items</span>
      </div>
      <div className="category-card">
        <img src="snacks.jpeg" className="cate" alt="Snack" />
        <p>Snack</p>
        <span>56 items</span>
      </div>
      <div className="category-card">
        <img src="vegetables.jpeg" className="cate" alt="Vegetables" />
        <p>Vegetables</p>
        <span>72 items</span>
      </div>
      <div className="category-card">
        <img src="strawbarry.jpeg" className="cate" alt="Strawberry" />
        <p>Strawberry</p>
        <span>36 items</span>
      </div>
      <div className="category-card">
        <img src="black plum.jpeg" className="cate" alt="Black plum" />
        <p>Black plum</p>
        <span>123 items</span>
      </div>
      <div className="category-card">
        <img src="custard apple.jpeg" className="cate" alt="custard" />
        <p>Custrad Apple</p>
        <span>34 items</span>
      </div>
      <div className="category-card">
        <img src="coffe.jpeg"  className="cate"alt="Coffee & Tea" />
        <p>Coffee &amp; Tea</p>
        <span>87 items</span>
      </div>
    </div>
  </div>
</div>

  )
}
