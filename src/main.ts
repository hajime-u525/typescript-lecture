// ① Map を使用して、3人の名前と年齢を登録
const people = new Map<string, number>();

people.set("田中", 20);
people.set("佐藤", 25);
people.set("鈴木", 30);

// ループで表示
for (const [name, age] of people) {
  console.log(`${name}: ${age}歳`);
}

console.log("----------------");

// ② Set を使用して重複のない値を管理
const fruits = new Set<string>();

// 追加
fruits.add("りんご");
fruits.add("みかん");
fruits.add("ぶどう");
fruits.add("りんご"); // 重複しているので追加されない

// 削除
fruits.delete("みかん");

// 表示
for (const fruit of fruits) {
  console.log(fruit);
}

console.log("----------------");

// ③ メールアドレスの形式を検証する関数
function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// 動作確認
console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("invalid-email")); // false
