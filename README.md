# wisesleuth.com

**Wise Sleuth — a research club.** Gig work for senior citizens and for people coming out of prison: named people who dig — a company, a claim, a family history, a property, a public record — paid for the work under their own name, and the club's meetups to do it together. Always remote, all digital, an opinion never advice, for a fee. Built by Mark Nejmeh, 21 Sep 2026.

Runs on the [Gigapoo](https://gigapoo.com) engine (site key `wisesleuth`): the pages here load `https://gigapoo.com/gigs.js` and the engine at `api.gigapoo.com`. Nothing is hosted here but the pages.

- `index.html` — the club: events first, sleuths for hire, **request a sleuth by describing the scenario** (`data-scenario="1"`), join.
- `excons.html`, `hardknocks.html`, `seniors.html` — the three pages that say it expressly.
- `profile.html?id=` — a member's record: name, face, town, what they can do, jobs delivered, events held, every review as written.
- `ws-icons.js` — the stick figures. One sprite, loaded as the first thing inside `<body>` on every page, so the signs are in the document before the page that uses them is parsed. A sign is used as `<svg class="pict"><use href="#i-seniors"/></svg>` inside a `.plate` (a coloured square) or a `.bullet` (a coloured disc), and takes that plate's colour. To add one: draw it on a 64×64 grid to the same grammar — one stroke weight, round caps, a filled head, `currentColor` — and add it to the list. `tools/icons.html` prints every sign at the three sizes the site uses.

Cloudflare Pages: preset None, build command blank, output `/`, branch `main`. Clean URLs: `/excons`, `/hardknocks`, `/seniors`, `/profile?id=`.


**21 Sep 2026, index-1b:** icon-driven like Warrant Wire: nine doors with an icon and a line; every paragraph moved to about.html (one section per door). His call: the site is too wordy; keep it simple for wise people to do things for not-so-street-smart people.

**23 Sep 2026, 2a — the stick figures:** his call: *the site is too wordy; it needs to be icon driven like street signs with stick figures.* So the sentences came off the home page and pictures took their place — nine doors are coloured plates with a stick figure and two or three words; the sixteen questions people bring are pictures on cards; the route and the three rules are pictures. The words that stayed are the ones that make the sale. What used to be written on the home page is on `/about`, one section per sign. The same treatment on `/excons`, `/seniors`, `/hardknocks`: the three rules are three pictures, the paragraphs are down to the sentences that say it. `/terms` stays in words on purpose.

**21 Sep 2026, index-1d — the look:** New York subway signage, in ws.css, on every page: black station signs, white Helvetica, coloured route bullets with a letter (W the site; R request, S sleuths, C club, J join, X ex-convicts, W seniors, H hard knocks, T shirt, ? how it works), and one yellow flashing bullet (!) LOOK HERE that opens the wall of questions people bring, each of which opens Request a sleuth with the topic picked. His call: icon driven, everything added under a flashing icon, an original and trusted look, to convert sales.
