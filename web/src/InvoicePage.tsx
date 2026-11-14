import { Invoice } from "./invoiceType.ts";
import InvoiceTable from "./InvoiceTable.tsx";

export default function InvoicePage() {
    const invoices: Invoice[] = [
        {
            id: 1,
            amount: 12000,
            status: 'paid',
            issueDate: '2026-09-01',
            dueDate: '2026-09-30',
            customer: {
                name: 'Oficina Flint',
                email: 'comercial@flint.ws'
            }
        },
        {
            id: 2,
            amount: 3000,
            status: 'pending',
            issueDate: '2026-10-01',
            dueDate: '2026-10-31',
            customer: {
                name: 'Academia Aurelia',
                email: 'comercial@aurelia.edu'
            }
        },
        {
            id: 3,
            amount: 30000,
            status: 'pending',
            issueDate: '2026-10-21',
            dueDate: '2026-11-21',
            customer: {
                name: 'Patrulha Aérea',
                email: 'comercial@airspace.patrol'
            }
        }
    ];

    return <>
        <h1>Faturas</h1>

        <main>
            <InvoiceTable datas={invoices} />
        </main>
    </>
}