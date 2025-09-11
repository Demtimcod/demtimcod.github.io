---
sidebar_position: 2
---

# Tipe Data

Python adalah bahasa pemrograman yang mendukung berbagai macam tipe
data. Tipe data digunakan untuk menentukan jenis nilai yang dapat
disimpan dan operasi yang dapat dilakukan terhadap nilai tersebut.

## 1. Tipe Data Dasar

- **int (Integer)**: Bilangan bulat, contoh: `10`, `-5`, `1000`
- **float (Floating Point)**: Bilangan desimal, contoh: `3.14`,
  `-0.5`, `2.0`
- **complex (Bilangan Kompleks)**: Memiliki bagian real dan imajiner,
  contoh: `3+4j`

## 2. Tipe Data Boolean

- **bool**: Hanya memiliki dua nilai, `True` atau `False`

## 3. Tipe Data String

- **str**: Teks atau kumpulan karakter, contoh: `"Hello"`, `'Python'`

## 4. Tipe Data Koleksi

- **list**: Kumpulan data yang terurut dan dapat diubah, contoh:
  `[1, 2, 3, "Python"]`
- **tuple**: Kumpulan data yang terurut tetapi tidak dapat diubah,
  contoh: `(1, 2, 3, "Python")`
- **set**: Kumpulan data unik (tidak ada duplikasi) dan tidak terurut,
  contoh: `{1, 2, 3}`
- **frozenset**: Sama seperti `set` tetapi tidak dapat diubah
- **dict (Dictionary)**: Kumpulan pasangan key-value, contoh:
  `{"nama": "Ali", "umur": 20}`

## 5. Tipe Data None

- **NoneType**: Digunakan untuk merepresentasikan nilai kosong atau
  tidak ada nilai, contoh: `None`

## 6. Tipe Data Biner

- **bytes**: Data biner yang tidak dapat diubah
- **bytearray**: Data biner yang dapat diubah
- **memoryview**: Objek yang memungkinkan akses ke buffer data biner

---

## Contoh Penggunaan

```python
# Integer
x = 10

# Float
y = 3.14

# Boolean
status = True

# String
nama = "Python"

# List
angka = [1, 2, 3]

# Tuple
data = (1, "A", True)

# Set
unik = {1, 2, 3}

# Dictionary
mahasiswa = {"nama": "Ali", "umur": 20}

# None
kosong = None
```

---

Dengan memahami tipe data di Python, kita dapat menulis kode yang lebih
efisien dan sesuai dengan kebutuhan program.
