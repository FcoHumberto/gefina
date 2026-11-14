type InvoiceStatus = 'paid' | 'pending';

export interface Invoice {
  id: number;
  amount: number;
  status: InvoiceStatus;
  issueDate: string;
  dueDate: string;
  customer: {
    id: number;
    name: string;
    email: string;
  };
}

const invoices: Invoice[] = [
  {
    id: 1,
    amount: 12000,
    status: 'paid',
    issueDate: '2026-09-01',
    dueDate: '2026-09-30',
    customer: {
      id: 1,
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
      id: 2,
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
      id: 3,
      name: 'Patrulha Aérea',
      email: 'comercial@airspace.patrol'
    }
  }
];

export function findManyInVoices(): Invoice[] {
  return invoices;
}

export function findInvoiceById(id: number): Invoice | undefined {
  return invoices.find((invoice) => invoice.id === id);
}
