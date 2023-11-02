// Клас Key для генерації ключа
class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

// Клас Person, який приймає об'єкт Key
class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

// Абстрактний клас House
abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.door = false; // Двері закриті за замовчуванням
    this.key = key;
  }

  // Абстрактний метод для відкриття дверей
  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log('Людина прийшла в будинок.');
    } else {
      console.log('Двері закриті. Людина не може ввійти.');
    }
  }
}

// Клас MyHouse успадковується від House та реалізує openDoor
class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true; // Відкрити двері, якщо ключі збігаються
      console.log('Двері відкриті.');
    } else {
      console.log('Двері залишаються закритими. Невірний ключ.');
    }
  }
}

// Створюємо ключ, будинок та людину
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

// Відкриваємо двері та впускаємо людину
house.openDoor(person.getKey());
house.comeIn(person);

export {};