{
    /*
    * JavaScript
    * Primitive: number, string, boolean, bignit, symbol, null, undefined
    * Object: function, array ....
    */ 
   
    // number
    const num:number = -6;

    // string
    const str:string = 'hello';

    // boolean
    const boal:boolean = false;

    // undefined
    let name: undefined; //  π©
    let age: number | undefined;
    age = undefined;
    age = 1;
    function find(): number | undefined {
        return 1;
    }

    // null
    let person: null; // π©
    let person2: string | null;

    // unknown π©
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;
    
    // any π©
    let anything: any = 0;
    anything = 'hello';

    // void
    function print(): void {
        console.log('hello');
        return;
    }
    let unusable: void = undefined; // π©

    // never
    function throwError(message: string): never {
        // message -> server (log)
        throw new Error(message); // μλ¬λ₯Ό λμ§κ±°λ
        // while(true) { κ³μ λλμ§ μλ μ½λλ₯Ό μμ±ν΄μΌ ν¨

        // }
    }
    let neverEnding: never; // π© 

    // object
    let obj: object; // π©  κ΅¬μ²΄μ μΌλ‘ λͺμν΄μ μμ±νλ κ²μ΄ μ’μ
    function acceptSomeObject(obj: object) {}
    acceptSomeObject({ name: 'ellie'});
    acceptSomeObject({ animal: 'doh'});
}