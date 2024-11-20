---
sidebar_position: 1
---

# Variabel dan Comment

## Variabel

Variabel adalah wadah untuk menyimpan nilai data di python, variabel dibuat saat Anda memberikan nilai pada variabel tersebut.
Pada contoh berikut terdapat variabel x dan variabel y yang diberi nilai data angka dan data teks.

```python
x = 5
y = "Hello, World!"
```

## Casting

Jika Anda ingin menentukan tipe data variabel, ini dapat dilakukan dengan casting.

```python
x = str(3) # x akan bernilai '3'
y = int(3) # y bernilai 3
z = float(3) # z bernilai 3.0
```

## Kutipan Tunggal dan Ganda

Variabel string dapat dideklarasikan baik dengan menggunakan tanda kutip tunggal atau ganda:

```python
x = "John"
# is the same as
x = 'John'
```

## Case Sensitive

Nama variabel peka terhadap huruf besar dan kecil (case sensitive).

```python
a = 4
A = "Sally"
#variabel A tidak akan mengganti variabel a
```

## Aturan Penamaan Variable

Variabel dapat memiliki nama pendek (seperti x dan y) atau nama yang lebih deskriptif (umur,
namamobil, total_volume). Aturan untuk variabel Python adalah

1. Nama variabel harus dimulai dengan huruf atau garis bawah
2. Nama variabel tidak boleh dimulai dengan angka
3. Nama variabel hanya boleh berisi karakter alfanumerik dan garis bawah (A-z, 0-9, dan \_)
4. Nama variabel peka huruf besar / kecil (usia, Usia, dan USIA adalah tiga variabel berbeda)

```python title="contoh penamaan variable yang di perbolehkan ✅"
myvar = "John"
my_var = "John"
_my_var = "John"
myVar = "John"
MYVAR = "John"
myvar2 = "John"
```

```python title="contoh penamaan variable yang tidak di perbolehkan ❌"
2myvar = "John"
my-var = "John"
my var = "John"
```

### Nama Variabel Multi Kata

Nama variabel dengan lebih dari satu kata bisa jadi sulit dibaca. Ada beberapa teknik yang bisa
Anda gunakan untuk membuatnya lebih mudah dibaca:

#### Jenis Penamaan Variabel camelCase

Setiap kata, kecuali yang pertama, dimulai dengan huruf kapital:

```python
myVariableName = "demtimcod"
```

#### Jenis Penamaan Variabel Pascal

Setiap kata dimulai dengan huruf kapital:

```python
MyVariableName = "Demtimcod"
```

#### Jenis Penamaan Variabel Snake

Setiap kata dipisahkan oleh karakter garis bawah:

```python
my_variable_name = "John"
```

## Banyak Nilai ke Banyak Variabel

Python memungkinkan Anda untuk menetapkan nilai ke beberapa variabel dalam satu baris:

```python
x, y, z = "Orange", "Banana", "Cherry"
print(x)
print(y)
print(z)
```

:::tip My tip

Catatan: Pastikan jumlah variabel sesuai dengan jumlah nilai, atau Anda akan mendapatkan
error.

:::

## Satu Nilai untuk Beberapa Variabel

Dan Anda dapat menetapkan nilai yang sama ke beberapa variabel dalam satu baris:

```python
x = y = z = "Orange"
print(x)
print(y)
print(z)
```

## Print Variabel

Pernyataan print pada Python sering digunakan untuk mengeluarkan variabel. Untuk
menggabungkan teks dan variabel, Python menggunakan karakter +:

```python
x = "awesome"
print("Python is " + x)
```

Anda juga dapat menggunakan karakter + untuk menambahkan variabel ke variabel lain:

```python
x = "Python is "
y = "awesome"
z = x + y
print(z)
```

Untuk angka, karakter + berfungsi sebagai operator matematika:

```python
x = 5
y = 10
print(x + y)
```

Jika Anda mencoba menggabungkan string dan angka, Python akan memberi Anda kesalahan:

```python
x = 5
y = "John"
print(x + y)
```

dan jika anda ingin menggabungkan variable dan dan tak ingin menggunkan + maka kalian bisa pakek ini:

```python
name = "John"

print(f"hello, {name}")
```

## Comment

Python memiliki fitur komentar untuk tujuan dokumentasi dalam kode program. Komentar
dimulai dengan tanda pagar (#), dan Python akan membuat sisa barisnya sebagai komentar.
Kode komentar tidak akan dieksekusi oleh komputer, hanya berfungsi sebagai petunjuk,
informasi atau memberi penjelasan tentang suatu bagian program.

```python
#ini adalah komentar
print("mencoba komentar di python")
```

## comment multiline

Python tidak memiliki sintaks untuk komentar multi baris. Untuk menambahkan komentar
multiline, Anda dapat memasukkan # untuk setiap baris:

```python
#Ini adalah komentar
#ditulis dengan
#lebih dari satu baris
print("Hello, World!")
```

Atau, jika tidak seperti yang diharapkan, Anda dapat menggunakan string multiline. Python
akan mengabaikan literal string yang tidak ditetapkan ke variabel, Anda dapat menambahkan
string multiline (tanda kutip tiga) dalam kode Anda, dan menempatkan komentar Anda di
dalamnya:

```python
"""
Ini adalah komentar
ditulis dengan
lebih dari satu baris
"""
print("Hello, World!")
```

Selama string tidak ditetapkan ke variabel, Python akan membaca kodenya, tetapi kemudian
mengabaikannya, dan Anda telah membuat komentar multiline.
