/* BUILT 2026-09-23 · wisesleuth ws-icons 2a · THE PICTOGRAMS.
   HIS CALL, 23 Sep 2026: "the site is too wordy. It needs to be icon driven like street signs
   with stick figures." So: one sprite of stick-figure signs, drawn on a 64x64 grid to a single
   grammar — round caps, one stroke weight, a filled head, currentColor throughout, so a sign
   takes the colour of the plate it sits on. No page carries the drawings; every page carries
   this file, placed as the first thing inside <body>, and the sprite is in the document before
   the rest of the page is parsed.
   Used as:  <svg class="pict"><use href="#i-seniors"/></svg>
   Every sign still sits beside a word or two, so a page with the script blocked still reads. */
(function () {
  "use strict";

  /* a stick figure, standing: head at (32,13), spine, arms down-and-out, two legs.
     Every other figure in here is that one, moved or bent. */
  var S = [

    /* ── the ten doors ───────────────────────────────────────────── */

    /* LOOK HERE — an eye */
    ['look',
     '<path d="M4 32c8-12 17-18 28-18s20 6 28 18c-8 12-17 18-28 18S12 44 4 32z"/>' +
     '<circle cx="32" cy="32" r="8" fill="currentColor" stroke="none"/>'],

    /* request a sleuth — a person asking */
    ['request',
     '<circle cx="24" cy="14" r="6.5" fill="currentColor" stroke="none"/>' +
     '<path d="M24 21v18"/><path d="M13 34l11-7 10-10"/>' +
     '<path d="M24 39l-7 17M24 39l7 17"/>' +
     '<path d="M44 16a6.5 6.5 0 1 1 6.5 7.5V30"/>' +
     '<circle cx="50.5" cy="39" r="3" fill="currentColor" stroke="none"/>'],

    /* the sleuths — a person with the glass */
    ['sleuths',
     '<circle cx="22" cy="14" r="6.5" fill="currentColor" stroke="none"/>' +
     '<path d="M22 21v17"/><path d="M12 32l10-6 9 5"/>' +
     '<path d="M22 38l-6 18M22 38l6 18"/>' +
     '<circle cx="45" cy="26" r="11"/><path d="M53 34l7 8"/>'],

    /* the club meets — three of them */
    ['club',
     '<g stroke-width="4.5">' +
     '<circle cx="13" cy="20" r="5.5" fill="currentColor" stroke="none"/>' +
     '<path d="M13 26v12M7 33l6-4 5 3M13 38l-4 14M13 38l4 14"/>' +
     '<circle cx="51" cy="20" r="5.5" fill="currentColor" stroke="none"/>' +
     '<path d="M51 26v12M57 33l-6-4-5 3M51 38l-4 14M51 38l4 14"/>' +
     '<circle cx="32" cy="13" r="6.5" fill="currentColor" stroke="none"/>' +
     '<path d="M32 20v16M23 30l9-5 9 5M32 36l-6 18M32 36l6 18"/></g>'],

    /* join as a sleuth — a person and a plus */
    ['join',
     '<circle cx="21" cy="14" r="6.5" fill="currentColor" stroke="none"/>' +
     '<path d="M21 21v18M11 32l10-6 10 6M21 39l-7 17M21 39l7 17"/>' +
     '<path d="M48 22v20M38 32h20"/>'],

    /* for ex-convicts — walking out through the bars */
    ['excons',
     '<path d="M6 12v42M18 12v42M4 12h16M4 34h16"/>' +
     '<circle cx="42" cy="14" r="6.5" fill="currentColor" stroke="none"/>' +
     '<path d="M42 21l-2 17M32 32l9-6 10 6M40 38l-8 17M40 38l9 16"/>'],

    /* seniors with wisdom — the stick and the lean */
    ['seniors',
     '<circle cx="26" cy="14" r="6.5" fill="currentColor" stroke="none"/>' +
     '<path d="M26 21l2 18M16 32l10-6 12 6M28 39l-5 17M28 39l6 17"/>' +
     '<path d="M44 31v25M44 31a5 5 0 0 0-8 1"/>'],

    /* hard knocks — standing in the lightning */
    ['hard',
     '<circle cx="19" cy="15" r="6.5" fill="currentColor" stroke="none"/>' +
     '<path d="M19 22v17M10 32l9-5 9 5M19 39l-6 17M19 39l6 17"/>' +
     '<path d="M52 8L40 30h11L38 56"/>'],

    /* the shirt */
    ['shirt',
     '<path d="M24 8L10 16l6 12 6-4v28h20V24l6 4 6-12L40 8"/>' +
     '<path d="M24 8c0 5 3.6 9 8 9s8-4 8-9"/>'],

    /* how it works — the question, on a sign */
    ['how',
     '<circle cx="32" cy="32" r="26"/>' +
     '<path d="M24 25a8 8 0 1 1 8 9v4"/>' +
     '<circle cx="32" cy="46" r="3" fill="currentColor" stroke="none"/>'],

    /* ── the questions people bring ───────────────────────────────── */

    /* what is this company up to — a building */
    ['company',
     '<path d="M8 56V16l18-8v48"/><path d="M26 56V26h30v30"/><path d="M4 56h56"/>' +
     '<path d="M15 25v3M15 36v3M37 37h3M47 37h3M37 47h3M47 47h3"/>'],

    /* who is stealing — money, on its way out */
    ['steal',
     '<path d="M4 24h40v24H4z"/><circle cx="24" cy="36" r="6"/>' +
     '<path d="M48 22L60 10M60 10H50M60 10v10"/>'],

    /* sales up, profit down */
    ['profitdown',
     '<path d="M20 52V14M11 23l9-9 9 9"/>' +
     '<path d="M44 12v38M35 41l9 9 9-9"/>'],

    /* where are the tools going — the box */
    ['tools',
     '<path d="M8 24h48v28H8z"/><path d="M24 24v-8h16v8"/>' +
     '<path d="M8 36h48M32 30v12"/>'],

    /* which one cannot be trusted — two, and a cross over one */
    ['trust',
     '<g stroke-width="4.5">' +
     '<circle cx="17" cy="21" r="6" fill="currentColor" stroke="none"/>' +
     '<path d="M17 28v13M9 35l8-5 8 5M17 41l-5 15M17 41l5 15"/>' +
     '<circle cx="43" cy="21" r="6" fill="currentColor" stroke="none"/>' +
     '<path d="M43 28v13M35 35l8-5 8 5M43 41l-5 15M43 41l5 15"/>' +
     '<path d="M50 4l11 11M61 4L50 15"/></g>'],

    /* is the boss fair — the scales */
    ['boss',
     '<path d="M32 12v40M20 52h24"/><path d="M10 20h44"/><path d="M10 20v6M54 20v6"/>' +
     '<path d="M2 26h16a8 8 0 0 1-16 0z"/><path d="M46 26h16a8 8 0 0 1-16 0z"/>'],

    /* are they gaslighting me — words with a kink in them */
    ['gaslight',
     '<path d="M8 12h48v30H34L22 54V42H8z"/>' +
     '<path d="M35 19l-7 9h9l-7 9"/>'],

    /* should I marry them */
    ['love',
     '<path d="M32 54C20 44 6 33 6 22A14 14 0 0 1 32 16 14 14 0 0 1 58 22c0 11-14 22-26 32z"/>'],

    /* why wasn\'t I invited — the letter that never came */
    ['outside',
     '<path d="M4 14h38v26H4z"/><path d="M4 14l19 13 19-13"/>' +
     '<path d="M44 40l16 16M60 40L44 56"/>'],

    /* is that group a syndicate — who is tied to whom */
    ['network',
     /* the ring is drawn inside the heads, so the five read as five and not as one blob */
     '<g stroke-width="4">' +
     '<path d="M32 17L18 28l5 17h18l5-17z"/>' +
     '<circle cx="32" cy="11" r="6.5" fill="currentColor" stroke="none"/>' +
     '<circle cx="12" cy="26" r="6.5" fill="currentColor" stroke="none"/>' +
     '<circle cx="52" cy="26" r="6.5" fill="currentColor" stroke="none"/>' +
     '<circle cx="20" cy="52" r="6.5" fill="currentColor" stroke="none"/>' +
     '<circle cx="44" cy="52" r="6.5" fill="currentColor" stroke="none"/></g>'],

    /* will the coach play me */
    ['coach',
     '<path d="M8 24v14h10l18 12V12L18 24z"/>' +
     '<path d="M44 22a14 14 0 0 1 0 20"/><path d="M53 15a25 25 0 0 1 0 34"/>'],

    /* will I get the part */
    ['star',
     '<path d="M32 6l8 16 18 3-13 12 3 18-16-8-16 8 3-18L6 25l18-3z"/>'],

    /* should I stay with this team — the road forks */
    ['fork',
     '<path d="M32 58V36"/>' +
     '<path d="M32 36L14 15M14 15v10M14 15h10"/>' +
     '<path d="M32 36l18-21M50 15v10M50 15H40"/>'],

    /* where should I live */
    ['pin',
     '<path d="M32 58C32 58 50 38 50 26a18 18 0 1 0-36 0c0 12 18 32 18 32z"/>' +
     '<circle cx="32" cy="25" r="6" fill="currentColor" stroke="none"/>'],

    /* ── the route, question to answer ───────────────────────────── */

    ['pencil',
     '<path d="M10 54l3-12L41 14l9 9-28 28z"/><path d="M36 19l9 9"/>'],

    ['handsup',
     '<g stroke-width="4.5">' +
     '<circle cx="18" cy="22" r="6" fill="currentColor" stroke="none"/>' +
     '<path d="M18 29v12M10 26l8 5 8-12M18 41l-5 15M18 41l5 15"/>' +
     '<circle cx="46" cy="22" r="6" fill="currentColor" stroke="none"/>' +
     '<path d="M46 29v12M54 26l-8 5-8-12M46 41l-5 15M46 41l5 15"/></g>'],

    ['card',
     '<path d="M6 14h52v36H6z"/><path d="M6 25h52"/><path d="M15 40h13"/>'],

    ['doc',
     '<path d="M14 6h24l12 12v40H14z"/><path d="M38 6v12h12"/>' +
     '<path d="M22 32h20M22 43h14"/>'],

    /* ── the three rules, and the small print ────────────────────── */

    /* nobody is anonymous */
    ['id',
     '<path d="M6 14h52v36H6z"/>' +
     '<circle cx="22" cy="28" r="6" fill="currentColor" stroke="none"/>' +
     '<path d="M13 42c0-5 4-8 9-8s9 3 9 8"/><path d="M40 26h12M40 37h12"/>'],

    /* nothing is free */
    ['dollar',
     '<path d="M32 6v52"/>' +
     '<path d="M45 21c0-5-6-9-13-9s-13 4-13 9 6 8 13 10 13 5 13 10-6 9-13 9-13-4-13-9"/>'],

    /* everyone is reviewed */
    ['review',
     '<path d="M6 10h52v34H34L22 56V44H6z"/><path d="M18 21h28M18 32h20"/>'],

    /* held until delivered */
    ['lock',
     '<path d="M12 28h40v28H12z"/><path d="M20 28v-8a12 12 0 0 1 24 0v8"/>' +
     '<circle cx="32" cy="42" r="4" fill="currentColor" stroke="none"/>'],

    /* a person answers */
    ['phone',
     '<path d="M20 5h24v54H20z"/><path d="M20 15h24M20 47h24"/>' +
     '<path d="M28 10h8"/><circle cx="32" cy="53" r="3" fill="currentColor" stroke="none"/>'],

    /* home */
    ['home',
     '<path d="M7 31L32 9l25 22"/><path d="M14 27v28h36V27"/><path d="M25 55V38h14v17"/>']
  ];

  var out = '<svg xmlns="http://www.w3.org/2000/svg" class="ws-sprite" aria-hidden="true" focusable="false">';
  for (var i = 0; i < S.length; i++) {
    out += '<symbol id="i-' + S[i][0] + '" viewBox="0 0 64 64">' +
             '<g fill="none" stroke="currentColor" stroke-width="5" ' +
                'stroke-linecap="round" stroke-linejoin="round">' + S[i][1] + '</g>' +
           '</symbol>';
  }
  out += '</svg>';

  /* the script sits at the top of <body>, so the body is there to receive it and the signs
     are in the document before anything that uses them is parsed — no flash, no second file. */
  if (document.body) { document.body.insertAdjacentHTML('afterbegin', out); }
  else { document.addEventListener('DOMContentLoaded', function () {
           document.body.insertAdjacentHTML('afterbegin', out); }); }

  /* every sign on this site stands beside its own words, so a reader should hear the words
     once, not the picture as well. Marked here rather than on 200 tags in the pages. */
  document.addEventListener('DOMContentLoaded', function () {
    var p = document.querySelectorAll('svg.pict');
    for (var i = 0; i < p.length; i++) {
      p[i].setAttribute('aria-hidden', 'true');
      p[i].setAttribute('focusable', 'false');
    }
  });
})();
