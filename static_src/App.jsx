import React from "react";
import ReactDOM from "react-dom";
import Element from './components/Element';
import style from "./style/style.css";

export default class App extends React.Component {
    state = {
        selected: [], //Порядковый массив корзины для сопоставления
        missed: 0,   //Порядковый номер недоступой упаковки
        cart: [], //Массив с элементами списка
        info:
        [    
	        {
	         name:"фуа-гра",
	         count:'10',
	         weight:'0,5'
	    	},
	    	{
	    	 name:"рыбой",
	    	 count:"40",
	    	 weight:"2"	
	    	},
	    	{
		     name:"курой",
		     count:"100",
		     weight:"5"
	    	}
        ]   //Массив информации о товаре
    };
    componentDidMount() {
        setTimeout(() => { this.promptAnswer() }, 800); //Выбор недоступной упаковки
    };
    stop = (e) => {      //Функция отмены всплытия событий для дочернего элемента 
    	e.stopPropagation(); 
    };
    promptAnswer = () => { //Обработчик "недоступных упаковок".Максимальное знаечение:1
        const answer = prompt('Что убрать?(Введите номер.Доступно только 1 значение)');
        this.setState({ missed: Number(answer) });
    };
    infoChange = (e,type,index) => { //Изменение информации упаковки
    	const {info} = this.state;
    	this.stop(e);     //Отмена всплытия события для элемента
    	if (type === "name") {
	    	const name = prompt("с Чем?");
	    	let arr = [...this.state.info]; //Копирование массива через spread 
	    	arr[index].name = name;        //Присвоение значения свойству по индексу элемента
	    	this.setState({info:arr});    //Обновление state 
	    }else if (type === "count") {
	    	const count = prompt("Введите количество порций");
	    	let arr = [...this.state.info];
	    	arr[index].count = count;
	    	this.setState({info:arr});
	    }else if (type === "weight") {
	    	const weight = prompt ("Введите вес");
	    	let arr = [...this.state.info];
	    	arr[index].weight = weight;
	    	this.setState({info:arr});
	    };
    };
    handleClick = (value) => { //Обработчик клика
        let selected = this.state;
        console.log(value);
        var sorted = [...this.state.selected, value].sort((a, b) => { return a - b });
        switch (value) {
            case 1:                    //Кейсы добавления
                this.setState({ selected: sorted });
                break;
            case 2:
                this.setState({ selected: sorted });
                break;
            case 3:
                this.setState({ selected: sorted });
                break;
            case -1:                   //Кейсы удаления
                this.deleteItem(value);
                break;
            case -2:
                this.deleteItem(value);
                break;
            case -3:
                this.deleteItem(value);
                break;
            case 'info':

            break;
        };
        setTimeout(() => {  //Вызов инициализации создания элементов корзины с таймаутом для успешной обработки порядкового массива SELECTED
            this.userSelect();
        }, 300);
    };
    deleteItem = (value) => {    //Инициация удаления из массива корзины
        let index = null;  //Индекс удаляемого элемента
        const { selected } = this.state;
        const searchAndSlice = selected.map((item, i) => {
            if (value === -1 && item === 1 && index === null) {
                console.log(item, i);
                index = i;
            } else if (value === -2 && item === 2 && index === null) {
                console.log(item, i);
                index = i;
            } else if (value === -3 && item === 3 && index === null) {
                console.log(item, i);
                index = i;
            } else {
                return item;
            };
        });
        if (index !== null) {
            searchAndSlice.splice(index, 1); //Удаление элемента в случае его нахождения в корзине
        }else if (index === null) {
    	    alert('Этот товар не выбран');   //Если товар не добавлен
        };
    this.setState({ selected: searchAndSlice.sort((a, b) => { return a - b }) }); //Обновление и сортировка массива корзины
    }
    userSelect = () => {    //Инициация создания элементов корзины
        let { selected, cart, info } = this.state;
        const userCart = selected.map((item, i) => { //Добавление в "корзину"
            if (item === 1) {
                let element = <li key={i}>c {info[0].name}</li>;
                return element;
            } else if (item === 2) {
                let element = <li key={i}>c {info[1].name}</li>;
                return element;
            } else {
                let element = <li key={i}>c {info[2].name}</li>;
                return element;
            };
        });
    this.setState({ cart: [...userCart] });
    };

    selectEffect = (e) => {       //Сброс CSS анимации при наведении на упаковку
    	e.target.style.animation = 'none';
    };

    leaveEffect=(e,value) => {     //Присвоение CSS анимации после ухода курсора
    	e.target.style.animation = "selectEffect 1s ease-in-out";
	};
	elementsCreate = () => {
		const elements = this.state.info.map((item,i)=>{
			console.log(elements);
			return (
			<Element name={item.name}
							count={item.count}
							weight={item.weight}
							missed={this.state.missed}
							infoChange={this.infoChange}
							index={i+1}
							handleClick={this.handleClick}
							selectEffect={this.selectEffect}
							leaveEffect={this.leaveEffect}
							key={i}
			/>
			);
		});
		return elements;
	};
render() {
	const { missed, selected, cart,info } = this.state;
	const elements = this.elementsCreate();
        return (
	<div className="app">
			<div className="selected" 
				style={selected.length === 0 ? {display:'none'}:{display:' '}}>
				<p>Выбрано {selected.length}</p>
				<ul>{cart}</ul>
			</div>      
		    <h4>Ты сегодня покормил кота?</h4>
		<div className="app__wraper">
		       {elements}
 		</div>
  	</div>
        )
    }
}