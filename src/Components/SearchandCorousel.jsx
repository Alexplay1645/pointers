import React, { useRef } from 'react';
import '../App.css';

const products = [
  { id: 1, image: '/Images/images1.jpg', title: 'НАЗВА НАБОРУ' },
  { id: 2, image: '/Images/images2.jpg', title: 'НАЗВА НАБОРУ' },
  { id: 3, image: '/Images/images3.jpg', title: 'НАЗВА НАБОРУ' },
  { id: 4, image: '/Images/images4.jpg', title: 'НАЗВА НАБОРУ' },
  { id: 5, image: '/Images/images5.jpg', title: 'НАЗВА НАБОРУ' },
  { id: 6, image: '/Images/images6.jpg', title: 'НАЗВА НАБОРУ' },
  { id: 3, image: '/Images/images7.jpg', title: 'НАЗВА НАБОРУ' },
  { id: 4, image: '/Images/images8.jpg', title: 'НАЗВА НАБОРУ' },
  { id: 5, image: '/Images/images9.jpg', title: 'НАЗВА НАБОРУ' },
  { id: 6, image: '/Images/images10.jpg', title: 'НАЗВА НАБОРУ' }
  
];

function SearchBar() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="searchbar-wrapper">
      <div className="searchbar-container">
        <img src="/Icons/lupa.png" alt="Search Icon" className="searchbar-icon" />
        <input type="text" className="searchbar-input" placeholder="Пошук" />
      </div>

      <div className="product-section">
        <h2 className="product-title">ТОВАРИ</h2>

        <div className="carousel-wrapper">
          <button className="carousel-btn left" onClick={scrollLeft}>
            <img src="/Icons/VectorLeft.png" alt="Left Arrow" />
          </button>

          <div className="product-carousel" ref={carouselRef}>
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="image-wrapper">
                  <img src={product.image} alt={product.title} className="product-image" />
                  <div className="product-name">{product.title}</div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn right" onClick={scrollRight}>
            <img src="/Icons/VectorRight.png" alt="Right Arrow" />
          </button>
        </div>

        <div className="view-more-btn">дивитися більше категорій +</div>
      </div>

      <div className="single-set-section">
        <h2 className="single-set-title">ТОВАРИ З ОДНОГО НАБОРУ</h2>
        <p className="single-set-description">
          Lorem ipsum dolor sit amet consectetur. 
          Gravida convallis id orci egestas non. Rhoncus vitae quis sem massa id imperdiet arcu vulputate.
          Magna id facilisi diam arcu ipsum.
          Magna accumsan sed urna non fermentum. Tristique in turpis dolor in pulvinar pellentesque faucibus.
        </p>

        <div className="single-set-images">
          <div className="top-row">
            <div className="set-item">
              <img src="/Images/Rectangle 29.png" alt="Set Item 1" />
            </div>
            <div className="set-item">
              <img src="/Images/Rectangle 30.png" alt="Set Item 2" />
            </div>
          </div>

          <div className="bottom-row">
            <div className="set-item">
              <img src="/Images/Rectangle 31.png" alt="Set Item 3" />
            </div>
            <div className="set-item">
              <img src="/Images/Rectangle 32.png" alt="Set Item 4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
