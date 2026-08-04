class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

const API = "https://long-graphical-warrant-fairfield.trycloudflare.com/";

async function getReceiptData(): Promise<string> {
  const response = await fetch(API);
  const data = await response.json();
  return data.id;
}

const registeredEmails = new Set<string>();
const userDirectory = new Map<string, string>();

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// 奥のロジック：不正ならガード節で早めにthrow
async function registerUser(
  nameInput: string,
  emailInput: string,
): Promise<void> {
  const name = nameInput.trim();
  if (name.length === 0) {
    throw new ValidationError("名前を入力してください。");
  }

  const email = emailInput.trim();
  if (!isValidEmail(email)) {
    throw new ValidationError("有効なメールアドレスを入力してください。");
  }

  if (registeredEmails.has(email)) {
    throw new ValidationError("このメールアドレスは既に登録されています。");
  }

  registeredEmails.add(email);
  userDirectory.set(email, name);

  // 登録番号を返す関数 ここで返ってきた値を登録完了ログに出力する
  const receiptNumber = await getReceiptData();

  console.log(`登録しました: ${name} <${email}> (${receiptNumber})`);
}

// 画面に近い側：catchしてユーザーに伝える
async function onSubmit(nameInput: string, emailInput: string): Promise<void> {
  try {
    await registerUser(nameInput, emailInput);
  } catch (error: unknown) {
    if (error instanceof ValidationError) {
      console.error(`⚠️ ${error.message} `);
    } else {
      console.error("想定外のエラーが発生しました。", error);
    }
  }
}

onSubmit("Aoice", "alice@example.com");
onSubmit("Bob", "invalid-email");
onSubmit("", "carol@example.com");
onSubmit("Charlie", "alice@example.com");
onSubmit("Taro", "taro@example.com");
onSubmit("Hanako", "hanako@example.com");

console.log("登録者一覧");
for (const [email, name] of userDirectory) {
  console.log(`${name} <${email} > `);
}
console.log(`合計人数: ${userDirectory.size} 人`);
