import React from "react";
import ReactDOM from "react-dom";
import Element from './components/Element';
import style from "./style/style.scss";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.infoChange = this.infoChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.promptAnswer = this.promptAnswer.bind(this);
        this.cartList = React.createRef();
    };
    state = {
        selected: [],//Порядковый массив корзины для сопоставления
        missed: 0,  //Порядковый номер недоступой упаковки
        cart: [],  //Массив с элементами корзины
        total:" ",
        info: [{
                name: "фуа-гра",
                count: '10',
                weight: '0,5',
                description: 'Печень утки разварная с артишоками.',
                colorScheme: '#1698d9'
            },
            {
                name: "рыбой",
                count: "40",
                weight: "2",
                description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
                colorScheme: '#d91667'
            },
            {
                name: "курой",
                count: "100",
                weight: "5",
                description: 'Филе из цыплят с трюфелями в бульоне.',
                colorScheme: '#FFF44B'
            }
        ] //Массив информации о товаре
    };
    promptAnswer = (event, index) => { //Обработчик "недоступных упаковок".Максимальное знаечение:1
        event.preventDefault();
        const answer = confirm("Убрать c" + " " + this.state.info[index-1].name + '?')
        if (this.state.missed == index) {
            alert("Этот товар уже убран из доступа")
        }else if(answer) {
            this.setState({ missed: index });
        };
        setTimeout(()=>{
        this.cartGenerate(index);
        },50)
    };
    stop = (e) => { //Функция отмены всплытия событий для дочернего элемента 
        e.stopPropagation();
    };
    infoChange = (e, type, index) => { //Изменение информации упаковки
        const { info } = this.state;
        let arr = [...info];
        this.stop(e); //Отмена всплытия события для элемента
        if (type === "name" && index !== this.state.missed) {
            const name = prompt("С чем изволите?");
            const n = Number(name);
            arr[index - 1].name = name;
            name && n !== n ? this.setState({ info: arr }) :
            !name ? alert("Нужно что-то ввести")  :
            typeof n === 'number' ? alert('Цифры сюда не подойдут') : null;
        } else if (type === "count" && index !== this.state.missed) {
            const count = Number(prompt("Введите количество порций"));
            arr[index - 1].count = count;
            count && typeof count === 'number' ? this.setState({ info: arr }) : alert("введите число");
        } else if (type === "weight" && index !== this.state.missed) {
            const weight = Number(prompt("Введите вес"));
            const n = Number(weight);
            arr[index - 1].weight = weight;
            weight && typeof n === "number" ? this.setState({ info: arr }) : alert('Буквы сюда не подойдут');
        };
    };
    handleClick = (value) => { //Обработчик клика
        let { selected,missed } = this.state;
        console.log(value);
        if (missed) {

        }else{
            var sorted = [...selected, value].sort((a, b) => { return a - b });
        };

        switch (value) {
            case 1: //Кейсы добавления
                this.setState({ selected: sorted });
                break;
            case 2:
                this.setState({ selected: sorted });
                break;
            case 3:
                this.setState({ selected: sorted });
                break;
            case -1: //Кейсы удаления
                this.deleteItem(value);
                break;
            case -2:
                this.deleteItem(value);
                break;
            case -3:
                this.deleteItem(value);
                break;
        };
        setTimeout(() => { //Вызов инициализации создания элементов корзины с таймаутом для успешной обработки порядкового массива SELECTED
            this.cartGenerate();
        }, 300);
    };
    deleteItem = (value) => { //Инициация удаления из массива корзины
        let index = null; //Индекс удаляемого элемента
        const { selected } = this.state;
        const searchAndSlice = selected.map((item, i) => {
            if (value === -1 && item === 1 && index === null) {
                index = i;
            } else if (value === -2 && item === 2 && index === null) {
                index = i;
            } else if (value === -3 && item === 3 && index === null) {
                index = i;
            } else {
                return item;
            };
        });
        if (index !== null) {
            searchAndSlice.splice(index, 1); //Удаление элемента в случае его нахождения в корзине
            this.setState({ selected: searchAndSlice.sort((a, b) => { return a - b }) }); //Обновление и сортировка массива корзины
        } else if (value * (-1) === this.state.missed) {
            alert("Этот товар недоступен"); //Товар недоступен
        } else if (index === null) {
            alert('Этот товар не выбран'); //Если товар не добавлен
        };
    }
    cartGenerate = (index) => { //Инициация создания элементов корзины
        const { selected, cart, info, missed } = this.state;
        let first = 0;
        let second = 0;
        let third = 0;

        selected.forEach((item)=>{
            item === 1 && item !== missed ? first = first+1 :
            item === 2 && item !== missed ? second = second+1 :
            item === 3 && item !== missed ? third = third+1 : null;
        });
            console.log('1:'+first + " " + "2:" + second + " " + "3:"+ third);
        let virtualCart = [];
        virtualCart.push(first,second,third);
        console.log(virtualCart);
        let userCart = virtualCart.map((item,i)=>{
            console.log(item);
            if (!item && (missed-1) !== i) {
                return;
            }else if ((missed-1) === i) {
                return;
            }else{
                return <li key={i}>c {info[i].name} {item}</li>
            }
        });
        let total = Number(); //Очищаем корзину не сбрасывая выбор пользователя при скрытии товара из доступа
        virtualCart.map((item)=>total += item)
        console.log(total);
        this.setState({cart:userCart,total});
    };

    selectEffect = (e) => { //Сброс CSS анимации при наведении на упаковку
        e.currentTarget.style.animation = 'none';
    };

    leaveEffect = (e, index) => { //Присвоение CSS анимации после ухода курсора
        if (index === this.state.missed) {
            return;
        } else {
            e.currentTarget.style.animation = "selectEffect .5s ease-in";
        };
    };
    elementsCreate = () => {
        const elements = this.state.info.map((item, i) => {
            return (
                <Element name={item.name}
                     count={item.count}
                     weight={item.weight}
                     missed={this.state.missed}
                     infoChange={this.infoChange}
                     description={item.description}
                     index={i+1}
                     cs={item.colorScheme}
                     handleClick={this.handleClick}
                     exclude={this.promptAnswer}
                     selectEffect={this.selectEffect}
                     leaveEffect={this.leaveEffect}
                     key={i}
            />
            );
        });
        return elements;
    };
    showCart = () => {
        let cart = this.cartList.current;
        let cartDisplay = getComputedStyle(cart).display;
        if (cartDisplay === 'none') {
            cart.style.display = "block";
        } else {
            cart.style.display = "none";
        };
    };

    render() {
        const { selected, total, cart } = this.state;
        const elements = this.elementsCreate();
        return (
            <div className="app">
            <div className="selected" 
                style={selected.length === 0 ? {display:'none'}:{display:' '}}
                onClick={(event)=>{this.showCart()}}
                >
                <p>Выбрано {total}</p>
                <ul ref={this.cartList}>
                    {cart}
                </ul>
            </div>      
            <h4>Ты сегодня покормил кота?</h4>
        <div className="app__wraper">
               {elements}
        </div>
        <div className="modal">
            <p>ПКМ на упаковке для изменения доступности</p>
        </div>
    </div>
        )
    }
}