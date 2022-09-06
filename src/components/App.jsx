import Painting from "./Painting"
import paintings from '../paintings.json'
export default function App(){
return (
<div>
    <Painting 
imageUrl={paintings[0].url}
 title={paintings[0].title}
 authorName={paintings[0].author.tag}
 price={paintings[0].price}
 />
    <Painting 
imageUrl={paintings[1].url}
 title={paintings[1].title}
 authorName={paintings[1].author.tag}
 price={paintings[1].price}
 />
    <Painting 
imageUrl={paintings[2].url}
 title={paintings[2].title}
 authorName={paintings[2].author.tag}
 price={paintings[2].price}
 />

 </div>
 );
}