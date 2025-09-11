# Koleksi tipe data

Python menyediakan beberapa tipe data koleksi yang sering digunakan
untuk menyimpan banyak nilai dalam satu variabel. Berikut penjelasan
detailnya:

---

## 1. List

- **Definisi**: List adalah kumpulan data yang **terurut** (ordered)
  dan **dapat diubah** (mutable). Elemen list dapat berupa tipe data
  apa saja, termasuk list lain (nested list).
- **Ciri-ciri**:
  - Bisa berisi elemen dengan tipe data campuran
  - Bisa ditambahkan, dihapus, atau diubah elemennya
  - Mendukung indexing dan slicing
- **Contoh**:

```python
# Membuat list
buah = ["apel", "pisang", "jeruk"]

# Mengakses elemen list
print(buah[0])  # Output: apel

# Mengubah elemen
buah[1] = "mangga"

# Menambahkan elemen
buah.append("melon")

# Menghapus elemen
buah.remove("jeruk")

print(buah)  # Output: ['apel', 'mangga', 'melon']
```

### Fungsi Bawaan Python untuk List

Berikut beberapa fungsi built-in Python yang sering digunakan dengan list:

| Fungsi     | Deskripsi                            | Contoh                       |
| ---------- | ------------------------------------ | ---------------------------- |
| `len()`    | Menghitung jumlah elemen             | `len([1,2,3])  # 3`          |
| `max()`    | Mengambil nilai terbesar             | `max([1,5,2])  # 5`          |
| `min()`    | Mengambil nilai terkecil             | `min([1,5,2])  # 1`          |
| `sum()`    | Menjumlahkan semua elemen numerik    | `sum([1,2,3])  # 6`          |
| `sorted()` | Mengembalikan list baru yang terurut | `sorted([3,1,2])  # [1,2,3]` |

### Metode List

Selain fungsi umum, list juga punya metode bawaan:

| Metode              | Deskripsi                                             | Contoh                            |
| ------------------- | ----------------------------------------------------- | --------------------------------- |
| `.append(x)`        | Menambah elemen di akhir list                         | `buah.append("melon")`            |
| `.insert(i, x)`     | Menambah elemen pada index tertentu                   | `buah.insert(1, "anggur")`        |
| `.extend(iterable)` | Menambahkan banyak elemen sekaligus                   | `buah.extend(["pepaya","nanas"])` |
| `.remove(x)`        | Menghapus elemen tertentu (pertama kali muncul)       | `buah.remove("apel")`             |
| `.pop([i])`         | Menghapus dan mengembalikan elemen (default terakhir) | `buah.pop()  # hapus 'melon'`     |
| `.clear()`          | Menghapus semua elemen                                | `buah.clear()`                    |
| `.index(x)`         | Mengembalikan posisi elemen pertama yang cocok        | `buah.index("jeruk")`             |
| `.count(x)`         | Menghitung jumlah kemunculan elemen                   | `buah.count("apel")`              |
| `.sort()`           | Mengurutkan list **in-place**                         | `angka.sort()`                    |
| `.reverse()`        | Membalik urutan list                                  | `buah.reverse()`                  |
| `.copy()`           | Mengembalikan salinan list                            | `salin = buah.copy()`             |

---

## 2. Tuple

- **Definisi**: Tuple adalah kumpulan data yang **terurut** (ordered)
  tetapi **tidak dapat diubah** (immutable).
- **Ciri-ciri**:
  - Elemen tidak bisa ditambah, dihapus, atau diubah setelah tuple
    dibuat
  - Cocok digunakan untuk data yang bersifat tetap
  - Mendukung indexing dan slicing
- **Contoh**:

```python
# Membuat tuple
koordinat = (10, 20)

# Mengakses elemen tuple
print(koordinat[0])  # Output: 10

# Tuple bersarang
data = (1, "Python", (2, 3))

print(data)  # Output: (1, 'Python', (2, 3))
```

### Fungsi Bawaan Python untuk Tuple

Fungsi-fungsi berikut bisa digunakan pada tuple:

sama kayak yang di list

