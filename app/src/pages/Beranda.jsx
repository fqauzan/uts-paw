import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'
import Ucapan from '../components/Ucapan.jsx'

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section>
      <h1>Direktori Kuliner Sekitar Kampus</h1>
      <Ucapan/>
      
      <p>Tema: {mahasiswa.tema}</p>
      {loading ? (
        <p>Memuat ringkasan...</p>
      ) : (
        <p>
          Ada {items.length} Daftar menu dalam {jumlahKategori} kategori.
        </p>
      )}
      <Link to="/koleksi">Lihat daftar kuliner</Link>
    </section>
  )
}