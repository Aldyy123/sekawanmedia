import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Data terjemahan
const resources = {
  en: {
    translation: {
      unresolved: 'Unresolved',
      open: 'Open',
      overdue: 'Overdue',
      onHold: 'On Hold',
      language: 'Language',
      received: 'Received',
      "avg response time": "Avg response time",
      'today trends': 'Today Trends',
      'avg response first': 'Avg response first',
      resolusi: 'Resolution within SLA',
      'unresolved tickets': 'Unresolved Tickets',
      tasks: 'Tasks',
      reject: 'Reject',
      approved: 'Approved',
      pending: 'Pending',
      'all tickets': 'All Tickets',
      'ticket details': 'Ticket Details',
      'customer name': 'Customer Name',
      'tanggal': 'Date',
      priority: 'Priority',
      'waiting on feature request': 'Waiting on feature request',
      'awaiting customer response': 'Awaiting customer response',
      'awaiting developer fix': 'Awaiting developer fix',
    },
  },
  id: {
    translation: {
      overdue: 'Terlambat',
      'today trends': 'Tren Hari Ini',
      open: 'Buka',
      onHold: 'Tertunda',
      language: 'Bahasa',
      unresolved: 'Tidak terjawab',
      received: 'Diterima',
      "avg response time": "Rata-rata waktu respon",
      'avg response first': 'Rata-rata respon pertama',
      resolusi: 'Resolusi dalam SLA',
      'unresolved tickets': 'Tiket yang belum terselesaikan',
      tasks: 'Tugas',
      reject: 'Tolak',
      approved: 'Disetujui',
      pending: 'Menunggu',
      'all tickets': 'Semua Tiket',
      'ticket details': 'Detail Tiket',
      'customer name': 'Nama Pelanggan',
      'tanggal': 'Tanggal',
      'priority': 'Prioritas',
      'waiting on feature request': 'Menunggu permintaan fitur',
      'awaiting customer response': 'Menunggu tanggapan pelanggan',
      'awaiting developer fix': 'Menunggu perbaikan pengembang',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Bahasa default
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // Tidak menghindari escape HTML
  },
});

export default i18n;
