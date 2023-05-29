import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions/add";
import "../CSS/addProduct.css"


const AddProduct = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    // const [list, setList] = useState([]);
    // useEffect(() => {
        
    //     firestore.collection('myCollection').get().then((snapshot) => {
    //       snapshot.forEach((doc) => {
    //         console.log(doc.id, '=>', doc.data());
    //       });
    //     });
    //   }, []);
    const handleChangeId = (id) => {
        setId(id.target.value);

    }
    const handleChangeName = (name) => {
        setName(name.target.value);

    }
    const handleChangePrice = (price) => {
        setPrice(price.target.value);

    }
    const handleChangeCategory = (category) => {
        setCategory(category.target.value);

    }

    const dispatch = useDispatch();

    const handleAddProduct =  () => {
        const product = {
            id : id,
            name : name ,
            price : price ,
            category : category
        }
        dispatch(addProduct({
            product
        }));
        console.log("data " + product);
    }
  
    // const handleAddProduct =  () => {
    //     const newProduct = {
    //         id : id,
    //         name : name ,
    //         price:price,
    //         category : category

    //     }
    //     if(newProduct.id === list.id){
    //         console.log("trùng id");
    //     }else {

    //     }
    //     setList([...list , newProduct]);
    //     console.log("Danh sách sản phẩm " + list);
    // }
   
    return (
        <div className="container">
            <h1 >Add Products</h1>
            <form action="" className="form-addProduct">
                <div className="form-group">
                    <label className="label">Id : </label>
                    <input className="input" type="number" placeholder="input id product" value={id} onChange={handleChangeId}></input>
                </div>
                <div className="form-group">
                    <label  className="label">Name Product </label>
                    <input className="input" type="text" value={name} placeholder="input name product" onChange={handleChangeName}></input>
                </div>
                <div className="form-group">
                    <label  className="label">Price : </label>
                    <input className="input" type="number" value={price} placeholder="input price product" onChange={handleChangePrice}></input>
                </div>
                <div className="form-group">
                    <label  className="label">Category: </label>
                    <input className="input" type="text" value={category} placeholder="input category product" onChange={handleChangeCategory}></input>
                </div>
                <button className="btn-add" onClick={handleAddProduct}>Add product</button>
            </form>
            {/* <div >
                <h1>listProduct</h1>
                {list.map((list) => (
                    <div key={list.id}>
                        <h2> {list.name}</h2>
                        <p> {list.price}</p>
                        <p>{list.category}</p>
                    </div>
                ))}
            </div> */}
        </div>
    );
}
export default AddProduct;