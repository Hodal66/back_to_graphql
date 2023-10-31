const { v4 : uuidv4 } = require('uuid');


exports.Mutation ={
    addCategory:(parent, {input}, {db})=>{
        const {name} = input
        console.log("The Entered Name is :: ",name)
        const newCategory = {
            id:uuidv4(),
            name
        }
        db.categoriesDb.push(newCategory);

        return newCategory
    },
    addProduct:(parent,{input},{db})=>{
        const {
            price,
            newCategory,
            name,
            description,
            onSale,
            image,
        }= input;

const newProducts = {
    id:uuidv4(),
    price,
    newCategory,
    name,
    description,
    onSale,
    image,
}

db.products.push(newProducts);
return(newProducts);
},

addReview:(parent, {input}, {db})=>{
    const {
        date,
        title,
        comment,
        rating
    } = input

    const newReview = {
        id:uuidv4(),
        date,
        title,
        comment,
        rating
    }

    db.reviews.push(newReview);

    return newReview;

}


}