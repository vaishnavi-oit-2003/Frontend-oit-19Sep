const MOCK_DISBURSEMENTS = [
  {
    id: 1,
    disbursementDate: '30/04/2024',
    createdAt: '14h00-24-1001',
    status: 'Submitted',
    applicantName: 'Arjun Mehta',
    bank: 'HDFC Bank',
    totalAmount: 7500000,
    processedAmount: 8750000,
    variance: 0.85,
    verified: true,
    approvedBy: { name: 'Arjun Mehta', avatar: 'AM' },
    auditedBy: { name: 'Sneha', avatar: 'S' },
  },
  {
    id: 2,
    disbursementDate: '30/04/2024',
    createdAt: '14h00-01-1002',
    status: 'Submitted',
    applicantName: 'Mohit Agarwal',
    bank: 'ICICI Bank',
    totalAmount: 5000000,
    processedAmount: 0,
    variance: 0,
    verified: false,
    approvedBy: { name: 'Mohit Agarwal', avatar: 'MA' },
    auditedBy: { name: 'Tanvi S', avatar: 'TS' },
  },
  {
    id: 3,
    disbursementDate: '02/03/2027',
    createdAt: '14h00-24-1003',
    status: 'Submitted',
    applicantName: 'Priya Singh',
    bank: 'Axis Bank',
    totalAmount: 12000000,
    processedAmount: 0,
    variance: 0,
    verified: false,
    approvedBy: { name: 'Priya Singh', avatar: 'PS' },
    auditedBy: { name: 'Deepika', avatar: 'D' },
  },
  {
    id: 4,
    disbursementDate: '15/03/2024',
    createdAt: '14h00-01-1004',
    status: 'Submitted',
    applicantName: 'Simran Anand',
    bank: 'State Bank of India',
    totalAmount: 2000000,
    processedAmount: 14500,
    variance: 0,
    verified: false,
    approvedBy: { name: 'Simran Anand', avatar: 'SA' },
    auditedBy: { name: 'Suresh', avatar: 'S' },
  },
  {
    id: 5,
    disbursementDate: '08/05/2024',
    createdAt: '14h00-01-1005',
    status: 'Submitted',
    applicantName: 'Ravi Sharma',
    bank: 'Kotak Mahindra Bank',
    totalAmount: 800000,
    processedAmount: 0,
    variance: 0,
    verified: false,
    approvedBy: { name: 'Ravi Sharma', avatar: 'RS' },
    auditedBy: { name: 'Nisha S', avatar: 'NS' },
  },
  {
    id: 6,
    disbursementDate: '08/05/2024',
    createdAt: '14h00-01-1006',
    status: 'Submitted',
    applicantName: 'Sneha Joshi',
    bank: 'Punjab National Bank',
    totalAmount: 4500000,
    processedAmount: 0,
    variance: 0,
    verified: false,
    approvedBy: { name: 'Sneha Joshi', avatar: 'SJ' },
    auditedBy: { name: 'Pooja S', avatar: 'PS' },
  },
  {
    id: 7,
    disbursementDate: '30/03/2024',
    createdAt: '14h00-01-1004',
    status: 'Verified',
    applicantName: 'Vikram Desai',
    bank: 'Canara Bank',
    totalAmount: 55000000,
    processedAmount: 89575600,
    variance: 0.75,
    verified: true,
    approvedBy: { name: 'Vikram Desai', avatar: 'VD' },
    auditedBy: { name: 'Maneet', avatar: 'M' },
  },
  {
    id: 8,
    disbursementDate: '30/03/2024',
    createdAt: '14h00-01-1007',
    status: 'Audited',
    applicantName: 'Anjali Rao',
    bank: 'Bank of Baroda',
    totalAmount: 7800000,
    processedAmount: 41005220,
    variance: 1,
    verified: true,
    approvedBy: { name: 'Anjali Rao', avatar: 'AR' },
    auditedBy: { name: 'Priya PS', avatar: 'PP' },
  },
  {
    id: 9,
    disbursementDate: '30/07/2024',
    createdAt: '14h00-01-1008',
    status: 'Audited',
    applicantName: 'Karan Iyer',
    bank: 'Union Bank of India',
    totalAmount: 14000000,
    processedAmount: 41302020,
    variance: 0,
    verified: false,
    approvedBy: { name: 'Karan Iyer', avatar: 'KI' },
    auditedBy: { name: 'Priya PS', avatar: 'PP' },
  },
  {
    id: 10,
    disbursementDate: '03/07/2024',
    createdAt: '14h00-01-1009',
    status: 'Verified',
    applicantName: 'Neha Gupta',
    bank: 'IDFC FIRST Bank',
    totalAmount: 9852400,
    processedAmount: 13500,
    variance: 1,
    verified: true,
    approvedBy: { name: 'Neha Gupta', avatar: 'NG' },
    auditedBy: { name: 'Ritika S', avatar: 'RS' },
  },
];

const MOCK_STATS = {
  totalDisbursements: 8,
  totalDisbursementAmount: 36250000,
  submitted: 12,
  verified: 1,
  processed: 5,
  audited: 12,
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchDisbursements(page = 1, perPage = 10) {
  await delay(800 + Math.random() * 400);

  const start = (page - 1) * perPage;
  const end = start + perPage;
  const data = MOCK_DISBURSEMENTS.slice(start, end);

  return {
    data,
    pagination: {
      page,
      perPage,
      total: MOCK_DISBURSEMENTS.length,
      totalPages: Math.ceil(MOCK_DISBURSEMENTS.length / perPage),
    },
  };
}

export async function fetchDisbursementStats() {
  await delay(600 + Math.random() * 300);
  return MOCK_STATS;
}
