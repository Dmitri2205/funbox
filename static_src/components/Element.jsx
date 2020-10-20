import React from 'react';
import RactDOM from 'react-dom';

export default function Element(props){
return(
<div className="app__wraper_helper">
<div className="app__wraper_helper-item"
     style={props.missed === props.index ? {border:'3px solid gray',animation:'unset'}:{border:'3px solid #d91667'} }
>
<span className='borderPiece' style={props.missed === props.index ? {backgroundColor:'gray'}:{2}}></span>
   <div className="app__wraper_helper-itemText"
        style={props.missed === props.index ? {filter:'grayscale(100%)'} : {filter:'unset'}}
        onMouseOver={(event)=>{props.selectEffect(event)}}
        onMouseLeave={(event)=>{props.leaveEffect(event)}}
        onClick={(event)=>{props.handleClick( 
            ( props.index * (-1) )
            )}}
    >
           <p style={{paddingTop:'27px'}}>Сказочное заморское яство</p>
           <h1>Нямушка</h1>
           <p onClick={(event)=>{props.infoChange(event,"name",props.index)}}
              style={{ position:'relative',zIndex:'9999'}}>
            с {props.name}
            </p>
           <p>
           <b onClick={(event)=>{props.infoChange(event,"count",props.index)}}
              style={{ position:'relative',zIndex:'9999',marginRight:"2px"}}
            >{props.count}</b> порций <br/>	
            <b>2</b> мыши в подарок
           </p>	
           <span className="weight" 
                 onClick={(event)=>{props.infoChange(event,"weight",props.index)}}
                    style={{zIndex:'9999'}}
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
 className='description__text'>Головы щучьи с чесноком да свежайшая сёмгушка.</p>

  <p style={props.missed === props.index ? {display:' ',color:"#d91667"} : {display:"none"}} 
  className='description__text_missed'>Печалька.С {props.name} закончился.</p>
    </div>
 )
}