import { defineEnvVars} from '@sveltejs/kit/env';

// Svetekit 3 mengganti '$env/dynamic/private' dengan cara ini.
// setiap variabel yang dipakai aplikasi didaftarkan di sini, sekli.
export const variables = defineEnvVars({
    RESEND_API_KEY: {
        description: 'kunci API Resend. Rahasia, hanya untuk server',
        schema: (value) => value?? ''
    },  
    RESEND_TO: { 
        description: 'Email penerima pesan dari from kontak.',
        schema: (value) => value?? ''
    }
});       