# Style: Redakce („Kaňka“)

Vlastní styl pro prezentace redakce. Inspirováno přístupem [Ian Xiaohei Illustrations](https://github.com/helloianneo/ian-xiaohei-illustrations) (MIT, © Ian): bílý papír, roztřesená ručně kreslená linka, hodně prázdného místa, jedna stálá černá postavička, která dělá absurdní, ale logickou práci. Postavička a barvy jsou vlastní.

Použití: `--style redakce` (výchozí poměr 16:9).

## Stálá postavička: Kaňka

Inkoustová kaňka, která utekla z rukopisu. Proto patří do redakce.

```
RECURRING CHARACTER – "Kanka" (identical in every image):
A small solid-black ink blot creature: an irregular blob body with a few small splash droplets and one short drip at the bottom edge.
Two white dot eyes, nothing else on the face, blank deadpan serious expression.
Two thin black stick legs and two thin black stick arms.
Slightly uneven hand-drawn outline, filled solid black.
Size: small, roughly 1/6 of the image height.
Serious, quiet, a bit clumsy but not stupid – a deadpan office worker doing an absurd but logical job.
NOT cute, NOT a mascot, NOT a sticker, no clothes, no accessories, no sparkly eyes, no mouth.
```

**Pravidlo:** Kaňka vždy dělá hlavní akci obrázku. Když ji z obrázku vymažete a sdělení pořád funguje, je jen dekorace a prompt je potřeba přepsat.

## Gemini System Prompt

```
Generate one standalone 16:9 horizontal illustration for a presentation slide.

**Visual DNA**:
- Pure white background #FFFFFF. No paper texture, no beige, no gradients, no shadows, no noise.
- Minimalist black hand-drawn line art, thin pen lines, slightly wobbly, not vector-clean, no heavy outlines.
- Lots of empty white space: main subject takes 40–60% of the canvas, at least 35% stays blank.
- One image explains ONE idea through ONE absurd but logical physical metaphor, built from 1–2 low-tech objects (drawer, box, scale, funnel, ladder, well, pipe, old machine, rubber stamp, filing cabinet…).
- Feeling: a clever sketch drawn on white paper by an editor. Strange, but readable in one second.

**Color Palette (strict)**:
- Black: all line art, the character, objects.
- Accents only, used sparingly (max ~10% of the image, often just 1–3 small spots):
  - Magenta #b11e54 – problem, pressure, warning, overload
  - Green #98c452 – main path, direction arrows, solution, the good outcome
  - Blue #4072ad – knowledge, expertise, the valuable thing, inner state
- No other colors, no tints, no grey fills.

**ABSOLUTELY NO TEXT**:
- No letters, words, numbers, labels, captions, titles or signatures.
- Papers, books and screens carry only abstract squiggle lines.
- No symbols that read as text (§, @, %, $, #).
- Meaning is carried by colored arrows, marks and the metaphor itself; text lives on the slide.

**DO NOT**:
- No PPT infographic, formal flowchart, course slide, commercial vector illustration, flat corporate art.
- No cute mascot, no children's cartoon, no emoji style.
- No realistic UI, no tech dashboards.
- No frames, borders or title areas.
```

## Prompt šablona

```
[System Prompt výše]

[Popis Kaňky výše]

**Core idea**: [jedna věta: co má slide sdělit]
**Metaphor**: [fyzický děj + 1–2 obyčejné předměty]
**Kanka's action**: [co Kaňka dělá – musí nést sdělení]
**Accent use**: [která barva na co, max 3 místa]
**Composition**: [kde je scéna; která strana zůstává volná pro text slidu]
```

## Kontrola po vygenerování

| Projde | Nevyhovuje → přegenerovat |
|---|---|
| Kaňka dělá hlavní akci | Kaňka jen stojí vedle |
| Na první pohled „trochu divné“, za sekundu jasné | Vypadá jako slide z PowerPointu nebo jako schéma |
| Žádný text ani čísla | Objevila se písmena, čísla, popisky |
| Max 3 barevné akcenty | Barvy navíc, šedé plochy, stíny |
| ≥ 35 % prázdného místa | Přeplněný obrázek |
| Kaňka je vážná | Je roztomilá, má pusu nebo velké lesklé oči |
