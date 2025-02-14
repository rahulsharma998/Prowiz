import { ChevronDown } from 'lucide-react';
import user from '../assets/user.png';

export const Header = () => (
  <nav className="navbar navbar-light bg-white border-bottom px-4 py-3 d-flex justify-content-between">
    <span className="navbar-brand ms-5 h4 fw-bold">KPI Tracker</span>

    <div className="d-flex align-items-center gap-3">
      <img 
        src={user}
        alt="User avatar"
        className="rounded-circle"
        style={{ width: '40px', height: '40px', objectFit: 'cover' }}
      />
      <select className="form-select form-select-sm border-0 bg-light text-dark" style={{ cursor: 'pointer' }}>
        <option>Rahul</option>
        <option className='color-red'>Log Out</option>

      </select>

      <ChevronDown size={18} className="text-muted" style={{ cursor: 'pointer' }} />
    </div>
  </nav>
);
