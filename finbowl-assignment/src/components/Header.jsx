import { FiX, FiActivity, FiDownload } from 'react-icons/fi';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="org-tags">
          <span className="org-tag">
            Oracle Advisory Group
            <button className="org-tag-close" aria-label="Remove Oracle Advisory Group">
              <FiX size={12} />
            </button>
          </span>
          <span className="org-tag">
            ABC Advisory Group
            <button className="org-tag-close" aria-label="Remove ABC Advisory Group">
              <FiX size={12} />
            </button>
          </span>
        </div>
      </div>

      <div className="header-right">
        <button className="header-btn text-btn">
          <FiActivity size={14} />
          <span>Activity</span>
        </button>
        <button className="header-btn text-btn">
          <FiDownload size={14} />
          <span>Import Issue</span>
        </button>
        <button className="header-btn primary-btn">
          Add Disbursement
        </button>
        <div className="header-avatar">
          <img
            src="https://api.dicebear.com/7.x/initials/svg?seed=VB&backgroundColor=7c3aed"
            alt="User avatar"
          />
        </div>
      </div>
    </header>
  );
}
