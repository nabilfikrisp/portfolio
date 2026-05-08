---
title: "Clean architecture"
excerpt: "Clean architecture is an evolving wisdom of universal system principles in a digital manner."
coverImage: "/assets/blogs/hello-world/cover.webp"
date: "2026-05-08T12:00:00.000Z"
author:
  name: "nabilfikrisp"
  picture: "/assets/profile.png"
ogImage:
  url: "/assets/blogs/hello-world/cover.webp"
---

## Clean architecture is an evolving wisdom of universal system principles in a digital manner

Waktu pertama kali gua belajar clean architecture, gua langsung nanya: apasih gunanya ini? Malah nambah file doang, kan?

Tapi setelah gua beneran ngerti **KENAPANYA**, bukan cuma apanya, gua mulai sadar: maintainability codebase dengan clean architecture itu jauh lebih mudah, lebih cepat, lebih efisien.

Dan karena gua udah kenal clean architecture, gua mulai memandang sebelah mata legacy codebase di salah satu kerjaan gua sekarang. Tapi ada satu pertanyaan yang terus mengganggu kepala gua:

> _Kenapa codebase legacy ini, the kind of code only understood by God and the person who wrote it wkwkwk, bisa serving jutaan manusia setiap harinya?_

Setelah menelusuri alur datanya (of course selama ngoding kan gua nerima data kanan kiri dan ngirim data ke atas bawah wkwkwk), akhirnya gua menemukan jawabannya: **Clean Infrastructure.**

---

Ketika kita zoom out dari kacamata clean architecture, kita mulai bisa lihat layer-layer lain, salah satunya infrastructure. Dan saat kesadaran itu masuk, semuanya mulai masuk akal: clean infra-lah yang bikin system ini bisa terus bertahan dan serving jutaan orang, walaupun codebasenya begini begitu.

Kalau kita lihat lebih lebar, software atau service yang kita bangun itu sebenernya cuma salah satu layer di dalam infrastructure.

---

Kita bandingin analoginya.

Di clean architecture, kita punya:

1. Domain
2. Use case
3. Repository
4. DTO
5. Handler

Layer-layer ini nggak jalan dalam satu flow yang kaku, ada aturan jelas mana yang bisa diakses layer lain, dan mana yang nggak boleh.

Sekarang, kalau kita pakai kacamata infrastructure, layernya kurang lebih mirip. Ini versi sederhananya, detail aslinya ya jauh lebih kompleks:

1. Core System
2. Core Mapper / Integration
3. Backend Service
4. Service Gateway
5. Mobile Banking / Web Banking / ATM / EDC

See? Semua service yang kita bangun itu ya cuma salah satu layer di sana. Infra yang bagus bikin sistem tetap kuat, bahkan ketika codebase tiap servicenya nggak begitu bagus, as long as memenuhi spesifikasi infra.

Di sinilah realisasi gua soal kenapa sistem yang mostly codenya legacy, bisa bertahan sampai detik ini: karena infrastructure yang bagus. Dan ketika butuh perubahan? Tinggal bikin service baru yang lebih bagus, yang tetap sesuai spec.

_That's the point of clean architecture, right?_

---

Tapi gua nggak berhenti di situ.

Dari infra, kita bisa perlebar lagi kacamatanya ke kacamata bisnis. Lagi-lagi, analogi sederhana:

1. Corporate Governance & Strategic Policy
2. Standard Operating Procedures (SOP)
3. Business Departments / Operations / Division
4. Regulatory & Compliance / Auditor
5. Sales / Store / Online Shop / Merchant / B2B, and the list goes on wkwkwk, tapi pointnya sama, ini layer handler.

Di kacamata ini, infra hanyalah bagian dari layer bisnis, bisa jadi support untuk setiap layer, atau bahkan implementasi dari suatu layer.

Dan ketika butuh perubahan, kita tinggal bikin sesuatu yang baru, mau itu swap ataupun "service" baru. Lagi-lagi, _that's the point of clean architecture, right?_

---

Tiga prinsip yang gua lihat konsisten di semua kacamata:

**1. Separation of Concern**

Boundaries, batasan, pemisahan tanggung jawab, terbukti penting di semua level: codebase, infra, maupun bisnis. Semakin jelas boundariesnya, semakin controllable chaosnya.

**2. Swapability**

Ini fundamental buat mengikuti perkembangan zaman atau bahkan moving fast. Di codebase, kita udah familiar, misalnya ganti payment gateway dari Trans-Tengah ke Sendit wkwkwk. Di infra juga sama, contohnya ganti backend service dari PHP ke Go, selama specnya terpenuhi, done bang. Di bisnis pun sama, swap produsen itu udah biasa.

**3. Reliability**

Nah, ini inti pertahanannya. Mau implementasinya kurang efektif pun, yang penting reliable dulu, right?

---

Kesimpulan gua adalah:

**Codebase sebagus apa pun akan sia-sia tanpa infrastruktur yang kuat. Dan infrastruktur sekuat apa pun akan sia-sia tanpa sistem bisnis yang terstandar.**

Bagi gua Clean Architecture hanyalah satu konsep translasi dari sistem universal, cuma ya, di lingkungan digital aja.
