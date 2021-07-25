export enum Wallet {
  CurrentValue = 'currentValue',
  Currency = 'currency',
}

export enum CashFlow {
  WalletId = 'walletId',
  CategoryId = 'categoryId',
  TransactionId = 'transactionId',
  Debit = 'debit',
  Credit = 'credit',
  Obs = 'obs',
}

export enum Transaction {
  Sender = 'sender',
  Receiver = 'receiver',
  Value = 'value',
}

export enum CollectionNames {
  Wallets = 'wallets',
  CashFlows = 'cashFlows',
  CashFlowCategories = 'cashFlowsCategories',
  Transactions = 'transactions',
}
