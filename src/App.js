import Card from "./components/Card"
import Header from "./components/Header";
import Drawer from "./components/Drawer";
const arr = [
    {
        name: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 11999,
        imageUrl: '/img/sneakers/1.jpg',
    },
    {
        name: 'Мужские Кроссовки Nike Air Max 270',
        price: 12999,
        imageUrl: '/img/sneakers/2.jpg',
    },
    {
        name: 'Кроссовки Puma X Aka Boku Future Rider',
        price: 8999,
        imageUrl: '/img/sneakers/3.jpg',
    },
    {
        name: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 12999,
        imageUrl: '/img/sneakers/4.jpg',
    },
    {
        name: 'Мужские Кроссовки Nike Lebron XVIII Low',
        price: 16499,
        imageUrl: '/img/sneakers/5.jpg',
    },
    {
        name: 'Мужские Кроссовки Nike LeBron XVIII',
        price: 10799,
        imageUrl: '/img/sneakers/6.jpg',
    },
    {
        name: 'Мужские Кроссовки Jordan Air Jordan 11',
        price: 12999,
        imageUrl: '/img/sneakers/7.jpg',
    },
    {
        name: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
        price: 12999,
        imageUrl: '/img/sneakers/8.jpg',
    },
    {
        name: 'Мужские Кроссовки Nike Kyrie 7',
        price: 11299,
        imageUrl: '/img/sneakers/9.jpg',
    },
    {
        name: 'Мужские Кроссовки Under Armour Curry 8',
        price: 15199,
        imageUrl: '/img/sneakers/10.jpg',
    },
    {
        name: 'Кроссовки Puma X Aka Boku Future Rider',
        price: 13999,
        imageUrl: '/img/sneakers/11.jpg',
    },
]
function App() {
    return (
        <div className="wrapper clear">
            <Drawer/>
            <Header/>
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1 className="">Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search"/>
                        <input placeholder="Поиск..."/>
                    </div>
                </div>


                <div className="d-flex">
                    {arr.map((obj) =>
                        <Card
                            title={obj.name}
                            price={obj.price}
                            imageUrl={obj.imageUrl}
                            onClick={() => alert(123)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
