# Volitelný osobní export pracovní plochy

Odkaz `redakcni-checklist.html#osobni-plocha` povolí v tomto prohlížeči tlačítko dole v Nastavení checklistu. Běžná návštěva ho nezobrazuje. Skrýt osobní export odstraní místní preferenci. Nejde o autorizaci ani nové zabezpečení; stávající odemykání aplikace není změněno.

`wallpaper-export.js` stahuje JSON se schématem `redakcni-plocha`, verzí 1, `exportedAt`, `books` a `events`. Kniha má pouze `id`, `title`, `progress` (existující calcProgress) a `published` (archivedAt). Zrušené knihy se vyřazují. Události používají existující getDeliveryDates/getTodoReminderDates, tedy všechny aktivní knihy bez ohledu na osobní polici, a obsahují pouze `date` YYYY-MM-DD a `kind` delivery/todo. Texty úkolů, autoři, poznámky a další obsah knih nejsou součástí exportu.

Osobní generátor a všechny ilustrace jsou mimo tento repozitář. Žádné API, serverové úložiště nebo přenos dat nebyl přidán. Export nijak nemění existující zálohu.

Ověřeno v izolovaném Chromium: běžně skryto, aktivace, skutečné stažení, procenta, publikace, vyloučení zrušených knih, kalendář všech aktivních knih bez hotových úkolů, opětovné otevření, skrytí, mobilní ovládání. Syntetické knihy se používají pouze v testovacím profilu.
