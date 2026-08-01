class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

// 登録済みメールアドレス（重複チェック用）
const registeredEmails = new Set<string>();

// 登録者一覧（名前 → メールアドレス）
const users = new Map<string, string>();

function registerUser(nameInput: string, emailInput: string): void {
  const name = nameInput.trim();

  if (name.length === 0) {
    throw new ValidationError("名前を入力してください。");
  }

  const email = emailInput.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    throw new ValidationError("メールアドレスの形式が正しくありません。");
  }

  if (registeredEmails.has(email)) {
    throw new ValidationError("このメールアドレスは既に登録されています。");
  }

  // メールアドレスを登録済みに追加
  registeredEmails.add(email);

  // Mapへ登録（名前 → メールアドレス）
  users.set(name, email);

  console.log(`登録しました: ${name} <${email}>`);
}

function onSubmit(nameInput: string, emailInput: string): void {
  try {
    registerUser(nameInput, emailInput);
  } catch (error: unknown) {
    if (error instanceof ValidationError) {
      console.error(`⚠️ ${error.message}`);
    } else {
      console.error("想定外のエラーが発生しました。", error);
    }
  }
}

// ----------------------
// 動作確認
// ----------------------

onSubmit("Alice", "alice@example.com");
onSubmit("Bob", "invalid-email");
onSubmit("", "carol@example.com");
onSubmit("Charlie", "alice@example.com");
onSubmit("David", "david@example.com");
onSubmit("Eve", "eve@example.com");

// ----------------------
// 登録者一覧
// ----------------------

console.log("=== 登録者一覧 ===");

for (const [name, email] of users) {
  console.log(`${name} <${email}>`);
}

console.log(`登録者数: ${users.size}人`);
