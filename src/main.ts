// =========================================
// 問題1
// =========================================

function fetchNumber(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(42);
    }, 1000);
  });
}

fetchNumber().then((num) => {
  console.log("問題1:", num);
});

console.log("問題1: 待機中に別の処理が出来ます");

// =========================================
// 問題2
// =========================================

function fetchUserData(shouldFail: boolean): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject("サーバーエラー");
      } else {
        resolve("OK");
      }
    }, 1000);
  });
}

async function main(shouldFail: boolean): Promise<void> {
  try {
    const result = await fetchUserData(shouldFail);
    console.log("問題2:", result);
  } catch (error) {
    console.log(`問題2: NG: ${error}`);
  }
}

main(false);
main(true);

// =========================================
// 問題3
// =========================================

async function task1(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("A");
    }, 500);
  });
}

async function task2(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("B");
    }, 500);
  });
}

async function task3(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("C");
    }, 500);
  });
}

async function runTasksInOrder(): Promise<void> {
  const a = await task1();
  const b = await task2();
  const c = await task3();

  console.log(`問題3: ${a}-${b}-${c}`);
}

runTasksInOrder();
