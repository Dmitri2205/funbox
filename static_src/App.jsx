import React from "react";
import ReactDOM from "react-dom";
import Element from './components/Element';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.infoChange = this.infoChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.promptAnswer = this.promptAnswer.bind(this);
        this.cartList = React.createRef();
        this.cartArrow = React.createRef();
    };
    state = {
        selected: [], //Порядковый массив корзины для сопоставления
        missed: 0, //Порядковый номер недоступой упаковки
        cart: [], //Массив с элементами корзины
        total: " ",
        info: [{ //Массив информации о товаре
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
        ]
    };
    promptAnswer = (event, index) => { //Обработчик "недоступных упаковок".Максимальное знаечение:1
        const { selected, missed } = this.state;
        event.preventDefault();
        let clear = [];
        let answer = confirm("Убрать c" + " " + this.state.info[index - 1].name + '?');
        if (missed == index) {
            alert("Этот товар уже убран из доступа")
            let add = confirm("Добавить этот товар обратно?");
            if (add) {
                this.setState({ missed: 0 });
            } else {
                alert("Тогда оставим его недоступным");
            };
        } else if (answer) {
            selected.map((item, i) => {
                if (item === index) {
                    return item;
                } else {
                    clear.push(item);
                };
            });
            this.setState({ missed: index, selected: clear });
        };
        setTimeout(() => {
            this.cartGenerate(index);
        }, 50)
    };
    stop = (e) => { //Функция отмены всплытия событий для дочернего элемента 
        e.stopPropagation();
    };
    infoChange = (e, type, index) => { //Изменение информации упаковки
        const { info } = this.state;
        let arr = [...info];
        this.stop(e); //Отмена всплытия события для элемента
        if (index !== this.state.missed) {
            if (type === "name") {
                const name = prompt("С чем изволите?");
                const n = Number(name); //Проверка ввода на "число"
                arr[index - 1].name = name;

                if (name && n !== n) {
                    this.setState({ info: arr });
                    let description = prompt("Товару нужно описание");
                    if (description) {
                        arr[index - 1].description = description;
                    } else {
                        alert("Описание не добавлено");
                    }
                } else if (!name) {
                    alert("Нужно что-то ввести");
                } else if (typeof n === 'number') {
                    alert('Цифры сюда не подойдут');
                };
            } else if (type === "count") {
                const count = Number(prompt("Введите количество порций"));
                arr[index - 1].count = count;
                if (count && typeof count === 'number') {
                    this.setState({ info: arr });
                } else {
                    alert("введите число");
                };
            } else if (type === "weight") {
                const weight = Number(prompt("Введите вес"));
                const n = Number(weight);
                arr[index - 1].weight = weight;
                if (weight && typeof n === "number") {
                    this.setState({ info: arr })
                } else {
                    alert('Буквы сюда не подойдут');
                };
            };
        } else {
            console.log("Редактирование отключено");
        };
    };
    handleClick = (value) => { //Обработчик клика
        let { selected, missed } = this.state;
        let sorted = [...selected, value].sort((a, b) => { return a - b });
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

        selected.forEach((item) => {
            if (item !== missed ) {
                item === 1 ? first = first + 1 :
                item === 2 ? second = second + 1 :
                item === 3 ? third = third + 1 : null;
            };
        });
        let virtualCart = [];
        virtualCart.push(first, second, third);
        let userCart = virtualCart.map((item, i) => {
            if (!item && (missed - 1) !== i) {
                return;
            } else if ((missed - 1) === i) {
                return;
            } else {
                return <li key={i}>c {info[i].name} {item}</li>
            }
        });
        let total = Number();
        virtualCart.map((item) => total += item)
        this.setState({ cart: userCart, total });
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
        let cartArrow = this.cartArrow.current;
        let cartDisplay = getComputedStyle(cart).display;
        if (cartDisplay === 'none') {
            cartArrow.style.transform = "rotateX(180deg)";
            cart.style.display = "block";
        } else if (cartDisplay === "block") {
            cartArrow.style.transform = "rotateX(0deg)";
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
                >
                <p>Выбрано {total}
                    <span ref={this.cartArrow} 
                          onClick={(event)=>{this.showCart()}}
                          style={selected.length === 0 ? {transform:'rotateX(0Deg)'}:{}}
                          >
                    </span>
                </p>
                <ul ref={this.cartList}
                    style={selected.length === 0 ? {display:'none'}:{}}
                >
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