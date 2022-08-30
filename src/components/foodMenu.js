function FoodMenu ({myMenu}){
  return (
    <div className="food-menu-container">
      {myMenu.map((myMenu) => {
        const {id,desc,price,title,img} = myMenu;
        return (
          <section className="food-info-wrapper" key={id}>
            <div className="image-box">
              <img src={img} alt={title} className="food-image" />
            </div>
            <div className="info-container">
              <div className="title-price-box">
                <h2>{title}</h2>
                <h2 className="price">${price}</h2>
              </div>
              <hr />
              <p className="info">{desc}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default FoodMenu;