import { MenuItem } from './../domain/MenuItem';

import { Injectable } from '@angular/core';
@Injectable()
export class MenuService {
    menuItemsList = [
        new MenuItem(1, 'Area', 'fa-pencil-square-o', '/jack', true, false,
            [
                new MenuItem(2, 'Company', 'fa-circle-o', '/company', true, false, false),
            ]
        ),
        new MenuItem(1, 'Transaction', 'fa-dollar', '#', true, false,
            [
                new MenuItem(2, 'Sales & Debtors', 'fa-circle-o', '#', false, false,
                    [
                        new MenuItem(2, 'Finsh Good GRN', 'fa-circle-o', '/finshGoodGRN', false, false, false),
                    ]
                ),
                new MenuItem(2, 'Purchases & Creditors', 'fa-circle-o', '#', false, false,
                    [
                        new MenuItem(2, 'Payments', 'fa-circle-o', 'payments', false, false, false),
                    ]
                ),
                new MenuItem(2, 'Inventory Entries', 'fa-circle-o', '#', false, false,
                    [
                        new MenuItem(2, 'Material Request Note', 'fa-circle-o', '/mrn', false, false, false),
                    ]
                ),
                new MenuItem(2, 'Production', 'fa-circle-o', '#', false, false, false)
            ]
        ),

        new MenuItem(1, 'Reports', 'fa fa-bar-chart', '#', true, false,
            [
                new MenuItem(2, 'Sales & Debtors', 'fa-circle-o', '#', false, false,
                    [



                        new MenuItem(2, 'Orders Report', 'fa-circle-o', '/OrdersReport', false, false, false),
                        new MenuItem(2, 'Sales Analysis', 'fa-circle-o', '/salesAnalysis', false, false, false),
                        new MenuItem(2, 'Age Analysis', 'fa-circle-o', '/ageanalyze', false, false, false),
                        new MenuItem(2, 'Debtors & Customers Statment', 'fa-circle-o', '/debitorsCustomerReport', false, false, false),
                        new MenuItem(2, 'Receipts', 'fa-circle-o', '/receiptsReport', false, false, false),
                        new MenuItem(2, 'Credit Notes', 'fa-circle-o', '/creditnoteReport', false, false, false),
                        new MenuItem(2, 'Debit Notes', 'fa-circle-o', '/debitNoteReport', false, false, false),
                        new MenuItem(2, 'Chque Returns', 'fa-circle-o', '/chequeReturnsReport', false, false, false),
                        new MenuItem(2, 'Over Payment Refunds', 'fa-circle-o', '/overPaymentRefundReport', false, false, false),
                        new MenuItem(2, 'Invoice History', 'fa-circle-o', '/invoiceHistoryReport', false, false, false),
                        new MenuItem(2, 'Pending Credit Note', 'fa-circle-o', '/pendingCreditNoteReport', false, false, false),
                        new MenuItem(2, 'Financial Status Report', 'fa-circle-o', '/financialStatusReport', false, false, false),
                        new MenuItem(2, 'Bank Slip', 'fa-circle-o', '#', false, false, false),
                    ]
                ),
                new MenuItem(2, 'Purchases & Credit', 'fa-circle-o', '#', false, false,
                    [
                        new MenuItem(2, 'Purchases Analysis', 'fa-circle-o', '/purchasesAnalysisReport', false, false, false),
                        new MenuItem(2, 'Age Analysis', 'fa-circle-o', '/ageAnalysisReport', false, false, false),
                        new MenuItem(2, 'Supplier History', 'fa-circle-o', '/supplierHistoryReport', false, false, false),
                        new MenuItem(2, 'Payment', 'fa-circle-o', '/paymentsReport', false, false, false),
                        new MenuItem(2, 'Credit Notes', 'fa-circle-o', '/purchasesAndCreditCreditNotesReport', false, false, false),
                        new MenuItem(2, 'Debit Notes', 'fa-circle-o', '/purchasesAndCreditDebitNotesReport', false, false, false),
                        new MenuItem(2, 'Chque Returns', 'fa-circle-o', '/PurchaseAndCreditorsChequeReturnsReport', false, false, false),
                        new MenuItem(2, 'Payment Refunds', 'fa-circle-o', '/purchaseAndCreditorsPaymentRefundsReport', false, false, false)
                    ]
                ),
                new MenuItem(2, 'Inventory', 'fa-circle-o', '#', false, false,
                    [
                        new MenuItem(2, 'Current Balance', 'fa-circle-o', '/currentBalanceReport', false, false, false),
                        new MenuItem(2, 'Stock Card', 'fa-circle-o', '/stockcCrdReport', false, false, false),
                        new MenuItem(2, 'Issue Report', 'fa-circle-o', '/issuesReport', false, false, false),
                        new MenuItem(2, 'Rejection Report', 'fa-circle-o', '/rejectionReport', false, false, false),
                        new MenuItem(2, 'Returns Report', 'fa-circle-o', '/returnsReport', false, false, false),
                        new MenuItem(2, 'Goods Receipts', 'fa-circle-o', '/goodsReceiptsReport', false, false, false),
                        new MenuItem(2, 'Monthly Stock Balance', 'fa-circle-o', '/monthlyStockReport', false, false, false),
                        new MenuItem(2, 'Stock Adjustment', 'fa-circle-o', '/inventoryStockadjustmentReport', false, false, false),
                        new MenuItem(2, 'Inventory', 'fa-circle-o', '/inventoryInventoryReport', false, false, false)
                    ]
                ),
                new MenuItem(2, 'Production', 'fa-circle-o', '#', false, false,
                    [
                        new MenuItem(2, 'Requirment Analysis', 'fa-circle-o', '#', false, false, false),
                        new MenuItem(2, 'Production Report', 'fa-circle-o', '/productionReports', false, false, false),
                        new MenuItem(2, 'Batch Costing', 'fa-circle-o', '#', false, false, false)
                    ]
                ),
                new MenuItem(2, 'Profitability', 'fa-circle-o', '/profitabilityReport', true, false, false),
                new MenuItem(2, 'Log', 'fa-circle-o', '/log', true, false, false)
            ]
        ),

        new MenuItem(1, 'Maintenance', 'fa-cog', '#', true, false,
            [
                new MenuItem(2, 'Account Type', 'fa-circle-o', '/accountType', true, false, false),

                new MenuItem(2, 'Users', 'fa-circle-o', '/user', true, false, false),
                new MenuItem(2, 'Default Setting', 'fa-circle-o', '/defaultsetting', true, false, false),
                new MenuItem(3, 'Access Control', 'fa-circle-o', '/userAccess', true, false, false),
                new MenuItem(4, 'Utilities', 'fa-circle-o', '/utility', true, false, false),
                new MenuItem(4, 'Month End', 'fa-circle-o', '/monthEnd', true, false, false),
                new MenuItem(4, 'System Settings', 'fa-circle-o', '#', true, false, false),
                new MenuItem(4, 'Day End', 'fa-circle-o', '/dayEnd', true, false, false),
                new MenuItem(4, 'Promise Collection', 'fa-circle-o', '/promisscollection', true, false, false)
            ]
        ),
        new MenuItem(1, 'GL Setup', 'fa-pencil-square-o', '#', true, false,
            [
                new MenuItem(2, 'Chart of Accounts', 'fa-circle-o', '/chartofAccount', true, false, false),
                new MenuItem(2, 'Opening  Balance', 'fa-circle-o', '/openingBalance', true, false, false),
                new MenuItem(2, 'Budgets', 'fa-circle-o', '/budgetInformation', true, false, false),
                new MenuItem(2, 'Projects', 'fa-circle-o', '/projects', true, false, false),
                new MenuItem(2, 'Project Budgeting', 'fa-circle-o', '/projectBudgeting', true, false, false),
                new MenuItem(2, 'Fix Assets', 'fa-circle-o', '/fixedAssets', true, false, false),
            ]
        ),
        new MenuItem(1, 'GL Transaction', 'fa-dollar', '#', true, false,
            [
                new MenuItem(2, 'Payments', 'fa-circle-o', '/PaymentTraGl', true, false, false),
                new MenuItem(2, 'Receipts', 'fa-circle-o', '/receiptsTraGl', true, false, false),
                new MenuItem(2, 'Journals', 'fa-circle-o', '#', false, false,
                    [
                        new MenuItem(2, 'Monthly journals', 'fa-circle-o', '/monthlyJournals', true, false, false),
                        new MenuItem(2, 'System journals', 'fa-circle-o', '/systemJournals', true, false, false)
                    ]),
                new MenuItem(2, 'Bank reconsillation', 'fa-circle-o', '#', false, false,
                    [
                        new MenuItem(2, 'Receipt', 'fa-circle-o', '/bankReconsillationReceiptsGL', true, false, false),
                        new MenuItem(2, 'Payments', 'fa-circle-o', '/bankReconsillationPaymentsGL', true, false, false)
                    ]),
                new MenuItem(2, 'Journal template', 'fa-circle-o', '/journalTemplate', true, false, false)
            ]
        ),
        new MenuItem(1, 'GL Reports', 'fa fa-bar-chart', '#', true, false,
            [
                new MenuItem(2, 'Audit Trails', 'fa-circle-o', '/auditTrails', true, false, false),
                new MenuItem(2, 'Trial Balance', 'fa-circle-o', '/trailBalance', true, false, false),
                new MenuItem(2, 'Ledger Accounts', 'fa-circle-o', '/legerAccount', true, false, false),
                new MenuItem(2, 'Sub Ledger Accounts ', 'fa-circle-o', '/subLedgerAccounts', true, false, false),
                new MenuItem(2, 'Monthly Accounts', 'fa-circle-o', '/monthlyAccont', true, false, false),
                new MenuItem(2, 'Cash Book', 'fa-circle-o', '/cashBook', true, false, false),
                new MenuItem(2, 'Payment Register', 'fa-circle-o', '/paymentregister', true, false, false),
                new MenuItem(2, 'Un Posted Entries ', 'fa-circle-o', '/unPostedEntries', true, false, false),
                new MenuItem(2, 'Unbalance Audit Trials', 'fa-circle-o', '/unbalanceAuditTrials', true, false, false),
                new MenuItem(2, 'Project Leadger', 'fa-circle-o', '/projectLedger', true, false, false),
                new MenuItem(2, 'Bank Reconsillation', 'fa-circle-o', '/bankReconsillation', true, false, false)
            ]
        ),
        new MenuItem(1, 'GL Maintenance', 'fa-cog', '#', true, false,
            [
                new MenuItem(2, 'Past Data', 'fa-circle-o', '#', true, false, false),
                new MenuItem(2, 'Utilities', 'fa-circle-o', '/utilityGL', true, false, false),
                new MenuItem(2, 'Posting  ', 'fa-circle-o', '/posting', true, false, false),
                new MenuItem(2, 'Close Stock Entry', 'fa-circle-o', '#', true, false, false),
                new MenuItem(2, 'Year End', 'fa-circle-o', '/yearEnd', true, false, false)
            ]
        ),
    ];

}
