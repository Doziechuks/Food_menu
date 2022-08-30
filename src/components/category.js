function Category({ categories, filterCategory }) {
  return (
    <div className="categories">
      {categories.map((category, index) => {
        return (
          <button
            className="category-btn"
            key={index}
            onClick={()=>{filterCategory(category)}}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Category