[click](#fungsi-bawaan-python-untuk-list)

### Metode Tuple

Tuple hanya memiliki dua metode bawaan:

| Metode      | Deskripsi                                                  | Contoh                    |
| ----------- | ---------------------------------------------------------- | ------------------------- |
| `.count(x)` | Menghitung jumlah kemunculan elemen `x`                    | `(1,2,2,3).count(2)  # 2` |
| `.index(x)` | Mengembalikan index dari elemen `x` pertama yang ditemukan | `(1,2,3).index(2)  # 1`   |

---

## 3. Set

- **Definisi**: Set adalah kumpulan data **unik** (tidak boleh ada
  duplikasi) dan **tidak terurut** (unordered).
- **Ciri-ciri**:
  - Tidak mendukung indexing
  - Elemen tidak bisa duplikat
  - Cocok untuk operasi matematika seperti union, intersection,
    difference
- **Contoh**:

```python
# Membuat set
angka = {1, 2, 3, 3, 2}

print(angka)  # Output: {1, 2, 3} (duplikasi otomatis dihapus)

# Menambahkan elemen
angka.add(4)

# Operasi himpunan
ganjil = {1, 3, 5, 7}
genap = {2, 4, 6, 8}
print(ganjil.union(genap))      # Gabungan
print(ganjil.intersection(angka)) # Irisan
```

### Fungsi Bawaan Python untuk Set

Fungsi umum yang bisa digunakan pada set:

sama kayak yang di list

[click](#fungsi-bawaan-python-untuk-list)

### Metode Set

Set punya banyak metode bawaan untuk manipulasi data dan operasi himpunan:

| Metode                         | Deskripsi                                         | Contoh                      |
| ------------------------------ | ------------------------------------------------- | --------------------------- |
| `.add(x)`                      | Menambahkan elemen `x` ke set                     | `s.add(5)`                  |
| `.update(iterable)`            | Menambahkan banyak elemen sekaligus               | `s.update([6,7])`           |
| `.remove(x)`                   | Menghapus elemen `x` (error jika tidak ada)       | `s.remove(3)`               |
| `.discard(x)`                  | Menghapus elemen `x` tanpa error jika tidak ada   | `s.discard(10)`             |
| `.pop()`                       | Menghapus elemen secara acak dan mengembalikannya | `s.pop()`                   |
| `.clear()`                     | Menghapus semua elemen set                        | `s.clear()`                 |
| `.copy()`                      | Mengembalikan salinan set                         | `t = s.copy()`              |
| `.union(other)`                | Gabungan dua set                                  | `s.union(t)`                |
| `.intersection(other)`         | Irisan dua set                                    | `s.intersection(t)`         |
| `.difference(other)`           | Selisih dua set                                   | `s.difference(t)`           |
| `.symmetric_difference(other)` | Selisih simetris (elemen unik di kedua set)       | `s.symmetric_difference(t)` |
| `.issubset(other)`             | Mengecek apakah `s` adalah subset dari `other`    | `s.issubset(t)`             |
| `.issuperset(other)`           | Mengecek apakah `s` adalah superset dari `other`  | `s.issuperset(t)`           |
| `.isdisjoint(other)`           | Mengecek apakah `s` dan `other` tidak ada irisan  | `s.isdisjoint(t)`           |

---

## 4. Frozenset

- **Definisi**: Frozenset adalah versi **immutable** dari set. Setelah
  dibuat, elemennya tidak dapat ditambah atau dihapus.
- **Ciri-ciri**:
  - Tetap mendukung operasi matematika himpunan
  - Lebih aman digunakan jika ingin data set yang tidak bisa diubah
- **Contoh**:

```python
# Membuat frozenset
angka = frozenset([1, 2, 3, 4])

print(angka)  # Output: frozenset({1, 2, 3, 4})

# Tidak bisa menambahkan atau menghapus elemen
# angka.add(5) -> Akan error
```

### Fungsi Bawaan Python untuk Frozenset

Fungsi umum yang bisa digunakan pada frozenset:

sama kayak yang di list

[click](#fungsi-bawaan-python-untuk-list)

### Metode Frozenset

Karena immutable, frozenset tidak punya metode modifikasi (add, remove, dll).
Namun, mendukung semua metode operasi himpunan seperti:

| Metode                         | Deskripsi                  | Contoh                           |
| ------------------------------ | -------------------------- | -------------------------------- |
| `.union(other)`                | Gabungan dua frozenset/set | `fs.union({5,6})`                |
| `.intersection(other)`         | Irisan                     | `fs.intersection({2,3})`         |
| `.difference(other)`           | Selisih                    | `fs.difference({1})`             |
| `.symmetric_difference(other)` | Selisih simetris           | `fs.symmetric_difference({3,4})` |
| `.issubset(other)`             | Cek subset                 | `fs.issubset({1,2,3,4,5})`       |
| `.issuperset(other)`           | Cek superset               | `fs.issuperset({1,2})`           |
| `.isdisjoint(other)`           | Cek tidak ada irisan       | `fs.isdisjoint({6,7})`           |
| `.copy()`                      | Salinan frozenset          | `fs.copy()`                      |

---

## 5. Dictionary (dict)

- **Definisi**: Dictionary adalah kumpulan pasangan **key-value**.
  Setiap elemen memiliki key (unik) dan value.
- **Ciri-ciri**:
  - Key harus unik
  - Value dapat berupa tipe data apa saja
  - Data tidak terurut sebelum Python 3.7, tetapi mulai 3.7 urutan
    dimasukkan dipertahankan
- **Contoh**:

```python
# Membuat dictionary
mahasiswa = {"nama": "Ali", "umur": 20, "jurusan": "Informatika"}

# Mengakses value dengan key
print(mahasiswa["nama"])  # Output: Ali

# Menambahkan pasangan key-value baru
mahasiswa["angkatan"] = 2022

# Mengubah value
mahasiswa["umur"] = 21

# Menghapus elemen
del mahasiswa["jurusan"]

print(mahasiswa)  # Output: {'nama': 'Ali', 'umur': 21, 'angkatan': 2022}
```

### Fungsi Bawaan Python untuk Dictionary

Fungsi umum yang bisa digunakan pada dictionary:

| Fungsi     | Deskripsi                                         | Contoh              |
| ---------- | ------------------------------------------------- | ------------------- |
| `len()`    | Menghitung jumlah pasangan key-value              | `len(mahasiswa)`    |
| `sorted()` | Mengurutkan key dictionary dan mengembalikan list | `sorted(mahasiswa)` |

### Metode Dictionary

Dictionary memiliki banyak metode bawaan:

| Metode                      | Deskripsi                                                                  | Contoh                                        |
| --------------------------- | -------------------------------------------------------------------------- | --------------------------------------------- |
| `.keys()`                   | Mengembalikan semua key                                                    | `mahasiswa.keys()`                            |
| `.values()`                 | Mengembalikan semua value                                                  | `mahasiswa.values()`                          |
| `.items()`                  | Mengembalikan semua pasangan key-value                                     | `mahasiswa.items()`                           |
| `.get(key, default)`        | Mengambil nilai dari key (aman, tidak error jika key tidak ada)            | `mahasiswa.get("nama")`                       |
| `.update(other)`            | Mengupdate dictionary dengan pasangan key-value baru                       | `mahasiswa.update({"umur": 22})`              |
| `.pop(key, default)`        | Menghapus elemen berdasarkan key                                           | `mahasiswa.pop("umur")`                       |
| `.popitem()`                | Menghapus pasangan terakhir yang dimasukkan                                | `mahasiswa.popitem()`                         |
| `.setdefault(key, default)` | Mengembalikan nilai dari key, jika tidak ada maka tambahkan dengan default | `mahasiswa.setdefault("alamat", "Pamekasan")` |
| `.clear()`                  | Menghapus semua elemen dictionary                                          | `mahasiswa.clear()`                           |
| `.copy()`                   | Mengembalikan salinan dictionary                                           | `salin = mahasiswa.copy()`                    |

---

## Kesimpulan

| Tipe Data  | Urut  | Bisa Diubah | Duplikat | Cocok Untuk                        |
| ---------- | ----- | ----------- | -------- | ---------------------------------- |
| List       | Ya    | Ya          | Ya       | Data fleksibel yang sering berubah |
| Tuple      | Ya    | Tidak       | Ya       | Data tetap/konstanta               |
| Set        | Tidak | Ya          | Tidak    | Operasi himpunan & data unik       |
| Frozenset  | Tidak | Tidak       | Tidak    | Data unik yang harus tetap         |
| Dictionary | Ya\*  | Ya          | Key unik | Data berpasangan (key-value)       |

:::tip Catatan

sejak Python 3.7, dict mempertahankan urutan sesuai saat elemen ditambahkan.

:::
