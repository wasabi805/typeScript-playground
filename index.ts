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

const newInvoice = <T extends InewInvoice>({ name, phone, cart }: T) : InewInvoice  => {
  let newUser: InewInvoice = {
    name,
    phone,
    cart,
  };

  return newUser;
};

console.log(newInvoice({ name: "tim", phone: "123-456-7890" }));
