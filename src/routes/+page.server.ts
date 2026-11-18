
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { RESEND_API_KEY, RESEND_TO } from '$app/env/private';

export const actions = {
  kirim: async ({ request }) => {
    const data = await request.formData();

    const nama = String(data.get('nama') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const pesan = String(data.get('pesan') ?? '').trim();

    // Memeriksa isian form
    if (!nama || !email || !pesan) {
      return fail(400, {
        pesan: 'Semua kolom harus diisi.'
      });
    }

    if (!email.includes('@')) {
      return fail(400, {
        pesan: 'Format email belum benar.'
      });
    }

    // Memeriksa API key
    const apiKey = String(RESEND_API_KEY ?? '').trim();
    const emailTujuan = String(RESEND_TO ?? '').trim();

    console.log('API key terbaca:', Boolean(apiKey));
    console.log('Awalan re_:', apiKey.startsWith('re_'));
    console.log('Panjang key:', apiKey.length);

    if (!apiKey || !emailTujuan) {
      return fail(500, {
        pesan: 'Konfigurasi email belum terbaca.'
      });
    }

    try {
      // Mengirim email melalui Resend
      const balasan = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'Alenya <onboarding@resend.dev>',
          to: [emailTujuan],
          reply_to: email,
          subject: `Pesan baru dari ${nama}`,
          text: `Nama: ${nama}\nEmail: ${email}\n\nPesan:\n${pesan}`
        })
      });

      if (!balasan.ok) {
        const detail = await balasan.text();
        console.error('Resend error:', detail);

        return fail(502, {
          pesan: 'Gagal mengirim. Coba lagi.'
        });
      }

      console.log('Email berhasil dikirim melalui Resend');

      return {
        sukses: true
      };

    } catch (error) {
      console.error('Pengiriman email gagal:', error);

      return fail(502, {
        pesan: 'Terjadi kesalahan. Coba lagi.'
      });
    }
  }
} satisfies Actions;
