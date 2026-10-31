import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: 'Makanan', alamat: '', jamBuka: '', hargaRataRata:'' }

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
    }
    tambah({ ...form, judul: form.judul.trim() })
    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Daftar Kuliner</h1>

      <label htmlFor="Tempat Kuliner">Tempat Kuliner</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
        <option>Makanan</option>
        <option>Restoran</option>
        <option>kafe</option>
        <option>Minuman</option>
      </select>

      <label htmlFor="alamat">Alamat</label>
      <input id="alamat" name="alamat" value={form.Alamat} onChange={ubah} />

      <label htmlFor="hargaRataRata">Harga Rata Rata (Rp) </label>
      <input id="hargaRataRata" name="hargaRataRata" type="number" value={form.hargaRataRata} onChange={ubah} />
  
      <label htmlFor="jamBuka"> Jam Buka </label>
      <input id="jamBuka" name="jamBuka" type="time" value={form.jambuka} onChange={ubah} />

      <button type="submit">Simpan</button>
    </form>
  )
}