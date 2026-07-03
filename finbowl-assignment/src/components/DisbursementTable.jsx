import { FiCheck, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import StatusBadge from './StatusBadge';
import Avatar from './Avatar';
import './DisbursementTable.css';

function formatCurrency(amount) {
  if (amount === 0) return '-';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatVariance(v) {
  if (v === 0) return '-';
  return `${(v * 100).toFixed(2)}%`;
}

export default function DisbursementTable({
  data,
  pagination,
  onPageChange,
}) {
  const { page, totalPages, total, perPage } = pagination;

  return (
    <div className="table-wrapper">
      <div className="table-scroll">
        <table className="data-table">
          <thead>
            <tr>
              <th className="col-num">#</th>
              <th>Disbursement Date</th>
              <th>Loan ID</th>
              <th>Status</th>
              <th>Applicant Name</th>
              <th>Bank</th>
              <th className="col-amount">Total Amount</th>
              <th className="col-amount">Processed Amount</th>
              <th className="col-center">Variance %</th>
              <th className="col-center">Verified</th>
              <th className="col-center">Approved By</th>
              <th className="col-center">Audited By</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={row.id}>
                <td className="col-num">{(page - 1) * perPage + idx + 1}</td>
                <td>{row.disbursementDate}</td>
                <td className="col-mono">{row.createdAt}</td>
                <td>
                  <StatusBadge status={row.status} />
                </td>
                <td className="col-name">{row.applicantName}</td>
                <td>{row.bank}</td>
                <td className="col-amount">{formatCurrency(row.totalAmount)}</td>
                <td className="col-amount">{formatCurrency(row.processedAmount)}</td>
                <td className="col-center">{formatVariance(row.variance)}</td>
                <td className="col-center">
                  {row.verified ? (
                    <FiCheck className="verified-yes" />
                  ) : (
                    <FiX className="verified-no" />
                  )}
                </td>
                <td className="col-center">
                  <Avatar name={row.approvedBy.name} size={26} />
                </td>
                <td className="col-center">
                  <Avatar name={row.auditedBy.name} size={26} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-pagination">
        <div className="pagination-info">
          Page <strong>{page}</strong> of {Math.ceil(total / perPage)}
          <span className="pagination-sep">|</span>
          Rows per page: <strong>{perPage}</strong>
        </div>
        <div className="pagination-controls">
          <button
            className="page-btn"
            disabled={page <= 1}
            onClick={() => onPageChange(1)}
            aria-label="First page"
          >
            <FiChevronLeft size={14} />
            <FiChevronLeft size={14} style={{ marginLeft: -8 }} />
          </button>
          <button
            className="page-btn"
            disabled={page <= 1}
            onClick={() => onPageChange(page - 1)}
            aria-label="Previous page"
          >
            <FiChevronLeft size={14} />
          </button>

          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (page <= 3) {
              pageNum = i + 1;
            } else if (page >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = page - 2 + i;
            }
            return (
              <button
                key={pageNum}
                className={`page-btn page-num ${pageNum === page ? 'active' : ''}`}
                onClick={() => onPageChange(pageNum)}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            className="page-btn"
            disabled={page >= totalPages}
            onClick={() => onPageChange(page + 1)}
            aria-label="Next page"
          >
            <FiChevronRight size={14} />
          </button>
          <button
            className="page-btn"
            disabled={page >= totalPages}
            onClick={() => onPageChange(totalPages)}
            aria-label="Last page"
          >
            <FiChevronRight size={14} />
            <FiChevronRight size={14} style={{ marginLeft: -8 }} />
          </button>
        </div>
      </div>
    </div>
  );
}
