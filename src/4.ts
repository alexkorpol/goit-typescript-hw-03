class Key{
    private signature: number = (Math.floor(Math.random() * 100) + 1);
    // this.signature = Math.random();

    getSignature() {
        return this.signature
    }

}
abstract class House{
    protected door: boolean = false;
    tenants = []
    key = new Key;
    public abstract OpenDoor(key):void
    comeIn() {
        if (this.door) {
           this.tenants.push( new Person)  
        }
    }
}

class MyHouse extends House{

}
class Person{

}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};