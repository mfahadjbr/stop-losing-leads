import { useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiCheck, FiCalendar } from 'react-icons/fi';
const bookingUrl = import.meta.env.VITE_BOOKING_URL as string | undefined;
export function Booking() {
  const [month, setMonth] = useState(() => {
      const p = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Karachi',
        year: 'numeric',
        month: 'numeric'
      }).formatToParts(new Date());
      return new Date(Number(p.find(x => x.type === 'year')?.value), Number(p.find(x => x.type === 'month')?.value) - 1, 1);
    }),
    [day, setDay] = useState(''),
    [draft, setDraft] = useState(false);
  const year = month.getFullYear(),
    m = month.getMonth();
  const days = new Date(year, m + 1, 0).getDate(),
    offset = new Date(year, m, 1).getDay();
  const connected = bookingUrl?.startsWith('https://');
  return <section className="section booking-page"><div className="booking-intro"><h1>Book your<br /><em>Lead Leak Diagnostic.</em></h1><p>Thirty minutes with our team. We look at how leads reach you today and show you where they slip away. No pitch.</p><div className="booking-expect"><h2>What to expect</h2>{['We never pitch on the first call.', 'You own your data and your system.', 'No tech skills needed.', "We tell you if you don't need us."].map(t => <p key={t}><FiCheck />{t}</p>)}</div></div>{connected ? <iframe className="booking-embed" src={bookingUrl} title="Book your Lead Leak Diagnostic" /> : <div className="booking-calendar"><div className="calendar-placeholder"><FiCalendar /><span>STATIC CALENDAR PREVIEW</span><p>Choose a date to preview your diagnostic request. Live availability is not connected.</p></div><div className="month-heading"><button aria-label="Previous month" onClick={() => setMonth(new Date(year, m - 1, 1))}><FiArrowLeft /></button><h2>{month.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
          })}</h2><button aria-label="Next month" onClick={() => setMonth(new Date(year, m + 1, 1))}><FiArrowRight /></button></div><div className="calendar-grid">{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(t => <small key={t}>{t}</small>)}{Array.from({
          length: offset
        }, (_, i) => <span key={'blank' + i} />)}{Array.from({
          length: days
        }, (_, i) => {
          const date = year + '-' + String(m + 1).padStart(2, '0') + '-' + String(i + 1).padStart(2, '0');
          return <button type="button" key={date} aria-label={'Request ' + date} aria-pressed={day === date} onClick={() => setDay(date)}>{i + 1}</button>;
        })}</div><form onSubmit={e => {
        e.preventDefault();
        setDraft(true);
      }}><p className="requested-date">{day ? 'Requested date: ' + new Date(day + 'T12:00:00').toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          }).replace(/,/g, '') : 'Select a requested date above.'}</p><div className="form-grid">{[['Name', 'text'], ['Phone', 'tel'], ['Email', 'email'], ['Business name', 'text']].map(([name, type]) => <label key={name}>{name}<input name={name} type={type} placeholder={name === 'Name' ? 'Your full name' : name === 'Phone' ? 'Your phone number' : name === 'Email' ? 'you@business.com' : 'Your business name'} required /></label>)}</div><button className="button" type="submit" disabled={!day}>Book My Lead Leak Diagnostic <FiArrowUpRight /></button>{draft && <div className="booking-confirmation" role="status"><small>STATIC PREVIEW ONLY   NO APPOINTMENT RESERVED</small><h2>You're booked. Thank you.</h2><p>We'll see you on the call. Check your email for the details.</p><p className="preview-note">This is the confirmation preview. Live calendar and email confirmation will be connected later.</p></div>}</form></div>}</section>;
}
