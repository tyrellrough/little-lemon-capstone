import MenuItemCard from '../Components/MenuItemCard';

const menuItems = [
    {
        name: "Greek Salad",
        description: "This is the item description",
        price: "£4.50",
        getImageSrc: () => require("../images/greek salad.jpg"),
    },
    {
        name: "Item 2",
        description: "This is the item description",
        price: "£4.50",
        getImageSrc: () => require("../images/greek salad.jpg"),
    },
    {
        name: "Item 3",
        description: "This is the item description",
        price: "£8.00",
        getImageSrc: () => require("../images/bruchetta.jpg"),
    },



]

const MenuItemHighlights = () => {
    return(
    <div className="segment three-nine pt-[3%] pb-[3%] h-[100%]">

            <div className="w-full flex justify-between pb-[3%]">
                <h1 className="heading">Specials</h1>
                <input type="button" value="Order Online"/>
            </div>
            <div className="w-full flex justify-between">
                {
                    menuItems.map((item) => {
                        return (
                            <MenuItemCard
                            itemName={item.name}
                            description={item.description}
                            itemPrice={item.price}
                            image={item.getImageSrc()}
                            />
                        )
                    })
                }

        </div>
    </div>
    );
}

export default MenuItemHighlights;