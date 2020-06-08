import React from 'react';
import Card from './Card';

// 這個寫法是把const = cardArray省略掉，
// 直接把新的array放進最開始的return裡，但是要記得加上{}變成js 語言

// const CardList = ( {robots} )=> {
//     return (
//         <div>
//             {
//                 robots.map((user,i) => {
//                     return (
//                     <Card 
//                         id={robots[i].id} 
//                         name={robots[i].name} 
//                         email={robots[i].email} 
//                     />);
//                 })
//             }
//         </div>
//     );
// }

// 另一種寫法：
const CardList = ( {robots} )=> {
    const cardArray = robots.map((user,i) => {
        return ( <Card key={"rob"+i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />);
    })
    return (
        <div>
            {cardArray}
        </div>
    );
}


export default CardList;