after goint through the install process from https://www.c-sharpcorner.com/blogs/typescript-you-first-program-in-ts

run this so that vscode recongnizes ts file. It will create a js file as well heads up: npx tsc index.ts
from https://stackoverflow.com/a/56279581/7857134

## EXAMPLE

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
