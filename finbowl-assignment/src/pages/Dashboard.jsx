import { useState, useCallback, useEffect } from 'react';
import {
  FiSearch,
  FiBookmark,
  FiDownload,
} from 'react-icons/fi';
import StatsCard from '../components/StatsCard';
import DisbursementTable from '../components/DisbursementTable';
import Loader from '../components/Loader';
import ErrorState from '../components/ErrorState';
import EmptyState from '../components/EmptyState';
import useFetch from '../hooks/useFetch';
import { fetchDisbursements, fetchDisbursementStats } from '../services/api';
import './Dashboard.css';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('mis');
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const perPage = 10;

  const {
    data: statsData,
    loading: statsLoading,
    error: statsError,
    refetch: refetchStats,
  } = useFetch(() => fetchDisbursementStats());

  const {
    data: tableData,
    loading: tableLoading,
    error: tableError,
    refetch: refetchTable,
  } = useFetch(() => fetchDisbursements(page, perPage));

  useEffect(() => {
    refetchTable();
  }, [page, refetchTable]);

  const handlePageChange = useCallback((newPage) => {
    setPage(newPage);
  }, []);

  function formatAmount(amount) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  }

  const filteredData = tableData?.data?.filter((row) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      row.applicantName.toLowerCase().includes(query) ||
      row.bank.toLowerCase().includes(query) ||
      row.status.toLowerCase().includes(query)
    );
  });

  return (
    <div className="dashboard">
      <div className="dashboard-title-row">
        <div>
          <h1 className="dashboard-title">Disbursement</h1>
          <div className="dashboard-tabs">
            <button
              className={`tab ${activeTab === 'mis' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('mis')}
            >
              MIS
            </button>
            <button
              className={`tab ${activeTab === 'nri' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('nri')}
            >
              Disbursement NRI
            </button>
          </div>
        </div>
      </div>

      <div className="stats-row">
        {statsError ? (
          <ErrorState message={statsError} onRetry={refetchStats} />
        ) : (
          <>
            <StatsCard
              label="Total Disbursements"
              value={statsData?.totalDisbursements}
              loading={statsLoading}
            />
            <StatsCard
              label="Total Disbursement Amount"
              value={statsData ? formatAmount(statsData.totalDisbursementAmount) : '-'}
              loading={statsLoading}
            />
            <StatsCard
              label="Submitted"
              value={statsData?.submitted}
              loading={statsLoading}
            />
            <StatsCard
              label="Verified"
              value={statsData?.verified}
              loading={statsLoading}
            />
            <StatsCard
              label="Processed"
              value={statsData?.processed}
              loading={statsLoading}
            />
            <StatsCard
              label="Audited"
              value={statsData?.audited}
              loading={statsLoading}
            />
          </>
        )}
      </div>

      <div className="table-section">
        <div className="table-toolbar">
          <div className="search-bar">
            <FiSearch className="search-bar-icon" />
            <input
              type="text"
              placeholder="Search for Disbursement"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="toolbar-actions">
            <button className="toolbar-btn">
              <FiBookmark size={14} />
              <span>Saved View</span>
            </button>
            <button className="toolbar-btn">
              <FiDownload size={14} />
              <span>Export All</span>
            </button>
          </div>
        </div>

        {tableError ? (
          <ErrorState message={tableError} onRetry={refetchTable} />
        ) : tableLoading ? (
          <Loader message="Loading disbursements..." />
        ) : filteredData && filteredData.length === 0 ? (
          <EmptyState
            message={
              searchQuery
                ? `No results for "${searchQuery}"`
                : 'No disbursements found'
            }
          />
        ) : filteredData && tableData?.pagination ? (
          <DisbursementTable
            data={filteredData}
            pagination={tableData.pagination}
            onPageChange={handlePageChange}
          />
        ) : null}
      </div>
    </div>
  );
}
