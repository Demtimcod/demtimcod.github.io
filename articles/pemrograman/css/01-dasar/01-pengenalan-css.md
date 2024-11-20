---
sidebar_position: 1
---

# Pengenalan CSS

## Apa itu CSS?

CSS adalah singkatan dari Cascading Style Sheets. Ini adalah bahasa stylesheet yang digunakan untuk mengatur tampilan dan format dokumen yang ditulis dalam HTML. CSS memungkinkan pengembang web untuk memisahkan konten dari desain, sehingga memudahkan pemeliharaan dan pengembangan situs web.

### Struktur dasar CSS

Sebuah stylesheet CSS terdiri dari aturan yang disebut "selectors" dan "declarations". Struktur/sintax dasarnya adalah sebagai berikut:

```css
selector {
  property: value;
}
```

Penjelasan:

| name     | description                                                                                                                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| selector | Selector adalah elemen-elemen HTML yang digunakan untuk memilih elemen-elemen yang akan diberikan aturan CSS.                                                                                                 |
| property | Property adalah nama dari properti yang ingin Anda atur, seperti "color", "font-size", dan sebagainya.                                                                                                        |
| value    | Value adalah nilai yang akan diberikan ke property yang dipilih. Misalnya, jika Anda ingin mengatur warna teks menjadi "blue", maka Anda dapat menggunakan nilai "blue" sebagai value untuk property "color". |

### Metode penulisan CSS

- **Inline CSS** : Ditetapkan langsung di dalam tag HTML menggunakan atribut style.
- **Internal CSS** : Dimasukkan dalam tag `<style>` di dalam `<head>` HTML.
- **External CSS** : Dihubungkan dari file terpisah dengan ekstensi `.css` contoh `style.css`.

#### Contoh penulisan CSS

contoh penulisan css inline:

```html
<body>
  <h1 style="color: red;">Ini adalah heading utama</h1>
</body>
```

contoh penulisan css internal:

```html
<head>
  <style>
    h1 {
      color: red;
  }
  </style>
  </head>
</head>
<body>
<h1>aku merah</h1>
</body>
```

contoh penulisan css external:

```
#buatlah file seperti berikut
├── index.html
├── style.css
```

```html
<!-- contoh penulisan css external -->
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

```css
h1 {
  color: red;
}
p {
  font-size: 20px;
}
```

code di atas adalah code html dan css sederhana jika kita ingin menggunaka css external kita harus menggunakan `<link rel="stylesheet" href="style.css">` di dalam tag `<head>` html

contoh code yang menggunakan css external:

```html
<html>
  <head>
    <title>Page Title</title>
    <!-- metode mengkoneksikan css external ke html -->
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

setelah itu coba jalan kan html di browser maka akan ada perubahan dari tag `<h1>` dan `<p>`

oke kita udah selesai dalam memahami apa itu css dan metode penulisan css pada materi selanjutnya kita akan mempelajari selector.
