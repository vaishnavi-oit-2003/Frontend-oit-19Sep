import { useState } from 'react';
import {
  FiSearch,
  FiGrid,
  FiUsers,
  FiBriefcase,
  FiBarChart2,
  FiDollarSign,
  FiFileText,
  FiShoppingBag,
  FiClipboard,
  FiShield,
  FiCpu,
  FiPieChart,
  FiChevronDown,
  FiChevronRight,
} from 'react-icons/fi';
import './Sidebar.css';

const NAV_SECTIONS = [
  {
    items: [
      { icon: FiGrid, label: 'Dashboard', key: 'dashboard' },
    ],
  },
  {
    title: 'Entities',
    items: [
      { icon: FiUsers, label: 'Leads', key: 'leads' },
      { icon: FiBriefcase, label: 'Sales CRM', key: 'sales-crm' },
    ],
  },
  {
    title: 'AMS',
    items: [
      { icon: FiBarChart2, label: 'Dashboard', key: 'ams-dashboard' },
      { icon: FiDollarSign, label: 'Disbursement', key: 'disbursement', active: true },
      { icon: FiFileText, label: 'Invoices', key: 'invoices' },
      { icon: FiShoppingBag, label: 'PO', key: 'po' },
      { icon: FiClipboard, label: 'MIS Requests', key: 'mis-requests' },
    ],
  },
  {
    items: [
      { icon: FiShield, label: 'Compliance', key: 'compliance' },
      { icon: FiShield, label: 'Compliance', key: 'compliance-2' },
      { icon: FiCpu, label: 'AI Suite', key: 'ai-suite' },
      { icon: FiPieChart, label: 'Reports', key: 'reports' },
    ],
  },
];

export default function Sidebar() {
  const [expandedSections, setExpandedSections] = useState({
    Entities: true,
    AMS: true,
  });

  function toggleSection(title) {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-icon">F</span>
        <span className="logo-text">FinBowl</span>
      </div>

      <div className="sidebar-search">
        <FiSearch className="search-icon" />
        <span>Search</span>
      </div>

      <nav className="sidebar-nav">
        {NAV_SECTIONS.map((section, sIdx) => (
          <div className="nav-section" key={sIdx}>
            {section.title && (
              <button
                className="section-title"
                onClick={() => toggleSection(section.title)}
              >
                {expandedSections[section.title] ? (
                  <FiChevronDown size={12} />
                ) : (
                  <FiChevronRight size={12} />
                )}
                <span>{section.title}</span>
              </button>
            )}
            {(!section.title || expandedSections[section.title]) && (
              <ul className="nav-items">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={item.key}
                      className={`nav-item ${item.active ? 'active' : ''}`}
                    >
                      <Icon size={16} />
                      <span>{item.label}</span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </nav>

      <div className="sidebar-version">
        <span>v Version 1.0</span>
      </div>
    </aside>
  );
}
