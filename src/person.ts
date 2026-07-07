export class Person {
  // プロパティ (クラスが持つデータ)
  private name: string;
  private age: number;
  private password: string;
  private readonly birthYear: number;

  // コンストラクタ
  constructor(name: string, age: number, password: string, birthYear: number) {
    this.name = name;
    this.age = age;
    this.password = password;
    this.birthYear = birthYear;
  }

  // メソッド (クラスが持つ処理)
  public introduce(): string {
    return `こんにちは、私の名前は ${this.name} です。年齢は ${this.age} 歳です。${this.birthYear} 年生まれです。`;
  }

  public changePassword(newPassword: string): void {
    this.password = newPassword;
  }

  public getPassword(): string {
    return this.password;
  }
}
