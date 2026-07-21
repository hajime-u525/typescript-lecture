class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

function purchase(
  itemInput: string,
  quantityInput: string,
  stock: number,
): void {
  // 商品が空（trimして長さ0）
  if (itemInput.trim().length === 0) {
    throw new ValidationError("商品名を入力してください。");
  }

  // 数量が1以上の整数でない
  const quantity = Number(quantityInput);

  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new ValidationError("数量は1以上の整数で入力してください。");
  }

  // 数量 > 在庫
  if (quantity > stock) {
    throw new ValidationError(`在庫が不足しています（在庫: ${stock}）。`);
  }

  // 全部通れば購入成功
  console.log(`購入しました: ${itemInput} × ${quantity}`);
}

function onPurchase(
  itemInput: string,
  quantityInput: string,
  stock: number,
): void {
  try {
    purchase(itemInput, quantityInput, stock);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error(`⚠️ ${error.message}`);
    } else {
      console.error("想定外のエラーが発生しました");
    }
  } finally {
    console.log("購入処理が完了しました");
  }
}

// 動作確認
onPurchase("りんご", "3", 10);
onPurchase("", "3", 10);
onPurchase("みかん", "0", 10);
onPurchase("ぶどう", "20", 5);
