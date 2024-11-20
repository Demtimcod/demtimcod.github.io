---
sidebar_position: 2
---

# Element HTML

## Element HTML

Elemen HTML adalah blok bangunan utama dari halaman web. Elemen-elemen ini digunakan untuk menyusun dan menampilkan konten di browser. Elemen HTML terdiri dari tag pembuka, isi (content), dan tag penutup. Beberapa elemen mungkin tidak memiliki isi atau tag penutup (disebut elemen kosong).

Example:

```html
<p>Ini adalah paragraf.</p>
```

| Start Tag |   Element Content   | End Tag |
| --------- | :-----------------: | ------- |
| `<p>`     | ini adalah paragraf | `</p>`  |
| `<h1>`    | ini adalah heading  | `</h1>` |
| `<br/>`   |        none         | none    |

:::tip Catatan

Beberapa elemen HTML tidak memiliki konten (seperti elemen `<br>`). Elemen-elemen ini disebut elemen kosong. Elemen kosong tidak memiliki tag penutup!

:::

## Elemen HTML Bersarang

Elemen HTML dapat bersarang (ini berarti suatu elemen dapat berisi elemen lain).Semua dokumen HTML terdiri dari elemen-elemen HTML yang bertingkat. Contoh berikut berisi empat elemen HTML ( `<html>`, `<body>`, `<h1>` dan `<p>`)

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>
```

Contoh Dijelaskan :

Elemen tersebut `<html>` merupakan elemen akar dan mendefinisikan keseluruhan dokumen HTML. Ia memiliki tag awal `<html>` dan tag akhir `</html>`. Kemudian di dalam `<html>` elemen tersebut ada `<body>` elemen

```html
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</body>
```

Element `<body>` mendefinisikan bagian utama dokumen HTML dan memiliki tag awal `<body>` dan tag akhir `</body>`. Tag `<body>` berisi elemen-elemen lain, seperti `<h1>` dan `<p>`.

```html
<h1>My First Heading</h1>
<p>My first paragraph.</p>
```

Elemen `<h1>` mendefinisikan judul ia memiliki tag awal `<h1>` dan tag akhir `</h1>` sama hal nya dengan tag `<p>` elemen ini juga memiliki tag awal `<p>` dan tag akhir `</p>`

## Jangan Pernah Melewatkan Tag Akhir

Beberapa elemen HTML akan ditampilkan dengan benar, bahkan jika Anda lupa tag penutup:

```html
<html>
  <body>
    <p>This is a paragraph</p>
    <p>This is a paragraph</p>
  </body>
</html>
```

:::danger Catatan

    Namun, jangan pernah mengandalkan ini! Hasil yang tidak diharapkan dan kesalahan dapat terjadi jika Anda lupa tag penutup!

:::

## Elemen HTML Kosong

Elemen HTML tanpa konten disebut elemen kosong. Tag ini `<br>` mendefinisikan jeda baris, dan merupakan elemen kosong tanpa tag penutup

example :

```html
<p>
  This is a <br />
  paragraph with a line break.
</p>
```

## HTML tidak peka huruf BESAR/kecil

Tag HTML tidak peka huruf besar/kecil: `<P>artinya sama dengan <p>`.
Standar HTML tidak mengharuskan tag huruf kecil, tetapi W3C merekomendasikan huruf kecil dalam HTML, dan menuntut huruf kecil untuk jenis dokumen yang lebih ketat seperti XHTML.

dan kalian bisa lihat di contoh di atas author tidak pernah menggunakan tag huruf besar
