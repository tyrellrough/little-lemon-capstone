import TakeoutIcon from '../images/takeout_dining_FILL0_wght400_GRAD0_opsz48.png';

const MenuItemCard = ({ itemName, description, itemPrice, image }) => {
    return (
        <div className="w-[32%] rounded-t-lg">
            <img src={image} className="rounded-t-lg" />
            <div className="flex flex-col justify-between ">
                <div>
                    <div className="flex justify-between pl-[4%] pr-[4%]">
                        <p>{itemName}</p>
                        <p className="text-[#EE9972] font-semibold ">{itemPrice}</p>
                    </div>
                    <p className="pb-[30%]">{description}</p>
                </div>
                <div className="flex content-center pl-[4%] pr-[4%]">
                    <p>Order a delivery</p>
                    <img src={TakeoutIcon} className="max-w-[25px]" />

                </div>
            </div>

        </div>

    );
}

export default MenuItemCard;