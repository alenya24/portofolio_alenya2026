<script lang="ts">
	import { enhance } from '$app/forms';
	import { profile } from '../lib/data';
	type Theme = 'light' | 'dark';
	type Status = 'idle' | 'loading' | 'success' | 'error';

	let theme: Theme = $state('light');
	let activeBook = $state(0);
	let activeSection = $state('home');
	let status: Status = $state('idle');

	const books = [
		{
			number: '01',
			title: 'From Silence To A New World',
			category: 'NOVEL',
			description: 'Genre: Fantasy, Romance, and Adventure. Cerita ini mengisahkan perjalanan seorang gadis muda yang menemukan kekuatan dalam dirinya untuk mengubah dunia.',
			cover: '/images/book-1.jpeg',
			className: 'cover-one'
		},
		{
			number: '02',
			title: 'Jangan Pergi Kakak',
			category: 'NOVEL',
			description: 'genre: Drama, Romance, and Slice of Life. Cerita ini mengisahkan tentang hubungan kakak-adik yang penuh emosi dan tantangan, serta bagaimana mereka menghadapi perpisahan dan kehilangan.',
			cover: '/images/book-2.jpeg',
			className: 'cover-two'
		},
		{
			number: '03',
			title: 'Hidden Wounds',
			category: 'NOVEL',
			description: 'genre: Trauma, Mental Health, and Psychological Fiction. Cerita ini mengisahkan perjuangan seorang bocah laki-laki dalam menghadapi luka emosional yang dalam dan pengaruhnya terhadap kehidupan sehari-hari.',
			cover: '/images/book-3.jpeg',
			className: 'cover-three'
		}
	];

	function changeBook(direction: number) {
		activeBook = (activeBook + direction + books.length) % books.length;
	}

	function goToSection(section: string) {
		activeSection = section;
	}
</script>

<svelte:head>
	<title>Alenya — Personal Portfolio</title>
	<meta
		name="description"
		content="Personal portfolio of Alenya, a student passionate about writing, technology, design, and creativity."
	/>
</svelte:head>

<div class="portfolio-shell" class:dark={theme === 'dark'}>

	<!-- BACKGROUND STARS -->
	<div class="star-field" aria-hidden="true">
		<span class="star star-1">✦</span>
		<span class="star star-2">✧</span>
		<span class="star star-3">✳</span>
		<span class="star star-4">✦</span>
		<span class="star star-5">✧</span>
		<span class="star star-6">✦</span>
		<span class="star star-7">✧</span>
		<span class="star star-8">✳</span>
		<span class="star star-9">✦</span>
		<span class="star star-10">✧</span>
		<span class="star star-11">✦</span>
		<span class="star star-12">✧</span>
	</div>

	<div class="site-layout">

		<!-- LEFT SIDEBAR -->
		<aside class="sidebar">
			<a href="#home" class="sidebar-logo" onclick={() => goToSection('home')}>
				A.
			</a>

			<nav class="sidebar-nav" aria-label="Main navigation">
				<a
					href="#home"
					class:active={activeSection === 'home'}
					class="sidebar-link"
					aria-label="Home"
					title="Home"
					onclick={() => goToSection('home')}
				>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
						<path d="m3 10 9-7 9 7"/>
						<path d="M5 9v11h14V9M9 20v-7h6v7"/>
					</svg>
					<span class="nav-tooltip">Home</span>
				</a>

				<a
					href="#proyek"
					class:active={activeSection === 'proyek'}
					class="sidebar-link"
					aria-label="Projects"
					title="Projects"
					onclick={() => goToSection('proyek')}
				>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
						<rect x="4" y="3" width="16" height="18" rx="2"/>
						<path d="M9 3v18M9 8h11"/>
					</svg>
					<span class="nav-tooltip">Projects</span>
				</a>

				<a
					href="#tentang"
					class:active={activeSection === 'tentang'}
					class="sidebar-link"
					aria-label="About"
					title="About"
					onclick={() => goToSection('tentang')}
				>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
						<circle cx="12" cy="8" r="4"/>
						<path d="M4 21a8 8 0 0 1 16 0"/>
					</svg>
					<span class="nav-tooltip">About</span>
				</a>

				<a
					href="#kontak"
					class:active={activeSection === 'kontak'}
					class="sidebar-link"
					aria-label="Contact"
					title="Contact"
					onclick={() => goToSection('kontak')}
				>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
						<rect x="3" y="5" width="18" height="14" rx="2"/>
						<path d="m4 7 8 6 8-6"/>
					</svg>
					<span class="nav-tooltip">Contact</span>
				</a>
			</nav>

			<div class="sidebar-bottom">
				<span class="sidebar-sparkle">✦</span>
				<span class="sidebar-year">2026</span>
			</div>
		</aside>

		<!-- MAIN CONTENT -->
		<main class="main-panel">
		<div class="twinkle-star sparkle-one"></div>
<div class="twinkle-star sparkle-two"></div>
<div class="twinkle-star sparkle-three"></div>
<div class="twinkle-star sparkle-four"></div>
<div class="twinkle-star sparkle-five"></div>
<!-- ALENYA LOADING SCREEN -->
<div class="page-loader">
    <div class="loader-content">
        <div class="loader-sparkle">✦</div>
        <h1>ALENYA</h1>
        <p>A little world of creativity</p>

        <div class="loader-line">
            <span></span>
        </div>

        <small>LOADING YOUR EXPERIENCE...</small>
    </div>
