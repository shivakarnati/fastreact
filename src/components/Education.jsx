// Different props method
export default function Education({heading, list1, list2, list3}){
    return (
    <div>
    <h3>{heading}</h3>  
    <ul>
    <li>{list1}</li>
    <li>{list2}</li>
    <li>{list3}</li>
    </ul>
    </div>
)
}