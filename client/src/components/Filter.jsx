import { Link } from "react-router-dom";

function Filter({ tittle, style, image, href }) {
  return (
    <>
      <div className="category-contain">
        <div className="category">
          <Link to={`/category/${href}`}>
            <div
              className="product group transition-opacity flex items-center 
					justify-center relative text-center max-w-60 h-full 
					max-h-60 p-8 py-20 rounded-lg cursor pointer overflow-hidden"
              style={style}
            >
              <img src={image} alt="salad" />
              <div className="hidden group-hover:flex absolute flex items-center justify-center bg-black/80 w-full h-full cursor-pointer">
                <h2 className="product-tittle  lg:text-xl p-2">{tittle}</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Filter;
