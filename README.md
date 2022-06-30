# Generics in TypeScript

## Some Resources

One of the most solid articles on Generics see [Jim Rottinger's Better Programing post : ](https://betterprogramming.pub/typescript-generics-90be93d8c292#:~:text=The%20identity%20function%20is%20a,function%20is%20not%20very%20flexible.)

Jack Herrington also has some great explanations on generics [here](https://www.youtube.com/watch?v=Q4QDyr0jLfo)

## The Identity Function

An identity function simply returns back the argument that was passed into it according to the [docs](https://www.typescriptlang.org/docs/handbook/2/generics.html)

In javaScript, that looks something this:

    function identity( arg ){
        return arg
    }

In TypeScript, function identity would look like this:

    function identity<T>( arg: T ) : T {
        return arg
    }

So in terms of how Generics in TypeScript operate when they are applied to a javaScript function, I like to think of TypeScript generics are like a shadow doppleganer of the javaScript that mirrors it's functional behavior by mimicing the javaScript identity function it's applied to. Except, one of the main responsibilities of this shadow TypeScript function is to keep track of the **type** for the arg that's passed in the javaScript function.

- The carrots are the equivalent to the parenthesis of a javaScript function
- The T is the equivalent of arg as they are both passed into their respective functions

When the arg is created and passed into the javaScript function, the **type** associated with arg also gets declared as T . Similarly, T is passed along into its shadow TypeScript function.

So as the arg in the javaScript function passes through it's function body, T follows along keeping track of the arg's type.

Arg then can be anything and its type is "being kept on record" for lack of a better term, by the shadow TypeScript function.

The TypeScript function is constantly checking and making sure that when arg's value is ever used for things like to compute data or have arg's value altered, arg's type remains true to when it was first declared. The beauty of this is that arg can be any **type** of data. Arrays, booleans, strings, numbers etc and we have a way to keep track of what the type is for the arg in javaScript.

# Breaking Down Creating a Generic

I'll use the example from the [docs](https://www.typescriptlang.org/docs/handbook/2/generics.html) and paraphrase it as to my understanding of what's happening when we create a generic.

Let's examine this :

    //A.)
    interface GenericIdentityFn {
        <Type>(arg: Type): Type;
    }
    //B.)
    function identity<Type>(arg: Type): Type {
        return arg;
    }

    //C.)
    let myIdentity: GenericIdentityFn = identity;

The bullets below correspond to the code block above
What we have going on here is:

A.)

- An interface containing a typeScript function<> that accepts argument of Type and javaScript function() that accepts and agrument of arg where arg's type is Type.
- The TypeScript function returns the Type that was passed in as Type to <>

B.)

- A javaScript function named identity that accepts an arg whose **type** is Type. Identity return arg whose return type should be Type.

C.)

- A variable called myIdentity whose type is the interface described in A.)
- To reiterate, that interface's value is javaScript function that recieves an arg with **type** and that javaScript function should return a value that has the same type of arg.
- myIdentity's value is set equal to the indentity function

The reason it's kind of important to breakdown what's happening in the explanation above is because

    >Understanding when to put the type parameter directly on the call signature and when to put it on the interface itself will be helpful in describing what aspects of a type are generic.
