import React from "react";
import ReactDOM from "react-dom";
import style from "./style/style.css";

export default class App extends React.Component {
    state = {
        selected: [], //Порядковый массив корзины для сопоставления
        missed: 0,   //Порядковый номер недоступой упаковки
        cart: [] //Массив с элементами списка
    };

    componentDidMount() {
        setTimeout(() => { this.promptAnswer() }, 800); //Выбор недоступной упаковки
    };

    promptAnswer = () => { //Обработчик "недоступных упаковок".Максимальное знаечение:1
        const answer = prompt('Что убрать?(Введите номер.Доступно только 1 значение)');
        this.setState({ missed: Number(answer) });
    };

    handleClick = (value) => { //Обработчик клика
        let selected = this.state;
        console.log(value);
        var sorted = [...this.state.selected, value].sort((a, b) => { return a - b });
        switch (value) {
            case '1':                    //Кейсы добавления
                this.setState({ selected: sorted });
                break;
            case '2':
                this.setState({ selected: sorted });
                break;
            case '3':
                this.setState({ selected: sorted });
                break;
            case "-1":                   //Кейсы удаления
                this.deleteItem(value);
                break;
            case "-2":
                this.deleteItem(value);
                break;
            case "-3":
                this.deleteItem(value);
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
            if (value === '-1' && item === '1' && index === null) {
                console.log(item, i);
                index = i;
            } else if (value === '-2' && item === '2' && index === null) {
                console.log(item, i);
                index = i;
            } else if (value === '-3' && item === '3' && index === null) {
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
        let { selected, cart } = this.state;
        const userCart = selected.map((item, i) => { //Добавление в "корзину"
            if (item === '1') {
                let element = <li key={i}>Фуа-гра</li>;
                return element;
            } else if (item === '2') {
                let element = <li key={i}>Рыба</li>;
                return element;
            } else {
                let element = <li key={i}>Кура</li>;
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
    }

render() {
        let { missed, selected, cart } = this.state;
        return (
	<div className="app">
			<div className="selected" 
				style={selected.length === 0 ? {display:'none'}:{display:' '}}>
				<p>Выбрано {selected.length}</p>
				<ul>{cart}</ul>
			</div>      
		    <h4>Ты сегодня покормил кота?</h4>
		<div className="app__wraper">
		        <div className="app__wraper_helper">
		    {/* Вспомогательная обёртка */}
		        <div className="app__wraper_helper-item" 
		        style={missed === 1 ? {border:'3px solid gray',animation:"none"}:{border:'3px solid #1698d9'} }
		        >
		        <span className='borderPiece' style={missed === 1 ? {backgroundColor:'gray'}:{backgroundColor:'#1698d9'}}></span>
					<div className="app__wraper_helper-itemText"
			    		style={missed === 1 ? {filter:'grayscale(100%)'} : {filter:'unset'}}
				 		onMouseOver={(event)=>{this.selectEffect(event)}}
				        onMouseLeave={(event)=>{this.leaveEffect(event,'1')}}
						onClick={(event)=>{this.handleClick('-1')}}>
							<p style={{paddingTop:'27px'}}>Сказочное заморское яство</p>
							<h1>Нямушка</h1>
							<p>с фуа-гра</p>
							<p><b>10</b> порций <br/>	
							 мышь в подарок
							</p>	
		        			<span className="weight"><p>0,5</p>кг </span>
					</div>
		        </div>

		        <p style={missed === 1 ? {display:"none"} : {display:' '}}
		       	className="buy">Чего сидишь?Порадуй котэ,<span onClick={(event)=>this.handleClick("1")}>купи</span></p>

		        <p style={missed === 1 ? {display:"none"} : {display:' '}} 
		        className='description__text'>Печень утки разварная с артишоками.</p>
		        
		         <p style={missed === 1 ? {display:' ' ,color:"#1698d9"} : {display:"none"}} 
		        className='description__text_missed'>Печалька.С фуа-гра закончился.</p>

		        </div>
				
				<div className="app__wraper_helper" >
			{/* Вспомогательная обёртка */}
		        <div className="app__wraper_helper-item"
		         style={missed === 2 ? {border:'3px solid gray',animation:'unset'}:{border:'3px solid #d91667'} }>
		        <span className='borderPiece' style={missed === 2 ? {backgroundColor:'gray'}:{backgroundColor:'#d91667'}}></span>
					<div className="app__wraper_helper-itemText"
					 	 style={missed === 2 ? {filter:'grayscale(100%)'} : {filter:'unset'}}
						 onMouseOver={(event)=>{this.selectEffect(event)}}
					     onMouseLeave={(event)=>{this.leaveEffect(event)}}
						 onClick={(event)=>{this.handleClick('-2')}}
						 >
							<p style={{paddingTop:'27px'}}>Сказочное заморское яство</p>
							<h1>Нямушка</h1>
							<p>с рыбой</p>
							<p><b>40</b> порций <br/>	
						 	<b>2</b> мыши в подарок
							</p>	
		        			<span className="weight"><p>2</p>кг </span> 
						</div>	
		        	</div>
		      
		        <p style={missed === 2 ? {display:"none"} : {display:''}}
		       	className="buy">Чего сидишь?Порадуй котэ,<span onClick={(event)=>this.handleClick("2")}>купи</span></p>

		        <p style={missed === 2 ? {display:"none"} : {display:' '}} 
		        className='description__text'>Головы щучьи с чесноком да свежайшая сёмгушка.</p>
		        
		        <p style={missed === 2 ? {display:' ',color:"#d91667"} : {display:"none"}} 
		        className='description__text_missed'>Печалька.С рыбой закончился.</p>
		       
		        </div>  
		   
		        <div className="app__wraper_helper">
					{/* Вспомогательная обёртка */}
		        <div className="app__wraper_helper-item"
		         style={missed === 3 ? {border:'3px solid gray'}:{border:'3px solid #FFF44B'} }
		        >
		        <span className='borderPiece' style={missed === 3 ? {backgroundColor:'gray'}:{backgroundColor:'#FFF44B'}}></span>
					<div className="app__wraper_helper-itemText"
					 	style={missed === 3 ? {filter:'grayscale(100%)'} : {filter:'unset'}}
						onMouseOver={(event)=>{this.selectEffect(event)}}
				        onMouseLeave={(event)=>{this.leaveEffect(event)}}
						onClick={(event)=>{this.handleClick('-3')}}>
							<p style={{paddingTop:'27px'}}>Сказочное заморское яство</p>
							<h1>Нямушка</h1>
							<p>С курой</p>
							<p><b>40</b> порций <br/>	
						 	<b>2</b> мыши в подарок
							</p>	
		        			<span className="weight"><p>0,7</p>кг </span> 
						</div>	
		        	</div>
		      
		        <p style={missed === 3 ? {display:"none"} : {display:''}}
		       	className="buy">Чего сидишь?Порадуй котэ,<span onClick={(event)=>this.handleClick("3")}>купи</span></p>

		        <p style={missed === 3 ? {display:"none"} : {display:''}} 
		        className='description__text'>Филе циплят с трюфелями в бульоне.</p>
		        
		        <p style={missed === 3 ? {display:' ',color:'#FFF44B'} : {display:"none"}} 
		        className='description__text_missed'>Печалька.С курой закончился.</p>  	</div>
 		</div>
  </div>
        )
    }
}