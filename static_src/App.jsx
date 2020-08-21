import React from "react";
import ReactDOM from "react-dom";
import style from "./style/style.css";


export default class App extends React.Component {
    state = {
        selected: [],
        missed:0,
        cart:[]
    };
    componentDidMount(){
    	setTimeout(()=>{this.promptAnswer()},800);

    };
    onHover = () => {

    };
    promptAnswer = ()=>{  //Обработчик "недоступных упаковок".Максимальное знаечение:1 число
    	const answer = prompt('Что убрать?(Введите номер.Доступно только 1 значение)');
    	this.setState({missed:Number(answer)});
    };
    
    	handleClick = (value)=>{  //Обработчик клика
    	let selected = this.state;
    	console.log(value);
    	var sorted = [...this.state.selected,value].sort((a,b)=>{return a-b});
		switch (value) {
			case '1':
    			this.setState({selected:sorted});
				break;
			case '2':
    			this.setState({selected:sorted});
				break;
				case '3':
    			this.setState({selected:sorted});
    			break;
			};    	
		// var result = selected.find((element,index,array)=>{
			// if (element === '1') {
				// selected.splice(indexOf(element),1);
				// return;
			// };
		// });			3
    	setTimeout(()=>{
	    	this.userSelect();
    	},300);
};
    	userSelect = ()=>{
    		let {selected,cart} = this.state;
    		let fuagra = 0;                  //Колличество упаковок*
    		let fish = 0;								
    		let kura = 0;					

    		const userCart = selected.map((item,i)=>{ //Добавление в "корзину"
    			if (item === '1'){
    			fuagra += 1;	
    			let element = <li key={i}>Фуа-гра</li>; 
    			return element;
    			}else if (item === '2') {	
    			fish += 1;	
    			let element = <li key={i}>Рыба</li>; 
    			return element;
    			}else{	
    			kura += 1;	
    			let element = <li key={i}>Кура</li>; 
    			return element;
    			};
    		});
    		let count = [];
    		count.splice(0,0,fuagra,fish,kura);
    		console.log(count);

    		this.setState({cart:[...userCart]});

    }

    render() {
    	let {missed,selected,cart} = this.state;
        return (
            <div className="app">
    <h4>Ты сегодня покормил кота?</h4>
    
    <div className="selected" 
    	 style={selected.length === 0 ? {display:'none'}:{display:' '}}>
    	 <p>Выбрано {selected.length}</p>
    	 <ul>{cart}</ul>
    </div>
      
      <div className="app__wraper">
        <div className="app__wraper_helper" 
    	style={missed === 1 ? {filter:'grayscale(100%)'} : {filter:'unset'}}>
    {/* Вспомогательная обёртка */}
        <div className="app__wraper_helper-item">
			<div className="app__wraper_helper-itemText" 
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
        
         <p style={missed === 1 ? {display:'block'} : {display:"none"}} 
        className='description__text_missed'>Печалька.С фуа-гра закончился.</p>


        </div>
	<div className="app__wraper_helper" 
		 style={missed === 2 ? {filter:'grayscale(100%)'} : {filter:'unset'}}>
		{/* Вспомогательная обёртка */}
        <div className="app__wraper_helper-item">
			<div className="app__wraper_helper-itemText">
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
        
        <p style={missed === 2 ? {display:' '} : {display:"none"}} 
        className='description__text_missed'>Печалька.С рыбой закончился.</p>
       
        </div>  
   
        <div className="app__wraper_helper" 
			 style={missed === 3 ? {filter:'grayscale(100%)'} : {filter:'unset'}}>
			{/* Вспомогательная обёртка */}
        <div className="app__wraper_helper-item">
			<div className="app__wraper_helper-itemText">
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
        
        <p style={missed === 3 ? {display:' '} : {display:"none"}} 
        className='description__text_missed'>Печалька.С курой закончился.</p>
   

  	</div>
  </div>
  </div>
        )
    }
}