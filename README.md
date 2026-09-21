# wisesleuth.com

**Wise Sleuth — a research club.** Gig work for senior citizens and for people coming out of prison: named people who dig — a company, a claim, a family history, a property, a public record — paid for the work under their own name, and the club's meetups to do it together. Always remote, all digital, an opinion never advice, for a fee. Built by Mark Nejmeh, 21 Sep 2026.

Runs on the [Gigapoo](https://gigapoo.com) engine (site key `wisesleuth`): the pages here load `https://gigapoo.com/gigs.js` and the engine at `api.gigapoo.com`. Nothing is hosted here but the pages.

- `index.html` — the club: events first, sleuths for hire, **request a sleuth by describing the scenario** (`data-scenario="1"`), join.
- `excons.html`, `hardknocks.html`, `seniors.html` — the three pages that say it expressly.
- `profile.html?id=` — a member's record: name, face, town, what they can do, jobs delivered, events held, every review as written.

Cloudflare Pages: preset None, build command blank, output `/`, branch `main`. Clean URLs: `/excons`, `/hardknocks`, `/seniors`, `/profile?id=`.
