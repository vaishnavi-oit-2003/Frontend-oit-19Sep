import { FiAlertTriangle } from 'react-icons/fi';
import './ErrorState.css';

export default function ErrorState({ message, onRetry }) {
  return (
    <div className="error-state">
      <FiAlertTriangle className="error-icon" />
      <h3 className="error-title">Something went wrong</h3>
      <p className="error-message">{message}</p>
      {onRetry && (
        <button className="error-retry-btn" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
}
