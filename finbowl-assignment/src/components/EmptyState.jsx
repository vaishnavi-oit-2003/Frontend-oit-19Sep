import { FiInbox } from 'react-icons/fi';
import './EmptyState.css';

export default function EmptyState({ message = 'No disbursements found' }) {
  return (
    <div className="empty-state">
      <FiInbox className="empty-icon" />
      <p className="empty-message">{message}</p>
    </div>
  );
}
