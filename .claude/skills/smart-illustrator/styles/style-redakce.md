# Style: Redakce

Vlastní styl pro prezentace redakce. Černá linková kresba na bílém, jedna stálá postavička, tři akcentní barvy, žádný text v obrázku.

Použití: `--style redakce` (výchozí poměr 16:9).

## Stálá postavička

> ⚠️ NÁVRH – nahraďte vlastním popisem. Popis musí být v každém promptu doslova stejný, jinak se postavička mezi slidy mění.

```
THE CHARACTER (identical in every image):
A small, friendly editor drawn in simple continuous black ink line.
Oversized round head (about 1/3 of body height), two dot eyes, short curved line for mouth, no nose.
Short straight bob haircut with a blunt fringe, filled solid black.
Round thin-rimmed glasses.
Plain crew-neck sweater, simple trousers, flat shoes; body drawn with minimal lines, no shading.
Same proportions, haircut and glasses in every image.
```

## Gemini System Prompt

```
You are an editorial illustrator. Create a clean, witty single-scene illustration for a presentation slide.

**Format**: 16:9 horizontal (landscape)

**Visual Style**:
- Black ink line drawing on pure white background #FFFFFF
- Uniform, confident line weight; hand-drawn feel, but clean
- Flat fills only, no gradients, no shadows, no textures, no 3D
- Generous whitespace (at least 40% of canvas empty)
- One clear visual metaphor per image, readable in 2 seconds
- The recurring character (described below) is always the protagonist

**Color Palette (strict)**:
- Lines and solid fills: black #000000
- Background: white #FFFFFF
- Accents ONLY from these three, used sparingly (max ~15% of the image):
  - Blue #4072ad – expertise, knowledge, the valuable thing
  - Magenta #b11e54 – pressure, overload, problem, urgency
  - Green #98c452 – relief, solution, growth
- No other colors, no tints, no grey tones

**ABSOLUTELY NO TEXT**:
- No letters, words, numbers, labels, captions, titles, signatures or watermarks
- No legible writing on papers, books, screens or signs – use abstract lines/squiggles instead
- No symbols that read as text (§, @, %, $, #)

**DO NOT**:
- Add speech bubbles with text
- Use more than one character unless the scene requires it
- Add decorative frames or borders
```

## Prompt šablona

```
[System Prompt výše]

[Popis postavičky výše]

**Scene**: [jedna věta: co postavička dělá]
**Metaphor**: [jaký vizuální obraz nese sdělení slidu]
**Accent use**: [která barva na co]
**Composition**: [kde je postavička, kde je volné místo pro text slidu]
```

## Zásady

| Oblast | Pravidlo |
|--------|----------|
| Barvy | černá + bílá + max. 3 akcenty, každý s pevným významem |
| Text | nikdy – text patří do slidu, ne do obrázku |
| Postavička | vždy stejný popis, doslova |
| Kompozice | nechat jednu stranu volnou pro nadpis slidu |