</div>


			<!-- HOME -->
			<section id="home" class="home-section">
				<div class="topline">
					<div class="availability">
						<span class="availability-dot"></span>
						AVAILABLE FOR NEW IDEAS
					</div>

					<div class="topline-right">
						<span>PERSONAL SPACE</span>
						<span class="topline-star">✳</span>
						<span>2026</span>

						<!-- ICON-ONLY THEME BUTTON -->
						<button
							type="button"
							class="theme-button"
							aria-label={theme === 'light' ? 'Aktifkan dark mode' : 'Aktifkan light mode'}
							title={theme === 'light' ? 'Dark mode' : 'Light mode'}
							onclick={() => theme = theme === 'light' ? 'dark' : 'light'}
						>
							{#if theme === 'light'}
								<svg class="theme-icon sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
									<circle cx="12" cy="12" r="4"/>
									<path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>
								</svg>
							{:else}
								<svg class="theme-icon moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
									<path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z"/>
									<path d="m17 3 .5 1.5L19 5l-1.5.5L17 7l-.5-1.5L15 5l1.5-.5L17 3Z"/>
								</svg>
							{/if}
						</button>
					</div>
				</div>

				<div class="hero-layout">
					<div class="hero-copy">
						<p class="eyebrow">WELCOME TO MY LITTLE WORLD</p>

						<h1 class="hero-title">
							Alenya<span>.</span>
						</h1>

						<p class="hero-subtitle">
							A creative mind with endless little dreams.
						</p>

						<p class="hero-description">
							Halo, Saya Alenya! Seorang siswi PPLG yang tertarik dengan
							dunia teknologi, desain, dan kreativitas. Saya lebih berfokus
							pada desain UI/UX kerena saya lebih menonjol pada bagian desain dan analisis alur pengerjaan sebuah sistem.
							Dan saya senang belajar hal baru seperti membuat cerita dan bermain game. Dan saya juga menonjol di daya ingat yang membutuhkan ingatan secepat kilat.
							Mau tau saya lebih lanjut? Yuk, scroll ke bawah untuk mengenalku lebih dekat!
						</p>

						<div class="hero-actions">
							<a href="#proyek" class="main-button" onclick={() => goToSection('proyek')}>
								Explore my work <span>↗</span>
							</a>
							<a href="#tentang" class="outline-button" onclick={() => goToSection('tentang')}>
								More about me
							</a>
						</div>
					</div>

					<!-- ABSTRACT ART PANEL -->
					<div class="hero-art">
						<div class="art-label art-label-top">A LITTLE SPACE FOR CREATIVITY</div>

						<div class="art-orbit orbit-one"></div>
						<div class="art-orbit orbit-two"></div>
						<div class="art-orbit orbit-three"></div>

						<div class="art-sun"></div>
						<div class="art-core">
							<div class="art-core-shape"></div>
						</div>

						<span class="art-star art-star-one">✦</span>
						<span class="art-star art-star-two">✧</span>
						<span class="art-star art-star-three">✳</span>

						<div class="art-label art-label-bottom">
							<span>01</span>
							<span>CREATIVITY IN MOTION</span>
						</div>
					</div>
				</div>

				<!-- QUICK LINKS -->
				<div class="quick-links">
					<a href="#proyek" class="quick-card" onclick={() => goToSection('proyek')}>
						<span class="quick-icon">✧</span>
						<span class="quick-arrow">↗</span>
						<span class="quick-overline">MY WRITING</span>
						<strong>My Books</strong>
						<span class="quick-description">Stories and little worlds.</span>
					</a>

					<a href="#tentang" class="quick-card" onclick={() => goToSection('tentang')}>
						<span class="quick-icon">♡</span>
						<span class="quick-arrow">↗</span>
						<span class="quick-overline">GET TO KNOW ME</span>
						<strong>About Me</strong>
						<span class="quick-description">A little introduction.</span>
					</a>

					<a href="#kontak" class="quick-card" onclick={() => goToSection('kontak')}>
						<span class="quick-icon">✉</span>
						<span class="quick-arrow">↗</span>
						<span class="quick-overline">SAY HELLO</span>
						<strong>Contact</strong>
						<span class="quick-description">Let's share some ideas.</span>
					</a>
				</div>

				<div class="home-bottom-line">
					<span>BASED IN INDONESIA</span>
					<span>✦</span>
					<span>KEEP CREATING — KEEP GROWING</span>
				</div>
			</section>

			<!-- MY BOOKS -->
			<section id="proyek" class="content-section books-section">
				<div class="section-heading">
					<div>
						<p class="eyebrow">01 / MY CREATIVE CORNER</p>
						<p class="script-label">A shelf full of imagination</p>
						<h2 class="section-title">My Books<span>.</span></h2>
					</div>

					<p class="section-intro">
						Setiap cerita memiliki dunia dan kenangannya sendiri.
						Di sinilah beberapa karyaku akan disimpan.
					</p>
				</div>

				<div class="books-divider">
					<span>MY WRITING COLLECTION</span>
					<span>✦</span>
					<span>THREE LITTLE WORLDS</span>
				</div>

				<div class="book-carousel">
					<button
						type="button"
						class="carousel-arrow arrow-left"
						aria-label="Buku sebelumnya"
						onclick={() => changeBook(-1)}
					>
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
							<path d="m15 18-6-6 6-6"/>
						</svg>
					</button>

					<div class="book-viewport">
						<div
							class="book-track"
							style={`transform: translateX(-${activeBook * 100}%);`}
						>
							{#each books as book, i}
								<article class="book-slide" aria-label={`Buku ${i + 1}`}>
									<div class="book-cover-area">
										<div class={`book-cover ${book.className}`}>
											<!--
												GANTI BAGIAN COVER INI DENGAN FOTO COVER BUKUMU.
												Contoh:
												<img src="/images/cover-novel-1.jpg" alt="Cover novel" />
											-->
											<div class="cover-placeholder">
												<img
    src={book.cover}
    alt={`Cover ${book.title}`}
    class="real-book-cover"
/>
											</div>
										</div>
										<div class="book-shadow"></div>
									</div>

									<div class="book-information">
										<p class="eyebrow">BOOK {book.number} · {book.category}</p>
										<h3>{book.title}</h3>
										<p>{book.description}</p>
										<span class="book-note">A LITTLE WORLD CREATED WITH WORDS.</span>
									</div>
								</article>
							{/each}
						</div>
					</div>

					<button
						type="button"
						class="carousel-arrow arrow-right"
						aria-label="Buku berikutnya"
						onclick={() => changeBook(1)}
					>
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
							<path d="m9 18 6-6-6-6"/>
						</svg>
					</button>
				</div>

				<div class="carousel-controls">
					<div class="carousel-dots">
						{#each books as book, i}
							<button
								type="button"
								class:current={activeBook === i}
								class="carousel-dot"
								aria-label={`Tampilkan buku ${i + 1}`}
								onclick={() => activeBook = i}
							></button>
						{/each}
					</div>

					<p class="carousel-count">
						<span>0{activeBook + 1}</span> / 03
					</p>
				</div>

				<div class="books-footer-note">
					<span>✦</span>
					<p>Every story begins with a little imagination.</p>
					<span>✦</span>
				</div>
			</section>

			<!-- ABOUT -->
			<section id="tentang" class="content-section about-section">
				<div class="section-heading">
					<div>
						<p class="eyebrow">02 / GET TO KNOW ME</p>
						<p class="script-label">The person behind the ideas</p>
						<h2 class="section-title">About Me<span>.</span></h2>
					</div>

					<p class="section-intro">
						A little glimpse of who I am, what I love, and the stories behind my creativity.
					</p>
				</div>

				<div class="about-layout">
					<div class="about-visual">
						<div class="about-photo-frame">
							<div class="photo-corner"></div>
							<img
								src={theme === 'dark'
  ? '/images/portrait-dark.jpeg'
  : '/images/portrait-light (2).jpeg'}
								alt="Potret Alenya"
								class="about-photo"
							/>
							<span class="photo-label">A MOMENT IN MY WORLD</span>
						</div>
						<p class="photo-signature">With, Alenya.</p>
					</div>

					<div class="about-details">
						<p class="about-bio">{profile.bio}</p>

						<div class="about-facts">
							{#each profile.facts as fact}
								<div class="fact-row">
									<span>{fact.label}</span>
									<strong>{fact.value}</strong>
								</div>
							{/each}
						</div>

					
<div class="skills-area">
    <p class="eyebrow">MY SKILLS</p>
    <p class="skills-description">
        Things I enjoy learning and creating.
    </p>

    <div class="skill-bars">
        {#each [
            { name: 'Creative Writing', level: 90 },
            { name: 'Storytelling', level: 90 },
            { name: 'HTML & CSS', level: 80 },
            { name: 'JavaScript', level: 73 },
            { name: 'UI/UX Design', level: 90 }
        ] as skill}
            <div class="skill-item">
                <div class="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                </div>
                <div class="skill-track">
                    <div
                        class="skill-fill"
                        style={`width: ${skill.level}%`}
                    ></div>
                </div>
            </div>
        {/each}
    </div>
</div>


						<div class="about-quote">
							<span>“</span>
							<p>Tumbuh melalui setiap pengalaman, selangkah demi selangkah.</p>
						</div>
					</div>
				</div>
			</section>

			<!-- CONTACT -->
			<section id="kontak" class="content-section contact-section">
				<div class="section-heading">
					<div>
						<p class="eyebrow">03 / LET'S CONNECT</p>
						<p class="script-label">Percakapan baru dimulai di sini</p>
						<h2 class="section-title">Hello<span>.</span></h2>
					</div>

					<p class="section-intro">
						Punya ide, ingin berbagi cerita, atau sekadar menyapa?
						Aku senang bisa mengenalmu.
					</p>
				</div>

				<div class="contact-layout">
					<div class="contact-copy">
						<h3>Let's create<br />something meaningful.</h3>
						<p>
							Saya selalu terbuka untuk belajar. Adakah yang ingin di tanyakan seputar karya-karya saya atau UI/UX?
							Atau mungkin kritik, atau ingin tutor cara menulis dengan benar, dan juga saran untuk saya?
							saya tunggu pesan 
							hangatmu di kotak pesan di samping.
							 Jangan ragu untuk
							mengirimkan pesan.
						</p>

						<div class="contact-status">
							<span class="availability-dot"></span>
							OPEN TO NEW IDEAS
						</div>

						<div class="contact-big-star">✳</div>
					</div>

					<form
						method="POST"
						action="?/kirim"
						use:enhance={() => {
							status = 'loading';

							return async ({ result, update }) => {
								await update({ reset: result.type === 'success' });
								status = result.type === 'success' ? 'success' : 'error';
							};
						}}
						class="contact-form"
					>
						<div class="form-heading">
							<p class="eyebrow">SEND ME A MESSAGE</p>
							<span>✉</span>
						</div>

						<label class="form-field">
							<span>YOUR NAME</span>
							<input
								name="nama"
								required
								autocomplete="name"
								placeholder="Nama lengkap kamu"
							/>
						</label>

						<label class="form-field">
							<span>YOUR EMAIL</span>
							<input
								name="email"
								type="email"
								required
								autocomplete="email"
								placeholder="nama@email.com"
							/>
						</label>

						<label class="form-field">
							<span>YOUR MESSAGE</span>
							<textarea
								name="pesan"
								required
								rows="4"
								placeholder="Tulis pesanmu di sini..."
							></textarea>
						</label>

						<button
							type="submit"
							class="main-button send-button"
							disabled={status === 'loading'}
						>
							{status === 'loading' ? 'Mengirim...' : 'Send Message ↗'}
						</button>

						{#if status === 'success'}
							<p class="form-success">Pesan berhasil dikirim. Terima kasih!</p>
						{:else if status === 'error'}
							<p class="form-error">Pesan gagal dikirim. Silakan coba lagi.</p>
						{/if}
					</form>
				</div>
			</section>

			<!-- FOOTER -->
			<footer class="footer">
				<div class="footer-main">
					<div>
						<a href="#home" class="footer-logo">Alenya<span>.</span></a>
						<p>Satu cerita, sejuta ide.</p>
					</div>

					<div class="footer-links">
						<a href="#home" onclick={() => goToSection('home')}>HOME</a>
						<a href="#proyek" onclick={() => goToSection('proyek')}>BOOKS</a>
						<a href="#tentang" onclick={() => goToSection('tentang')}>ABOUT</a>
						<a href="#kontak" onclick={() => goToSection('kontak')}>CONTACT</a>
					</div>
				</div>

				<div class="footer-bottom">
					<span>© 2026 ALENYA. ALL RIGHTS RESERVED.</span>
					<a href="#home">BACK TO TOP ↑</a>
				</div>
			</footer>
		</main>
	</div>

	<a href="#home" class="floating-top" aria-label="Kembali ke atas">↑</a>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

	:global(*) {
		box-sizing: border-box;
	}

	:global(html) {
		scroll-behavior: smooth;
		scroll-padding-top: 30px;
	}

	:global(body) {
		margin: 0;
		background: #eaf0f4;
	}

	.portfolio-shell {
		--page: #edf2f5;
		--panel: rgba(255, 255, 255, 0.78);
		--card: rgba(255, 255, 255, 0.78);
		--ink: #263f5c;
		--blue: #4779a6;
		--blue-deep: #294968;
		--muted: #7b8da0;
		--gold: #dfbd61;
		--line: #e4e2d9;
		--soft-blue: #dce9f1;
		--input: #f7f8f7;

		position: relative;
		min-height: 100vh;
		overflow: hidden;
		padding: 38px 5%;
		background:
			radial-gradient(circle at 8% 12%, rgba(178, 211, 232, 0.45), transparent 27%),
			radial-gradient(circle at 92% 80%, rgba(238, 218, 169, 0.35), transparent 25%),
			var(--page);
		color: var(--ink);
		font-family: 'DM Sans', sans-serif;
		transition: background 0.5s ease, color 0.5s ease;
	}

	.portfolio-shell.dark {
		--page: #101f33;
		--panel: rgba(26, 46, 69, 0.88);
		--card: rgba(34, 57, 82, 0.88);
		--ink: #edf3fb;
		--blue: #9fc4e9;
		--blue-deep: #c5dcf4;
		--muted: #a9bbcf;
		--gold: #edcb70;
		--line: #38516d;
		--soft-blue: #243e5b;
		--input: #172d46;
	}

	.portfolio-shell a {
		color: inherit;
		text-decoration: none;
	}

	/* BACKGROUND STARS */
	.star-field {
		position: absolute;
		inset: 0;
		overflow: hidden;
		pointer-events: none;
	}

	.star {
		position: absolute;
		color: var(--gold);
		opacity: 0.5;
		animation: twinkle 4s ease-in-out infinite;
	}

	.star-1 { top: 8%; left: 20%; font-size: 16px; animation-delay: 0s; }
	.star-2 { top: 18%; left: 75%; font-size: 20px; animation-delay: 1.2s; }
	.star-3 { top: 35%; left: 5%; font-size: 14px; animation-delay: 2s; }
	.star-4 { top: 52%; left: 90%; font-size: 18px; animation-delay: 0.8s; }
	.star-5 { top: 72%; left: 15%; font-size: 22px; animation-delay: 1.7s; }
	.star-6 { top: 88%; left: 82%; font-size: 16px; animation-delay: 2.5s; }
	.star-7 { top: 12%; left: 48%; font-size: 13px; animation-delay: 1.1s; }
	.star-8 { top: 62%; left: 52%; font-size: 17px; animation-delay: 2.8s; }
	.star-9 { top: 92%; left: 35%; font-size: 14px; animation-delay: 0.5s; }
	.star-10 { top: 42%; left: 72%; font-size: 21px; animation-delay: 1.9s; }
	.star-11 { top: 25%; left: 30%; font-size: 12px; animation-delay: 3s; }
	.star-12 { top: 78%; left: 68%; font-size: 18px; animation-delay: 0.3s; }

	@keyframes twinkle {
		0%, 100% { opacity: 0.25; transform: scale(0.85) rotate(0deg); }
		50% { opacity: 0.85; transform: scale(1.12) rotate(12deg); }
	}

	/* PAGE LAYOUT */
	.site-layout {
		position: relative;
		z-index: 1;
		display: grid;
		grid-template-columns: 66px minmax(0, 1fr);
		align-items: start;
		gap: 15px;
		max-width: 1440px;
		margin: 0 auto;
	}

	/* SIDEBAR */
	.sidebar {
		position: sticky;
		top: 28px;
		display: flex;
		height: fit-content;
		flex-direction: column;
		align-items: center;
		gap: 24px;
		border: 1px solid rgba(255, 255, 255, 0.85);
		border-radius: 38px;
		background: var(--panel);
		padding: 16px 10px;
		box-shadow: 0 12px 35px rgba(41, 73, 104, 0.07);
		backdrop-filter: blur(18px);
		-webkit-backdrop-filter: blur(18px);
		animation: sidebarEnter 0.8s ease both;
	}

	.sidebar-logo {
		display: flex;
		width: 38px;
		height: 38px;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		background: var(--blue-deep);
		color: white !important;
		font-family: 'Playfair Display', serif;
		font-size: 16px;
		font-weight: 700;
		transition: transform 0.4s ease, background 0.3s ease;
	}

	.sidebar-logo:hover {
		background: var(--gold);
		color: #263f5c !important;
		transform: rotate(12deg) scale(1.08);
	}

	.sidebar-nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 13px;
	}

	.sidebar-link {
		position: relative;
		display: flex;
		width: 42px;
		height: 42px;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		color: var(--muted) !important;
		transition: color 0.3s ease, background 0.3s ease, transform 0.3s ease;
	}

	.sidebar-link svg {
		width: 18px;
		height: 18px;
		transition: transform 0.35s ease;
	}

	.sidebar-link:hover {
		background: var(--soft-blue);
		color: var(--blue-deep) !important;
		transform: translateY(-3px);
	}

	.sidebar-link:hover svg {
		transform: scale(1.13);
	}

	.sidebar-link.active {
		background: var(--blue);
		color: white !important;
		box-shadow: 0 7px 17px rgba(71, 121, 166, 0.2);
	}

	.nav-tooltip {
		position: absolute;
		left: 52px;
		z-index: 10;
		border: 1px solid var(--line);
		border-radius: 8px;
		background: var(--panel);
		padding: 7px 11px;
		color: var(--ink);
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 0.5px;
		opacity: 0;
		pointer-events: none;
		transform: translateX(-5px);
		transition: all 0.25s ease;
		white-space: nowrap;
	}

	.sidebar-link:hover .nav-tooltip {
		opacity: 1;
		transform: translateX(0);
	}

	.sidebar-bottom {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;
		padding-top: 2px;
	}

	.sidebar-sparkle {
		color: var(--gold);
		font-size: 19px;
		animation: gentleSpin 12s linear infinite;
	}

	.sidebar-year {
		color: var(--muted);
		font-size: 10px;
		letter-spacing: 1px;
	}

	/* MAIN PANEL */
	.main-panel {
		min-width: 0;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.9);
		border-radius: 34px;
		background: var(--panel);
		box-shadow: 0 20px 55px rgba(41, 73, 104, 0.07);
		backdrop-filter: blur(18px);
		-webkit-backdrop-filter: blur(18px);
		animation: panelEnter 0.9s ease both;
	}

	/* HOME */
	.home-section {
		position: relative;
		padding: 35px 5.2% 25px;
	}

	.topline {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
		animation: fadeUp 0.8s 0.15s both;
	}

	.availability {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		border-radius: 30px;
		background: var(--card);
		padding: 10px 15px;
		color: var(--muted);
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 1.3px;
	}

	.availability-dot {
		width: 7px;
		height: 7px;
		flex-shrink: 0;
		border-radius: 50%;
		background: #78b394;
		box-shadow: 0 0 0 4px rgba(120, 179, 148, 0.14);
	}

	.topline-right {
		display: flex;
		align-items: center;
		gap: 15px;
		color: var(--muted);
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 1.3px;
	}

	.topline-star {
		color: var(--gold);
		font-size: 20px;
		animation: gentleSpin 14s linear infinite;
	}

	.theme-button {
		display: flex;
		width: 38px;
		height: 38px;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--line);
		border-radius: 50%;
		background: var(--card);
		color: var(--blue);
		cursor: pointer;
		transition: background 0.3s ease, color 0.3s ease, transform 0.35s ease;
	}

	.theme-button:hover {
		border-color: var(--gold);
		background: var(--gold);
		color: #263f5c;
		transform: rotate(18deg) scale(1.08);
	}

	.theme-icon {
		width: 18px;
		height: 18px;
		animation: iconPop 0.4s ease both;
	}

	/* HERO */
	.hero-layout {
		display: grid;
		grid-template-columns: 1.08fr 0.92fr;
		align-items: center;
		gap: 45px;
		margin-top: 45px;
	}

	.hero-copy {
		animation: fadeUp 0.9s 0.25s both;
	}

	.eyebrow {
		color: var(--blue);
		font-size: 9px;
		font-weight: 700;
		letter-spacing: 2px;
		line-height: 1.8;
	}

	.hero-title {
		margin-top: 18px;
		color: var(--ink);
		font-family: 'Playfair Display', serif;
		font-size: clamp(65px, 8vw, 112px);
		font-weight: 600;
		letter-spacing: -6px;
		line-height: 1.05;
	}

	.hero-title span,
	.section-title span {
		color: var(--gold);
	}

	.hero-subtitle {
		margin-top: 8px;
		color: var(--blue);
		font-family: 'Cormorant Garamond', serif;
		font-size: clamp(21px, 2.5vw, 27px);
		font-style: italic;
	}

	.hero-description {
		max-width: 570px;
		margin-top: 22px;
		color: var(--muted);
		font-size: 17px;
		line-height: 2.1;
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 27px;
	}

	.main-button,
	.outline-button {
		display: inline-flex;
		min-height: 44px;
		align-items: center;
		justify-content: center;
		gap: 13px;
		border-radius: 30px;
		padding: 12px 20px;
		font-size: 15px;
		font-weight: 700;
		transition: all 0.3s ease;
	}

	.main-button {
		border: 1px solid var(--blue);
		background: var(--blue);
		color: white !important;
		box-shadow: 0 8px 20px rgba(71, 121, 166, 0.2);
		cursor: pointer;
	}

	.main-button:hover {
		border-color: var(--gold);
		background: var(--gold);
		color: #263f5c !important;
		box-shadow: 0 10px 25px rgba(217, 183, 95, 0.2);
		transform: translateY(-4px);
	}

	.main-button span {
		transition: transform 0.3s ease;
	}

	.main-button:hover span {
		transform: translate(3px, -3px);
	}

	.outline-button {
		border: 1px solid var(--line);
		background: transparent;
		color: var(--ink) !important;
	}

	.outline-button:hover {
		border-color: var(--gold);
		background: var(--card);
		transform: translateY(-4px);
	}

	/* ABSTRACT HERO ART */
	.hero-art {
		position: relative;
    display: flex;
    min-height: 310px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 1px solid rgba(41, 73, 104, 0.15);
    border-radius: 27px;
    background:
        radial-gradient(circle at 78% 75%, #ffda69 0%, transparent 38%),
        linear-gradient(135deg, #78b5e2 0%, #b8d9ed 48%, #f5d98e 100%);
    box-shadow: 0 15px 35px rgba(41, 73, 104, 0.13);
    animation: fadeUp 1s 0.4s both, artFloat 7s ease-in-out infinite;
}

	.dark .hero-art {
		background:
			radial-gradient(circle at 75% 75%, rgba(186, 151, 83, 0.4), transparent 38%),
			linear-gradient(135deg, #284a6b, #1e3b58 55%, #5b523e);
	}

	.art-label {
		position: absolute;
		z-index: 4;
		color: rgba(41, 73, 104, 0.7);
		font-size: 7px;
		font-weight: 700;
		letter-spacing: 1.5px;
	}

	.dark .art-label {
		color: rgba(237, 243, 251, 0.7);
	}

	.art-label-top {
		top: 22px;
		left: 23px;
	}

	.art-label-bottom {
		right: 22px;
		bottom: 20px;
		left: 22px;
		display: flex;
		justify-content: space-between;
	}

	.art-orbit {
		position: absolute;
		width: 68%;
		height: 75%;
		border: 1px solid rgba(255, 255, 255, 0.8);
		border-radius: 50%;
	}

	.orbit-one {
		transform: rotate(-28deg);
		animation: orbitTurn 22s linear infinite;
	}

	.orbit-two {
		width: 46%;
		height: 95%;
		transform: rotate(35deg);
		animation: orbitTurn 27s linear infinite reverse;
	}

	.orbit-three {
		width: 85%;
		height: 48%;
		transform: rotate(48deg);
	}

	.art-sun {
		position: absolute;
		top: 17%;
		right: 17%;
		width: 75px;
		height: 75px;
		border-radius: 50%;
		background: rgba(255, 239, 199, 0.8);
		box-shadow: 0 0 40px rgba(255, 239, 199, 0.4);
		animation: sunPulse 5s ease-in-out infinite;
	}

	.art-core {
		position: relative;
		z-index: 2;
		display: flex;
		width: 155px;
		height: 155px;
		align-items: center;
		justify-content: center;
		border: 1px solid rgba(255, 255, 255, 0.75);
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.26);
		box-shadow: 0 15px 35px rgba(41, 73, 104, 0.1), inset 0 0 25px rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(6px);
		animation: coreFloat 5s ease-in-out infinite;
	}

	.art-core-shape {
		width: 75px;
		height: 105px;
		border: 1px solid rgba(255, 255, 255, 0.95);
		border-radius: 40px 40px 16px 16px;
		background: linear-gradient(145deg, rgba(255,255,255,0.5), rgba(255,255,255,0.08));
		transform: rotate(35deg);
	}

	.art-star {
		position: absolute;
		z-index: 3;
		color: white;
		text-shadow: 0 0 12px rgba(255, 255, 255, 0.9);
		animation: twinkle 3.5s ease-in-out infinite;
	}

	.art-star-one { top: 20%; left: 20%; font-size: 19px; }
	.art-star-two { right: 20%; bottom: 24%; font-size: 24px; animation-delay: 1s; }
	.art-star-three { bottom: 20%; left: 28%; font-size: 15px; animation-delay: 2s; }

	/* QUICK LINKS */
	.quick-links {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 13px;
		margin-top: 35px;
		animation: fadeUp 0.9s 0.55s both;
	}

	.quick-card {
		position: relative;
		display: flex;
		min-height: 125px;
		flex-direction: column;
		align-items: flex-start;
		border: 1px solid rgba(255, 255, 255, 0.85);
		border-radius: 19px;
		background: var(--card);
		padding: 17px 19px;
		transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
	}

	.quick-card:hover {
		border-color: var(--gold);
		box-shadow: 0 12px 25px rgba(41, 73, 104, 0.08);
		transform: translateY(-6px);
	}

	.quick-icon {
		color: var(--gold);
		font-size: 21px;
	}

	.quick-arrow {
		position: absolute;
		top: 18px;
		right: 18px;
		color: var(--blue);
		font-size: 16px;
		transition: transform 0.3s ease;
	}

	.quick-card:hover .quick-arrow {
		transform: translate(3px, -3px);
	}

	.quick-overline {
		margin-top: 13px;
		color: var(--muted);
		font-size: 9px;
		font-weight: 700;
		letter-spacing: 1.4px;
	}

	.quick-card strong {
		margin-top: 5px;
		color: var(--ink);
		font-family: 'Playfair Display', serif;
		font-size: 20px;
		font-weight: 600;
	}

	.quick-description {
		margin-top: 4px;
		color: var(--muted);
		font-size: 18px;
	}

	.home-bottom-line {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		margin-top: 25px;
		border-top: 1px solid var(--line);
		padding-top: 15px;
		color: var(--muted);
		font-size: 7px;
		font-weight: 700;
		letter-spacing: 1.5px;
	}

	.home-bottom-line span:nth-child(2) {
		color: var(--gold);
		font-size: 13px;
	}

	/* GENERAL SECTIONS */
	.content-section {
		position: relative;
		border-top: 1px solid var(--line);
		padding: 75px 5.2%;
	}

	.section-heading {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 30px;
	}

	.script-label {
		margin-top: 12px;
		color: #a58b58;
		font-family: 'Cormorant Garamond', serif;
		font-size: 20px;
		font-style: italic;
	}

	.section-title {
		margin-top: 4px;
		color: var(--ink);
		font-family: 'Playfair Display', serif;
		font-size: clamp(42px, 5vw, 62px);
		font-weight: 500;
		letter-spacing: -2px;
		line-height: 1.15;
	}

	.section-intro {
		max-width: 310px;
		padding-bottom: 7px;
		color: var(--muted);
		font-size: 11px;
		line-height: 2;
	}

	/* BOOKS */
	.books-section {
		background: linear-gradient(135deg, rgba(220, 233, 241, 0.25), transparent 65%);
	}

	.dark .books-section {
		background: linear-gradient(135deg, rgba(47, 78, 109, 0.2), transparent 65%);
	}

	.books-divider {
		display: flex;
		align-items: center;
		gap: 16px;
		margin-top: 32px;
		border-top: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
		padding: 13px 0;
		color: var(--muted);
		font-size: 8px;
		font-weight: 700;
		letter-spacing: 1.5px;
	}

	.books-divider span:nth-child(2) {
		color: var(--gold);
		font-size: 14px;
	}

	.book-carousel {
		position: relative;
		display: flex;
		align-items: center;
		gap: 15px;
		margin-top: 32px;
	}

	.book-viewport {
		width: 100%;
		overflow: hidden;
		border: 1px solid var(--line);
		border-radius: 24px;
		background: var(--card);
	}

	.book-track {
		display: flex;
		width: 100%;
		transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.book-slide {
		display: grid;
		min-width: 100%;
		grid-template-columns: 0.85fr 1.15fr;
		align-items: center;
		gap: 55px;
		padding: 38px 9%;
	}

	.book-cover-area {
		position: relative;
		display: flex;
		min-height: 320px;
		align-items: center;
		justify-content: center;
		perspective: 1000px;
	}

	.book-cover {
		position: relative;
		z-index: 1;
		width: 190px;
		height: 275px;
		overflow: hidden;
		border: 5px solid rgba(255,255,255,0.65);
		border-radius: 5px 12px 12px 5px;
		background: linear-gradient(145deg, #9bb9d0, #e4d8b8);
		box-shadow: 12px 16px 28px rgba(25, 48, 72, 0.2), inset 5px 0 8px rgba(0,0,0,0.1);
		transform: rotate(-4deg);
		transition: transform 0.5s ease, box-shadow 0.5s ease;
	}

	.book-slide:hover .book-cover {
		box-shadow: 18px 20px 34px rgba(25, 48, 72, 0.24);
		transform: rotate(0deg) translateY(-7px);
	}

	.cover-one { background: linear-gradient(145deg, #b9d1e1, #e9d8b8); }
	.cover-two { background: linear-gradient(145deg, #d8c4dc, #e9d5c8); }
	.cover-three { background: linear-gradient(145deg, #a9c7bc, #e6d7b5); }

	.cover-placeholder {
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: 16px 12px;
		color: #294968;
		text-align: center;
	}

	.cover-number {
		align-self: flex-start;
		font-size: 8px;
		font-weight: 700;
		letter-spacing: 2px;
	}

	.cover-placeholder-art {
		position: relative;
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-around;
		color: rgba(41, 73, 104, 0.75);
		font-size: 22px;
	}

	.cover-circle {
		width: 80px;
		height: 80px;
		border: 1px solid rgba(41, 73, 104, 0.5);
		border-radius: 50%;
		box-shadow: 0 0 0 10px rgba(255,255,255,0.15), 0 0 0 20px rgba(255,255,255,0.1);
	}

	.cover-small-text,
	.cover-bottom-text {
		font-size: 6px;
		font-weight: 700;
		letter-spacing: 1.2px;
	}

	.cover-placeholder strong {
		font-family: 'Playfair Display', serif;
		font-size: 21px;
		font-weight: 600;
		letter-spacing: 1px;
		line-height: 1.2;
	}

	.book-shadow {
		position: absolute;
		bottom: 13px;
		width: 180px;
		height: 15px;
		border-radius: 50%;
		background: rgba(35, 57, 79, 0.18);
		filter: blur(10px);
	}

	.book-information {
		max-width: 430px;
	}

	.book-information h3 {
		margin-top: 14px;
		color: var(--ink);
		font-family: 'Playfair Display', serif;
		font-size: clamp(27px, 3.5vw, 42px);
		font-weight: 500;
	}

	.book-information > p:not(.eyebrow) {
		margin-top: 13px;
		color: var(--muted);
		font-size: 12px;
		line-height: 2;
	}

	.book-note {
		display: inline-block;
		margin-top: 27px;
		border-left: 2px solid var(--gold);
		padding-left: 12px;
		color: var(--blue);
		font-size: 8px;
		font-weight: 700;
		letter-spacing: 1.3px;
	}

	.carousel-arrow {
		position: relative;
		z-index: 2;
		display: flex;
		width: 40px;
		height: 40px;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--line);
		border-radius: 50%;
		background: var(--card);
		color: var(--blue);
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.carousel-arrow svg {
		width: 18px;
		height: 18px;
	}

	.carousel-arrow:hover {
		border-color: var(--gold);
		background: var(--gold);
		color: #263f5c;
		transform: scale(1.08);
	}

	.carousel-controls {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 20px;
	}

	.carousel-dots {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.carousel-dot {
		width: 7px;
		height: 7px;
		border: 0;
		border-radius: 20px;
		background: var(--line);
		cursor: pointer;
		transition: all 0.35s ease;
	}

	.carousel-dot.current {
		width: 27px;
		background: var(--gold);
	}

	.carousel-count {
		color: var(--muted);
		font-size: 9px;
		font-weight: 700;
		letter-spacing: 1px;
	}

	.carousel-count span {
		color: var(--blue);
	}

	.books-footer-note {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 14px;
		margin-top: 35px;
		color: var(--muted);
		font-family: 'Cormorant Garamond', serif;
		font-size: 18px;
		font-style: italic;
	}

	.books-footer-note span {
		color: var(--gold);
	}

	/* ABOUT */
	.about-section {
		background: linear-gradient(135deg, rgba(220, 233, 241, 0.3), transparent 75%);
	}

	.dark .about-section {
		background: linear-gradient(135deg, rgba(47, 78, 109, 0.22), transparent 75%);
	}

	.about-layout {
		display: grid;
		grid-template-columns: 0.85fr 1.15fr;
		align-items: center;
		gap: 65px;
		margin-top: 45px;
	}

	.about-photo-frame {
		position: relative;
		padding: 0 13px 13px 0;
	}

	.about-photo-frame::after {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 70%;
		height: 70%;
		border-right: 2px solid var(--gold);
		border-bottom: 2px solid var(--gold);
		content: '';
		pointer-events: none;
	}

	.about-photo {
		position: relative;
		z-index: 1;
		display: block;
		width: 100%;
		height: 420px;
		border: 7px solid var(--card);
		border-radius: 5px;
		object-fit: cover;
		box-shadow: 0 15px 35px rgba(41, 73, 104, 0.12);
		transition: transform 0.5s ease;
	}

	.about-photo:hover {
		transform: translateY(-5px) rotate(-0.5deg);
	}

	.photo-label {
		position: absolute;
		z-index: 2;
		right: 25px;
		bottom: 25px;
		background: var(--panel);
		padding: 9px 12px;
		color: var(--blue);
		font-size: 7px;
		font-weight: 700;
		letter-spacing: 1.2px;
	}

	.photo-signature {
		margin-top: 17px;
		color: #a58b58;
		font-family: 'Cormorant Garamond', serif;
		font-size: 21px;
		font-style: italic;
	}

	.about-details {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.about-bio {
		color: var(--muted);
		font-family: 'Cormorant Garamond', serif;
		font-size: 23px;
		line-height: 1.65;
	}

	.about-facts {
		border-top: 1px solid var(--line);
	}

	.fact-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 15px;
		border-bottom: 1px solid var(--line);
		padding: 14px 0;
	}

	.fact-row span {
		color: var(--muted);
		font-size: 8px;
		font-weight: 700;
		letter-spacing: 1.2px;
	}

	.fact-row strong {
		color: var(--ink);
		font-size: 11px;
		text-align: right;
	}

	.skills-list {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-top: 12px;
	}

	.skill-tag {
		border: 1px solid var(--line);
		border-radius: 20px;
		background: var(--card);
		padding: 9px 13px;
		color: var(--blue);
		font-size: 9px;
		transition: all 0.3s ease;
	}

	.skill-tag:hover {
		border-color: var(--gold);
		background: var(--gold);
		color: #263f5c;
		transform: translateY(-3px);
	}

	.about-quote {
		display: flex;
		align-items: center;
		gap: 12px;
		border-left: 2px solid var(--gold);
		background: var(--card);
		padding: 13px 17px;
	}

	.about-quote span {
		color: var(--gold);
		font-family: 'Playfair Display', serif;
		font-size: 38px;
		line-height: 1;
	}

	.about-quote p {
		color: var(--muted);
		font-family: 'Cormorant Garamond', serif;
		font-size: 19px;
		font-style: italic;
	}

	/* CONTACT */
	.contact-section {
		background: linear-gradient(135deg, rgba(238, 225, 192, 0.16), transparent 65%);
	}

	.dark .contact-section {
		background: linear-gradient(135deg, rgba(114, 95, 57, 0.12), transparent 65%);
	}

	.contact-layout {
		display: grid;
		grid-template-columns: 1fr 0.9fr;
		align-items: start;
		gap: 60px;
		margin-top: 42px;
	}

	.contact-copy h3 {
		color: var(--ink);
		font-family: 'Playfair Display', serif;
		font-size: clamp(31px, 4vw, 47px);
		font-weight: 500;
		line-height: 1.25;
	}

	.contact-copy > p {
		max-width: 400px;
		margin-top: 18px;
		color: var(--muted);
		font-size: 12px;
		line-height: 2;
	}

	.contact-status {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		margin-top: 25px;
		border: 1px solid var(--line);
		border-radius: 25px;
		background: var(--card);
		padding: 12px 16px;
		color: var(--blue);
		font-size: 8px;
		font-weight: 700;
		letter-spacing: 1.2px;
	}

	.contact-big-star {
		margin-top: 40px;
		color: var(--gold);
		font-size: 68px;
		animation: gentleSpin 18s linear infinite;
		transform-origin: 35px 35px;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 18px;
		border: 1px solid var(--line);
		border-radius: 20px;
		background: var(--card);
		padding: 25px;
		box-shadow: 0 12px 30px rgba(41, 73, 104, 0.05);
		transition: transform 0.35s ease, box-shadow 0.35s ease;
	}

	.contact-form:hover {
		box-shadow: 0 17px 35px rgba(41, 73, 104, 0.1);
		transform: translateY(-4px);
	}

	.form-heading {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid var(--line);
		padding-bottom: 15px;
	}

	.form-heading > span {
		color: var(--gold);
		font-size: 21px;
	}

	.form-field {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.form-field > span {
		color: var(--blue);
		font-size: 8px;
		font-weight: 700;
		letter-spacing: 1.3px;
	}

	.form-field input,
	.form-field textarea {
		width: 100%;
		border: 1px solid var(--line);
		border-radius: 9px;
		background: var(--input);
		padding: 13px 14px;
		color: var(--ink);
		font-family: 'DM Sans', sans-serif;
		font-size: 11px;
		outline: none;
		transition: border 0.25s ease, box-shadow 0.25s ease;
	}

	.form-field input:focus,
	.form-field textarea:focus {
		border-color: var(--blue);
		box-shadow: 0 0 0 3px rgba(71, 121, 166, 0.1);
	}

	.form-field input::placeholder,
	.form-field textarea::placeholder {
		color: var(--muted);
		opacity: 0.75;
	}

	.form-field textarea {
		resize: vertical;
	}

	.send-button {
		width: 100%;
	}

	.send-button:disabled {
		cursor: wait;
		opacity: 0.6;
	}

	.form-success,
	.form-error {
		font-size: 11px;
	}

	.form-success { color: #63a17d; }
	.form-error { color: #d27676; }

	/* FOOTER */
	.footer {
		border-top: 1px solid var(--line);
		background: rgba(220, 230, 237, 0.25);
		padding: 35px 5.2% 22px;
	}

	.dark .footer {
		background: rgba(13, 29, 47, 0.25);
	}

	.footer-main {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 25px;
		padding-bottom: 28px;
	}

	.footer-logo {
		color: var(--ink);
		font-family: 'Playfair Display', serif;
		font-size: 35px;
		font-weight: 600;
		letter-spacing: -2px;
	}

	.footer-logo span {
		color: var(--gold);
	}

	.footer-main > div:first-child p {
		margin-top: 5px;
		color: var(--muted);
		font-family: 'Cormorant Garamond', serif;
		font-size: 16px;
		font-style: italic;
	}

	.footer-links {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}

	.footer-links a {
		color: var(--muted);
		font-size: 8px;
		font-weight: 700;
		letter-spacing: 1.2px;
		transition: color 0.25s ease;
	}

	.footer-links a:hover {
		color: var(--gold);
	}

	.footer-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 15px;
		border-top: 1px solid var(--line);
		padding-top: 17px;
		color: var(--muted);
		font-size: 7px;
		font-weight: 700;
		letter-spacing: 1.2px;
	}

	.footer-bottom a {
		color: var(--blue);
		transition: color 0.25s ease;
	}

	.footer-bottom a:hover {
		color: var(--gold);
	}

	/* FLOATING TOP */
	.floating-top {
		position: fixed;
		z-index: 20;
		right: 25px;
		bottom: 23px;
		display: flex;
		width: 42px;
		height: 42px;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--gold);
		border-radius: 50%;
		background: var(--panel);
		color: var(--blue) !important;
		font-size: 21px;
		box-shadow: 0 7px 18px rgba(41, 73, 104, 0.12);
		transition: all 0.3s ease;
	}

	.floating-top:hover {
		background: var(--gold);
		color: #263f5c !important;
		transform: translateY(-5px);
	}

	/* ANIMATIONS */
	@keyframes fadeUp {
		from { opacity: 0; transform: translateY(20px); }
		to { opacity: 1; transform: translateY(0); }
	}

	@keyframes sidebarEnter {
		from { opacity: 0; transform: translateX(-15px); }
		to { opacity: 1; transform: translateX(0); }
	}

	@keyframes panelEnter {
		from { opacity: 0; transform: translateY(15px); }
		to { opacity: 1; transform: translateY(0); }
	}

	@keyframes gentleSpin {
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	}

	@keyframes iconPop {
		from { opacity: 0; transform: scale(0.65) rotate(-25deg); }
		to { opacity: 1; transform: scale(1) rotate(0); }
	}

	@keyframes artFloat {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-7px); }
	}

	@keyframes coreFloat {
		0%, 100% { transform: translateY(0) rotate(-3deg); }
		50% { transform: translateY(-9px) rotate(3deg); }
	}

	@keyframes orbitTurn {
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	}

	@keyframes sunPulse {
		0%, 100% { transform: scale(1); opacity: 0.8; }
		50% { transform: scale(1.08); opacity: 1; }
	}

	/* TABLET */
	@media (max-width: 950px) {
		.portfolio-shell {
			padding: 22px 3%;
		}

		.site-layout {
			grid-template-columns: 58px minmax(0, 1fr);
			gap: 10px;
		}

		.hero-layout {
			gap: 25px;
		}

		.hero-art {
			min-height: 270px;
		}

		.book-slide {
			gap: 25px;
			padding-right: 6%;
			padding-left: 6%;
		}

		.about-layout {
			gap: 35px;
		}

		.contact-layout {
			gap: 30px;
		}
	}

	/* MOBILE */
	@media (max-width: 650px) {
		.portfolio-shell {
			padding: 12px;
		}

		.site-layout {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}

		.sidebar {
			position: sticky;
			top: 8px;
			z-index: 30;
			width: 100%;
			height: auto;
			flex-direction: row;
			justify-content: space-between;
			border-radius: 25px;
			padding: 9px 13px;
		}

		.sidebar-nav {
			flex-direction: row;
			gap: 5px;
		}

		.sidebar-link {
			width: 37px;
			height: 37px;
		}

		.sidebar-logo {
			width: 35px;
			height: 35px;
		}

		.sidebar-bottom {
			flex-direction: row;
			gap: 4px;
		}

		.nav-tooltip {
			display: none;
		}

		.main-panel {
			width: 100%;
			border-radius: 25px;
		}

		.home-section {
			padding: 24px 6% 20px;
		}

		.topline {
			align-items: flex-start;
		}

		.availability {
			padding: 9px 11px;
			font-size: 7px;
		}

		.topline-right {
			gap: 8px;
			font-size: 7px;
		}

		.topline-right > span:first-child,
		.topline-right > span:nth-child(2) {
			display: none;
		}

		.theme-button {
			width: 34px;
			height: 34px;
		}

		.hero-layout {
			grid-template-columns: 1fr;
			gap: 28px;
			margin-top: 35px;
		}

		.hero-title {
			font-size: clamp(65px, 17vw, 90px);
			letter-spacing: -4px;
		}

		.hero-description {
			font-size: 11px;
		}

		.hero-art {
			min-height: 245px;
		}

		.quick-links {
			grid-template-columns: 1fr;
			gap: 9px;
			margin-top: 24px;
		}

		.quick-card {
			min-height: 105px;
		}

		.home-bottom-line {
			font-size: 6px;
			letter-spacing: 0.8px;
		}

		.content-section {
			padding: 55px 6%;
		}

		.section-heading {
			align-items: flex-start;
			flex-direction: column;
			gap: 13px;
		}

		.section-title {
			font-size: 43px;
		}

		.section-intro {
			font-size: 11px;
		}

		.books-divider {
			gap: 9px;
			font-size: 6px;
			letter-spacing: 0.8px;
		}

		.book-carousel {
			gap: 7px;
		}

		.carousel-arrow {
			width: 31px;
			height: 31px;
		}

		.carousel-arrow svg {
			width: 15px;
			height: 15px;
		}

		.book-slide {
			grid-template-columns: 1fr;
			gap: 18px;
			padding: 25px 18px;
		}

		.book-cover-area {
			min-height: 250px;
		}

		.book-cover {
			width: 155px;
			height: 225px;
		}

		.cover-placeholder strong {
			font-size: 18px;
		}

		.book-information {
			text-align: center;
		}

		.book-information h3 {
			font-size: 27px;
		}

		.book-note {
			margin-top: 17px;
		}

		.books-footer-note {
			font-size: 15px;
			text-align: center;
		}

		.about-layout {
			grid-template-columns: 1fr;
			gap: 35px;
			margin-top: 30px;
		}

		.about-photo {
			height: 350px;
		}

		.about-bio {
			font-size: 21px;
		}

		.contact-layout {
			grid-template-columns: 1fr;
			gap: 30px;
		}

		.contact-copy h3 {
			font-size: 34px;
		}

		.contact-big-star {
			margin-top: 18px;
			font-size: 48px;
		}

		.contact-form {
			padding: 20px;
		}

		.footer {
			padding: 28px 6% 20px;
		}

		.footer-main {
			align-items: flex-start;
			flex-direction: column;
		}

		.footer-links {
			gap: 14px;
		}

		.footer-bottom {
			align-items: flex-start;
			flex-direction: column;
		}

		.floating-top {
			right: 17px;
			bottom: 17px;
			width: 38px;
			height: 38px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		:global(html) {
			scroll-behavior: auto;
		}

		* {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
		}
	}
	/* ALENYA TWINKLING STARS */

/* ELEGANT SPARKLE */
.twinkle-star {
    position: fixed;
    z-index: 5;
    width: 50px;
    height: 50px;
    pointer-events: none;
    background: #e9c66f;
    clip-path: polygon(
        50% 0%,
        62% 38%,
        100% 50%,
        62% 62%,
        50% 100%,
        38% 62%,
        0% 50%,
        38% 38%
    );
    animation: sparkleGlow 3s ease-in-out infinite;
}

.sparkle-one {
    top: 15%;
    left: 8%;
}

.sparkle-two {
    top: 28%;
    right: 12%;
    animation-delay: 0.8s;
    transform: scale(0.7);
}

.sparkle-three {
    top: 55%;
    left: 5%;
    animation-delay: 1.4s;
    transform: scale(0.6);
}

.sparkle-four {
    top: 75%;
    right: 8%;
    animation-delay: 0.5s;
}

.sparkle-five {
    top: 90%;
    left: 48%;
    animation-delay: 1.8s;
    transform: scale(0.7);
}

@keyframes sparkleGlow {
    0%, 100% {
        opacity: 0.15;
        filter: blur(1px);
        scale: 0.65;
    }

    50% {
        opacity: 0.9;
        filter: blur(0);
        scale: 1.2;
    }
}

@keyframes twinkle {
    0%, 100% {
        opacity: 0.2;
        transform: scale(0.7) rotate(0deg);
    }
    50% {
        opacity: 1;
        transform: scale(1.3) rotate(25deg);
    }
}

/* ===== ALENYA CUSTOM SPARKLE CURSOR ===== */

:global(*) {
    cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M16 1.5L19.8 11.8L30.5 16L19.8 20.2L16 30.5L12.2 20.2L1.5 16L12.2 11.8Z' fill='%23E9C66F' stroke='%233D7198' stroke-width='1.5'/%3E%3Ccircle cx='16' cy='16' r='2' fill='%23FFFFFF'/%3E%3C/svg%3E") 16 16, auto;
}
/* ===== ALENYA INTRO LOADING ===== */

.page-loader {
   position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 20px;
  box-sizing: border-box;
  background: #172d46;
  animation: loaderDisappear 4.5s ease forwards;
}

.loader-content {
      text-align: center;
  transform: translateY(-65px);
  animation: loaderAppear 1s ease both;
}

.loader-content h1 {
    margin: 12px 0 8px;
    color: #f0cb75;
    font-size: 38px;
    letter-spacing: 8px;
    font-weight: 600;
}

.loader-content p {
    color: #d7e5f2;
    font-size: 13px;
    letter-spacing: 1px;
}

.loader-sparkle {
    color: #f0cb75;
    font-size: 35px;
    animation: loaderSparkle 1.5s ease-in-out infinite;
}

.loader-line {
    width: 150px;
    height: 3px;
    margin: 28px auto 15px;
    overflow: hidden;
    border-radius: 20px;
    background: #38536d;
}

.loader-line span {
    display: block;
    width: 40%;
    height: 100%;
    border-radius: 20px;
    background: #f0cb75;
    animation: loaderProgress 1.8s ease-in-out infinite;
}

.loader-content small {
    color: #a9bfd2;
    font-size: 9px;
    letter-spacing: 2px;
}

@keyframes loaderSparkle {
    0%, 100% {
        transform: rotate(0deg) scale(0.8);
        opacity: 0.5;
    }
    50% {
        transform: rotate(45deg) scale(1.2);
        opacity: 1;
    }
}

@keyframes loaderProgress {
    from { transform: translateX(-100%); }
    to { transform: translateX(250%); }
}

@keyframes loaderAppear {
    from {
        opacity: 0;
        transform: translateY(15px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes loaderDisappear {
    0%, 70% {
        opacity: 1;
        visibility: visible;
    }
    99% {
        opacity: 0;
        visibility: visible;
    }
    100% {
        opacity: 0;
        visibility: hidden;
    }
}

.skills-description {
    color: var(--muted);
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
}

.skill-bars {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.skill-item {
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
}

.skill-info {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    font-weight: 500;
}

.skill-track {
    width: 100%;
    height: 9px;
    background: var(--border);
    border-radius: 20px;
    overflow: hidden;
}

.skill-fill {
    height: 100%;
    background: #5B8DEF;
    border-radius: 20px;
    transition: width 0.8s ease;
}

	</style>