# Interaktiv jobbsøknad for Emonkey

En én-sides interaktiv CV som demonstrerer hvordan jeg jobber med integrasjoner, automatisering og kundeopplevelser. Du kan utforske tre seksjoner («Om meg», «Arbeidserfaring», «Prosjekt») i on-page modaler, og når alle tre er åpnet får du en AI-drevet, personlig PDF-analyse av din egen opplevelse!

---

## 🔗 Live Demo

Se siden live på GitHub Pages:\
[https://dittbrukernavn.github.io/emonkey-interaktiv-cv](https://dittbrukernavn.github.io/emonkey-interaktiv-cv)



## ✨ Funksjoner

- **On-page modaler**\
  Åpne «Om meg», «Arbeidserfaring» og «Prosjekt» uten å navigere bort fra forsiden.

- **Dynamisk knapp**\
  Knappen «Analyser resultat av ditt besøk» vises først når alle tre modaler er åpnet.

- **Event-tracking**\
  Registrerer hvilke seksjoner du har besøkt, og sender data via webhook til Make.com.

- **AI-drevet analyse & PDF**\
  Make.com + OpenAI API lager en personlig rapport basert på din interaksjon, og genererer en PDF du kan laste ned.



## 🛠 Teknologistack

- **Frontend:** HTML5, CSS3, JavaScript
- **Hosting:** GitHub Pages
- **Automatisering & Webhooks:** Make.com
- **AI-analyse:** OpenAI API (GPT-4)
- **PDF-generering:** Google Docs / Make.com PDF-modul



## 📁 Repository-struktur

```
emonkey-interaktiv-cv/
├─ README.md
├─ index.html
├─ style.css
├─ main.js
└─ assets/
   └─ logo.png
```



## 🚀 Komme i gang

1. **Klon repo**

   ```bash
   git clone https://github.com/dittbrukernavn/emonkey-interaktiv-cv.git
   cd emonkey-interaktiv-cv
   ```

2. **Åpne lokalt** Dobbeltklikk `index.html` eller kjør en enkel HTTP-server:

   ```bash
   npx http-server . -c-1
   ```

3. **Oppdater webhook** I `main.js`, bytt ut `https://hook.make.com/din-webhook-url` med din egen Make.com-webhook-URL.

4. **Push til GitHub**

   ```bash
   git add .
   git commit -m "Initial release"
   git push origin main
   ```

5. **Aktiver GitHub Pages** Gå til repo-innstillinger → Pages → velg `main` branch.



## ⚙️ Konfigurasjon

### Make.com-flow

1. Mottak av HTTP-webhook fra `main.js`.
2. Hent og bearbeid event-data → kall OpenAI API med prompt og session-data.
3. Opprett PDF-dokument via Google Docs-mal.
4. Returner nedlastingslenke i respons.

### OpenAI-prompt

```text
Analyser denne brukerens besøk:
Om meg=[true/false], Arbeidserfaring=[true/false], Prosjekt=[true/false].
Gi en oppsummering og interesse-score (%) basert på besøket.
```



## 🚧 Fremtidige forbedringer

- Finere event-tracking (hvilke underseksjoner i modaler).
- Visualisering av interesse-score med grafiske diagrammer.
- Sanntidsvarsling til Slack/Teams når analysen er klar.
- Legge til interaktiv quiz eller feedback-form for dypere innsikt.



## 📝 Forfatter

**[Ditt Navn]**\
Integrasjons- og supportkonsulent-kandidat

📧 [din.epost@domenet.no](mailto\:din.epost@domenet.no)\
🔗 [LinkedIn](https://www.linkedin.com/in/dittnavn) | [GitHub](https://github.com/dittbrukernavn)

> Takk for at du besøkte prosjektet mitt – jeg ser frem til å diskutere hvordan jeg kan bidra i Emonkey-teamet!

