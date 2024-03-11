import React from React;

const Starrate = ({rating})=>{
     const length = 5;
     const defaultValue=3;
     const ratingArray= Aray.from((5),()=> 3);
     console.log (ratingArrays);
     

     return (
        <div className="star-rating">
            {ratingArray.map((_,index)=>{
                const ratingValue=index=1;
                return(
                    <span
                    key={ratingValue<= rating? 'star filled':''}>

                    </span>
                );
            })}

    
   </div>
     );
};

export default Starrate


