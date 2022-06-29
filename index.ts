console.log("i work!!!");
interface Iitem {
  prodId: string | number;
  prodName: string | number;
}

const item: Iitem = {
  prodId: "",
  prodName: "",
};

interface Iuser {
  name: string;
  phone: string | number;
}

const user: Iuser = {
  name: "",
  phone: "",
};

interface InewInvoice extends Iuser {
  cart?: Iitem[] | undefined;
}


/* Assigning types the verbose way would look something like...

    const newInvoice = ({ name, phone, cart }: {name: string, phone: string, cart: Iitem[]}): InewInvoice => {
    let newUser: InewInvoice = {
      name,
      phone,
      cart,
    };
  
    return newUser;
  };


  The example below cleans up they type assignment above with Generics and extending an interface.
  see the README.md file for a broken down explanation.
*/

const newInvoice = <T extends InewInvoice>({ name, phone, cart }: T): InewInvoice => {
  let newUser = {
    name,
    phone,
    cart,
  };

  return newUser;
};

console.log(newInvoice({ name: "tim", phone: "123-456-7890" }));
