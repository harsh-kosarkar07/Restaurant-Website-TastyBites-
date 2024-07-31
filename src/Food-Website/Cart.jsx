import { FaArrowLeft, FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, increaseQuantity, decreaseQuantity } from "../redux/slices/cartSlice";
import { AiOutlineDelete } from "react-icons/ai";

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveProduct = (id) => {
    dispatch(removeItem(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const totalCartPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="mt-24 w-[90%] flex flex-col gap-5 mx-auto min-h-[80vh] my-5">
      <Link to={'/'}>
        <span>
          <FaArrowLeft size={25} />
        </span>
      </Link>
      <div className="flex bg-gray-200 flex-col w-full items-center px-6 py-5">
        {items.length === 0 ? (
          <div className="text-center w-full mt-10">No items in the cart.</div>
        ) : (
          <>
            {items.map((item) => (
              <div className="mb-8 flex gap-2 w-full" key={item.id}>
                <div>
                  <img className="w-32 rounded-md h-28 bg-cover" src={item.image} alt="item-img" />
                </div>
                <div className="flex items-start flex-col gap-2 justify-start ml-8 flex-grow">
                  <span className="font-bold text-lg capitalize">{item.name}</span>
                  <span className="text-red-500 text-xs  font-bold">Rs. {item.price}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDecreaseQuantity(item.id)}
                      className="font-semibold hover:text-red-500  border border-black p-[2px]  rounded-full text-gray-900 text-xs"
                    >
                      <FaMinus />

                    </button>
                    <span className=" mx-4   font-semibold text-black">{item.quantity}</span>
                    <button
                      onClick={() => handleIncreaseQuantity(item.id)}
                      className="font-semibold hover:text-red-500  border border-black p-[2px]  rounded-full text-gray-900 text-xs"
                    >
                      <FaPlus/>
                    </button>
                  </div>
                  <span className="text-gray-500 font-semibold text-xs">Total: Rs. {item.price * item.quantity}</span>
                  <button
                    onClick={() => handleRemoveProduct(item.id)}
                    className="font-semibold hover:text-red-500 flex border py-[2px] px-[5px] rounded-[3px]  border-gray-500  text-gray-500 text-xs"
                  >
                    Remove <span><AiOutlineDelete size={16} /></span>

                  </button>
                </div>
              </div>
            ))}
            <div className="text-center w-full mt-10">
              <span className="font-bold text-lg">Total Cart Price: Rs. {totalCartPrice}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
