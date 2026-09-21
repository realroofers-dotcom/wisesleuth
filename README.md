# wisesleuth.com

**Wise Sleuth — a research club.** Gig work for senior citizens and for people coming out of prison: named people who dig — a company, a claim, a family history, a property, a public record — paid for the work under their own name, and the club's meetups to do it together. Always remote, all digital, an opinion never advice, for a fee. Built by Mark Nejmeh, 21 Sep 2026.

Runs on the [Gigapoo](https://gigapoo.com) engine (site key `wisesleuth`): the pages here load `https://gigapoo.com/gigs.js` and the engine at `api.gigapoo.com`. Nothing is hosted here but the pages.

- `index.html` — the club: events first, sleuths for hire, **request a sleuth by describing the scenario** (`data-scenario="1"`), join.
- `excons.html`, `hardknocks.html`, `seniors.html` — the three pages that say it expressly.
- `profile.html?id=` — a member's record: name, face, town, what they can do, jobs delivered, events held, every review as written.

Cloudflare Pages: preset None, build command blank, output `/`, branch `main`. Clean URLs: `/excons`, `/hardknocks`, `/seniors`, `/profile?id=`.


**21 Sep 2026, index-1b:** icon-driven like Warrant Wire: nine doors with an icon and a line; every paragraph moved to about.html (one section per door). His call: the site is too wordy; keep it simple for wise people to do things for not-so-street-smart people.

**21 Sep 2026, index-1d — the look:** New York subway signage, in ws.css, on every page: black station signs, white Helvetica, coloured route bullets with a letter (W the site; R request, S sleuths, C club, J join, X ex-convicts, W seniors, H hard knocks, T shirt, ? how it works), and one yellow flashing bullet (!) LOOK HERE that opens the wall of questions people bring, each of which opens Request a sleuth with the topic picked. His call: icon driven, everything added under a flashing icon, an original and trusted look, to convert sales.
