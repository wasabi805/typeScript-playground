# Generics in TypeScript

## Some Resources

after going through the install process from [here,](https://www.c-sharpcorner.com/blogs/typescript-you-first-program-in-ts)

So that vscode recongnizes ts files run:

    npx tsc index.ts

[see](https://stackoverflow.com/a/56279581/7857134)
Just a heads up, it will create a js file as well

Jack Herrington also has some great explanations on generics [here](https://www.youtube.com/watch?v=Q4QDyr0jLfo)

## EXAMPLE : Make generics for this function

say we have this situation:

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

    const newInvoice = ({ name, phone, cart })  => {

    let newUser = {
        name,
        phone,
        cart,
    };

    return newUser;
    };

We could start off by assigning types to the args in newInvoice function such as :

    const newInvoice = ({ name, phone, cart }: {name: string, phone: string, cart: Iitem[]}): InewInvoice => {
    let newUser: InewInvoice = {
      name,
      phone,
      cart,
    };

    return newUser;

};

This is fine but as the function grows, it might start to get messy adding types the longhand way all over the place. Instead, we could replace the TYPE for InewInvoice with a generic arg of "T".

Let's start over by removing the all the type declerations , we could replace them with the generic "T" such as :

    const newInvoice = <T> ({ name, phone, cart }: T )=> {
    let newUser = {
      name,
      phone,
      cart,
    };

    return newUser;

};

Here, what we're saying is that function newInvoice fn and its args "has a type. What type has yet to be determined". We can determine that type by extending the InewInvoice interface..

    const newInvoice = <T extends InewInvoice> ({ name, phone, cart }: T )=> {
    let newUser = {
      name,
      phone,
      cart,
    };

    return newUser;

- By extending T, what we're saying is that the arg types passed into newInvoice are determined by the InewInvoice inteface.

- And since we know that newInvoice returns a newUser object containing products in their cart, we can assign the type of InewInvoice to the return of newInvoice function like so:

  ```
  const newInvoice = <T extends InewInvoice>({ name, phone, cart }: T): InewInvoice => {

  let newUser = {
      name,
      phone,
      cart,
  };

  return newUser;
  };
  ```

Finally, if you were to hover over const newInvoice, you will see that the types are declared for that object.
