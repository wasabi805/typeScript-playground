console.log("i work!!!");
var item = {
  prodId: "",
  prodName: "",
};
var user = {
  name: "",
  phone: "",
};
// const newInvoice =(user: any, item: any): InewInvoice =>{
//     let newUser = {
//         ...user,
//         cart : [item]
//     }
//     return newUser
// }
var newInvoice = function (_a) {
  var name = _a.name,
    phone = _a.phone,
    cart = _a.cart;
  var newUser = {
    name: name,
    phone: phone,
    cart: cart,
  };
  return newUser;
};
console.log(newInvoice({ name: "tim", phone: "123-456-7890" }));
