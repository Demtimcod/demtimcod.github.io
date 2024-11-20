---
sidebar_position: 2
---

# Selector CSS

## Apa itu Selector CSS?

Selector dalam CSS adalah bagian dari aturan CSS yang digunakan untuk menentukan elemen HTML mana yang akan diterapkan gaya tertentu. Selector memungkinkan Anda untuk memilih elemen berdasarkan jenis, kelas, id, atribut, status, atau hubungan dengan elemen lain.

## Macam Macam Selector di Css

| name               | example            | description                                                           |
| ------------------ | ------------------ | --------------------------------------------------------------------- |
| Class Selector     | `.class-name`      | Digunakan untuk memilih elemen-elemen yang memiliki class tertentu.   |
| ID Selector        | `#id-name`         | Digunakan untuk memilih elemen-elemen yang memiliki ID tertentu.      |
| Attribute Selector | `[attribute-name]` | Digunakan untuk memilih elemen-elemen yang memiliki atribut tertentu. |
| Tag Selector       | `<tag-name>`       | Digunakan untuk memilih elemen-elemen yang memiliki tag tertentu.     |
| Selector Universal | `*`                | Digunakan untuk memilih semua elemen di halaman.                      |

### contoh penggunaan selector css

kita sebelumnya sudah memahami apa itu css dan metode penulisan css pada materi selanjutnya kita akan mempelajari selector

contoh penggunaan selector css:

```css
/* selector class */

.red {
  color: red;
}
```

selector ini di gunakan untuk mengatur warna teks menjadi merah pada elemen-elemen dengan class "red".

```html
<h1 class="red">ini akan berubah menjadi merah</h1>
```

```css
/* selector id */

#red {
  color: red;
}
```

selector ini di gunakan untuk mengatur warna teks menjadi merah pada elemen-elemen dengan id "red".

```html
<h1 id="red">ini akan berubah menjadi merah</h1>
```

:::danger Catatan

    id hanya bisa di berikan di satu tag html karena id bersifat unik saja lebih baik menggunakan class untuk perubahan yang lebih banyak

:::

```css
/* selector tag */

h1 {
  color: red;
}
```

selector ini di gunakan untuk mengatur warna teks menjadi merah pada elemen-elemen dengan tag "h1" seperti contoh sebelumnya di materi pengenalan css.

```html
<h1>ini akan berubah menjadi merah</h1>
```

kita merubah h1 menjadi warna merah menggunak tag html saja

```css
/* selector attribute */
input[type="text"] {
  border: 1px solid black;
}
```

selector ini di gunakan untuk mengatur border menjadi hitam pada elemen-elemen input dengan atribut type="text".

```html
<input type="text" /> <input type="password" />
```

menurut kalian yang akan berubah menjadi hitam bordernya, input yang mana?

yapss.. input yang memiliki tipe text yang akan berubah sebab kita menargetkan perubahan kepada input yang memiliki `type="text"`

tak kalah penting ada sebuah selector yang cukup sakti yaitu selector universal sebab dia akan menargetkan semua elemen html

```css
/* selector universal */

* {
  color: red;
}
```

code css ini dia akan merubah seluruh elemen html menjadi warna merah cukup sakti kan

:::tip

    Selector * dapat mempengaruhi elemen apa pun di halaman Anda, jadi pastikan Anda tidak mengubah elemen dengan cara yang tidak diinginkan secara global. Gunakan hanya saat diperlukan.

:::

mungkin sampai sini aja materi selector jika ada pertanyaan dan kritik untuk materi yang kita buat ke email yang ada di github [demtimcod](https://github.com/demtimcod)
