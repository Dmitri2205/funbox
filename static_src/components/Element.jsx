import React from 'react';
import RactDOM from 'react-dom';


export default function Element(props) {
    let count = Math.floor(props.count / 20);
    return (
        <div className="app__wraper_helper">
<div className="app__wraper_helper-item"
     style={props.missed === props.index ? {border:'3px solid gray',animation:'unset'} : {borderColor:props.cs} }
     onMouseOver={(event)=>{props.selectEffect(event),false}}
     onMouseLeave={(event)=>{ props.leaveEffect(event,props.index),false}}
     onClick={(event)=>{props.handleClick(( props.index * (-1)))}}
     onContextMenu={(event)=>{props.exclude(event, props.index)}}
     style={props.missed === props.index ? {filter:'grayscale(100%)'} : {filter:'unset'}}>

  <div className="app__wraper_helper-itemText"
        style={{border:'3px solid `props.cs`'}}>
           <p style={{paddingTop:'27px'}}>Сказочное заморское яство</p>
           <p>Нямушка</p>
           <p onClick={(event)=>{props.infoChange(event,"name",props.index)}}>
            с {props.name}
            </p>
           <p>
           <b onClick={(event)=>{props.infoChange(event,"count",props.index)}}
              style={{ position:'relative',zIndex:'9999',marginRight:"2px"}}
            >{props.count}</b> порций <br/> 
            <b>{count <= 0 ? null : count } </b>
             мыш{//Проверка правописания
                   count == 0 ? 'ь' : null
                || count%10 == 1 ? 'ь' : null 
                ||(count%10 == 0 || count%10 >= 5) || (count > 10 && count < 21) ? 'ей' : null 
                || count%10 < 5  ? 'и' : null  
              } в подарок
              <br/>
              {count >= 5 ? 'заказчик доволен' : null}
           </p> 
           <span className="weight" 
                 onClick={(event)=>{props.infoChange(event,"weight",props.index)}}
           >
           <p>{props.weight}</p>
               кг
           </span> 
       </div> 
   </div>

<p style={props.missed === props.index ? {display:"none"} : {display:''}}
   className="buy">
      Чего сидишь?Порадуй котэ,
      <span onClick={(event)=>props.handleClick(props.index)}>купи</span>
</p>
 
 <p style={props.missed === props.index ? {display:"none"} : {display:' '}} 
 className='description__text'>{props.description}</p>

  <p style={props.missed === props.index ? {display:' ',color:props.cs} : {display:"none"}} 
  className='description__text-missed'>Печалька.С {props.name} закончился.</p>
    </div>


    )
}