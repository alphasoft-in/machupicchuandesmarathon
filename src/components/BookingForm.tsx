import React, { useState } from 'react';

interface BookingFormProps {
  lang: 'en' | 'es';
  tours?: any[];
}

const WHATSAPP_NUMBER = '51993187203';

const CATEGORIES = {
  en: [
    { value: 'inca-trail', label: '🏔️ Inca Trail', icon: '🏔️' },
    { value: 'treks', label: '🥾 Treks & Adventure', icon: '🥾' },
    { value: 'other-treks', label: '🎒 Other Treks', icon: '🎒' },
    { value: 'day-trips', label: '🌅 Day Trips', icon: '🌅' },
    { value: 'luxury', label: '💎 Luxury Experiences', icon: '💎' },
  ],
  es: [
    { value: 'inca-trail', label: '🏔️ Camino Inca', icon: '🏔️' },
    { value: 'treks', label: '🥾 Treks y Aventura', icon: '🥾' },
    { value: 'other-treks', label: '🎒 Otros Treks', icon: '🎒' },
    { value: 'day-trips', label: '🌅 Tours de un Día', icon: '🌅' },
    { value: 'luxury', label: '💎 Experiencias de Lujo', icon: '💎' },
  ],
};

const PACKAGES: Record<string, Record<string, { value: string; label: string; duration: string }[]>> = {
  'inca-trail': {
    en: [
      { value: 'classic-inca-trail-4d3n', label: 'Classic Inca Trail', duration: '4D / 3N' },
      { value: 'premium-inca-trail-4d3n', label: 'Premium Inca Trail', duration: '4D / 3N' },
      { value: 'short-inca-trail-2d1n', label: 'Short Inca Trail', duration: '2D / 1N' },
      { value: '1-day-inca-trail', label: '1-Day Inca Trail', duration: '1 Day' },
    ],
    es: [
      { value: 'classic-inca-trail-4d3n', label: 'Camino Inca Clásico', duration: '4D / 3N' },
      { value: 'premium-inca-trail-4d3n', label: 'Camino Inca Premium', duration: '4D / 3N' },
      { value: 'short-inca-trail-2d1n', label: 'Camino Inca Corto', duration: '2D / 1N' },
      { value: '1-day-inca-trail', label: 'Camino Inca 1 Día', duration: '1 Día' },
    ],
  },
  'treks': {
    en: [
      { value: 'salkantay-5d4n', label: 'Classic Salkantay Trek', duration: '5D / 4N' },
      { value: 'salkantay-4d3n', label: 'Salkantay Trek', duration: '4D / 3N' },
      { value: 'ausangate-7-lakes', label: 'Ausangate & Rainbow Mountain', duration: '1 Day' },
      { value: 'choquequirao-4d3n', label: 'Choquequirao Trek', duration: '4D / 3N' },
      { value: 'choquequirao-5d4n', label: 'Choquequirao Trek', duration: '5D / 4N' },
      { value: 'choquequirao-machu-picchu-6d', label: 'Choquequirao → Machu Picchu', duration: '6D' },
      { value: 'huchuy-qosqo-3d2n', label: 'Huchuy Qosqo Trek', duration: '3D / 2N' },
      { value: 'ausangate-trek-3d', label: 'Ausangate Trek', duration: '3D / 2N' },
      { value: 'ausangate-trek-4d', label: 'Ausangate Circuit', duration: '4D / 3N' },
      { value: 'ausangate-trek-5d', label: 'Full Ausangate Circuit', duration: '5D / 4N' },
    ],
    es: [
      { value: 'salkantay-5d4n', label: 'Trek Salkantay Clásico', duration: '5D / 4N' },
      { value: 'salkantay-4d3n', label: 'Trek Salkantay', duration: '4D / 3N' },
      { value: 'ausangate-7-lakes', label: 'Ausangate & Montaña de Colores', duration: '1 Día' },
      { value: 'choquequirao-4d3n', label: 'Trek Choquequirao', duration: '4D / 3N' },
      { value: 'choquequirao-5d4n', label: 'Trek Choquequirao', duration: '5D / 4N' },
      { value: 'choquequirao-machu-picchu-6d', label: 'Choquequirao → Machu Picchu', duration: '6D' },
      { value: 'huchuy-qosqo-3d2n', label: 'Trek Huchuy Qosqo', duration: '3D / 2N' },
      { value: 'ausangate-trek-3d', label: 'Ausangate Trek', duration: '3D / 2N' },
      { value: 'ausangate-trek-4d', label: 'Circuito Ausangate', duration: '4D / 3N' },
      { value: 'ausangate-trek-5d', label: 'Circuito Completo Ausangate', duration: '5D / 4N' },
    ],
  },
  'day-trips': {
    en: [
      { value: 'machu-picchu-by-train', label: 'Machu Picchu by Train', duration: '1 Day' },
      { value: 'sacred-valley-1d', label: 'Sacred Valley Tour', duration: '1 Day' },
      { value: 'extended-sacred-valley-vip', label: 'Sacred Valley VIP', duration: '1 Day' },
      { value: 'south-valley-tour', label: 'South Valley Tour', duration: '1 Day' },
      { value: 'rainbow-mountain', label: 'Rainbow Mountain', duration: '1 Day' },
      { value: 'humantay-lake', label: 'Humantay Lake Full Day', duration: '1 Day' },
    ],
    es: [
      { value: 'machu-picchu-by-train', label: 'Machu Picchu en Tren', duration: '1 Día' },
      { value: 'sacred-valley-1d', label: 'Tour Valle Sagrado', duration: '1 Día' },
      { value: 'extended-sacred-valley-vip', label: 'Valle Sagrado VIP', duration: '1 Día' },
      { value: 'south-valley-tour', label: 'Tour Valle Sur', duration: '1 Día' },
      { value: 'rainbow-mountain', label: 'Montaña de Colores', duration: '1 Día' },
      { value: 'humantay-lake', label: 'Laguna Humantay Full Day', duration: '1 Día' },
    ],
  },
  'other-treks': {
    en: [
      { value: 'hidden-valley-trek-5d4n', label: 'Tomacaya Hidden Valley trek', duration: '5D / 4N' },
      { value: 'tomaccaya-salkantay-mistico-3d', label: 'Tomaccaya - Salkantay Místico', duration: '3D / 2N' },
    ],
    es: [
      { value: 'hidden-valley-trek-5d4n', label: 'Tomacaya Hidden Valley trek', duration: '5D / 4N' },
      { value: 'tomaccaya-salkantay-mistico-3d', label: 'Tomaccaya - Salkantay Místico', duration: '3D / 2N' },
    ],
  },
  'luxury': {
    en: [
      { value: 'luxury-sacred-valley-machu-picchu-2d', label: 'Luxury Sacred Valley & Machu Picchu', duration: '2D / 1N' },
      { value: 'luxury-inca-trail-2d', label: 'Luxury Short Inca Trail', duration: '2D / 1N' },
      { value: 'luxury-inca-trail-5d', label: 'Luxury Full Inca Trail', duration: '5D / 4N' },
      { value: 'luxury-salkantay-trek-5d', label: 'Luxury Salkantay Trek', duration: '5D / 4N' },
    ],
    es: [
      { value: 'luxury-sacred-valley-machu-picchu-2d', label: 'Valle Sagrado y Machu Picchu de Lujo', duration: '2D / 1N' },
      { value: 'luxury-inca-trail-2d', label: 'Camino Inca Corto de Lujo', duration: '2D / 1N' },
      { value: 'luxury-inca-trail-5d', label: 'Camino Inca Completo de Lujo', duration: '5D / 4N' },
      { value: 'luxury-salkantay-trek-5d', label: 'Trek Salkantay de Lujo', duration: '5D / 4N' },
    ],
  },
};

const arrowSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230e3b2e'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")`;

const fieldStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  border: '1.5px solid #e8edf0',
  borderRadius: '12px',
  fontSize: '0.9rem',
  color: '#0e3b2e',
  backgroundColor: '#fff',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  fontFamily: 'inherit',
};

const selectStyle: React.CSSProperties = {
  ...fieldStyle,
  backgroundImage: arrowSvg,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 0.9rem center',
  backgroundSize: '0.9rem',
  appearance: 'none',
  WebkitAppearance: 'none',
  cursor: 'pointer',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.7rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '1.2px',
  color: '#64748b',
  marginBottom: '0.4rem',
};

export default function BookingForm({ lang }: BookingFormProps) {
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [packageValue, setPackageValue] = useState('');
  const [focused, setFocused] = useState<string | null>(null);

  const today = new Date().toISOString().split('T')[0];

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setPackageValue('');
  };

  const focusStyle = (field: string): React.CSSProperties => focused === field
    ? { borderColor: '#d97706', boxShadow: '0 0 0 3px rgba(217, 119, 6, 0.12)' }
    : {};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedCategory = CATEGORIES[lang].find(c => c.value === category)?.label.replace(/^.{2} /, '') || category;
    const selectedPkg = PACKAGES[category]?.[lang]?.find(p => p.value === packageValue);
    const pkgLabel = selectedPkg ? `${selectedPkg.label} (${selectedPkg.duration})` : packageValue;
    const formattedDate = date ? new Date(date + 'T12:00:00').toLocaleDateString(lang === 'en' ? 'en-US' : 'es-PE', { year: 'numeric', month: 'long', day: 'numeric' }) : '';

    const message = lang === 'en'
      ? `Hello! I'm interested in booking an expedition.\n\n📅 *Travel Date:* ${formattedDate}\n🏔️ *Category:* ${selectedCategory}\n🎒 *Package:* ${pkgLabel}\n\nCould you please send me more details and availability? Thank you!`
      : `¡Hola! Estoy interesado/a en reservar una expedición.\n\n📅 *Fecha de viaje:* ${formattedDate}\n🏔️ *Categoría:* ${selectedCategory}\n🎒 *Paquete:* ${pkgLabel}\n\n¿Podrían enviarme más detalles y disponibilidad? ¡Gracias!`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const packages = category ? (PACKAGES[category]?.[lang] ?? []) : [];

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>

      {/* Date */}
      <div>
        <label style={labelStyle}>
          {lang === 'en' ? '📅 Travel Date' : '📅 Fecha de Viaje'}
        </label>
        <input
          type="date"
          min={today}
          value={date}
          onChange={e => setDate(e.target.value)}
          required
          style={{ ...fieldStyle, ...focusStyle('date'), colorScheme: 'light' }}
          onFocus={() => setFocused('date')}
          onBlur={() => setFocused(null)}
        />
      </div>

      {/* Category */}
      <div>
        <label style={labelStyle}>
          {lang === 'en' ? '🏔️ Expedition Type' : '🏔️ Tipo de Expedición'}
        </label>
        <select
          value={category}
          onChange={handleCategoryChange}
          required
          style={{ ...selectStyle, ...focusStyle('category'), color: category ? '#0e3b2e' : '#94a3b8' }}
          onFocus={() => setFocused('category')}
          onBlur={() => setFocused(null)}
        >
          <option value="" disabled>
            {lang === 'en' ? 'Select a category…' : 'Selecciona una categoría…'}
          </option>
          {CATEGORIES[lang].map(cat => (
            <option key={cat.value} value={cat.value}>{cat.label}</option>
          ))}
        </select>
      </div>

      {/* Package */}
      {category && (
        <div style={{ animation: 'fadeInUp 0.25s ease' }}>
          <label style={labelStyle}>
            {lang === 'en' ? '🎒 Select Package' : '🎒 Selecciona Paquete'}
          </label>
          <select
            value={packageValue}
            onChange={e => setPackageValue(e.target.value)}
            required
            style={{ ...selectStyle, ...focusStyle('package'), color: packageValue ? '#0e3b2e' : '#94a3b8' }}
            onFocus={() => setFocused('package')}
            onBlur={() => setFocused(null)}
          >
            <option value="" disabled>
              {lang === 'en' ? 'Select a package…' : 'Selecciona un paquete…'}
            </option>
            {packages.map(pkg => (
              <option key={pkg.value} value={pkg.value}>
                {pkg.label} · {pkg.duration}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        style={{
          marginTop: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.6rem',
          width: '100%',
          padding: '0.9rem 1.5rem',
          backgroundColor: '#25D366',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          fontSize: '0.9rem',
          fontWeight: 700,
          letterSpacing: '0.5px',
          cursor: 'pointer',
          transition: 'background-color 0.2s, transform 0.1s, box-shadow 0.2s',
          boxShadow: '0 4px 15px rgba(37, 211, 102, 0.35)',
          fontFamily: 'inherit',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1ebe5d';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.45)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#25D366';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.35)';
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        {lang === 'en' ? 'Book via WhatsApp' : 'Reservar por WhatsApp'}
      </button>

      <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>
        {lang === 'en' ? '🔒 Secure & free consultation' : '🔒 Consulta segura y gratuita'}
      </p>
    </form>
  );
}
