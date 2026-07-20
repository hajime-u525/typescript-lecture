// src/main.ts

function divide(a: number, b: number): number {
  // bが0ならエラーを発生させる
  if (b === 0) {
    throw new Error("0で割ることはできません");
  }

  // そうでなければ割り算の結果を返す
  return a / b;
}

// 成功パターン
try {
  const result = divide(10, 2);
  console.log(result);
} catch (error) {
  console.error((error as Error).message);
} finally {
  console.log("計算を終了しました");
}

// 失敗パターン
try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error((error as Error).message);
} finally {
  console.log("計算を終了しました");
}

//７・20課題ように書き換え.  RPGのメインTSは過去ブランチにあり
